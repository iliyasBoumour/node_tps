const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const person1 = { firstName: "John", lastName: "Doe" };
//Implement
//Affichage attendu: John Doe, Lyon, France
// const aff = person.fullName.call(person1, "Lyon", "France");
const aff = person.fullName.apply(person1, ["Lyon", "France"]);

console.log(aff);
