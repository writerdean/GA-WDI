require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

# binding.pry


# params is just a hash of your query string and takes the form of a key value pair
# ?numb_bottles=page


# get '/:firstname/another_fancy_hi/:lastname' do
#   "<h1>The name's #{params[:lastname]}. #{params[:firstname]} #{params[:lastname]}.</h1>"
# end



get '/:num_bottles' do 


  bottles = params[:num_bottles].to_i

  @count = bottles
  @next = bottles - 1
  if @count == 0
    @count = "No"
  else
    @count -+ 1
  end
  erb(:index)
end

# get '/98' do 
#   @count = 98
#   @next = @count - 1

#   if @count == 0
#     @count = "No"
#   else
#     @count -+ 1
#   end

#   erb(:index)
# end

# The home page / should list:
# "99 Bottles of beer on the wall"
# add a link to take one down
# The page /:num_bottles should show:
# <p>99 bottles of warm water on the wall. <a href='/98'>Take one down.</a></p>
# :num_bottles bottles of beer on the wall"
# where :num_bottles can be any positive integer.
# add a link to take one down
# The page /0 should show:
# "No Bottles of beer on the wall"
# do not show a link to take one down
# show a link to start over