interface User{
    firstName:string;
    lastName:string;
    age:number;
}

function isLegalOne(user:User){
    if(user.age>=18){
        console.log("It is legal to drive car ");
    }
    else{
        console.log("It is illigal");
    }
}

isLegalOne({
    firstName:"Lalit",
    lastName:"Bhat",
    age:20
})