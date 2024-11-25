/******************************

脚本功能：修改特定网站的IP
下载地址：https://raw.githubusercontent.com/imCCawa/ccawa/main/XXSCD.js
脚本版本：1.0.0
脚本作者：Your Name
更新时间：2024-03-03
问题反馈：Your QQ/TG

*******************************/

[rewrite_local]
^http:\/\/psxc\.zaidaxue\.com\/index\.php url script-response-body https://raw.githubusercontent.com/imCCawa/ccawa/main/XXSCD.js

[mitm]
hostname = psxc.zaidaxue.com

*************************************/

