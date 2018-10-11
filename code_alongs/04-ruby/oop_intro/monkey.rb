class Monkey

  def initialize(name, species)
    @name = name  
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten << food
  end

  def foods
    @foods_eaten
  end

  def introduce
    "Hi, my name is #{@name}.  I am a #{@species}.  I had #{@foods_eaten[0].to_s} and #{@foods_eaten[1].to_s } for brunch."
  end

# @stomach.join(" and ")
end
