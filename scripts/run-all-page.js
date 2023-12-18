const { spawn } = require("child_process");
const { join } = require("path")


class PageRunner {
  _spawnProcess = null;

  run(cmd, arg) {
    this._spawnProcess = spawn(cmd, arg, { cwd: join(__dirname, "..") }) 

    this._spawnProcess.stdout.once('data', (data) => {
       console.log(cmd +  " " + arg.join(" ") + " " + "successfully")
    });
    
    this._spawnProcess.stderr.once('data', (data) => {
      this._spawnProcess = null
      console.error(`stderr: ${data}`);
    });
    
    this._spawnProcess.once('close', (code) => {
      this._spawnProcess = null
      console.log(`child process exited with code ${code}`);
    }); 
  }
}

Object.keys(require(join(__dirname, "../package.json")).scripts).forEach(cmd => {
  if(cmd !== "run-all-page") {
    new PageRunner().run("pnpm", [cmd]) 
  }
})