
ajax({
    url:"api/main",
    data:"page=1&limit=15"
}).then(res=>{
    res=JSON.parse(res).list;
    red(res)
})


function red(res){
    const box=document.querySelector(".box")
    box.innerHTML=res.map(item=>`<dl>
                <dt><img src="${item.img}" alt=""></dt>
                <dd><p>${item.title}</p><p>${item.id}</p></dd>
            </dl>`).join("")
}