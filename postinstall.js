const { exec } = require("child_process");
const repo1 = require('@mitraksh/repo1');
const repo4json = require('./package.json');
const nexsales_dev = Object.entries(repo4json.nexsales.dev)
const nexsales_prod = Object.entries(repo4json.nexsales.prod)
let nexsales = nexsales_prod;

//to switch the env variables
if(false){ //default = prod
  nexsales = nexsales_dev;
}


try {
  let cmd = `cd ${__dirname} && npm i --no-save`;

  for (let [packageName, packageVersion] of nexsales) {
      cmd = `${cmd} ${packageName}@${packageVersion}`
  }

  console.log(cmd);

  exec(
    cmd,
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