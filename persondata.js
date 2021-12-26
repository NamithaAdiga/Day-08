class person {
    constructor({ name, age, gender, height, city, country }) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.height = height;
      this.city = city;
      this.country = country;
    }
  
    getData() {
      console.log(`
      Name    : ${this.name}
      Age     : ${this.age}
      Gender  : ${this.gender}
      Height  : ${this.height}
      City    : ${this.city}
      Country : ${this.country}
          `);
    }
  }
  
  const personData = {
    name: "Namitha Adiga",
    age: 23,
    gender: "F",
    height: "5.2ft",
    city: "Bengaluru",
    country: "India",
  };
  
  const personInfo = new person(personData);
  
  personInfo.getData();