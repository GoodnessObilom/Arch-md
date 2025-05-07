const {fork} = require('child_process');
const chalk = require('chalk')

async function start(){
const child = fork('./main.js')
//send msg to child
//child.send("Hello Child")

//check child response to child
child.on("message",msg=>{
console.log('child to parent =>',msg)
})

child.on("close",(anu)=>{
//console.log('terclose',anu)
console.log(chalk.black(chalk.bgRed(`Arch Wa Ai is restarting..`)))
start()
})

child.on("exit",(anu2)=>{
//console.log('terexit',anu2)
})

}
start()