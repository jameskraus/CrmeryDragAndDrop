/*eslint-env node*/
/*global window*/

import 'whatwg-fetch'

global.window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};
