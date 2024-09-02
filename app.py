from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('maintenance01.html')

@app.route('/test')
def test():
    return render_template('comingsoon.html')

@app.route('/check')
def check():
    return render_template('construction.html')

@app.route('/maintain')
def maintain():
    return render_template('maintenance.html')

if __name__ == '__main__':
    app.run(debug = True, host ='0.0.0.0')
    