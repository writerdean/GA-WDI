
# The class is also an object that can make other objects just like itself


# this is a factory (you need a factory to make objects before you can make them)
class Fish # this is just a template to make a fish, it's not making an indvidual fish.

  #auto called when you make a new fish, below is a magic function
def initialize(name = "fishy fish")
  #name = "Nemo" #this variable is local to THIS method!!!  When the method is done, the variable dies
  @name = name  #(instance variable) #note this is not the Sinatra @, but a Ruby things that makes it an instance variable, which will now live as long as the object lives (you cannot get to this @name by going into the object - except through interfaces (via get_name below). You can then get this name by typing in f1.get_name (if f1 is the variable holding the new fish))
  @health = 10
end


    # instance method
  def get_name
    return @name
  end

end

def swim
  puts "look at me, I'm fast!"
  @health = @health = 1
end

def sleep
  puts "ZZZZZZZZZ"
  @health = @health + 1
end

end

class Shark #CamelCase

def initialize(new_name) #optional
  @name = new_name
  @health = 1000    
end

end