# Water Jug Challenge

This is a problem where, you have 3 dinamics inputs for values (X,Y,Z), in which (X,Y) represent capacity of jug respectively and Z, represent wanted measure

The goal is to fill one of the jugs with exactly Z measure of water, with a least steps (the most efficient way), given like valids movements 'transfer to other jug', 'empty jug', or 'fill jug'.

Later shows steps in a table (the quantity of water on jugs for every iteration).In case if no solution show a message "No Solution"

It I solved with Javascript, specifically on react.js

## Features and initials conditions

- Inputs admit only interger numbers
- Works with different jug sizes, if z is less than x and y inclusively

## How I Did do This?

- First we have 2 files a App.js where we import all functions we need of waterJugs.jsx file

- All logics is on waterJugs.jsx file, App,js is only to show results

- On waterJugs.jsx we have 3 functions, where 2 of these are to validate inputs and cases with possible solutions

- The last function is for fill arrays of every jugs for iteration and show it, validating if a case of fill, empty or transfer

## How use this project

- First put on the folder of this project
- Run in a terminal

```sh
  npm intall
```

- When senteces 'npm install' finished, run

```sh
 npm run dev
```

- Later it shows you a link, like `http://127.0.0.1:5173/` press 'ctr+clik' on url and its open on a predeterminate browser.
- Fill the inputs with valid values (interger values, not strings, and z is less than x and y inclusively)
- press the button calculate and appreciate the solution in a table.

```

```
