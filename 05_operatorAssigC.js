console.log(`-------------------TCS Interview Eligibility-----------------------------`);
var candidate = function(gradScore,hscScore,sscScore,candidateName){
   var result=(gradScore >=70)||(hscScore>=80)||(sscScore>=90) ? `Congrates "${candidateName}" you are eligible for tcs interview`:`Unfortunately "${candidateName}" you are not eligible for interview`;
   return result;
}
var res=candidate(80,866,90,"priti");
console.log(` ${res}`);
console.log(`--------------------------------------------------------------------------`);
var res=candidate(70,65,55,"shwetali");
console.log(` ${res}`);
console.log(`--------------------------------------------------------------------------`);
var res=candidate(60,79,88,"sharayu");
console.log(` ${res}`);
console.log(`--------------------------------------------------------------------------`);
console.log(`==========================================================================`);
