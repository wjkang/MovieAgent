/**
 * Created by Administrator on 2017/6/29 0029.
 */

module.exports={
    async search(ctx,text){
        console.log(ctx.params.keyword);

       var result= await new Promise(function(reslove,reject){
          setTimeout(function(){
              reslove(ctx.params.keyword);
          },3000)
        })
        ctx.body=result;
    }
}