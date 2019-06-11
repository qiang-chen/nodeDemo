class Tap{
    constructor(){
        this.init()
    }
    init(){
        this.tap()
    }
    tap(){
        //点击nav导航进行对应的tap切换
        const span=document.querySelectorAll(".nav span");
        span.forEach((item,index)=>{
            item.onclick=()=>{
                for(let i=0;i<span.length;i++){
                    span[i].classList.remove("active")
                }
                item.classList.add("active")
                axios.get("/switch?tap="+index).then(res=>{
                    console.log(res)
                })
            }
        })
    }
}