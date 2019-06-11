class List {
    constructor(opj) {
        this.page = opj.page;//第几页数据
        this.list = opj.list;//多少条数据
        this.el = opj.el; //添加better-scroll的元素
        this.listDom = document.querySelector(".list"); //第一个子元素
        //在函数刚进来的时候绑定bs 只把绑定一次
        this.bs = new BScroll(this.el, {
            probeType: 2,
            click:true
        })
        this.init()
    }
    init() {
        this.getData();
        this.scroll();
        this.detailsClick()
    }
    getData() {
        //默认请求数据
        axios.get(`/api/data?page=${this.page}&list=${this.list}`).then(res => {
            //向后台发送请求接着渲染数据 然后刷新重置页面
            this.render(res.data);
            this.bs.refresh()
        })
    }
    render(data) {
        this.listDom.innerHTML += data.map(item => `<div class="item" dataId="${item.id}">
        <div class="left">
                <img src="${item.img}" alt="">
        </div>
        <div class="right">
                <p>我是第${item.id}条数据</p>
                <p>${item.title}</p>
                <p><button class="edit" btnId="${item.id}">编辑</button>
                </p>
                <p>
                <button class="del" btnId="${item.id}">删除</button>
                </p>
        </div>
    </div>`).join("")
    }
    scroll() {
        //滚动事件
        let that = this;
        this.bs.on("scroll", function () {
            //当滚动条的滚动高度大于某一个值的时候改变其up的内容
            //console.log(this.y,this.maxScrollY);
            if (that.page > 7) {
                that.listDom.setAttribute("up", "没有数据了亲");
                return;
            }
            if ((this.maxScrollY - 70) > this.y) {
                that.listDom.setAttribute("up", "释放加载更多");
            } else {
                that.listDom.setAttribute("up", "上拉加载更多....");
            }
        });
        //在滚动结束以后要在吧其内容变成上拉加载更多
        this.bs.on("scrollEnd", () => {
            this.listDom.setAttribute("up", "上拉加载更多....");
        });
        //在松开手指的瞬间判断这个状态是什么从而决定是否要发送ajax请求向后发送数据

        this.bs.on("touchEnd", () => {
            let content = this.listDom.getAttribute("up");
            if (content == "释放加载更多") {
                this.page++;
                //顺带判断下当数据库的总数据超过数据库的总数据要显示没有数据了
                if (this.page > 7) {
                    this.listDom.setAttribute("up", "没有数据了亲");
                    return;
                }
                this.getData();
                //最重要的一点是渲染完页面重新计算文本高度
                //因为这个请求是异步的 所以方法在上了 refresh
            }
        })
    }
    detailsClick(){
        //详情页的点击事件
        this.listDom.onclick=(e)=>{
            let target=e.target;
            console.log(target)
            if(target.classList.contains("item")){
                let id=target.getAttribute("dataId");
                location.href="/details/"+id;
            }else if(target.classList.contains("edit")){
                //当点击的是编辑的时候 跳转到编辑页面
                let id=target.getAttribute("btnId");
                location.href="/edit?id="+id;
                
            }
        }
    }

}