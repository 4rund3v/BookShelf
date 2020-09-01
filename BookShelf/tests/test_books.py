import unittest
from BookShelf.src.data_models import Book

class TestBookModel(unittest.TestCase):
    '''
     To test the  creation, update and modification of the book data model
    '''
    def setUp(self):
        '''
         To setup the test case for the creation/update modification of the Book model
        '''
        self.title = "Harry Potter and The testers stone"
        self.book_id = None
        self.book = None

    def test_creation(self):
        '''
         To test the book creation method
        '''
        temp = Book()
        temp.title = self.title
        self.book_id = temp.update()
        print("Book Id of the created book is : {}".format(self.book_id))

if __name__ == '__main__':
    unittest.main()