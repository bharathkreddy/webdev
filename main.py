from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def landing_dashboard():
    return render_template('index.html')

@app.route("/fun")
def fun():
    return render_template('fun.html')

@app.route("/dice")
def dice():
    return render_template('dicee.html')

@app.route("/drums")
def drums():
    return render_template('drums.html')

@app.route("/jq")
def jq():
    return render_template('jq.html')


if __name__ == "__main__":
    app.run(debug=True)
