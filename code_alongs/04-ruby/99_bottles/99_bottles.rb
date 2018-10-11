require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/0' do
  erb(:indexstartover)
end

get '/1' do 
  bottles = params[:num_bottles].to_i
  @count = bottles
  @next = bottles
  @count -+ 1
  erb(:index1)
end

get '/:num_bottles' do 
  bottles = params[:num_bottles].to_i
  @count = bottles
  @next = bottles - 1
  @count -+ 1
  erb(:index)
end
