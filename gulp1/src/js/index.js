

class List{
    constructor(){
        this.init();
    }
    init(){
        this.getData()
    }
    getData(){
        axios.get("api/list?page=1&limit=10").then((res)=>{
            console.log(res)
        })
    }
    render(){
        
    }
}