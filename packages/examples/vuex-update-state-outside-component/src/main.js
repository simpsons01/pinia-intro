import { createApp } from "vue";
import App from "./App.vue";
import store from "./store"

const app = createApp(App)

app.use(store)

app.mount("#app")


function createUpdateStateButton(content, updateFn, stopFn) {
  const block = document.createElement("div")
  const updateButton = document.createElement("button") 
  updateButton.textContent = content
  updateButton.addEventListener("click", updateFn)
  const stopButton = document.createElement("button") 
  stopButton.textContent = `stop${content[0].toUpperCase() + content.slice(1, -1)}`
  stopButton.addEventListener("click", stopFn)
  block.appendChild(updateButton)
  block.appendChild(stopButton)
  document.querySelector("#app").appendChild(block)
 }

 let timer
 
 createUpdateStateButton(
   "updateState", 
   () => {
    if(timer){
      clearInterval(timer)
      timer = null
    } 
    timer = setInterval(() => {
     store.dispatch("addCount", 1)
    }, 100)
   },
   () => {
     if(timer){
       clearInterval(timer)
       timer = null
     } 
   }
 )

 