var request=require("request");
var request = request.defaults({jar: true});
request.get('http://www.q2002.com/play/29769/1/1.html', function (err,httpResponse,body) {
    var options = {
        gzip:true,
        url: 'http://bs.6no.cc/jx/dapi.php?id=pJx1naKhqaajmG9nl5VsaQO0O0OO0O0O',
        headers: {
            'Host': 'bs.6no.cc',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate',
            'Referer': 'http://www.q2002.com/play/29769/1/1.html',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': 1
        }
    };
    request(options, function(err,httpResponse,body){
        console.log(body);
    });
});