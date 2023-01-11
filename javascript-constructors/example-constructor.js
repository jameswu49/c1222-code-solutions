function ExampleConstructor() {

}

console.log('value of ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype:', typeof ExampleConstructor.prototype);

var anExampleConstructor = new ExampleConstructor();
console.log('value of anExampleConstructor:', anExampleConstructor);

var result = (anExampleConstructor instanceof ExampleConstructor);
console.log('anExampleConstructor instanceof ExampleConstructor:', result);
