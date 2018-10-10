# here you are writing the menu items that can be requested
# then you can use the recipes to create the menu items


require 'sinatra'
require 'sinatra/reloader' 
require 'pry'

# this is so you dno't have to restart the server every time you change the code and save it

 # ruby first looks for installed gems (when you just put a name)
# microframework - also DSL (domain specific language)

#  below you're training the program how to respond to user requests, it will go down from top to bottom, then will be able to respond when the request comes in

get '/hello' do # this is the request the user can make 
  # response we will give them
  "well there good job"
end

get '/yo' do
  "hey hey hey"
end

get '/hi' do
  puts "It's me, yo." # This puts into the terminal, not the console page in the browser
  "sup" # this is what will show up in the browser
end

# routes = web apps, functions 

# query strings in the url at the end is the ?, query string is after that and takes the form of a key value pair
# ?day=monday
# ?lunch=now
# ?lunch=cake&dinner=pudding
# ?name=tracydean
# ?nuber=page
get '/hi2' do
  # special magical variable named params (which is a hash)
  "well there good job #{ params[:name] }"  # only in Sinatra, you can use symbol or string for key
end

get '/rerun' do
  "<h1>hey hey hey</h1>"
end

get '/yo2' do
  # erb(:home)
end
# erb = embedded ruby


get '/add' do 

  num1 = params[:num1].to_i
  num2 = params[:num2].to_i
  # binding.pry
  # expect 2 arguments to be passed in
  @sum = num1 + num2 # the @ means you can view it in the browser (via sinatra)
  # total.to_s #everything appearing in the browser must be a string
  # you will add them together
  # respond with the total as strings
  erb(:home)
end
