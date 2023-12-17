import { ref } from "vue";
import { mockLogService } from "../common/log";

// pinia, current active pinia
// app, current active app
// store, current defined store
// options, current defined store options
export const customPlugin = ({ pinia, app, store, options }) => {
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
      console.log(mutation);
    });
  }
  // register onAction
  if (options.useOnAction) {
    store.$onAction(
      ({
        name, // name of the action
        store, // store instance, same as `someStore`
        args, // array of parameters passed to the action
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
      }) => {
        console.log(name);
        console.log(store);
        console.log(args);
      },
    );
  }
  return {
    ...actions,
  };
};
