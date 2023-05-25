console.log(`----------If Else Assignment-----------------------------------------------`);
console.log(`.................................................................................`);
var checkLeapYear= function (leapYear){
    if (leapYear==null||leapYear==undefined||leapYear==undefined) {
        console.log(`Invalid Input ${leapYear}Invalid data--> please enter valid data`);
    } else {
        if ((0==leapYear%4)&&(0!=leapYear%100)||(0==leapYear%400)) {
            console.log(`${leapYear} is a leap year`);   
        }else{
            console.log(`${leapYear} is not a leap year`);
        }
}console.log(`.................................................................................`);

}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);