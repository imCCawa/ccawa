// 解析响应体
let body = JSON.parse($response.body);

// 修改 questions 数组为一个固定问题
body.examVO.questions = [{
  "id": 0,
  "examId": body.examVO.pkIdStr,
  "content": "1\\circle2",
  "answer": "<",
  "userAnswer": null,
  "answers": ["<"],
  "status": 0,
  "script": null,
  "wrongScript": null,
  "ruleType": "COMPARE"
}];

// 将修改后的响应体返回
$done({ body: JSON.stringify(body) });
