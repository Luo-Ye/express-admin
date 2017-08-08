const stringUtils = require("./util/StringUtils");
const mysql = require('./mysql');
module.exports.saveLoginLog = async(req) => {
    var user = req.session.user;
    var ip = stringUtils.getReqRemoteIp(req);
    await mysql.querySync("insert into bs_login_log(user_id,user_name,name,ip,login_time) values(?,?,?,?,?)", [user.id, user.user_name, user.name, ip, new Date()]);
};
module.exports.saveOperateLog = async(req, operations) => {
    var user = req.session.user;
    await mysql.querySync("insert into bs_operation_logs(user_id,user_name,name,operations,operate_time) values(?,?,?,?,?)", [user.id, user.user_name, user.name, operations, new Date()]);
};