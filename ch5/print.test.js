/* https://linkedin-jr-engineers.slack.com/archives/CDGH3SB5M/p1541882037001700

What's wrong with this code and how do you fix it? It
applies to Chp. 5, "Higher-order functions." *You may NOT
change the first or last line.* I want `print('hi')` to work!
That line is correct.

function print(callback) { // Don't change this line. It's correct.
  callback();
}

callback(() => console.log(text));

print('hi'); // FAILS! Why? Don't change this line. It's correct.
*/

function print(callback) {
  callback()
}



}

print('hi')
