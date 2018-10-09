# Array and Hash access
# A. Given the following data structure:
# a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
# How would you add your name to the array?

a = ["Anil", "Erik", "Jonathan"]
a[1]
a.push("Tracy Dean")
a.last
a.first


# B. Given the following data structure:
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?
# How would you return the string "Two"?
# How would you return the number 2?
# How would you add {3 => "Three"} to the hash?
# How would you add {:four => 4} to the hash?

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
h[1]
h[:two]
h["two"]
h[3] = "Three"
h[:four] = 4


# C. Given the following data structure:
# THIS IS SUPPOSED TO TEACH US THAT EXPRESSIONS CAN BE PASSED AND WILL GET EVALUATED

# is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
# What is the return value of is["Erik" == "Jonathan"]?
# What is the return value of is[9 > 10]?
# What is the return value of is[0]?
# What is the return value of is["Erik"]?

is = {true => "It's true!", false => "It's false"}
[2 + 2 == 4] #true
["Erik" == "Jonathan"] #false
[9 > 10] #false
[0] #0
["Erik"] #nil

# D. Given the following data structure:
# users = {
#   "Jonathan" => {
#     :twitter => "tronathan",
#     :favorite_numbers => [12, 42, 75],
#   },
#   "Erik" => {
#     :twitter => "sferik",
#     :favorite_numbers => [8, 12, 24],
#   },
#   "Anil" => {
#     :twitter => "bridgpal",
#     :favorite_numbers => [12, 14, 85],
#   },
# }


users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}


# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)

# How would you add yourself to the users hash?
# users["Tracy Dean" => {:twitter=>"writerdean",:favorite_numbers=> [5, 10, 15],
#   }]

users["Tracy"] = {:twitter => "writerdean", :favorite_numbers => [5,10,15],}

# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort.first

# How would you return an array of Anil's favorite numbers that are also even?

# require 'pry'
# binding.pry

anil_fav = users["Anil"][:favorite_numbers].select {|num| num.even?}


# How would you return an array of the favorite numbers common to all users?

users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

users["Jonathan"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers].uniq.sort

require 'pry'
binding.pry