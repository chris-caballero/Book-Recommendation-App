from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Book(db.Model):
    __tablename__ = 'books'
    book_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    format = db.Column(db.Text)
    description = db.Column(db.Text)
    num_pages = db.Column(db.Float)
    average_rating = db.Column(db.Float)
    ratings_count = db.Column(db.Float)
    text_reviews_count = db.Column(db.Float)
    publication_day = db.Column(db.Float)
    publication_month = db.Column(db.Float)
    publication_year = db.Column(db.Float)
    language_code = db.Column(db.Text)
    is_ebook = db.Column(db.Float)
    url = db.Column(db.Text)
    image_url = db.Column(db.Text)
    name = db.Column(db.Text)

    def to_dict(self):
        return {
            "book_id": self.book_id,
            "title": self.title,
            "format": self.format,
            "author": self.name,
            "description": self.description,
            "num_pages": self.num_pages,
            "average_rating": self.average_rating,
            "ratings_count": self.ratings_count,
            "text_reviews_count": self.text_reviews_count,
            "publication_day": self.publication_day,
            "publication_month": self.publication_month,
            "publication_year": self.publication_year,
            "language_code": self.language_code,
            "is_ebook": self.is_ebook,
            "url": self.url,
            "image_url": self.image_url
        }
