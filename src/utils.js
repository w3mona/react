console.log("utils is running");

 const square=(x)=> x*x;
 const add=(x)=> x+x; 
 const isAdult=(age)=> age>=18;
 const canDrink=(age)=> age>=21  ;
 // export default isAdult

export {square, add , isAdult as default , canDrink };