from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)

# Add app configurations here
app.config['SECRET_KEY'] = 'testingKey'

class ContactForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    message = TextAreaField('Message', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        # Handle form submission (e.g., send email)
        return render_template('contact.html', form=form, success=True)
    return render_template('contact.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)
