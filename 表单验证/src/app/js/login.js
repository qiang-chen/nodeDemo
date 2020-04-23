
//点击按钮向服务器发送请求

const btn=document.querySelector("button");
const input=document.querySelectorAll("input");
btn.onclick=()=>{
    let [user,pwd]=[input[0].value,input[1].value];
    if(user&&pwd){
        ajax({
            url:"api/login",
            type:"post",
            data:{
                user,
                pwd
            }
        }).then((res)=>{
            
            if(!res){
                let f=confirm("账号不存在请去注册页面");
                if(f){
                    location.href="../../register.html"
                }
                
            }else{
                location.href='../../index.html'
            }
            
        })
    }
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
