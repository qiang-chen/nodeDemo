//封装一个方法适配大小文件的读取，限定值2M

const fs=require("fs");
function file(filePath){
    if(fs.existsSync(filePath)){
        let size=fs.statSync(filePath).size;
        return size;
    }
}


//数组的扁平化处理

function flattening(arr){
    let newArr=arr.reduce((prev,cur)=>{
        return [].concat(prev,cur)
    });

    let flag=newArr.every(item=>{
        return typeof item!="object";
    });

    if(!flag){
        return flattening(newArr)
    }else{
        return newArr;
    }
}

let a=flattening([1,[2,[4,5,[6]]],9,3]);
// console.log(a)

function grade(num,sum=5){
    if(num>sum||Math.sign(sum)==-1||Math.sign(sum)==0||(!Number.isInteger(sum))){
        return "error";
    }else{
        let str="☆";
        str=str.repeat(sum);
        str=str.split("");
        let str1="★".repeat(num).split("")
        str.splice(0,num)
        return str1.concat(str).join("");
    }
}

let a1=grade(6,9);
//console.log(a1)


function jumpFloor2(n) {
    var target = 0, number1 = 1, number2 = 2;

    if(n<=0)return 0;
    if(n == 1) return 1;
    if(n==2) return 2;
    for(var i=3;i<=n;++i) {
        target = number1 + number2;
        number1 = number2;
        number2 = target;
    }
    return target;
}
//console.log(jumpFloor2(4),"--------------")

let c=[1,[2,[4,5,[6]]],9,3];
console.log(c.flat(Infinity))