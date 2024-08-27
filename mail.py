from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField, SubmitField
from wtforms.validators import DataRequired, Email
from werkzeug.utils import secure_filename
import os

# Create app instance
app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with your actual secret key

# Configuration for Gmail
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_USERNAME')

# Flask-Mail initialization
mail = Mail(app)

# Form class
class EmailForm(FlaskForm):
    recipient = StringField('Recipient', validators=[DataRequired(), Email()])
    subject = StringField('Subject', validators=[DataRequired()])
    body = TextAreaField('Message', validators=[DataRequired()])
    attachment = FileField('Attachment')
    submit = SubmitField('Send')

# Route to display the form and send the email
@app.route('/send-email', methods=['GET', 'POST'])
def send_email():
    form = EmailForm()
    if form.validate_on_submit():
        recipient = form.recipient.data
        subject = form.subject.data
        body = form.body.data
        attachment = form.attachment.data

        msg = Message(subject, recipients=[recipient])
        msg.body = body

        # Add attachment if present
        if attachment:
            filename = secure_filename(attachment.filename)
            msg.attach(filename, attachment.content_type, attachment.read())

        try:
            mail.send(msg)
            flash('Email sent successfully!', 'success')
            return redirect(url_for('send_email'))
        except Exception as e:
            flash(f'Failed to send email: {str(e)}', 'danger')

    return render_template('send_email.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)

