
const express=require("express");

const fs=require("fs");

module.exports={
    fileRead(rootpath){
        return new Promise((resolve,reject)=>{
            fs.readFile(rootpath,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(JSON.parse(data))
                }
            })
        })
    },
    fileWrite(rootpath,content){
        return new Promise((resolve,reject)=>{
            fs.writeFile(rootpath,content,(err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
}