//对登录页面的操作
const btn=document.querySelector("button");
const input=document.querySelectorAll("input");

btn.onclick=()=>{
    //点击按钮进行登录操作
    let [user,pwd]=Array.from(input,(el)=>el.value);
    if(user&&pwd){
        //用户名不能为空
        //将我们得到的用户名和密码发送给后端
        // ajax({
        //     url:"api/login",
        //     type:"post",
        //     data:{
        //         user,pwd
        //     }
        // }).then((res)=>{
        //     //后端结束到这个数据对其进行判断 然后向我们返回一个判断结果
           
        // })
        axios.post("/api/login",{
            user,pwd
        }).then(res=>{
            let data=res.data;
        })
    }
}



