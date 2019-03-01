from flask import Blueprint, render_template

landing = Blueprint('landing', __name__, template_folder='landing/dist')


@landing.route('/')
def landing_page():
    return render_template("index.html")
