class Home {
    constructor() {
        this.init();
    }
    init() {
        this.getData();
    }
    getData() {
        //像3000的服务器请求数据
        axios.get("/api/list").then(res => {
            
            this.render(res.data.data)
        })
    }
    render(data) {
        let str = data.map(item => {
            return `<div class="item">
            <div class="left">
                <p><span>抬头</span><span>${item.title}</span></p>
                <p><span>税号</span><span>${item.duty}</span></p>
                <p><span>银行</span><span>${item.bank}</span></p>
                <p><span>银行账号</span><span>${item.account}</span></p>
            </div>
            <div class="right">
                <button class="edit">编辑</button>
                <button class="del">删除</button>
            </div>
        </div>`
        }).join("");
        list.innerHTML = str;
        this.click()
    }
    click() {
        //点击编辑按钮进行的编辑操作
        const edit = document.querySelectorAll(".edit");
        edit.forEach((item, index) => {
            item.onclick = () => {
                //点击发起请求get
              location.href=`/api/add/`+index;
            }
        });
        //点击删除按钮做的事
        const del=document.querySelectorAll(".del");
        del.forEach((item, index) => {
            item.onclick = () => {
               axios.get("/api/del?list="+index).then(res=>{
                   if(res.data.code){
                       location.href="/"
                   }
               })
            }
        });

        //点击新增按钮做的事情
        const add=document.querySelector(".add");
        add.onclick=()=>{
            location.href="/add"
        }
    }
}