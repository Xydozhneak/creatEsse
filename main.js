const users = [
    {
      name: 'Ivan',
      age: 25,
    },
    {
      name: 'Alex',
      age: 26,
    },
    {
      name: 'Jhon',
      age: 17,
    },
    {
      name: 'Viktor',
      age: 22,
    },
  ];
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.userInfo = function() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  }
  
  const cars = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2018,
      number: 'ABC123',
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      number: 'DEF456',
    },
    {
      make: 'Ford',
      model: 'Mustang',
      year: 2020,
      number: 'GHI789',
    },
    {
      make: 'Chevrolet',
      model: 'Cruze',
      year: 2017,
      number: 'JKL012',
    },
  ];
  
  function Car(make, model, year, number, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = null;
  
    this.assignOwner = function(person) {
      if (person.age > 18) {
        this.owner = person;
      } else {
        console.log(`Person ${person.name} is not eligible to be an owner.`);
      }
    };
  
    this.displayInfo = function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Number: ${this.number}`);
      if (this.owner) {
        console.log('Owner:');
        this.owner.userInfo();
        
      } else {
        console.log('No owner assigned or owner is not 18 years old.');
      }
    };
  }
  
  const userExem = users.map(function(item) {
    return new Person(item.name, item.age);
  });
  
  const carsExem = cars.map(function(item) {
    return new Car(item.make, item.model, item.year, item.number);
  });
  
  carsExem[0].assignOwner(userExem[0]);
  carsExem[1].assignOwner(userExem[3]);
  carsExem[2].assignOwner(userExem[2]);
  carsExem[3].assignOwner(userExem[1]);
  
  carsExem.forEach(function(car) {
    car.displayInfo();
  });