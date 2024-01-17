from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Flask Backend is Running!"


@app.route('/api/books')
def get_books():
    # Example book data
    books = [
        {"title": "Book 1", "author": "Author 1", "description": "Description 1"},
        # Add more book objects
    ]
    return jsonify(books)


if __name__ == '__main__':
    app.run(debug=True)


