
print "Enter filename: " #puts enters a line after the prompt so you type on a new line, print does not
file_name = gets().chomp #is the method to get input

# file_name = gets
# file_name = file_name.chomp

puts File.readlines(file_name).length

# But this still counts emply lines, loop thru array and count empty lines,

# count = 0
# lines.each do | line |
#   if line.chomp != "" # this excludes the blank lines, as oer instructions
#     count += 1
#   end
# end


#  ENUNERABLES IS A STANDARD LIBRARY - can be used on anything that can be counted
# .map is part of this, which means that you can change the array
# .select - you can use this with ruby blocks, pass in a block of code that you want to select

# select is a more advanced version of each
# arr = [1,2,3,4,11,14,27]
# arr.select.even? - this is wrong, what is the correct way

# "abc".empty? - this asks the string and returns boolean


lines_of_code = lines.reject do | line |
  line.chomp.empty?
end

puts lines_of_code.length

