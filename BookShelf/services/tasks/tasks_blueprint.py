from flask import Blueprint
tasks_blueprint = Blueprint("tasks_blueprint", __name__)

@tasks_blueprint.route("/tasks", methods=["GET"])
def fetch_tasks():
    """
     Api to return the tasks submitted by the user
    """
    return {}