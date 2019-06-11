//对登录页面的操作
const btn = document.querySelector("button");
const input = document.querySelectorAll("input");

btn.onclick = () => {
    //点击按钮进行登录操作
    let [user, pwd] = Array.from(input, (el) => el.value);
    console.log("点击事件触发")
    if (user && pwd) {
        //用户名不能为空
        //将我们得到的用户名和密码发送给后端
        //通过post请求发送接口
        axios.post("/verify/login", {
            user, pwd
        }).then(res => {
            //后端结束到这个数据对其进行判断 然后向我们返回一个判断结果
            
            res = res.data;
            console.log(res, "后端向我们返回的数据");
            if (res.code == 0 && res.msg == "用户不存在") {
                let flag = confirm("您还有账号呢，请去注册一个呗");
                if (flag) {
                    location.href = "../register.html";
                }
            } else if (res.code == 0 && res.msg == "密码账号不对") {
                alert("用户名或者密码输入错误");
            } else {
                location.href="../list.html"
            }
        })
    }
}



