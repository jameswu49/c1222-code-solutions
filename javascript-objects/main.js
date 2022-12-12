var student = {
  firstName: 'Jimmy',
  lastName: 'Wu',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Teacher';

console.log('value of livesInIrvine', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2020
};

vehicle['isConvertible'] = false;
vehicle['color'] = 'Black';

console.log('value of vehicle["isConvertible"]', vehicle.isConvertible);
console.log('value of vehicle["color"]', vehicle.color);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Poppy',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
