// import { constants } from "zlib";

class Edit {
    constructor() {
        this.init()
    }
    init() {
        this.back();
        this.del();
        this.btn();
        this.add()
    }
    back() {
        //点击back就返回主页面
        let Back = document.querySelector(".back");
        Back.onclick = () => {
            console.log(5555)
            history.back()
        }
    }
    del() {
        //点击删除按钮把这个数据从数据库中删除
        const del = document.querySelector(".del");
        del.onclick = () => {
            //获取url地址 从来得到当前数据的id
            let pathname = location.pathname;
            if (pathname == "/edit") {
                let search = this.query(location.search.substr(1));
                //此时search得到的是id=2&aa=5这种格式 需要转换一下成对象
                //然后利用axios向服务器发送过去这个我们想要删除的东西
                axios.get("/api/del?id=" + search.id).then(res => {
                    if (res.data.code) {
                        console.log("kkkk")
                        location.href = "/";
                    }
                })
            }
        }
    }
    query(str) {
        //将url的search转换成对象
        return str.split("&").reduce((prev, item) => {
            let [key, value] = item.split("=");
            prev[key] = value;
            return prev
        }, {})
    }
    btn() {
        //点击确定按钮获取文本框的值更改数据库

        //先对男女进行一个判断排他
        const sex = [...document.querySelectorAll(".sex span")];
        sex.forEach(item => {
            item.onclick = () => {
                for (let i = 0; i < sex.length; i++) {
                    sex[i].classList.remove("active")
                }
                item.classList.add("active")
            }
        })

        const btn = document.querySelector(".submit");
        const input = [...document.querySelectorAll("input")];
        btn.onclick = () => {

            //点击这个页面的时候要判断是在新增页面点击的还是编辑页面点击的
            //通过url地址判断
            let pathname = location.pathname;
            if (pathname == "/edit") {
                //编辑页面的确定按钮
                let arr = input.reduce((prev, item) => {
                    prev[item.name] = item.value;
                    return prev
                }, {
                        sex: sex.findIndex(item => item.className == "active")
                    });
                //把这个数据通过axios发送给后端
                axios.post("/api/editdata", { arr, id: this.query(location.search.substr(1)) }).then(res => {
                    if (res.data.code) {
                        location.href = "/"
                    }
                })
            } else if (pathname == "/add") {
                //新增页面的确定按钮
                let arr = input.reduce((prev, item) => {
                    prev[item.name] = item.value;
                    return prev
                }, {
                        sex: sex.findIndex(item => item.className == "active")
                    });
                axios.post("/api/adddata", { arr, id: this.query(location.search.substr(1)) }).then(res => {
                    if (res.data.code) {
                        location.href = "/"
                    }
                })
            }


        }
    }
    add() {
        //点击新增按钮给后台发送新增请求
    }
}