
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
