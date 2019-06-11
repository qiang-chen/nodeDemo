class List {
    constructor() {
        this.num = 0;
        this.bs = new BScroll(".wrap", {
            probeType: 3,
        });
        this.init()
        this.bsEvent();
    }
    init() {
        this.getData(this.num);
    }
    getData(num) {
        axios.get("/list/data?page=" + num).then(res => {
            console.log(res.data)
            this.render(res.data)
            this.bs.refresh()
        })
    }
    render(data) {
        const list = document.querySelector(".list");
        let str = "";
        if (data.length) {
            str = data.map(item => {
                return `<div class="item" dataid="${item.id}">
            <div class="left">
                <div class="one">
                    <span>公司</span><span>${item.company}</span>
                </div>
                <div class="one">
                    <span>地址</span><span>${item.address}</span>
                </div>
                <div class="one">
                    <span>银行</span><span>${item.bank_name}</span>
                </div>
                <div class="one">
                    <span>银行卡号</span><span>${item.bank_card}</span>
                </div>
                <div class="one">
                    <span>电话</span><span>${item.mobile}</span>
                </div>
            </div>
            <div class="right">
                <button class="edit">编辑</button>
                <button class="del">删除</button>
            </div>
        </div>`
            }).join("");
        }else{
            console.log("进来了吗")
        }
        list.innerHTML += str;
        this.btnClick()
    }
    bsEvent() {
        const list = document.querySelector(".list");
        const bs = this.bs;
       const that=this;
        bs.on("scroll", function(){
            if(that.num > 4){
                list.setAttribute("up","没有数据了亲！！！")
                return;
            }
            console.log(that.num)
            //console.log(this.y,this.maxScrollY,"上拉加载")
            if(this.maxScrollY-70>this.y){
                list.setAttribute("up","释放加载数据")
            }else if(this.maxScrollY-70<this.y){
                list.setAttribute("up","正在加载中....")
            }
        });

        bs.on("scrollEnd",()=>{
            if(list.getAttribute("up")=="释放加载数据"){
                console.log(555);
                //list.setAttribute("up","正在加载中....")
            }
            
        })

        bs.on("touchEnd",()=>{
            if(this.num > 4){
                console.log(this.num)
                list.setAttribute("up","没有数据了亲！！！")
                return;
            }
            const up=list.getAttribute("up");
            if(up=="释放加载数据"){
                this.num++;
                this.getData(this.num);
            }
        })

    }
    btnClick() {
        //点击编辑进入编辑页面
        const edit = [...document.querySelectorAll(".edit")];
        edit.forEach((item, index) => {
            item.onclick = () => {
                location.href = "/api/edit?id=" + index;
            }
        })
        //点击新增进入新增页面
        const add = document.querySelector(".add");
        add.onclick = () => {
            location.href = "/api/add"
        }

        //点击删除把这条数据删除掉
        const del = [...document.querySelectorAll(".del")];
        del.forEach((item, index) => {
            item.onclick = () => {
                axios.get("/data/del?id=" + index).then(res => {
                    if (res.data.code == 1) {
                        location.href = "../list.html"
                    }
                })
            }
        })
    }

}