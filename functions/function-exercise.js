function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

  console.log(makeLine(5));


function makeSquare(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += makeLine(size) + '\n';      
    } 
    return line.slice(0, -1);
}
  console.log(makeSquare(5));

  function makeRectangle(row, column) {
    let line = "";
    for (let i = 0; i < column; i++) {
        line += makeLine(row) + '\n';
}
return line.slice(0,-1);
  }

  console.log(makeRectangle(10,4))


function makeDownwardStairs(column) {
    let line = "";
    for (let i = 0; i < column; i++) {
    line += makeLine(i+1) + '\n';
    }
    return line.slice(0,-1);
}
console.log(makeDownwardStairs(4));


function makeSpaceLine (numSpaces, numChars) {
    let numOne = "";
    let numTwo = makeLine(numChars);
    for (let i = 0; i < numSpaces; i++) {
    numOne += " ";
    }
    return numOne + numTwo + numOne;
}
console.log(makeSpaceLine(5, 4));

function makeIsoscelesTriangle(column) {
    let tri = "";
    for (let i = 0; i <column; i++) {
        tri += (makeSpaceLine(column - i - 1, 2*i + 1) + '\n');
    }
    return tri.slice(0,-1);
}
console.log(makeIsoscelesTriangle(5));

function reverse(str) {
    let reversed = "";
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}


function makeDiamond(column) {
    let top = makeIsoscelesTriangle(column);
    let bottom = reverse(top);

    return top + "\n" + bottom;
}
console.log(makeDiamond(5))