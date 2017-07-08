/**
 * Created by 若邪.
 */
const aiqiyi=require("../services/aiqiyi")

module.exports={
    async search(ctx,text){
        var result= await aiqiyi.search(ctx.params.keyword);
        ctx.body=result;
    }
}
