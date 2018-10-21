#!/usr/bin/env ruby
# by Andronik Ordian

def gcd(a,b)
  # base case: everything divides zero
  if b == 0
    return a
  else
    remainder = a%b
  end
  return gcd(b, remainder)
end

def lcm(a, b)
  # calculate least common multiplier in terms of greatest common divisor
  return a/gcd(a,b) * b
end

if __FILE__ == $0
  a, b = gets.split().map(&:to_i)
  puts "#{lcm(a, b)}"
end
