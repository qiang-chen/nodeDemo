
//封装三个方法 通过module.exports抛出 看清楚写法

module.exports={
    insert:function(arr,c,index){
        //这个函数要干嘛了  我忘了...insertBefore把 应该想起来了 在数组的冒一个位置插入一个数对吧
        //那首先我们需要三个参数 一个是插入位置 一个是插入的内容 另一个是所操作的数组你要干嘛？
       arr.splice(index,0,c);
       return arr
    },
    delete:function(arr,index){
        //此函数接受一个需要操作的数组 另外接受一个需要删除位置的下标 还不能改变原数组给用户返回一个新组数
        let newArr=[];
        for(let i=0;i<arr.length;i++){
            newArr[i]=arr[i]
        }
        newArr.splice(index,1);
        return newArr;
    },
    toArray(arr,num){
        //一位数组转成二维数组
        //此函数接受两个参数 第一个参数是需要操作的数组 第二个参数是需要的分类
        //例如 [1,2,3,4,5,6,7],2   =>   [[1,2],[2,3],[3,4],[5,6],[7]]
       let len=Math.ceil(arr.length/num);//终端在哪打开的 右键单击 看到了吗恩恩 额上课再写吧  你能不能去死 抽空就玩
       let newArr=[];
       ;//大小姐睡醒了吗  可以不可以谢了恩遵命  怎么了您 没事 快帮我想这个数组转换 还没想出来呢
       for(let i=0;i<len;i++){
            newArr[i]=arr.slice(i*num,(i+1)*num)
       }
       return newArr;
       //搞定了 您看懂了吗 恩  恩 你今天能不能封装下我发给你的函数 那些比这些难多了 还全  我先封一下这个
       //这几个一会儿就玩 你今天能不能封两个我给你的那些 风前两个就行 可以吗有时间久丰  你不会挤点时间吗 不然你每天都没有事件好好好
    }
}