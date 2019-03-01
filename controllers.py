from flask import Blueprint, render_template

landing = Blueprint('landing', __name__, template_folder='dist')


@landing.route('/<id>-<slug>/')
def landing_page():
    return render_template("index.html")
