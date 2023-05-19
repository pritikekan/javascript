console.log(`-------------------TCS Interview Eligibility if else-----------------------------`);
var candidate = function(gradScore,hscScore,sscScore,candidateName){
    if (gradScore >=70||hscScore>=80||sscScore>=90){
        console.log(`Congrates "${candidateName}" you are eligible for tcs interview`);
    } else {
        console.log(` "${candidateName}" you are not eligible for interview`);
    }
    console.log(`--------------------------------------------------------------------------`); 
}
var res=candidate(80,866,90,"priti");
var res=candidate(70,65,55,"shwetali");
var res=candidate(60,79,88,"sharayu");
console.log(`==========================================================================`);
