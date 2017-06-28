/**
 * Created by Administrator on 2017/6/29 0029.
 */
const request=require('request')

let fetch=function(keyword){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(keyword);
        },3000)
    })
}
let search=function(keyword){
    return fetch(keyword)
}

module.exports={
    search
}
