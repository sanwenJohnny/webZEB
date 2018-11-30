'use strict';
var gulp = require('gulp');
var exec = require('child_process').exec;
var fs = require('fs');
var host = "http://47.97.104.37:9500";
//var host = "http://127.0.0.1:9500";

var choosedomain = "";
const {
  prompt
} = require('inquirer')
gulp.task('setdomain', [], function () {
  var url = host + "/api/getDomainMenu";
  var curlStr = "curl " + url + " -X POST -H 'Content-Type:application/json'"
  exec(curlStr, function (error, stdout, stderr) {
    if (error) {
      console.log('域名请求接口错误: ');
      console.log(error)
      return
    }

    var data = JSON.parse(stdout);
    var choicesList = data.data.list || [];
    const question = [{
        type: 'list',
        choices: choicesList,
        name: 'domain',
        message: '请选择域名:',
        filter: function (val) { // 使用filter将回答变为小写 
          choosedomain = val;

          //return val.toLowerCase();
        },
        validate(val) {
          return true
        }
      },
      {
        type: 'input',
        name: 'project',
        message: '设置项目要发布的路径目录,如果不设置默认为仓库的路径:',
        validate(val) {
          if (val !== '') {

            var done = this.async();
            var url = host + "/api/getProjectMenu";
            //console.log("\br");
            var curlStr = `curl ${url} -X POST -H 'Content-Type:application/json' -d '{"rootDomainMenu":"${choosedomain}","projectMenu":"${val}"}'`;
            //console.log(curlStr);
            exec(curlStr, function (error, stdout, stderr) {
              if (error) {
                console.log('目录检测接口错误: ');
                console.log(error)
                return "目录检测接口错误"
              }
              var data = JSON.parse(stdout);
              var res = data.data.res || [];
              done(null, res);
            })
          } else {
            return true
          }

        }
      }
    ]
    prompt(question).then(({
      domain,
      project
    }) => {
      var obj = {
        rootDomainMenu: choosedomain,
        projectMenu: project,
      }
      //console.log(obj);

      fs.writeFileSync("./domainConfig.json", JSON.stringify(obj))
    })


  });

})

gulp.task('default', [], function () {

})