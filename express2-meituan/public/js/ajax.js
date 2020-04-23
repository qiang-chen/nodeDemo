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
