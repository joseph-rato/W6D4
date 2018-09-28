
function DOMNodeCollection (arrayHTMLELs) {
  this.htmlstuff = arrayHTMLELs;
}

DOMNodeCollection.prototype.html = function (str) {
  if(str === undefined) {
    return this.innerHTML;
  } else {
    this.innerHTML = str;
  }
};

DOMNodeCollection.prototype.empty = function () {
  this.innerHTML = "";
};

DOMNodeCollection.prototype.append = function (el) {
  if ((typeof el === 'object') && !(el instanceof DOMNodeCollection)) {
    el = $l(el);
  }

  if (typeof el === 'string') {
    this.each((htmlstuff) => {
      htmlstuff.innerHTML += el;
    });
  } else if (el instanceof DOMNodeCollection) {
    this.each((htmlstuff) => {
      el.each((childNode) => {
        htmlstuff.appendChild(childNode.cloneNode(true));
      });
    });
  }
};

DOMNodeCollection.prototype.attr = function(key , val) {
  let arrKeys = [];
  if(typeof val === 'string') {
    htmlstuff.each( (el) => {
      el.setAttribute(key, val);
    });
  } else {
    return this.htmlstuff[0].getAttribute(key);
  }
};

DOMNodeCollection.prototype.addClass = function (className) {
  this.each(node => {
    node.classList.add(className);
  });
};

DOMNodeCollection.prototype.removeClass = function (className) {
  this.each(node => {
    node.classList.remove(className);
  });
};

DOMNodeCollection.prototype.children = function () {
  let result = [];
  if (this.children.length === 0) {
    return [];
  }
  this.htmlstuff.each( (node) => {
    result.push(node);
    result.concat(Array.fron(node.children));
  });
  return new DOMNodeCollection(result);
};

DOMNodeCollection.prototype.parents = function () {
  let result = [];

  this.htmlstuff.each((node) => {
    result.push(node.parentNode);
  });

  return new DOMNodeCollection(result);
};

DOMNodeCollection.prototype.find = function() {

};

module.exports = DOMNodeCollection;
