from flask import Flask

app = Flask("BookShelf")
app.run(host="0.0.0.0", port=5000, debug=True)
