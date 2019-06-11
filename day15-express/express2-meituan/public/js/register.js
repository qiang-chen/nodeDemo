
//注册页面的js操作

const btn = document.querySelector("button");
const input = document.querySelectorAll("input");
btn.onclick = () => {
    let [user, pwd] = [input[0].value, input[1].value];
    if (user && pwd) {
        //将用户注册的账号密码发送给后端
        ajax({
            url:"api/register",
            type:"post",
            data:{
                user,pwd
            }
        }).then((res)=>{
            //后端结束到这个数据对其进行判断 然后向我们返回一个判断结果
            res=JSON.parse(res);
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

