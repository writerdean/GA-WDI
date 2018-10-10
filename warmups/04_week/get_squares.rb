# A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

# Make a new file called get_squares.rb.

# Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

# NOTE: The returned array of perfect squares should be in ascending order with no duplicates.

# get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]
# Done?
# Solve it with a JavaScript function!

# Store your solution in a new file called getSquares.js and run it in the console.

# HINT: Sorting an array of numbers with .sort in JS would produce the following...

# getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]
# What's that all about?!?!?!

# THIS DOESN'T REMOVE THE NON-SQUARE
# def get_squares (array)
#   array.map { |n| 
#     Math.sqrt(n) #% 1 == 0
#   }
# end

# p get_squares([4,10,22,1,35,16,1,9,144,]).sort.uniq

# use select instead
def get_squares (array)
  array.select {|num| Math.sqrt(num) %1 == 0}

end
get_squares([4,10,22,1,35,16,1,9,144,]).sort.uniq



# def get_squares (array)
#   array.to_a.each.drop_while { |n| 
#     Math.sqrt(n) % 1 == 0
#   }
# end


# def get_squares(array)
#   array.to_a.drop_while do |number|
#     Math.sqrt(number) #== drop if remainder is something other than .0
#   end
# end

# get_squares((1..16))

require 'pry'
binding.pry