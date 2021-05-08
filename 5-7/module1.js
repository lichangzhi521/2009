let name ="zhangsan";
let age = 22


let obj={
    name,
    age,
    sex:"男"
}

let hello=function(){
    console.log("hello11111");
}
//将当前模块导出，供其他模块使用
export {obj,hello}