[rewrite_local]
^http:\/\/psxc\.zaidaxue\.com\/index\.php url script-request-header https://raw.githubusercontent.com/imCCawa/ccawa/refs/heads/main/XXSCD.js

[mitm]
hostname = psxc.zaidaxue.com

// 这是修改请求头的脚本内容
// 修改请求头，伪造 IP 地址
var request = $request;
if (request.url.indexOf('http://psxc.zaidaxue.com/index.php') !== -1) {
    request.headers['X-Forwarded-For'] = '223.153.60.217';  // 伪造 IP 地址
    request.headers['True-Client-IP'] = '223.153.60.217';    // 伪造 IP 地址
}

// 返回修改后的请求
$done({ request: request });
