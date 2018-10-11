
class Mario

  def initialize(new_name) #optional
    @suit = 'normal'  
    @size = 'small'
    @alive = true
  end

  def alive?()
    return @alive
  end

  def eat(food)
    p "eating #{food}"
  end

  def jump
    p "jumping"
  end

  def duck
    p "ducking"
  end

  def size
    @size
  end


  def to_s # you can define your own to_string method
    #overriding the default
    "#{size} #{suit}"
  end

end
