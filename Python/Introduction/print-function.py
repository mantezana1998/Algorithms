# The included code stub will read an integer, , from STDIN.

# Without using any string methods, try to print the following:

# 123...n

# Note that "" represents the consecutive values in between.

# Example

# n = 5

# Print the string 12345.

# Input Format

# The first line contains an integer n.

# Constraints


# Output Format

# Print the list of integers from  through  as a string, without spaces.

# Sample Input 0

# 3
# Sample Output 0

# 123

from __future__ import print_function

if __name__ == '__main__':
    n = int(raw_input())

    for i in range(n):
        print(i + 1, end="")