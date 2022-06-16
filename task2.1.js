// for loop 
for (let i = 0; i<=10; i++) {
    console.log(i);
    
}
//for loop using an array
let a=['ram','mani','sasi','ravi','nijam'];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    
}
// for of loop
for (let i of a) {
    console.log(i);
}
//for each loop
let e;
    a.forEach((e,index) => {
        console.log(e,"-", index)
    });
// for in loop
for (let b in a) {
    console.log(a[b]);
    
    }

    // for in loop in object
    let resume = {  
        name : 'ranjith',
        dob:'23-06-1996',
        qualificaton : "Becholar of engineering (mechatronics)",
        gender: "Male",
        experience : "2 years",
        sslcmarks : '70%',
        diploma:'72%',
        };
        for (let a in resume) {
            console.log(resume[a]);
            }
        
        

