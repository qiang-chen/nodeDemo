
let arr=[1,2,[3,[4,[5]]],6]
function a(arr){
    let res=arr.reduce((prev,cur)=>{
        return [].concat(prev,cur)
    })
    let flag=res.every(item=>{
        return typeof item!="object"
    })

    if(!flag){
        a(res)
    }else{
        console.log(res,"答案")
        return res
    }
}
let bbb=a(arr);
console.log(bbb)

let arr = [1, 2, [3, [4, [5]]], 6]
function a(arr) {
let res = arr.reduce((prev, cur) => {
return [].concat(prev, cur)
})
let flag = res.every(item => {
return typeof item != "object"
})

if (!flag) {
return a(res)
} else {
console.log(res, "答案")
return res
}
}
let bbb = a(arr);
console.log(bbb)