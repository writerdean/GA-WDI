require_relative 'mario'
require_relative 'yoshi'


mario = Mario.new
mario.jump
mario.duck

mario.eat('mushroom')

yoshi = Yoshi.new("red")
yoshi.run

if  mario.get_size == 'large'
  yoshi.run
end
