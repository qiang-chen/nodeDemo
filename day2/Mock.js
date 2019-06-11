(function (window) {

    const Mock = function () {
        return Mock.prototype.init();
    }

    Mock.prototype = {
        init() {
            return this;
        },
        mock(opt) {
            for (let k in opt) {
                let k1 = k.split("|")[0];
                let k2 = k.split("|")[1];
                if (k1 == "title") {
                    if (typeof k2 == "string") {
                        let str = opt[k];
                        if (!isNaN(k2 * 1)) {
                            str=""+str;
                            return str.repeat(k2 * 1)
                        } else if(!isNaN(opt[k])){
                            let n1 = k2.split("-")[0] * 1;
                            let n2 = k2.split("-")[1] * 1;
                            return this.random(n2, n1)
                        }else{
                            let n1 = k2.split("-")[0] * 1;
                            let n2 = k2.split("-")[1] * 1;
                            return str.repeat(this.random(n2, n1))
                        }
                    }

                }
            }
        },
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }
    window.Mock = Mock();

})(window)