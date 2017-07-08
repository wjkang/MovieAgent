/**
 * Created by 若邪.
 */
const request=require("request");

module.exports=function(url,options) {
    options.url=encodeURI(url);
    return new Promise((resolve, reject)=> {
        request(options, function (err, httpResponse, body) {
            if(err){
                reject(err)
            }else{
                resolve(body);
            }
        });
    });
};
