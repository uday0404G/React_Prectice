const users = [{ name: 'John', age: 17 }, { name: 'Jane', age: 23 }];

let a=users.filter((el)=>{
    return el.age>18;
  })
 
  console.log(a);
 