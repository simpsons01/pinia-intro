import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useStore } from "./store"

const pinia = createPinia();

const app = createApp(App)

app.use(pinia)

app.mount('#app')

let patchTimer = null
let actionTimer = null

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

createUpdateStateButton(
  "updateStateByPatch", 
  () => {
   if(actionTimer) {
     clearInterval(actionTimer)
     actionTimer = null
   }
   if(patchTimer){
      clearInterval(patchTimer)
      patchTimer = null
    } 
    patchTimer = setInterval(() => {
    const store = useStore()  
    store.$patch({ count: store.count + 1 })
   }, 100)
  },
  () => {
    if(patchTimer){
      clearInterval(patchTimer)
      patchTimer = null
    } 
  }
)


createUpdateStateButton(
  "updateStateByAction", 
  () => {
    if(patchTimer){
      clearInterval(patchTimer)
      patchTimer = null
    } 
    if(actionTimer) {
      clearInterval(actionTimer)
      actionTimer = null
    }
    actionTimer = setInterval(() => {
      const store = useStore()  
      store.addCountByOne()
    }, 100)
  },
  () => {
    if(actionTimer) {
      clearInterval(actionTimer)
      actionTimer = null
    }
  }
)
