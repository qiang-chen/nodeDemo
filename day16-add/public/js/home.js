
//此函数是做主页面的一个跳转功能 

class Skip{
    constructor(){
        this.init()
    }
    init(){
        this.add();
        this.edit()
    }
    add(){
        //点击新增跳转进edit页面
        const addBtn=document.querySelector(".addbtn");
        addBtn.onclick=()=>{
            //点击新增向后台发送一个叫做/add的接口

            //为什么不能这样传

            // axios.get("/add").then(res=>{+
            //     console.log(res)
            // })

            location.href="/add"
        }
    }
    edit(){
        //点击编辑也要跳转到这个页面
        //首先获取所有的编辑按钮
     
        const btn=document.querySelectorAll(".editbtn");
        console.log(btn)
        btn.forEach((item,index)=>{
            console.log(item)
            item.onclick=()=>{
                console.log(88888888)
                location.href="/edit?id="+index;
            }
        })
    }
}