/**
 * Created by 若邪.
 */
const cheerio=require("cheerio");
const aiqiyi=require("../utils/aiqiyi-util");

module.exports={
    async search(keyword){
        let result=await aiqiyi.search(keyword);
        let $=cheerio.load(result);
        let resultList=$(".mod_result_list .list_item");
        let jsonData=[];
        resultList.each(function(i,elem){
            jsonData[i]=$(this).attr("data-widget-searchlist-tvname");
        });
        return jsonData;
    }
}

