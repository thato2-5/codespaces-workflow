import os
from flask import Flask, request, redirect, url_for
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'your-default-secret-key')

mail = Mail(app)
db = SQLAlchemy(app)

s = URLSafeTimedSerializer(app.config['SECRET_KEY'])

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    confirmed = db.Column(db.Boolean, default=False)

@app.route('/register', methods=['POST'])
def register():
    email = request.form['email']
    user = User.query.filter_by(email=email).first()

    if user:
        return 'Email already registered. Please check your email to confirm your account.'

    user = User(email=email)
    db.session.add(user)
    db.session.commit()

    send_confirmation_email(user)
    return 'Check your email for the confirmation link!'

def send_confirmation_email(user):
    token = s.dumps(user.email, salt='email-confirm')
    msg = Message('Confirm Your Email', sender=os.environ.get('MAIL_USERNAME'), recipients=[user.email])
    msg.body = f'Click this link to confirm your email: {url_for("confirm", token=token, _external=True)}'
    mail.send(msg)

@app.route('/confirm/<token>')
def confirm(token):
    try:
        email = s.loads(token, salt='email-confirm', max_age=3600)
    except SignatureExpired:
        return 'The confirmation link has expired.'
    except BadTimeSignature:
        return 'Invalid confirmation link.'

    user = User.query.filter_by(email=email).first_or_404()
    if user.confirmed:
        return 'Account already confirmed.'

    user.confirmed = True
    db.session.commit()
    return 'Email confirmed!'

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0')

