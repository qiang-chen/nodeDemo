
//注册页面的js操作
const btn = document.querySelector("button");
const input = document.querySelectorAll("input");
btn.onclick = () => {
    let [user, pwd] = [input[0].value, input[1].value];
    if (user && pwd) {
        //将用户注册的账号密码发送给后端

        axios.post("/verify/register",{
            user,pwd
        }).then(res=>{
             res=res.data;
            console.log(res,"后端向我们返回的数据");
            if(res.code==1&&res.msg=="注册成功"){
                let flag=confirm("注册成功,请返回登录页面把！");
                if(flag){
                    location.href="/";
                }
            }else{
                alert(res.msg);
            }
        })
    }
    input[0].value = "";
    input[1].value = "";
}

