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
