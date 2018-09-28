const DOMNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  if (arg.constructor.name === 'String') {
    let args =  document.querySelectorAll(arg);
    let htmlArray = $(args).toArray();
    return new DOMNodeCollection(htmlArray);
  }
  else if (arg.constructor.name === "Array") {
    return new DOMNodeCollection(arg);
  }
};
