const add =(a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
const multi = (a,b)=>{
    return a*b;
}
const name = "Prabir Khanra";

// 1st rule 
// module.exports = add;

// 2nd rule 
//            .... You can write anything here like   module.exports.add1 = add;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// module.exports.name = name;


// 3rd process 
module.exports = {add,sub,multi,name};