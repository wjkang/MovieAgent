/**
 * Created by Administrator on 2017/6/29 0029.
 */
const movie=require('../utils/movie-util')
module.exports={
    async serach(keyword){
        let result=await movie.search(keyword)
        return result
    }
}