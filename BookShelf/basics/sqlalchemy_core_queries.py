from datetime import datetime
from sqlalchemy import MetaData, create_engine, DateTime
from sqlalchemy import Table, Column, Integer, String, Numeric, ForeignKey
from sqlalchemy import select, desc, func # for find,sort,order
from sqlalchemy import and_, or_, not_ # for conjunctions
from sqlalchemy import update # for the update of data


def create_table(metadata, engine):
    '''
     Inital function to create the necessary tables
    '''
    publishers = Table( 'publishers', metadata,
                    Column('publisher_id', Integer(), primary_key=True),
                    Column('publisher_name', String(180),unique=True, nullable=False),
                    Column('publisher_url', String(180)),
                  )

    books = Table( 'books', metadata,
              Column('book_id', Integer(), primary_key=True),
              Column('book_title', String(256), nullable=False, index=True),
              column('book_type', String(20), nullable=False),
              Column('book_cost', Numeric(12, 2), default=10),
              Column('book_stock', Integer(), default=0),
              Column('book_edition', Integer(), default=1),
              
              Column("book_published_date", DateTime(), default=datetime.now, nullable=False),
              Column('updated_time', DateTime(), default=datetime.now, onupdate=datetime.now),
              
              Column("book_owner",  ForeignKey('users.user_id')),
              Column("book_genre",  ForeignKey('genre.genre_id')),
              Column("book_progress",  ForeignKey('progress.progress_id')),
              Column('book_publisher', ForeignKey('publishers.publisher_id')),
              Column("book_authorship",  ForeignKey('authorship.authorship_id')),
              )

    author = Table( 'author', metadata,
                    Column('author_id', Integer(), primary_key=True),
                    Column('author_name', String(30), unique=True, nullable=False),
                    Column('author_url', String(60)))

    authorship = Table( 'authorship', metadata, 
                    Column('authorship_id', Integer(), primary_key=True),
                    Column('primary_author_id', ForeignKey('author.author_id')),
                    Column('secondary_author_id', ForeignKey('author.author_id')),
                    Column('ternary_author_id', ForeignKey('author.author_id'))
                   )

    genre = Table( "genre", metadata,
                    Column('genre_id', Integer(), primary_key=True),
                    Column('genre_name', String(20), unique=True, nullable=False),
                    Column('genre_shorthand', String(10), nullable=False) 
                    )

    users = Table(  "users", metadata,
                    Column("user_id", Integer(), primary_key=True),
                    Column("user_name", String(30), unique=True, nullable=False),
                    Column("user_email", String(60), nullable=False),
                    Column("user_password", String(30), nullable=False)
                  )
    
    progress = Table(  "progress", metadata,
                    Column("progress_id", Integer(), primary_key=True),
                    Column("progerss_percent", Integer(), default=10),
                    Column("progress_chapter", String(60)),
                    Column("progress_comment", String(100))
                  )

    db_res = metadata.create_all(engine)
    print("Creation of the table results are : {} ".format(db_res))
    return publishers, books, author, authorship, genre, users, progress


def insert_entries(engine, publishers, books, author, authorship, genre, users, progress):
    ins = publishers.insert().values(
            publisher_name="O'reilly Media Publications",
            publisher_url="https://www.oreilly.com/"
         )
    print("Oreilly publisher : insert obj : {}".format(ins))
    result = connection.execute(ins)
    print("Execution result : {}".format(result))

    ins_obj = publishers.insert()
    multiple_publishers = [
        {
            "publisher_name": "Springer",
            "publisher_url": "https://www.springer.com/in"
        },
        {
            "publisher_name": "PactPub",
            "publisher_url": "https://www.packtpub.com/in/"
        },
        {
            "publisher_name": "Apress",
            "publisher_url": "https://www.apress.com/in"
        }
    ]
    print("Empty insert obj : {}".format(ins_obj))
    result = connection.execute(ins_obj, multiple_publishers)
    print("Execution result : {}".format(result))
    # books_obj = books.insert()
    # multiple_books = [
    #     {""}
    # ]
    # print("Empty Books insert obj : {}".format(ins_obj))
    # result = connection.execute(ins_obj, multiple_books)
    # print("Execution result : {}".format(result))
    return


def query_publishers(connection, publishers):
    s = select([publishers])
    print("Selection Query is : {} ".format(s))
    rp = connection.execute(s)
    print("ResultProxy is : {} ".format(rp))
    print("ResultProxy Number of rows are : {} ".format(rp.rowcount))
    # publisher_list = rp.fetchall()
    # print("Results that are fetched are : {} ".format(publisher_list))
    pubs = [rp.first()]
    for publisher in pubs:        
        print("Publisher ---> {}".format(publisher))


def query_upon_publishers(connection, publishers):
    '''
     Implementing
      selection of specific columns
      Order by
      Sort
      Limit
      Count, label
      Sum while querying from the tables
    '''
    s = select([publishers.c.publisher_name]).order_by(desc(publishers.c.publisher_name) ).limit(2)
    print("Selection Query is : {} ".format(s))
    rp = connection.execute(s)
    print("ResultProxy is : {} ".format(rp))
    print("ResultProxy Number of rows are : {} ".format(rp.rowcount))
    # publisher_list = rp.fetchall()
    # print("Results that are fetched are : {} ".format(publisher_list))
    for publisher in rp:        
        print("Publisher ---> {}".format(publisher.publisher_name))
    s = select([func.count(publishers.c.publisher_name)])
    rp = connection.execute(s)
    print("Total Count {}".format(rp.scalar()))
    s = select([func.count(publishers.c.publisher_name).label('publisher_count')])
    rp = connection.execute(s)
    print(rp.keys())
    first = rp.first()
    print("Total Count {}".format(first.publisher_count))
    print("Finding all the publishers that have 'a' in them")
    s = select([publishers.c.publisher_name]).where(publishers.c.publisher_name.like("%a%")).order_by(desc(publishers.c.publisher_name))
    rp = connection.execute(s)
    for i in rp:
        print(i.publisher_name)
    print("Searching for PactPub")
    s = select([publishers.c.publisher_name]).where(publishers.c.publisher_name == 'PactPub')
    rp = connection.execute(s)
    for i in rp:
        print(i.publisher_name)

    print("Searching for the publishers that thave ring in them")
    s2 = select([publishers.c.publisher_name]).where(
                or_(publishers.c.publisher_name.contains('ring'),publishers.c.publisher_url.contains('in') ))
    rp2 = connection.execute(s2)
    for i in rp2:
        print("Pub name : {}".format(i.publisher_name))
    pass

def update_publishers(connection, publishers):
    selections = select([publishers]).where(publishers.c.publisher_name.contains("act"))
    rp = connection.execute(selections)
    print("Search results : \n", [i.publisher_name for i in rp])
    # delete_obj = delete(publishers).where(publishers.c.publisher_name.contains("act")).values(publisher_name=("PacktPublishing"))
    upd_obj = update(publishers).where(publishers.c.publisher_name.contains("act")).values(publisher_name=("PacktPublishing"))
    print("Update Object prepared is : {} ".format(upd_obj))
    res = connection.execute(upd_obj)
    print("Updated Row count is {}: {} ".format(res, res.rowcount))
    rp = connection.execute(select([publishers.c.publisher_name]))
    for i in rp:
        print(i.publisher_name)
    pass

def generate_data(engine):
    author = Table
    books
    return 

if __name__ == "__main__":
    engine = create_engine("sqlite:///books.db", pool_recycle=3600)
    print("Engine Is : {}".format(engine))
    connection = engine.connect()
    print("Connection Established is : {} ".format(connection))
    metadata = MetaData()
    print("Metadata initialized is : {} ".format(metadata))
    publishers, books, author, authorship, genre, users, progress = create_table(metadata=metadata, engine=engine)
    insert_entries(engine, publishers, books, author, authorship, genre, users, progress)
    #query_publishers(connection, publishers)
    #query_upon_publishers(connection, publishers)
    #update_publishers(connection, publishers)