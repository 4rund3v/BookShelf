
# Basics of SQLALCHEMY

### create_engine
 parameters of the create_engine function call
  - echo = True will log the actions processed by the engine, such as the SQL statements and their parameters
  - encoding = This defines the string encoding used by sqlalchemy , defaults to utf-8
  - isolation_level = Instructs sqlalchemy to use a sepcific Isolation level
  - pool_recycle = This recycles or times out the database connection at regular intervals , defaults to -1

### To connect to the database and work with sqlalchemy core
## Chapter 1 : Schema and Types
 In order to represent the data in sqlalchemy, we need to represent data in the form of tables
 This is done via the following three methods
     - Using user-defined Table objects
     - Using declarative classes that represent your tables
     - Inferring them from the database
  - Types : there are many categories of types we can use inside of SQLAlchemy
     - Generic : defined below
     - SQL standard : in CAPS for sqlalchemy , sqlalchemy.types
     - Vendor specific: defined wrt a specific vendor or backend, sqlalchemy.dialects
     - User defined : custom datatypes can be defined for our use
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
  - Metadata: is used to tie together thge database strucutre so it can be quicklyaccessed inside SQLAlchemy.
             Its a kind of catalog of the Table objects with the optional information about the connectionn information.
             Metadata has to be imported and initialized before objects can be tied to it
         from sqlalchemy import Metadata
         metadata = Metadata()
  - Tables : They objects of the sqlalchemy.Table class, they can be initialized by supplying the table name, metadata object and the columns in the table.
      t = Table('table_name', metadata, Column('col_1', String()), Column('col_2', String()))
  - Columns : define the fields that exists in our tables and they provied the primary means by which we define other constraints through their keyword arguments.
  - Keys and Constraints are used as a way to ensure that our data meets certain requirements prior to being stored in a database 
  - Once the table, columns all have been created, then the database can be created( mainetained in persistence) by calling the metadata.create_all method
   metadata.create_all(engine)
   This fetches all the tables that are lined to the metadataa  and writes it wrt the engine.
------  

## Chapter 2 : Working with data via SQLAlchemy Core
 SEL: Sql expression language is used by SQLAlchemy Core to  perform the database operations such as Insert,retrieve, delete, sort, group, relationships
 - Connection Execute: use the
            connection.execute(insert_data) to write the data into the database for single.
            connection.execute(insert_obj, list_of_items) for insertingf multiple items into the db.
 - can use the table objects to insert or select using the sqlalchemy functions
    table.select()  --> for select
    table.insert()  --> for insertion
- A ResultProxy (rp) is returned when a selection isperformed on a table. It is a wrapper around a DBAPI cursor object and its main goal is to make it easier to use and manipulate the results of the selection statement.
  You can access it using the index -> rp[0]
    - first_row = rp[0] #access via index
    - first_row.key_name  # access via key name
    - first_row[table.c.coulmn_name] #access via the column object
  You can use the following methods to access the data from the ResultProxy(rp)
   - rp.first() : Preferred method to fetch the data from the db, it fetches one item and closes the connection.
   - rp.fetchone() - Fetches one row from the results and keeps the cursor open to make additional fetch calls.
   - rp.scalar() - to return a single record with one column else raises errors
   - rp.fetchall() - to fetch all the items as a list
   - for i in rp: iterable - Better to  iterate over the rp than fetchall.
  Implement the filtering by using multiple where clauses, they will act like AND's
- ClauseElements : are just an entity we can use in a clause, and they are typically columns in a table
   However unlike coulms , ClauseElements come with many additional capabilities
   Some claause element methods
     - between(cleft, cright) 
     - concat(column_two)
     - distinct()
     - in_([list])
     - is_(None)
     - contains(str) - find where the column has a string in it , case-sensitive
     - endswith(str) - find where the column endswith string in it , case-sensitive
     - like(str)     - find where the column is like string, case-sensitive
     - startswith(str) - find where the column begins with the string, case-sensitive
     - ilike(str)    - find where the column is like string, case-insensitive
    CONTAINS in turn uses a special text index and is thus faster than LIKE. In addition to what other posters have added there are some fundamental differences in how the two functions work.
    The most noticeable is that in order to use CONTAINS the column must have a full-text index already on it.
 - Operators
   We can use some standard operators like the ==, !=, <, >, <=, <=, >=
 - Boolean Operators
   SQLAlchmy also allows for the SQL Boolean operators AND,OR and NOT via the bitwise logical operators( &, |, and ~)
 - Conjunctions
   While its possible to chan multiple where() clauses together, it's often more readable and functional to use conjunctions to accomplish the desired effect.
   The conjunctions in sqlalchemy are and_(), or_(), not_(), 
------
## Chapter 3 : Exceptions and Transactions
------
## Chapter 4 : Testing
------  
## Chapter 5 : Reflection
------

## Chapter 6 : Defining Schema with SQLAlchemy ORM
------  
## Chapter 7 : Working with Data via SQLAlchemy ORM
------  
## Chapter 8 : Understanding the Session and Exceptions
------  
## Chapter 9 : Testing with SQLAlchemy ORM
------
## Chapter 10 : Reflection with SQLAlchemy ORM and Automap
------
