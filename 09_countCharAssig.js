function countCharA(str){
    console.log(`Given string:${str}`);
    var count=0;
    for(let index=0;index <str.length;index++){
        var char =str.charAt(index)
        // var split=str.split("")
        if(char=="a"||char=="A"){
            count=count+1;
        }
    }
    return count;
    }
    var count=countCharA("I AM learning JavaScript,The Langauge of internet");
    console.log(`Total count of "A" and "a":${count}`);
   var count= countCharA("My favourite movie is LAggan")
    console.log(`Total count of "A" and "a":${count}`);

