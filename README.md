# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The best case scenario for this implementation would if the array was already sorted, as this would only take one permutation. This would return true  first try taking linear time or O(N)


A worst case scenario for this would be a reverse sorted list, because in this case we would have to generate every possible permutation for the size of n. This works in the sense that within our first permutation we have n choices available, but once we make that first permuation we then have n-1, after the second we have n-2 and so fourth which equates to the factorial of n because we're reducing the number of elements (n) for the next position. These permutations would be done in linear time, but generating the permutations would be n!, making it O(n*n!).


The time complexity would be the average from the worst case I believe because we are still choosing one permutation from n! possible permutations to choose one. This could be more efficient if we are able to get the best case scenario, which in the case the array would've already been sorted resulting in only one permutation generated and not n! since we wouldn't have had to check all possible permutations.



Sources:
https://github.com/COSC3020/brute-force-sorting-swilso59-1   - viewed this repo 

https://dev.to/ashutoshsarangi/approaching-brute-force-algorithm-using-javascript-4ppl   - examples of implementations with other real world aspects 



"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
