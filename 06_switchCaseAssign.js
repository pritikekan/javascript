console.log(`======================Switch case Assignment==================`);
function monthOfYear(month) {
    switch (month) {
      case 1:
        console.log(`month is: january as month number is ${month}`);
        break;
      case 2:
        console.log(`month is: february as month number is ${month}`);
        break;
      case 3:
        console.log(`month is: March as month number is ${month}`);
        break;
      case 4:
        console.log(`month is: April as month number is ${month}`);
        break;
      case 5:
        console.log(`month is: May as month number is ${month}`);
        break;
      case 6:
        console.log(`month is: June as month number is ${month}`);
        break;
      case 7:
        console.log(`month is: july as month number is ${month}`);
        break;
        case 8:
        console.log(`month is: August as month number is ${month}`);
        break;
        case 9:
        console.log(`month is: September as month number is ${month}`);
        break;
        case 10:
        console.log(`month is: October as month number is ${month}`);
        break;
        case 11:
        console.log(`month is: November as month number is ${month}`);
        break;
        case 12:
        console.log(`month is: December as month number is ${month}`);
        break;
      default:
        console.log(`Invalid input ==> ${month} please provide valid input`);
        break;
    }console.log(`--------------------------------------------------------------`);
  }
  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear(null);
  monthOfYear(undefined);
  monthOfYear(NaN);



