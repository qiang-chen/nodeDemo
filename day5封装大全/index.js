
/**
 *
 *
 * @class Encapsulation js常见方法的封装大全
 */
class Encapsulation {
    constructor() {
        this.init()
    }
    init() {
        this.tirm("  strf  ddf  ", 4);
        this.changeCase("i LOVE you", 4);
        this.repeatStr("chen", 3);
        this.replaceAll("2018年9月26日，来到了上海八维,转眼半年有余,今年四月从上海辗转来到了北京", "上海", "北京");
        this.replaceStr("abcdefg", 5, 1);
        this.checkType("sss", 7);
        this.checkPwd("5866aaa2364");
        this.randomWord(10, 66, 36);
        this.strSplit("abcdedaxa", "a");
        this.formatText("asdsahhasjbsah", 2,"-")
    }
    tirm(str, num) {
        //tirm函数的作用去空格 接受两个参数
        //第一个参数是处理的字符串 第二个参数是数字
        //1 是去掉所有空格 2是去掉前后空格 3是去掉前空格 4是去掉后空格
        if (typeof str == "string" && typeof num == "number") {
            if (num == 1) {
                let res = /(^\s+)|(\s+$)|\s+/g;
                str = str.replace(res, "");
                return str;
            } else if (num == 2) {
                let res = /(^\s+)|(\s+$)/g;
                str = str.replace(res, "");
                return str;
            } else if (num == 3) {
                let res = /^\s+/;
                str = str.replace(res, "");
                return str;
            } else if (num == 4) {
                let res = /(\s+$)/;
                str = str.replace(res, "");
                return str;
            }
        }
    }
    changeCase(str, num) {
        //此函数进行大小写转换 
        //第一个参数是需处理的字符串英文语句 第二个参数是数字
        //1: 首字母大写2：首字母小写3：大小写转换4：全部大写5：全部小写
        if (typeof str == "string" && typeof num == "number") {
            if (num == 1) {
                let newStr = str.split(" ");
                for (let i = 0; i < newStr.length; i++) {
                    newStr[i] = newStr[i].replace(newStr[i][0], newStr[i][0].toLocaleUpperCase());
                }
                return newStr.join(" ");
            } else if (num == 2) {
                let newStr = str.split(" ");
                for (let i = 0; i < newStr.length; i++) {
                    newStr[i] = newStr[i].replace(newStr[i][0], newStr[i][0].toLocaleLowerCase());
                }
                return newStr.join(" ");
            } else if (num == 3) {
                let res = /[A-Z]/;
                let res1 = /[a-z]/;
                let newStr = str.split("");
                for (let i = 0; i < newStr.length; i++) {
                    if (res.test(newStr[i])) {
                        newStr[i] = newStr[i].replace(newStr[i], newStr[i].toLocaleLowerCase())
                    } else if (res1.test(newStr[i])) {
                        newStr[i] = newStr[i].replace(newStr[i], newStr[i].toLocaleUpperCase())
                    }
                }
                return newStr.join("");
            } else if (num == 4) {
                let newStr = str.split("");
                let res1 = /[a-z]/;
                let a = "";
                for (let el of newStr) {
                    if (res1.test(el)) {
                        a += el.replace(el, el.toLocaleUpperCase());
                    } else {
                        a += el;
                    }
                }
                // for(let i=0;i<newStr.length;i++){
                //     if(res1.test(newStr[i])){
                //         newStr[i]=newStr[i].replace(newStr[i],newStr[i].toLocaleUpperCase())
                //     }
                // }
                return a;
            } else if (num == 5) {
                let newStr = str.split("");
                let res1 = /[A-Z]/;
                for (let i = 0; i < newStr.length; i++) {
                    if (res1.test(newStr[i])) {
                        newStr[i] = newStr[i].replace(newStr[i], newStr[i].toLocaleLowerCase())
                    }
                }
                return newStr.join("");
            }
        }
    }
    repeatStr(str, num) {
        //传两个参数 字符串的循坏复制  第一个参数是需要操作的字符串
        //第二个参数是把这个字符串循坏复制几次
        if (typeof str == "string" && typeof num == "number") {
            return str.repeat(num);
        }
    }
    replaceAll(str, r1, r2) {
        //输入一大段字符 将其中的某些东西全部替换成另一个东西 假如说一段话中有好多上海 把所有的上海替换成北京
        //str操作的字符串 r1被替换的东西 r2替换的东西
        let res = new RegExp(r1, "g");
        let a = str.replace(res, ($0, $1, $2) => {
            return $0 = r2;
        })
        return a;
    }
    replaceStr(str, count, type = 0, content = "*") {
        //字符串的替换 
        //第一个参数是需要被处理的字符串 第二个参数是替换的个数 第三个参数是0或者1
        //0从前往后替换 1是从后往前替换 默认0  第四个参数是要替换的东西 默认是*
        let newStr = str.split("");
        for (let i = 0; i < newStr.length; i++) {
            if (type == 0) {
                if (i <= count - 1) {
                    newStr[i] = content;
                }
            } else if (type == 1) {
                if (i >= newStr.length - count) {
                    newStr[i] = content;
                }
            }

        }
        return newStr.join("");
    }
    checkType(str, num) {
        //此函数正则检验集合 第一个参数是需要被检验的东西
        //第二个参数是检验这个是不是手机或者邮箱一类的 此处用数字代替
        //0 是手机号检验 1是邮箱检验 2是电话检验 3是数字检验 4是英文检验 5是中文检验 6 是不是全部都是大写字母检验 7是不是小写字母检验
        let flag = null;
        if (typeof str == "string" && typeof num == "number") {
            switch (num) {
                case 0:
                    let res = /^1[3,4,6,7,8,9]\d{9}$/;
                    flag = res.test(str);
                    break;
                case 1:
                    let res1 = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
                    flag = res1.test(str);
                    break;
                case 2:
                    let res2 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
                    flag = res2.test(str);
                    break;
                case 3:
                    let res3 = /^\d+$/;
                    flag = res3.test(str);
                    break;
                case 4:
                    let res4 = /^[A-Za-z]+$/;
                    flag = res4.test(str);
                    break;
                case 5:
                    let res5 = /^[\u4e00-\u9fa5]+$/;
                    flag = res5.test(str);
                    break;
                case 6:
                    let res6 = /^[A-Z]+$/;
                    flag = res6.test(str);
                    break;
                case 7:
                    let res7 = /^[a-z]+$/;
                    flag = res7.test(str);
                    break;
            }
        }
        return flag;
    }
    checkPwd(str) {
        //检验密码强度
        //小于6位数返回0
        //全部为数字或者字母返回1
        //2、数字加小写字母或者+大写字母
        //3、数字+小写字母+大写字母
        let res1 = /[A-Z]/;
        let res2 = /[a-z]/;
        let res3 = /\d/;
        if (str.length < 6) {
            return 0;
        }
        if (res3.test(str) && (res1.test(str) && res2.test(str))) {
            return 3;
        } else if (res3.test(str) && (res1.test(str) || res2.test(str))) {
            return 2;
        } else {
            return 1;
        }
    }
    randomWord(min, max, count) {
        //此函数作用是生成随机数在某一个范围内并且转化成count进制的数返回
        let str = Math.floor(Math.random() * (max - min + 1) + min) + "";
        let binstr = (+str).toString(count);
        return binstr;
    }
    strSplit(str, n) {
        //此函数的作用是统计字符n在str字符串中出现了多少次
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == n) {
                count++;
            }
        }
        return count;
    }
    formatText(str, num, type = ",") {
        //处理字符串 有三个参数 
        //第一个参数是需要被处理的字符串 第二个参数是数字 第三个参数是分隔符 默认以逗号分隔
        //假如我们想要以三个数为一组的分隔得到这种 a,sds,fvf,fdd
        let newStr = str.split("").reverse();
        let newStr1=[];
        for (let i = 0; i < newStr.length; i++) {
            if (i != 0) {
                if (i % (num+1) == 0) {
                    newStr1.push(type)
                }else{
                    newStr1.push(newStr[i])
                }
            }
        }
        return newStr1.reverse().join("");
    }
    longestWord(){
        
    }
}

new Encapsulation();