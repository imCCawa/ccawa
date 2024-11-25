
[rewrite_local]
^http:\/\/psxc\.zaidaxue\.com\/index\.php url script-response-body https://raw.githubusercontent.com/imCCawa/ccawa/main/XXSCD.js

[mitm]
hostname = psxc.zaidaxue.com

*************************************/

// 这是处理 IP 修改的逻辑，用户可以根据实际需要调整逻辑
var response = JSON.parse($response.body);

// 进行 IP 地址的修改
const targetUrl = '/index.php';
if ($request.url.indexOf(targetUrl) != -1) {
    response.ip = '223.153.60.217';  // 修改 IP 地址
    response.message = 'IP 地址修改成功';  // 你可以自定义其他字段修改
}

$done({body: JSON.stringify(response)});
