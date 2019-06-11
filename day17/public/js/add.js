class Add{
    constructor(){
        this.init()
    }
    init(){
        this.add()
    }
    add(){
        //点击添加按钮往数据库添加内容
        const btn=document.querySelector(".btn");
        const input=[...document.querySelectorAll("input")]
        btn.onclick=()=>{
            let arr=input.reduce((prev,item)=>{
                prev[item.name]=item.value;
                return prev
            },{});
            //将数据发送给后台
            axios.post("/api/add",arr).then(res=>{
                let data=res.data;
                if(data.code){
                    location.href="/"
                }
            })
        }
    }
}