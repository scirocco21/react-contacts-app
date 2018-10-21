#!/usr/bin/env ruby

# naive implementation
def gcd(a, b)
  # find the smallest number among input, if any, and set iterator equal to it
  c = [a,b].min
  # lowest common denominator of two numbers will be one, so this is the stop clause
  until c == 1
    # when the two numbers can be divided without remainder, exit function
    if a%c == 0 && b%c == 0
      return c
    end
    # otherwise continue the loop until the iterator equals 1
    c = c - 1
  end
  return c
end

# Euclidean algorithm: reduces size of problem by appr. factor of 2 each step (efficiency of O log(a*b))
def gcd(a,b)
  # base case: everything divides zero
  if b == 0
    return a
  else
    remainder = a%b
  end
  return gcd(b, remainder)
end

if __FILE__ == $0
  a, b = gets.split().map(&:to_i)
  puts "#{gcd(a, b)}"
end
