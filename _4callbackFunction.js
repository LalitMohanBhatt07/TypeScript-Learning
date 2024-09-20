"use strict";
function runAfterOneSecond(fn) {
    setTimeout(fn, 1000);
}
runAfterOneSecond(() => {
    console.log("Hello");
});
