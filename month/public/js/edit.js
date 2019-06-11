class Edit {
    constructor() {
        this.init()
    }
    init() {
        this.submit()
    }
    submit() {
        //通过url地址判断新增或者编辑页面从而进行数据的修改还是删除
        const submit = document.querySelector(".submit");
        const input = [...document.querySelectorAll("input")];
        console.log(location.search)
        submit.onclick = () => {
            if (location.pathname == "/api/add") {
                //新增页面的点击
                let opj=input.reduce((prev,item)=>{
                    console.log(item.value)
                    prev[item["name"]]=item.value;
                    return prev
                },{})
                axios.post("/data/add",opj).then(res=>{
                    if(res.data.code){
                        location.href="../list.html"
                    }
                })
            }else if(location.pathname=="/api/edit"){
                //编辑页面的确认事件
                let opj=input.reduce((prev,item)=>{
                    console.log(item.value)
                    prev[item["name"]]=item.value;
                    return prev
                },{})
                axios.post("/data/edit/"+this.query(location.search.slice(1)).id,opj).then(res=>{
                    if(res.data.code){
                        location.href="../list.html"
                    }
                })
            }
        }

    }
    query(str){
        //将问号后面的字符串转换成对象
        let newStr=str.split("&");
        return newStr.reduce((prev,item)=>{
           let [key,value]=item.split("=");
           prev[key]=value;
           return prev;
        },{})
    }
}