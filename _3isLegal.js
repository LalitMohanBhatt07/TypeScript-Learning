"use strict";
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let ans = isLegal(18);
if (ans) {
    console.log("Person is legal");
}
else {
    console.log("Person is not legal");
}
