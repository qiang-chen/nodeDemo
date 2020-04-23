

btn.onclick=()=>{
    let xhr=new XMLHttpRequest();
    xhr.open("get","/api/text",false);
    xhr.send(null);
   
    console.log(xhr.responseText)
}