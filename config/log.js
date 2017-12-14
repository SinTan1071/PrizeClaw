var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
var errorPath = "/error";
//错误日志文件名
var errorFileName = "error";
//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");


//响应日志目录
var responsePath = "/response";
//响应日志文件名
var responseFileName = "response";
//响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;
// var responseLogPath = path.resolve(__dirname, "../logs/response/response");

var log_config = {
    appenders : [
        {
            type : "logLevelFilter",
            level : "ERROR",
            appender : {
                category : "errorLogger",
                type: "dateFile",
                filename : errorLogPath,
                path: errorPath,
                //目录
                pattern : "-yyyy-MM-dd-hh.log",
                //命名规则，我们是按天，也可以设置为yyyyMMddhh.log，为按时
                absolute: true,
                alwaysIncludePattern: true
            }
        },
        {
            type: "logLevelFilter",
            level: "ALL",
            appender: {
                category : "resLogger",
                type: "dateFile",
                filename : responseLogPath,
                path : responsePath,
                //目录
                pattern : "-yyyy-MM-dd-hh.log",
                //命名规则，我们是按天，也可以设置为yyyyMMddhh.log，为按时
                absolute: true,
                alwaysIncludePattern: true
            }
        },
    ],
    baseLogPath: baseLogPath                  //logs根目录
}

module.exports = log_config