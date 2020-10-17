
from sqlalchemy.orm import scoped_session, sessionmaker,backref, relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Column, Integer, String, DateTime, Date, ForeignKey, event
from datetime import datetime
from BookShelf.etc import config
import sqlalchemy

from . import utils

logger = utils.get_logger("data_models")
engine = create_engine(config.DB_PATH,
                       convert_unicode=True,
                       echo=True)
logger.info("[data_models] The connection to engine established : {} ".format(engine))
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
logger.info("[data_models] The db_session is setup : {} ".format(db_session))

Model = declarative_base()

class User(Model):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String(20), unique=True)
    password = Column(String(30))
    name = Column(String(128))
    email_id = Column(String(128))

    def __repr__(self):
        return "<User(username={!r}, name={!r}, email_id={!r})>".format(self.username, self.name, self.email_id)

class Book(Model):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    isbn = Column(String(16), unique=True)

    title = Column(String(256))
    description = Column(String(512))
    alt_title = Column(String(256))
    pubdate = Column(Date)
    price = Column(Integer)
    stock = Column(Integer)
    # authors = relationship('Authors', secondary='authorship', backref='books', lazy='joined')
    # publisher = relationship('Publisher', backref='books', lazy='dynamic')
    # genre = relationship('Genre', backref='books', lazy='dynamic')

    def __hash__(self):
        return self.id

    def __eq__(self, other):
        if self.id == other.id:
            return True
        return False

    def __repr__(self):
        return u'<Book %r>' % self.title

