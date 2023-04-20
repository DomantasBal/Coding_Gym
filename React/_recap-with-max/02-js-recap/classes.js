class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  gender = 'alien';
  name = 'Domantas';

  printName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printGender();
person.printName();
