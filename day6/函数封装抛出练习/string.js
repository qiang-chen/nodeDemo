

exports.reverse=function(str){
    let newStr=str.split("-");
    for(let i=1;i<newStr.length;i++){
        let newS=newStr[i].split("");
        newS.splice(0,1,newStr[i][0].toLocaleUpperCase())
       //console.log(newS,"99999999999999999999999")
       newStr[i]=newS.join("")
    }
    return newStr;
}

//封装一个叫做reverse的函数 转驼峰的作用 然后通过exports抛出  //懂吗？恩 大姐 你别走神 看好恩