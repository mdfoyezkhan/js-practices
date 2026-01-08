const person ={
    name:'foyej khan',
    age:24,
    contry : 'bangladesh'
}
Object.freeze(person)
Object.seal(person)
person.age =25;
person.status ='lorning';
person.profesion= 'student';

console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))