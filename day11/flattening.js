//task 1  split方法处理
function flattening(arr) {
    let arr1 = (arr + "").split(",");
    //此时得到的每一项的字符数组
    //接着转数字
    let arr2 = arr1.map(item => {
        return item * 1;
    })
    return arr2;
}

//task 2  递归


function flattening(arr, newArr = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattening(arr[i], newArr)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

//task 2.1 递归第二种写法
function flattening(arr) {
    var res = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            res = res.concat(flattening(item));
        } else {
            res.push(item);
        }
    });
    return res;
}

//task 3 扩展运算符

function flattening(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr;
}

// 顺带提一句合并数组的几种方法
// 当数据小的时候三者没有区别 但是数据特别大的时候 concat性能远远高于其他两个
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// concat
// arr1 = arr1.concat(arr2);
// 扩展运算符
// arr1 = [...arr1, ...arr2];
// 或者
// arr1.push(...arr2);


//task 4 reduce+递归实现

function flattening(arr) {
      let newArr=arr.reduce((prev,cur)=>{
        return [].concat(prev,cur)
    })
    
    let flag=newArr.some(item=>Array.isArray(item))
    if(flag){
        return flattening(newArr);
    }else{
        return newArr
    }
}





console.log(flattening([1, 2, [3, 4, [5, [6, 7], 8]]]), "---------------")
