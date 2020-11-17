from flask import Blueprint
books_blueprint = Blueprint('books_blueprint', __name__)


@books_blueprint.route('/books', methods=["GET"])
def fetch_books():
    return {"books": [], "total_books": 0, "page_numper": 1, "entries_per_page": 1}
