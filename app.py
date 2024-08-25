from flask import Flask, render_template, request, redirect, flash, url_for
from flask_mail import Mail, Message
from flask_bootstrap import Bootstrap
from itsdangerous import URLSafeTimedSerializer
import re

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'thatomonyamane3@gmail.com'
app.config['MAIL_PASSWORD'] = '90059Jay#'
app.config['MAIL_DEFAULT_SENDER'] = ('Thato Monyamane', 'thatomonyamane3@gmail.com')

mail = Mail(app)
bootstrap = Bootstrap(app)

def is_valid_email(email):
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

def generate_confirmation_token(email):
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])
    return serializer.dumps(email, salt='email-confirm-salt')

def confirm_token(token, expiration=3600):
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])
    try:
        email = serializer.loads(token, salt='email-confirm-salt', max_age=expiration)
    except Exception:
        return False
    return email

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        email = request.form.get('email')
        if email and is_valid_email(email):
            # Continue with sending the email
            token = generate_confirmation_token(email)
            confirm_url = url_for('confirm_email', token=token, _external=True)
            msg = Message('Confirm Your Email', recipients=[email])
            msg.body = f'Please confirm your email by clicking on the following link: {confirm_url}'
            try:
                mail.send(msg)
                flash('A confirmation email has been sent. Please check your inbox.', 'success')
            except Exception as e:
                flash(f'Failed to send email: {e}', 'danger')
        else:
            flash('Please enter a valid email address.', 'warning')
        return redirect(url_for('index'))
    return render_template('index.html')

@app.route('/confirm/<token>')
def confirm_email(token):
    try:
        email = confirm_token(token)
    except Exception as e:
        flash('The confirmation link is invalid or has expired.', 'danger')
        return redirect(url_for('index'))

    # Here, you'd typically update the user's record in the database to confirm the email
    flash(f'Thank you for confirming your email address: {email}', 'success')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
