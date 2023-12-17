<h1>與Vuex的差異 - 元件內/外讀取/更新資料的方式</h1>
<hr>
<div class="flex h-full">
  <div class="p-1 flex-1">
    <h3>Pinia</h3>
    <ul class="flex-initial">
       <li>
        <a 
          target="_blank" 
          href="https://codesandbox.io/p/devbox/pinia-update-state-inside-component-q86y8l"
        >
          元件內，讀取/更新
        </a>
       </li>
       <li>
        <a 
          target="_blank" 
          href="https://codesandbox.io/p/devbox/pinia-update-state-outside-component-252pn3"
        >
          元件外，讀取/更新
        </a>
       </li>
    </ul>
        <div class="mt-2 overflow-auto">
      <img class="responsive-img" src="/assets/pinia-update.png">
    </div>
  </div>
  <div class="h-full w-[1px] bg-gray-2 gray-100 m-2 bg-black"></div>
  <div class="p-1 flex-1">
    <h3>Vuex</h3>
        <ul class="flex-initial">
          <li>
              <a 
                target="_blank" 
                href="https://codesandbox.io/p/sandbox/vuex-update-state-inside-component-p3vhf2"
              >
                元件內，讀取/更新
              </a>
          </li>
        <li>
          <a 
            target="_blank" 
            href="https://codesandbox.io/p/devbox/vuex-update-state-outside-component-252pn3"
          >
            元件外，讀取/更新
          </a>
       </li>
    </ul>
    <div class="mt-2 overflow-auto">
      <img class="responsive-img" src="/assets/vuex-update.png">
    </div>
  </div>
</div>