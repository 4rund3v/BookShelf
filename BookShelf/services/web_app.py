from flask import Flask
from flask import send_from_directory
import os

root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),"build")
static_root = os.path.join(root, "static")

print("[web_app] Root path is : {}".format(root))
print("[web_app] RootStatic path is : {}".format(static_root))

app = Flask("BookShelf", static_url_path='/static', static_folder=static_root)

def register_plugins(app_obj):
    """
     Given the app object install the plugins
    """
    from auth import auth_blueprint
    app_obj.register_blueprint(auth_blueprint)
    print("[web_app] Imported the auth blueprint")
    from books import books_blueprint
    app_obj.register_blueprint(books_blueprint)
    print("[web_app] Imported the books blueprint")
    from users import users_blueprint
    app_obj.register_blueprint(users_blueprint)
    print("[web_app] Imported the users blueprint")
    from tasks import tasks_blueprint
    app_obj.register_blueprint(tasks_blueprint)
    print("[web_app] Imported the tasks blueprint")


# the index page being served from the build dir
@app.route("/", methods=["GET"])
@app.route("/index", methods=["GET"])
def index():
    """
     The default index page that will be served from the build dir
    """
    print("[index] The base path being requested is :{} ".format('index.html'))
    return send_from_directory(root, 'index.html')

if __name__ == "__main__":
    register_plugins(app)
    app.run(host="0.0.0.0", port=5000, debug=True)
