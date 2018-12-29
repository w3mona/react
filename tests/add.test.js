const add=(a,b)=> a+b+1;

const generateGreeting=(name='Anonymous')=> `hello ${name}!`; 

test('testing add',()=>{
    const res = add(3,4);

   // if(res!=7){
    //    throw new Error(`result should be the result was ${res} expect 7`);
        
    //}
    
   expect(res).toBe(8);
}); 

test("greeting",()=>{
    const gg = generateGreeting('mona');

    expect(gg).toBe('hello mona!');
})

test("anonymous greeting", ()=>{
    const gg2 = generateGreeting();

    expect(gg2).toBe('hello Anonymous!');
})