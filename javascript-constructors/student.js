/* exported Student */
function Student(first, last, subject) {
  this.firstName = first;
  this.lastName = last;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  this.fullName = this.firstName + ' ' + this.lastName;
  return this.fullName;
};

Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
};
