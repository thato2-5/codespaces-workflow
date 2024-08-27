# Required modules
from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename

# Create app instance
app = Flask(__name__)

# Place app configs here
# Path for upload folder
#app.config['UPLOAD_FOLDER'] =
# Maximum file upload size 
#app.config['MAX_CONTENT_PATH'] = 

#Dummy questions
questions = [
    "What is your favourite subject?",
    "How do you commute to school?",
    "What programming language are you most comfortable with?"
]

# Define app routes
@app.route('/', methods = ['GET', 'POST'])
def survey():
    # Form submitted
    if request.method == 'POST':
        responses = request.form.getlist('response')
        # Add code to store responses here
        return redirect(url_for('thank_you'))
    return render_template('survey.html', questions = questions)

@app.route('/thank-you')
def thank_you():
    return "Thank you for participating in the survey!"

# Run the app instance
if __name__ == "__main__":
    app.run(debug = True, host = '0.0.0.0')