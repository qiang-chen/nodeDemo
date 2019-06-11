//往本地存储数据

let arr = [];
if (localStorage.arr) {
    arr = JSON.parse(localStorage.arr);
}

const btn = document.querySelector("button");
const input = document.querySelectorAll("input");
btn.onclick = () => {
    let [user, pwd] = [input[0].value, input[1].value];
    if (user && pwd) {

        if (arr.length) {
            let flag = arr.every(item => {
                return item.user != user
            });
            if (flag) {
                let opj = {
                    user,
                    pwd,
                }
                arr.push(opj);
                let suc=confirm("注册成功，是否返回登录页面");
                if(suc){
                    ajax({
                        url:"api/add",
                        type:"post",
                        data:opj
                    })
                    location.href="/";

                }else{
                    alert("能不能像正常人一样回去登录")
                }
            }else{
                alert("笨蛋，这个账号被人注册了")
            }
        }else{
            arr.push({
                user,
                pwd
            });
            let suc=confirm("注册成功，是否返回登录页面");
                if(suc){
                    ajax({
                        url:"api/add",
                        type:"post",
                        data:opj
                    })
                    location.href="/";

                }
            
        }
        
    }
    input[0].value = "";
    input[1].value = "";
    localStorage.arr=JSON.stringify(arr);
}



function ajax(opj){
    let newOpj={
        async:true,
        type:"get",
    }
    let def=Object.assign({},newOpj,opj);
    let xhr=new XMLHttpRequest()?new XMLHttpRequest():ActiveXObject("Microsoft.XMLHTTP");
    
    return new Promise((resolve,reject)=>{
        xhr.onreadystatechange=function(){
            
            if(xhr.readyState==4){
                if(xhr.status==200){ 
                    resolve(xhr.responseText)
                }else{
                    reject("error")
                }
            }
        }

        if(def.type=="get"){
            xhr.open(def.type,def.url+"?"+def.data,def.async);
            xhr.send(null)
        }else{
            xhr.open(def.type,def.url,def.async);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(JSON.stringify(def.data))
        }

    })
}

