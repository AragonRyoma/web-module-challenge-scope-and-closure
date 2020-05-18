// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  counter1 creates its variables inside of the function and creates a callback function while
 *  counter 2 creates its variable outside of its scope and does not create a callback function.
 *
 * 2. Which of the two uses a closure? How can you tell?
 * The first one uses a closure. Counter2 doesnt have a way to record what its doing so it will restart the count every time.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * Counter1 is useful when you want to keep track of changes to variables while counter2 might be good if you want to alter global variables.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

let count = 0;
function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callBack, num) {
  let points = {
    Home: 0,
    Away: 0,
  };

  for (let i = 0; i < num; i++) {
    points.Home = callBack() + points.Home;
    points.Away = callBack() + points.Away;
  }
  console.log(points);
}
const score = finalScore(inning, 9);
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callBack, num) {
  let points = {
    Home: 0,
    Away: 0,
  };
  const scores = [];
  for (let i = 0; i < num; i++) {
    points.Home = points.Home + callBack();
    points.Away = points.Away + callBack();
    scores.push({
      Home: points.Home,
      Away: points.Away,
    });
  }

  let finalString = "";

  scores.forEach((score, i) => {
    finalString =
      finalString +
      `Inning ${i + 1}: Home ${score.Home} - Away ${score.Away}\n`;
  });

  finalString =
    finalString +
    `Final Score: Home: ${scores[num - 1].Home} - Away: ${
      scores[num - 1].Away
    }`;
  return finalString;
}

console.log(scoreboard(inning, 9));
