puts "Enter filename: "
file_name = gets
file_name = file_name.chomp

puts File.readlines(file_name).length
