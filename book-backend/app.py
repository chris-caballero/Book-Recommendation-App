from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Book
from sqlalchemy.sql import func, desc

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/caballeroch/Book-Recommendation-App/data/books-database.db'
db.init_app(app)
CORS(app)

################# ROUTES #################

@app.route('/')
def index():
    return "Flask Backend is Running!"

@app.route('/api/books')
def get_books():
    try:
        print('get_books()')
        page = request.args.get('page', default=1, type=int)
        limit = request.args.get('per_page', default=10, type=int)

        # Calculate the offset based on the page and per_page values
        offset = (page - 1) * limit

        # Construct the query with LIMIT and OFFSET
        paginated_books = Book.query.filter(
            Book.language_code.contains('en'),
            Book.description != None
        ).order_by(func.random()).limit(limit).offset(offset).all()

        if not paginated_books:
            return jsonify([])

        return jsonify([book.to_dict() for book in paginated_books])
    except Exception as e:
        print('Error in get_books()')
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
