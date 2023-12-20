const { spawn } = require("child_process");
const { join } = require("path")


class PageRunner {
  _spawnProcess = null;

  run(cmd, arg) {
    this._spawnProcess = spawn(cmd, arg, { cwd: join(__dirname, "..") }) 

    this._spawnProcess.stdout.on('data', (data) => {
       console.log(`from cmd: "${cmd}  ${arg.join(" ")} stdout"`)
       console.log(data.toString())
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
const excludeCmd = [
  "dev:slide",
  "run-all",
  "run-all-example"
]
Object.keys(require(join(__dirname, "../package.json")).scripts).forEach(cmd => {
  if(excludeCmd.indexOf(cmd) === -1) {
    new PageRunner().run("pnpm", [cmd]) 
  }
})