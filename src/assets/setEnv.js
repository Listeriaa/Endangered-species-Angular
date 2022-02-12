/* tslint:disable */
// @ts-nocheck
var _a = require('fs'), writeFile = _a.writeFile, existsSync = _a.existsSync, mkdirSync = _a.mkdirSync;
var argv = require('yargs').argv;
require('dotenv').config();
console.log(process.env)
var environment = 'production';
function writeFileUsingFS(targetPath, environmentFileContent) {
    writeFile(targetPath, environmentFileContent, function (err) {
        if (err) {
            console.log(err);
        }
        if (environmentFileContent !== '') {
            console.log("wrote variables to ".concat(targetPath));
        }
    });
}
// Providing path to the `environments` directory
var envDirectory = './src/environments';
// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
    mkdirSync(envDirectory);
}
//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');
// Checks whether command line argument of `prod` was provided signifying production mode
var isProduction = environment === 'production';
// choose the correct targetPath based on the environment chosen
var targetPath = isProduction
    ? './src/environments/environment.prod.ts'
    : './src/environments/environment.ts';
//actual content to be compiled dynamically and pasted into respective environment files
var environmentFileContent = "\n  // This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy\n  export const environment = {\n    production: ".concat(isProduction, ",\n    apiKey: '").concat(process.env.ApiKey, "'\n  };\n");
console.log(environmentFileContent)
writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file
/* tslint:enable */