/* exported Student */
function Student(first, last, subject) {
  this.firstName = first;
  this.lastName = last;
  this.subject = subject;
  this.fullName = first + ' ' + last;
}

Student.prototype.getFullName = function () {
  return this.fullName;
};

Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.fullName + ' and I am studying ' + this.subject + '.';
};
