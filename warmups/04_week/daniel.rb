# Daniel
# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.

# Hints
# gets, get string is the opposite of puts put string.

# Notice that when you type "Something" and then hit enter, you get the string "Something\n"

# loop do
#   # talk to Daniel here
# end



# THIS ONLY WORKED FOR UPCASE AND DOWNCASE

# puts 'Go ahead, talk to Daniel'
# talk_to_daniel = gets.chomp

# responses = [
#   'Sure',
#   'Whatever',
#   'Whoa, chill out!',
#   'Fine, be that way'
# ]

# # if talk_to_daniel contains '?'
# #   puts responses[0];
# if talk_to_daniel == talk_to_daniel.downcase
#   puts responses[1];
# elsif talk_to_daniel == talk_to_daniel.upcase 
#   puts responses[2];
# elsif talk_to_daniel == ' ' 
#   puts responses[3]

# end

loop do
  puts 'What do you want to say to Daniel?'
  sentence = gets.chomp
    if (sentence == 'bye')
      break
    end
  if sentence == ""
    puts 'Fine. Be that way!'
  elsif sentence.include? "?"
      puts 'Sure.'
  elsif sentence.upcase == sentence
      puts 'Whoh, chill out!'
    else puts 'Whatever'
    end

end

# remember heirarchy, more important if statements closer to the top, if bye if most important, than if blank, then if uppercase, then nothing

# elsif ask_daniel =~ /\?$/