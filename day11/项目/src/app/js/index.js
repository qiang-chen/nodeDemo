class Index {
    constructor() {
        this.init()
    }
    init() {
        this.tap()
    }
    tap() {
        let span = document.querySelectorAll(".nav span")

        span.forEach((item,index) => {
            item.onclick = () => {
                for (let i = 0; i < span.length; i++) {
                    span[i].classList.remove("active")
                }
                item.classList.add("active");
                this.ajax({
                    url: `/api/text${index}`
                }).then((data) => {
                    console.log(data.list)
                    //data=JSON.parse(data);
                    console.log(data.list,"999999");
                    let str=data.list.map(item=>{
                        return `<div class="one"><span>${item.num}号</span><span>${item.name}</span><span>${item.title}</span></div>`;
                    }).join("");
                    list.innerHTML=str;
                })
            }
        })
    }
    ajax(opj){
        let def = {
            type: "get",
            async: true,
        }
        let defs = Object.assign({}, def, opj);
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest() ? new XMLHttpRequest() : ActiveXObject("Microsoft.XMLHTTP");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(xhr.status)
                    }
                }
            };
            if (defs.type == "get") {
                xhr.open(defs.type, defs.url , defs.async);
                xhr.send(null)
            }
            if (defs.type == "post") {
                xhr.open(defs.type, defs.url, defs.async);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(defs.data)
            }
        })
    }
}