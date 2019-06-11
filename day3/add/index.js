class Add {
    constructor() {
        this.count = 0;
        this.count1 = 0;
        this.init()
    }
    init() {
        this.mouse();
        this.click();
    }
    mouse() {
        let input = document.querySelector("#title");
        input.onkeydown = (e) => {
            if (e.keyCode == 13) {
                let val = input.value;
                if (val != "") {
                    let str = `<li><input type="checkbox" />${val}<a href="#1"></a></li>`;
                    todolist.innerHTML += str;
                    this.count++;
                    todocount.innerHTML = this.count;
                    input.value = "";
                }
            }
        }
    }
    click() {
        //点击事件
        todolist.onclick = (e) => {
            let target = e.target;
            if (target.tagName == "INPUT") {
                if (target.checked) {
                    donelist.appendChild(target.parentNode);
                    this.count--;
                    todocount.innerHTML = this.count;
                    this.count1++;
                    donecount.innerHTML = this.count1;
                }
            } else if (target.tagName == "A") {
                todolist.removeChild(target.parentNode);
                this.count--;
                todocount.innerHTML = this.count;
            }
        }

        donelist.onclick = (e) => {
            let target = e.target;
            if (target.tagName == "INPUT") {
                if (!target.checked) {
                    todolist.appendChild(target.parentNode);
                    this.count++;
                    todocount.innerHTML = this.count;
                    this.count1--;
                    donecount.innerHTML = this.count1;
                }
            } else if (target.tagName == "A") {
                donelist.removeChild(target.parentNode);
                this.count1--;
                donecount.innerHTML = this.count1;
            }
        }

        //全部清除事件
        clear.onclick = () => {
            let child = [...donelist.children];
            child.forEach(item => {
                donelist.removeChild(item);
            });
            this.count1 = 0;
            donecount.innerHTML = this.count1;
        }
    }
}