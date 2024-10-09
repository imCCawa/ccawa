// response.js
let body = $response.body;

// 解析当前响应体为 JSON
let responseJson = JSON.parse(body);

// 清除现有的题目，保留统一的答案
responseJson.questionCnt = 1; // 设置题目数量为 1
responseJson.correctCnt = 1; // 设置正确数量为 1
responseJson.questions = [{ // 设置统一的问题
    "id": 1,
    "content": "1\\circle2", // 题目内容
    "answer": "<", // 正确答案
    "userAnswer": "1 < 2", // 用户答案
    "answers": ["<"] // 可选答案
}];

// 转换回字符串格式
body = JSON.stringify(responseJson);

// 返回修改后的响应体
$done(body);
