require 'pry'

class Account

    def initialize(amount)
      @balance = amount
      @name
    end

    def deposit(amount)
      @balance = @balance + amount
      p "Deposited #{amount}.  New balance is:  #{@balance}"
    end

    def withdraw(amount)
      @balance = @balance - amount
      p "Withdrew #{amount}.  New balance is:  #{@balance}"
    end

    def balance
      @balance
    end

    def set_name(name)
      @name = name
    end

    def name
      @name
    end

    def get_name
      @name
    end



end


a1 = Account.new(1000)
p a1.balance()
a1.deposit(500) #when I call this method, it should return the new balance immediately
a1.deposit(12)
a1.balance() # this is a getter method, it only gets a value back


a1.set_name("Tracy Dean's saving for Hawaii account")

a1.withdraw(1512)

puts a1.get_name() 
puts a1.balance

binding.pry