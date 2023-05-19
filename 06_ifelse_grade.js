
console.log(`----------If Else Grade Assignment-----------------------------------------------`);
console.log(`.................................................................................`);
function voteEligibility(age){
    if(age==null||age==undefined||age<=0||age>120){
        console.log(`Your age: "${age}" Invalid data--> please enter valid data`);
    }
    else{
        if (age<18) {
            console.log(`Your age is "${age}", You are not eligible for voting`);
        } else {
            console.log(`your age is "${age}", you are eligible for voting`);
        }
    }console.log(`------------------------------------------------------------------------------`);
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
