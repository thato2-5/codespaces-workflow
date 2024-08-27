from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Path for upload folder (if needed in future)
# app.config['UPLOAD_FOLDER'] = 'uploads/'

# Dummy questions
questions = [
    "What is your favourite subject?",
    "How do you commute to school?",
    "What programming language are you most comfortable with?",
    "Please enter your age?",
    "Please enter the name of your engineering course?"
]

# Define app routes
@app.route('/', methods=['GET', 'POST'])
def survey():
    if request.method == 'POST':
        responses = request.form.getlist('response')
        # Store responses (e.g., append to a file or save to a database)
        with open('responses.txt', 'a') as f:
            f.write(','.join(responses) + '\n')
        return redirect(url_for('thank_you'))
    return render_template('survey.html', questions=questions)

@app.route('/thank-you')
def thank_you():
    return render_template('thank_you.html')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
