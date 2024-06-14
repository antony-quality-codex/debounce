/**
 * @param {number} delay
 * @param {function():void} callback
 * @returns {function():void}
 */
export const debounce = (delay, callback) => {
  let timeoutHandle

  return () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }

    timeoutHandle = setTimeout(() => {
      timeoutHandle = undefined
      callback()
    }, delay)
  }
}
