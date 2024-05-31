const users = [{ name: 'John', age: 25 }, { name: 'Jane', age: 22 }];

var a=0;
users.forEach((el)=>{
    a+=el.age
})
console.log(a);