 var myName ="Gajanan";//variable initilization and declarattion
 var myName ="Gajanan kharat"; //re-declaration
 myName ="Gajanan p. kharat"; 
 console.log(`${myName}`);

 let collegeName ="COEP";
 collegeName ="COEP Pune";//redeclaration not allowed



 const PI = 3.14;
//  PI=3.142//update not allowed
 console.log(`${PI}`);


 //Scope=Accessibilty
 let age=25;
 if (age==25) {
    var city="pune";
    console.log(`city${city}`);
 }
