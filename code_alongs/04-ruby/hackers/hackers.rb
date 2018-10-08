require 'fileutils'
require 'pry'

#  find out a method to help make directory
#  find out a method to help make a file




hackers = [
  'jessie',
  'tracy',
  'karen',
  'purvesh',
  'james',
  'ajay',
  'andrea',
  'andrew'
]

hackers.each do  | person |
  puts person.capitalize
end

# hackers.each do  | person |
#   dir_name = FileUtils.mkdir(person.capitalize)
#   FileUtils.cd(dir_name) do
#     FileUtils.touch('.gitkeep')
#   end
# end

#



hackers.each do  | person |
  FileUtils.mkdir(person.capitalize)
  FileUtils.touch("#{person.capitalize}/.gitkeep")
end


#  loop through hackers array ?
#  transforming strings ?


# mkdir a folder using each hackers name
# hackers/
#   James/
#       .gitkeep/
#   Ajay/
#       .gitkeep/
#   Karen/
#       .gitkeep/
#   Jessie/
#       .gitkeep/



# write a short snippet of code that will create each folder and each file inside of each folder


