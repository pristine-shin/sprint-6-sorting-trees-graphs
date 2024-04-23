# CompSci 3b Assessment - Binary Trees And Graphs

Welcome to the binary trees and graphs assessment!

The coding portion of this assessment tests your ability to work with binary
trees and graphs.

Your objective is to implement the functions in the __problems__ directory so
that all specs pass. Each spec is worth 1 point. Further instructions appear
below.

You will have **2 hours and 55 minutes** to complete the assessment (including
the multiple choice portion).

## Points breakdown

* __Multiple Choice Section:__ 11 points total  
* __Coding Problem Section:__ 14 points total

__Total Possible Points:__ 25 points  
__Points Required to Pass:__ 20 points

## Resources

For this assessment, you are allowed to use the following resources:

* [a/A curriculum on Canvas][canvas]
* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation during any part
  of the test, including multiple-choice questions
* Node
* Postman (when useful)
* Previously written code you wrote yourself
  * Except for code from previous assessment submissions
* Comments within code
  * If there are comments in your code about your specific code and about what
    your code is doing, that is appropriate. If your comments are about concepts
    and based on the readings, then that counts as notes. Those would not be
    appropriate.

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., StackOverflow), communication apps (e.g.,
Slack, Discord), search engines, notes, or code from previous assessment
submissions.

[canvas]: https://appacademy.instructure.com/
[MDN]: https://developer.mozilla.org/en-US/

## Setup

1. Clone this starter repo and open it in VS Code.
2. Run `npm install` in the root directory.
3. Run `npm test` to see all the specs you need to pass.
4. Read the instructions below to get started!

## Problem 1 (Binary Trees): Totals For each level

Your objective is to calculate the sum totals of each node at the same level of
a binary tree. Those values are kept separate and returned in an array where
each index of the array corresponds to the sum total for that level.

__problems/01-bt-totals-for-each-level.js__ contains a solution that almost
works, but not quite. Your job is to debug the provided solution and make all of
the local test cases and test specs pass.

To run the test specs for this file alone, run

```sh
npm test test/01-bt-totals-for-each-level.test.js
```

To run local tests from the code file, uncomment the tests at the bottom of the
file and run

```sh
node problems/01-bt-totals-for-each-level.js
```

## Problem 2 (Graphs): Conservation Areas

For detailed instructions on this problem, see the
[__ConservationAreas.md__](./ConservationAreas.md) file.

## Submission

When you are ready to submit:

1. Run `npm test` to re-run all of the tests.

2. Fix any syntax errors that cause the tests to crash. **If a unit test crashes
   or the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)

Good luck!

**Copyright App Academy. Please do not share this repo or post any parts of it
online. App Academy will take violations very seriously.**
