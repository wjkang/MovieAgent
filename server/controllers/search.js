/**
 * Created by Administrator on 2017/6/29 0029.
 */
const movie=require('../services/movie')
module.exports={
    async search(ctx,text){
        console.log(ctx.params.keyword);

       var result= await movie.serach(ctx.params.keyword)
        ctx.body=result;
    }
}