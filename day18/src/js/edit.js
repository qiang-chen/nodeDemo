
class Details {
    constructor() {
        this.init()
    }
    init() {
        this.click()
    }
    click() {
        const btn = document.querySelector(".btn");
        const input = [...document.querySelectorAll("input")];
        //在这里点击的时候要区分是在新增页面点击的还是在编辑页面点击的  通过url地址区分
        console.log(location.pathname)
        if (btn) {
            //顺带把上面url的标识id发送过去
            if (location.pathname == "/add") {
                //新增页面点击的
                btn.onclick = () => {
                    let data = input.reduce((prev, item) => {
                        prev[item["name"]] = item.value;
                        return prev;
                    }, {});
                    console.log(data)
                    axios.post("/api/add", data).then(res => {
                        if (res.data.code) {
                            location.href = "/"
                        }
                    })
                }

            } else {
                btn.onclick = () => {
                    let data = input.reduce((prev, item) => {
                        prev[item["name"]] = item.value;
                        return prev;
                    }, { id: location.pathname.slice(9) });
                    //把修改过后的数据发回给和后台
                    axios.post("/api/edit", data).then(res => {
                        if (res.data.code) {
                            location.href = "/"
                        }
                    })
                }
            }

        }
    }
}