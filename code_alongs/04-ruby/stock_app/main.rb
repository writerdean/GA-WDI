require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

# binding.pry

# stock = StockQuote::Stock.quote("AAPL") - this is a custom object created just for Stock Quote, so you need to change it into a string

# params is just a hash of your query string


get '/stock' do 
  stock = StockQuote::Stock.quote(params[:stock])
  @name = stock.company_name
  @price = stock.latest_price
  erb(:index)
end


get '/stock1' do
  price = "12.5"

  price
end


# Add an about page that contains "goodbye to yahoo finance" in a paragraph.

# All the above should work without the need of any form input (but feel free to use a form).

