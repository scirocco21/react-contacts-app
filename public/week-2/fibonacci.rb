# naive implementation using recursion
def calc_fib(n)
  return n if n <= 1
  calc_fib(n - 1) + calc_fib(n - 2)
end

# more efficient algorithm that avoids computing same values over and over
def calc_fib(n)
  # initialize list with first two numbers
  fib_list = [0, 1]
  # then iteratively add new members of the series, up but not including n
  i = 2
  while i <= n
    fib_list.push(fib_list[i-1] + fib_list[i-2])
    i += 1
  end
  return fib_list[n]
end

if __FILE__ == $0
  n = gets.to_i
  puts "#{calc_fib(n)}"
end
