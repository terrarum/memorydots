Code example is ready.

Things to talk about:

- The prototype chain

https://www.codeproject.com/Articles/687093/Understanding-JavaScript-Object-Creation-Patterns



Demonstrate how to measure RAM usage
  Is there any kind of breakdown that's useful?
  Can we see which bits make up the difference between each version?
  
Provide a simple demonstration of the prototype chain.
  Can I put the updatePosition function on a separate object and make that the prototype?


An instance of a constructor function has `.__proto__`
The constructor function itself has `.prototype`

Created an example of how to perform standard old-school prototypical inheritance.
Works great, feels a bit old, bit verbose, no object syntax.

Created an example using Object.create, it starts off seeming nice but there doesn't seem to be a way to define multiple objects and inherit one from the other, you have to define properties one by one.
Tried using Object.assign() inside Object.create() but assign only copies an objects own properties.


Talk through various methods on how to create a prototype chain
Use memorydots to show the difference that it can make
