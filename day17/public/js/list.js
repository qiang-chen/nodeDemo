class List{
    constructor(){
        this.init()
    }
    init(){
        this.listClick()
    }
    listClick(){
        //点击列表跳转详情页
        const item=document.querySelectorAll(".item");

        item.forEach((el,index)=>{
            el.onclick=()=>{
                location.href="/api/edit/"+index;
            }
        })
    }
}