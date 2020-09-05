from datetime import datetime
from sqlalchemy import MetaData, create_engine, DateTime
from sqlalchemy import Table, Column, Integer, String, Numeric, ForeignKey


metadata = MetaData()
print("Metadata initialized is : {} ".format(metadata))

publishers = Table( 'publishers', metadata,
                    Column('publisher_id', Integer(), primary_key=True),
                    Column('publisher_name', String(180), nullable=False),
                  )

books = Table( 'books', metadata,
              Column('book_id', Integer(), primary_key=True),
              Column('book_title', String(256), nullable=False, index=True),
              Column('book_author', String(128), nullable=False),
              Column('book_cost', Numeric(12, 2), default=10),
              Column('book_stock', Integer(), default=0),
              Column('book_edition', Integer(), default=1),
              Column('book_publisher', ForeignKey('publishers.publisher_id')),
              Column("book_published_date", DateTime(), default=datetime.now, nullable=False),
              Column('updated_time', DateTime(), default=datetime.now, onupdate=datetime.now)
              )

engine = create_engine("sqlite:///books.db", pool_recycle=3600)
print("Engine Is : {}".format(engine))
connection = engine.connect()
print("Connection Established is : {} ".format(connection))
metadata.create_all(engine)