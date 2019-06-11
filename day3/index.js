

// let arr=[1,5,3,9,4];

// // console.log(arr.copyWithin(1,2))

// console.log(arr.copyWithin(0,1,1))

// let arr=[
//     {
//         user:"ww",
//         pwd:1234
//     },{
//         user:"zs",
//         pwd:5678
//     }
// ]

// let a=arr.findIndex((item,index)=>item.user=="zs"&&item.pwd==5678);

let arr=[
    {
        id:"0",
        title:"xm"
    },{
        id:"2",
        title:"ww"
    },{
        id:3,
        title:"sk"
    }
]

function remove(id){
    let index=arr.findIndex(item=>item.id==id);
    console.log(index)
    arr.splice(index,1);
    return arr;
}

console.log(remove("0"))