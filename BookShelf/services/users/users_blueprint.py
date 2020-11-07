from flask import Blueprint
users_blueprint = Blueprint("users_blueprint", __name__)

@users_blueprint.route("/users", methods=["GET"])
def fetch_users():
    """
     Api to list the users
    """
    return {}
