from flask import Blueprint
auth_blueprint = Blueprint('auth_blueprint', __name__)


@auth_blueprint.route('/auth', methods=["POST"])
def authenticate():
    """
     Method to authenticate the user
    """
    return {}
