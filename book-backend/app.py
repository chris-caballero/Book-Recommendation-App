from flask import Flask, jsonify
from flask_cors import CORS
from models import db, Book
from sqlalchemy.sql import func, desc

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////mnt/wsl/Github/Book-Recommendation-App/data/books-database.db'
db.init_app(app)
CORS(app)

################# ROUTES #################

@app.route('/')
def index():
    return "Flask Backend is Running!"

@app.route('/api/books')
def get_books():
    try:
        books = Book.query.filter(
            Book.language_code.contains('en'),
            Book.description != None
        ).order_by(func.random()).limit(100).all()
        return jsonify([book.to_dict() for book in books])
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)


