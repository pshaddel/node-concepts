let firstValue = 'poorshad';
let secondValue = firstValue;
firstValue = 'new poorshad';
console.log({ firstValue, secondValue });

var firstVarValue = 'poorshadVar';
var secondVarValue = firstVarValue;
firstVarValue = 'new poorshadVar';
console.log({ firstVarValue, secondVarValue });

// Result : Primitives are initialized when assigning to another

let tree = {
  fruits: 4,
};

let newTree = tree;

tree.fruits = 7;

console.log({ tree, newTree });

// Result : Referrence Values are only referring to somewhere in the heap

let strongTree = Object.create(tree);

strongTree.fruits = 12;

console.log({ tree, strongTree });

// Result: We can easily use object creation methods to avoid the same referrence
