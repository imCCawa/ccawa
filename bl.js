// 确保脚本能够正确执行
let responseBody = $response.body;

// 尝试解析 JSON
try {
    let responseJson = JSON.parse(responseBody);

    // 修改得分倍率
    responseJson.data.expectedMultiple.multiple = 1000;

    // 将修改后的对象转换为字符串
    responseBody = JSON.stringify(responseJson);
} catch (e) {
    console.error("JSON解析错误: ", e);
}

// 返回修改后的响应
$done({ body: responseBody });
