let iAmProgrammer = true;
let myFavoriteDrikIsZeroCoke;
let iHaveAThousandBitcoins;

if (iAmProgrammer) {
  console.log("You're a good person");
} else {
  console.log("You're a liar!");
}

const TRUE = true;
const FALSE = false;

// && AND
console.log(TRUE && TRUE);
console.log(TRUE && FALSE);
console.log(FALSE && TRUE);
console.log(FALSE && FALSE); //모두 true 이어야 트루

// || OR
console.log(TRUE || TRUE);
console.log(TRUE || FALSE);
console.log(FALSE || TRUE);
console.log(FALSE || FALSE); //하나라도 true면 트루

// ! NOT
console.log(!TRUE); //반대로 출력
console.log(!FALSE);

var a = [1, 2, 3];

console.log(a);

const b = [1, "a", true];

const myProfile = {
  name: "Jin Hyun Seok",
  job: "programmer",
  age: 34,
  iskind: true,
};

const uglyMyProfile = ["Jin Hyun Seok", "Programmer", 34];

console.log(myProfile.age);
