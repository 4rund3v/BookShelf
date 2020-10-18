
from flask import send_from_directory
from flask import Flask
import os

# Blueprints
from books import books_blueprint

root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),"build")
static_root = os.path.join(root, "static")
print("Root path is : {}".format(root))
print("RootStatic path is : {}".format(static_root))

app = Flask("BookShelf", static_url_path='/static', static_folder=static_root)
app.register_blueprint(books_blueprint)

# the index page being served from the build dir
@app.route("/", methods=["GET"])
@app.route("/index", methods=["GET"])
def index():
    """
     The default index page that will be served from the build dir
    """
    print("[index] The base path being requested is :{} ".format('index.html'))
    return send_from_directory(root, 'index.html')

app.run(host="0.0.0.0", port=5000, debug=True)
