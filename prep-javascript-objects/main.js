var person = {
  firstName: 'John',
  lastName: 'Smith',
  hobby: 'fishing'
};
console.log(person);
console.log("The person's name is:", person.firstName + ' ' + person.lastName);
console.log("the person's previouse job is:", person.hobby);
person.previousJob = 'Doctor';
console.log("the person's previous job was:", person.previousJob);
