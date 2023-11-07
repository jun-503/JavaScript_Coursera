class Animal:
    def __init__(self, name,gender):
        self.gender = gender
        self.name = name

    @classmethod
    def noise(self):
        print( " Hiiii ")

class Cow(Animal):
    def __init__(self, name, gender,weight):
        super().__init__(name, gender)
        self.weight = weight

    @classmethod
    def noise(self):
        print("awwwww")

class Bird(Animal):
    def __init__(self, name, gender,weight):
        super().__init__(name, gender)
        self.weight = weight

    @classmethod
    def noise(self):
        print("awwwww")

    
    