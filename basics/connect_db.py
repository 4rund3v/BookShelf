from sqlalchemy import create_engine


# echo = True will log the actions processed by the engine, such as the SQL statements and their parameters
# encoding = This defines the string encoding used by sqlalchemy , defaults to utf-8
# isolation_level = Instructs sqlalchemy to use a sepcific Isolation level
# pool_recycle = This recycles or times out the database connection at regular intervals , defaults to -1

engine = create_engine("sqlite:///sample.db", pool_recycle=3600)
connection = engine.connect()


print("Engine Is : {}".format(engine))
print("Connection Established is : {} ".format(connection))

# To connect to the database and work with sqlalchemy core
## Chapter 1 : Schema and Types
'''
 In order to represent the data in sqlalchemy, we need to represent data in the form of tables
 This is done via the following three methods
     > Using user-defined Table objects
     > Using declarative classes that represent your tables
     > Inferring them from the database

 > Types : there are many categories of types we can use inside of SQLAlchemy
     > Generic : defined below
     > SQL standard : in CAPS for sqlalchemy , sqlalchemy.types
     > Vendor specific: defined wrt a specific vendor or backend, sqlalchemy.dialects
     > User defined : custom datatypes can be defined for our use

   : Generic types are those that are avaiable by default in the SQLAlchemy
      SQLAlchemy     |     py       |        SQL
      ---------------------------------------------------------------
      BIGInteger          int              BIGINT
      Boolean             bool             BOOLEAN or SMALLINT

      Date            datetime.date        DATE
      DateTime        datetime.datetime    DATETIME
      Time            datetime.time        DATETIME
      Interval        datetime.timedelta   INTEVAL OR DATE from epoch

      Numeric         decimal.Decimal      NUMERIC or DECIMAL
      Integer         int                  INTEGER
      Float           float                FLOAT or REAL

      Enum            str                  ENUM
      Text            str                  CLOB or TEXT
      Unicode         unicode              UNICODE or VARCHAR

 > Metadata: is used to tie together thge database strucutre so it can be quicklyaccessed inside SQLAlchemy.
             Its a kind of catalog of the Table objects with the optional information about the connectionn information.
             Metadata has to be imported and initialized before objects can be tied to it
         from sqlalchemy import Metadata
         metadata = Metadata()
 > Tables : They objects of the sqlalchemy.Table class, they can be initialized by supplying the table name, metadata object and the columns in the table.
      t = Table('table_name', metadata, Column('col_1', String()), Column('col_2', String()))
 > Columns : 
'''

from sqlalchemy import Metadata
metadata = Metadata()

from sqlalchemy import Table, Column, Integer, String, Numeric, ForeignKey
books = Table('books', metadata,
              Column('book_id', Integer(), primary_key=True),
              Column('book_title', String(256), nullable=False, index=True),
              Column('book_author', String(128), nullable=False),
              Column('book_cost', Numeric(12, 2), default=10),
              Column('book_stock', Integer(), default=0),
              Column('book_publisher', String(60))
              )

## ------  
## Chapter 2 : Working with data via SQLAlchemy Core
## ------  
## Chapter 3 : Exceptions and Transactions
## ------  
## Chapter 4 : Testing
## ------  
## Chapter 5 : Reflection
## ------  
## Chapter 6 : Defining Schema with SQLAlchemy ORM
## ------  
## Chapter 7 : Working with Data via SQLAlchemy ORM
## ------  
## Chapter 8 : Understanding the Session and Exceptions
## ------  
## Chapter 9 : Testing with SQLAlchemy ORM
## ------  
## Chapter 10 : Reflection with SQLAlchemy ORM and Automap
## ------
