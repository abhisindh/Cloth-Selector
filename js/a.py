setOne=["honor 8x.png", "realme xt.jfif", "redmi note 7.png", "redmi note 8 pro.png", "redmi note 9 pro max.png"]
class my_dictionary(dict):
  
    # __init__ function
    def __init__(self):
        self = dict()
          
    # Function to add key:value
    def add(self, key, value):
        self[key] = value
  
# Main Function
dict_obj = my_dictionary()
for i in setOne:
    dict_obj.add(i,'')
  
print(dict_obj)