#!/usr/bin/env ruby
# by Andronik Ordian
def fib_last_digit(n)
  fib_list = [0, 1]
  i = 2
  while i <= n
    fib_list.push( (fib_list[i-1] + fib_list[i-2]) % 10)
    i += 1
  end

  return fib_list[n]
end

if __FILE__ == $0
  n = gets.to_i
  puts "#{fib_last_digit(n)}"
end
