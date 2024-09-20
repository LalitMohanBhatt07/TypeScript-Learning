function runAfterOneSecond(fn:()=>void){
    setTimeout(fn,1000);
}

runAfterOneSecond(()=>{
    console.log("Hello");
})