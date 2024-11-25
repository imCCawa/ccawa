[rewrite_local]
^http:\/\/psxc\.zaidaxue\.com\/index\.php url script-request-header https://raw.githubusercontent.com/imCCawa/ccawa/refs/heads/main/XXSCD.js

[mitm]
hostname = psxc.zaidaxue.com

// 这是修改请求头和请求体的脚本内容
// 修改请求头，伪造 IP 地址，并自动提交卡密

var request = $request;

// 修改请求头，伪造 IP 地址
if (request.url.indexOf('http://psxc.zaidaxue.com/index.php') !== -1) {
    request.headers['X-Forwarded-For'] = '223.153.60.217';  // 伪造 IP 地址
    request.headers['True-Client-IP'] = '223.153.60.217';    // 伪造 IP 地址
    
    // 修改请求体，自动填写卡密
    if (request.method === 'POST') {
        var body = request.body;
        if (body.indexOf('card_key') === -1) {
            body += '&card_key=BM1732455033V25D68FN';  // 在请求体中加入卡密
        }
        request.body = body;
    }
}

// 返回修改后的请求
$done({ request: request });
