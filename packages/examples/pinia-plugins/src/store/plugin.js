import { ref } from "vue";
import { mockLogService } from "../common/log";

export const customPlugin = ({ pinia, app, store, options }) => {
  console.log("pinia instance that has been created:")
  console.log(pinia)
  console.log("vue instance that use pinia:")
  console.log(app)
  console.log("store instance that has been created:")
  console.log(store)
  console.log("store options passed to 'defineStore':")
  console.log(options)


  // add new property
  store.pluginCount = 0;

  // add new method
  store.addPluginCountByOne = function () {
    store.pluginCount += 1;
  };

  // wrap existing methods
  const actions = options.useErrorLog
    ? Object.entries(options.actions).reduce((acc, [actionName, actionFn]) => {
        acc[actionName] = function (...args) {
          try {
            return actionFn.apply(store, args);
          } catch (error) {
            mockLogService.log(error);
            throw error;
          }
        };
        return acc;
      }, {})
    : {};

  // register subscribe
  if (options.useSubScribe) {
    store.$subscribe((mutation) => {
      console.log("-------------$subscribe log Start-------------------")
      console.log(mutation);
      console.log("-------------$subscribe log End-------------------")
    });
  }
  
  // register onAction
  if (options.useOnAction) {
    store.$onAction(({ name, store, args, after, onError }) => {
        console.log("-------------$onAction log Start-------------------")
        console.log(`actionName is: "${name}"`)
        console.log(`action arg is: "${args.join(" ")}"`)
        console.log("action store is:")
        console.log(store);
        console.log("-------------$onAction log End -------------------")
        after(resolveValue => {
          console.log("$onAction after callback trigger")
          console.log(resolveValue)
        })
        onError(err => {
          console.log("$onAction onError callback trigger")
          console.log(err)
        })
      },
    );
  }
  return {
    ...actions,
  };
};
