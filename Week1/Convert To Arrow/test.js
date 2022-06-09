const obj=
{
    userName: "john",
    age:30,
    stack:['python','mern']
}
const {userName, age}=obj;
console.log('Name', userName);
console.log('Age',age);

const arr = [1,2,3,4,5];
const [firstitem] = arr;
const [,seconditem] = arr;

console.log(firstitem);
console.log(seconditem);


//spread operator
const {stack, ...others} = obj;

console.log("stack", stack);
console.log("others", others);
console.log(age);

const {...all} = obj;
console.log("OBJ", all);

const [first, second, ...rest] = arr;

console.log("first", first);
console.log("second", second);
console.log("rest", rest);