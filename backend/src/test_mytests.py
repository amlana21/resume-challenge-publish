import unittest
from main import index
class SampleTest(unittest.TestCase):
   def test(self):
      print(index())
      self.assertTrue(index()=='working')
if __name__ == '__main__':
   unittest.main()