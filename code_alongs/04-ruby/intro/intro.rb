require 'pry'


puts("tenacious ten")


#  CONDITIONALS

# total = 15 #local variable

# student_count = 8  #using underscore instead of camel case
# beverage = 'wine'

# if student_count > 7  #parens are optional, no curly braces
#   puts('Just enough budget for beers') # indentation important, 2 spaces (config editor)
#   # interpolation - a string made up of different things, and try to join them together
# end

# if student_count > 7  #parens are optional, no curly braces
#     puts("Just enough budget for #{beverage}") # indentation important, 2 spaces (config editor)
#     # interpolation - a string made up of different things, and try to join them together - MUST be double quote 
#  #{2+2}
# elsif student_count < 2

#     puts ('Bring your own drink')
# else
#     puts('no drinks for you')

#   end

# LOOPS

# count = 0
# while count < 3
#     puts('Hey')
#     puts('beetlejuice')
#     count += 1 # there is no ++ in ruby
#     # ctl-c stops an endless loop
# end


# ruby blocks you can use 'do - end', or enclose in curly braces
# 3.times do 
#   puts('beetlejuice')
# end

# 3.times {
#   puts('beetlejuice')
# }


desserts = ['cake', 'brownies', 'ice cream']
#  side effects means not doing anyting important
# .each
# .map => transform



desserts.each do  | dessert |
  puts("#{dessert} for lunch")
end

# desserts.map is now a function, and it will return something
angry_desserts = desserts.map do |dessert|
  dessert.upcase() # () are optional, it's still a method
  binding.pry # debugger
end



p angry_desserts
# 'puts' shows it to your end user, 'p' is like programmers print (shows the data structure)

str.downcase().gsub().
#gsub is global substitution