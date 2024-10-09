let body = $response.body;
let obj = JSON.parse(body);

obj.data.expectedMultiple.multiple = 1000000; // 将得分倍率修改为1000000倍

body = JSON.stringify(obj);
$done({body});
