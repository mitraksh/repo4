const repo1 = require('@mitraksh/repo1');
const dotenv = require('dotenv');
const path = require('path')
const fs = require('fs');
const { exec } = require("child_process");

console.log(JSON.stringify(repo1))
const dir = __dirname;
const file = __filename;
let newpath = path.join(__dirname,'../')
console.log(newpath+' cd')

var file_found = false;

// var environment = process.env.NODE_ENV;
  
// if(environment === 'dev') {
//   console.log('connected to local database')
// }
// else if(environment === 'prod') {
//   console.log('connected to hosted database')
// }

dotenv.config({ path: './config.env' });
console.log('Environment'+process.env.NODE_ENV);

fs.readdir(newpath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }else if(!err){
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do  with the file
        if(file == "repo1"){
            file_found = true;
            console.log("File found.");
        }else if(file != "repo1"){
          //file_found = false;
            console.log("File Not Found.", file);
        }
    });

    console.log(file_found+' = file found')

    if(file_found == false){
    console.log('Installing files...\nPlease wait.');
             try {
                exec(
                  `cd ${newpath}  && mkdir repo1 && cd ${newpath+'repo1/'} && git clone https://github.com/mitraksh/scopedRepo1.git repo1`,
                  (err, stdout, stderr) => {
                    if (err) {
                      console.error(err);
                    }
                    
                    
                    else if(!err) {
                      console.log(`output: ${stdout}`);
                      console.log(`message: ${stderr}`);
                    }
                  }
                );
              } catch (error) {
                throw new Error(error);
              }
    }else if(file_found == true){
      const repo1 = require('../repo1/myobject.json');
      const repo2_version = repo1.repo2;
      const repo3_version = repo1.repo3;
      console.log(repo3_version+' repo2 v');
      try {
        exec(
          `cd ${dir} && npm i @mitraksh/repo2@${repo2_version}--no-save && npm i @mitraksh/repo3@${repo3_version} --no-save`,
          (err, stdout, stderr) => {
            if (err) {
              console.error(err);
            }
            else if(!err) {
              console.log(`output: ${stdout}`);
              console.log(`message: ${stderr}`);
            }
          }
        );
      } catch (error) {
        throw new Error(error);
      }
    }
}
});