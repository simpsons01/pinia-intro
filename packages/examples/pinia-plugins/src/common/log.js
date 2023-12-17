export const mockLogService = {
  log(err) {
    console.warn(`time:${new Date().toString()}, message:${err.message}`);
  },
};
