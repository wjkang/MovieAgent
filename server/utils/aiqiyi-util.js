/**
 * Created by 若邪.
 */
const fetch=require("./fetch")
const config=require("./config")
const host="http://so.iqiyi.com"

let options= {
    gzip: true,
    headers: config.requestHeaders
}
let search=async function(keyword){
    let result=await fetch(host+`/so/q_${keyword}`,options);
    return result
}
module.exports={
    search
}



