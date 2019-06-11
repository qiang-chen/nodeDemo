

class List{
    constructor(){
        this.init();
    }
    init(){
        this.getData();
        this.smallClick();
        this.bigClick()
    }
    getData(){
        //获取小类数据
        axios.get("api/list?id=1").then((res)=>{
            this.smallrender(res.data)
        });
        //默认获取大类数据
        axios.get("api/big").then(res=>{
            this.bigrender(res.data)
        })
        //商品数据
        axios.get("api/data?id=1").then((res)=>{
            this.render(res.data)
        });
    }
    smallrender(data){
        let html=data.map((item,index)=>`<span class="${index==0?"active":""}" dataId="${item.id}">${item.name}</span>`).join("");
        let top=document.querySelector(".top");
        top.innerHTML=html;
    }
    bigrender(data){
        let html=data.map((item,index)=>`<p class="${index==0?"active":" "}" dataId='${item.id}'>${item.name}</p>`).join("");
        let left=document.querySelector(".left");
        left.innerHTML=html;
    }
    render(data){
        let html=data.map((item,index)=>`<p dataId="${item.id}">${item.name} </p>`).join("");
        let bottom=document.querySelector(".bottom");
        bottom.innerHTML=html;
    }
    smallClick(){
        //小商品的点击切换数据
        let top=document.querySelector(".top");
        top.onclick=(e)=>{
            let target=e.target;
            if(target.tagName=="SPAN"){
                
                let index=target.getAttribute("dataId");
                axios.get("api/data?id="+index).then((res)=>{
                    this.render(res.data)
                });
            }
        }
    }
    bigClick(){
        //点击左边右边两列一起切换
        let left=document.querySelector(".left");
        left.onclick=(e)=>{
            let target=e.target;
            for(let i=0;i<left.children.length;i++){
                left.children[i].classList.remove("active")
            }
            target.classList.add("active")
            if(target.tagName=="P"){
                let index=target.getAttribute("dataId");
                axios.get("api/list?id="+index).then((res)=>{
                    this.smallrender(res.data);
                    let index=res.data[0].id;
                    axios.get("api/data?id="+index).then((res)=>{
                        this.render(res.data)
                    });
                });
            }
        }
    }
}