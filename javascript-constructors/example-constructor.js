function ExampleConstructor() {}
console.log('prototype value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor variable:', newExampleConstructor);

var instanceExampleConstructor = newExampleConstructor instanceof ExampleConstructor;
console.log('instanceof instanceExampleConstructor', instanceExampleConstructor);
