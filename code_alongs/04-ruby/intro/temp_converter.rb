

puts 'What temperature are you starting with?'
original_temp = gets
temp = original_temp.chomp

puts 'Is that in fahrenheit(f), Celsius(C) or Kelvin(K)?'
unit = gets


  if unit.chomp == "f"
    celcius = (temp.to_i - 32) / 1.8
    kelvin = (temp.to_i + 459.67) / 1.8
    puts 'fahrenheit: ' + temp
    puts "to Celsius:  #{celcius}"
    puts "to Kelvin:  #{kelvin}"

  elsif unit.chomp == "C"
    fahrenheit = (temp.to_i * 1.8) + 32
    kelvin = temp.to_i  + 273.15
    puts 'Celcius: ' + temp
    puts "to fahrenheit: #{fahrenheit}"
    puts "to Kelvin:  #{kelvin}"

  else
    fahrenheit = (temp.to_i * 1.8) - 459.67
    celcius = temp.to_i - 273.15
    puts 'Kelvin: ' + temp
    puts "to Celsius:  #{celcius}"
    puts "to fahrenheit: #{fahrenheit}"

end

# Each conditional block should convert the starting temperature to its equivalent value in the other two units (e.g., f should be converted to C and K).




# A starting temperature value
# A temperature unit (e.g., f, C, K). Store each of those in a variable.
# Define a convert_temp method that takes those two user inputs as arguments.

# Inside the method, create a conditional statement that contains a block for each unit of temperature. It will look something like this...

# if temp_unit == "f"
#   ...
# elsif temp_unit == "C"
#   ...
# else
#   ...
# end
# Each conditional block should convert the starting temperature to its equivalent value in the other two units (e.g., f should be converted to C and K).

# Conversion formulae: http://www.csgnetwork.com/temp2conv.html
# Sample temperatures: 32f = 0C = 273.15K
# Display the starting and converted values in the console.

# NOTE: You should only be displaying the starting and converted values for the temperature the user selected at the beginning.
# # User selected "f" at the start of the program. So the output is...
# fahrenheit: ...
# to Celsius: ...
# to Kelvin: ...
# Feel free to turn to your tablemates for help!

# Bonus 1
# Store the starting and converted temperatures in a hash. When you print those values to the console, do it by accessing the values in the hash.

# Bonus 2
# Keep the program running until the user decides to quit.

# HINT: Requires a while loop.
# When the program starts, the user should be prompted to enter a temperature OR quit the program.
# After the program displays the starting/converted temperatures, it should return to the initial user prompt.