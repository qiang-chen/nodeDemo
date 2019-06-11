//1、 
/*字符串*/
//去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
//trim('  1235asd',1)
//result：1235asd


//2、
/*type
  1: 首字母大写
  2：首字母小写
  3：大小写转换
  4：全部大写
  5：全部小写
  * */
//changeCase('asd ad sd',1)
//result：Asdasd



//3、
//字符串循环复制
//repeatStr(str->字符串, count->次数)
//repeatStr('123',3)
//"result：123123123"


//4、
//字符串替换(字符串,要替换的字符或者正则表达式（不要写g）,替换成什么)
//ecDo.replaceAll('这里是上海，中国第三大城市，广东省省会，简称穗，','上海','广州')
//result："这里是广州，中国第三大城市，广东省省会，简称穗，"


//5、
//字符替换*
//replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
//type: 0.依次从前面开始替换的个数  1.从最后一个开始替换的个数
//replaceStr('1asd88465asdwqe3',[5],1,'+')        
//replaceStr('1asd88465asdwqe3',[5],0,'+')  
//result："1asd88465as+++++"                      
//result："+++++8465asdwqe3"


//6、
//检测字符串
//checkType('165226226326','phone')
//result：false
//类型：手机号，邮箱，电话，数字，英文，中文，大写，小写

//7、
//检测密码强度
//checkPwd('12asdASAD')
//result：3(强度等级为3)
//0：小于6位数（统一返回0）
//1、全部为数字
//2、数字加小写字母
//3、数字+小写字母+大写字母

//8、
//随机码
//count取值范围2-36

//randomWord(10)
//result："2584316588472575"

//randomWord(14)
//result："9b405070dd00122640c192caab84537"

//randomWord(36)
//result："83vhdx10rmjkyb9"

//9、
//查找字符串
//strSplit: 出现在字符串里的次数
//var strTest='sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
//countStr(strTest,'blog')
//result：6

//10、
//格式化处理字符串
//ecDo.formatText('1234asda567asd890')
//result："12,34a,sda,567,asd,890"
//ecDo.formatText('1234asda567asd890',4,' ')
//result："1 234a sda5 67as d890"
//ecDo.formatText('1234asda567asd890',4,'-')
//result："1-234a-sda5-67as-d890"

//11、
//找出最长单词 (Find the Longest word in a String)
//longestWord('Find the Longest word in a String')
//result：Longest
//longestWord('Find|the|Longest|word|in|a|String','|')
//result：Longest

//12、
//句中单词首字母大写 (Title Case a Sentence)

//ecDo.titleCaseUp('this is a title')
//"This Is A Title"