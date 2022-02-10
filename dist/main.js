/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quintessential&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\n:root {\n  --main: chocolate;\n  --white: #fff;\n  --black: #000;\n  --black2: rgb(41, 23, 0);\n}\n\nbody {\n  background-color: var(--black2);\n  color: var(--white);\n  font-family: 'Quintessential', cursive;\n  font-size: 10px;\n}\n\nnav {\n  padding-top: 20px;\n}\n\nnav ul {\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n  color: var(--main);\n}\n\nnav ul li {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\nnav li i {\n  margin-top: -8px;\n  font-size: 40px;\n  color: var(--main);\n}\n\nfooter {\n  border: 1px #fff solid;\n  padding: 20px;\n  text-align: center;\n}\n\n.works {\n  display: grid;\n  row-gap: 80px;\n  padding: 128px 6.5%;\n  width: auto;\n}\n\n.works-project {\n  border: 1px rgb(209, 188, 144) solid;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--black2);\n  padding: 16px;\n}\n\n.works-project div p {\n  height: 60px;\n  overflow: hidden;\n}\n\n.works-title {\n  color: var(--white);\n  font-size: 32px;\n  margin-top: 15px;\n}\n\n.works-img {\n  width: 100%;\n  filter: grayscale(100%);\n  opacity: 1;\n  transition: filter 500ms, opacity 1s;\n}\n\n.works-img:hover {\n  transform: scale(0.93);\n  filter: grayscale(0%);\n}\n\nbutton {\n  color: var(--white);\n  border: 1.5px solid var(--main);\n  border-radius: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  padding: 10px;\n  background-color: transparent;\n  margin: 20px 0;\n  transition: background-color 500ms;\n}\n\nbutton:hover {\n  background-color: var(--main);\n  color: #fff;\n}\n\nbutton:disabled {\n  color: #5e6c84;\n  border-color: #c1c7d0;\n}\n\n.modal {\n  font-size: 12px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  border-radius: 10px;\n  z-index: 10;\n  background-color: var(--black2);\n  width: 800px;\n  max-width: 80%;\n  overflow-y: scroll;\n  max-height: 80vh;\n  color: var(--white);\n  padding: 5% 0;\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header .close-button {\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 30px;\n  color: gray;\n  position: absolute;\n  top: -20px;\n  right: 5px;\n}\n\n.modal-body {\n  padding: 20px 40px;\n}\n\n.modal-list {\n  padding-left: 20px;\n  margin-top: -20px;\n}\n\n.form-comments {\n  display: flex;\n  flex-direction: column;\n  padding: 0 40px;\n}\n\nform input[type='text'] {\n  margin-bottom: 10px;\n}\n\n.comments {\n  width: 50%;\n  margin-left: 8%;\n}\n\n.blur {\n  filter: blur(10px);\n}\n\n.btn-img {\n  margin-left: 8px;\n  margin-bottom: -3px;\n}\n\n.modal-img {\n  width: 80%;\n  padding-left: 10%;\n}\n\ntextarea {\n  display: block;\n}\n\n.heart {\n  font-size: 25px;\n}\n\n.heart:hover {\n  color: var(--main);\n}\n\n.likes {\n  display: flex;\n  justify-content: space-between;\n}\n\n.likes-content {\n  margin-top: 30px;\n  user-select: none;\n}\n\n@media screen and (min-width: 900px) {\n  .works {\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 10%;\n  }\n\n  .works-title {\n    font-size: 40px;\n  }\n\n  .modal {\n    font-size: 15px;\n    overflow-y: scroll;\n  }\n\n  .modal-img {\n    width: 40%;\n    padding-left: 2.5%;\n  }\n\n  .modal-content {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .works-project {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-column-gap: 30px;\n  }\n\n  .modal-comment-container {\n    width: 50%;\n  }\n\n  .form-comments {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 7%;\n  }\n\n  .comments {\n    width: 53%;\n    margin-left: 0;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _apiComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _countItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);





const renderMeals = (list, likeList) => {
  const worksContainer = document.querySelector('#portfolio');
  (0,_countItems__WEBPACK_IMPORTED_MODULE_3__["default"])(list);
  list.forEach((work) => {
    const workProject = document.createElement('div');
    const workContent = ` <div class="works-project">
          <img class="works-img" src=${work.strCategoryThumb} alt="test1"  draggable="false"/>
          <div>
              <h2 class="works-title">${work.strCategory}</h2>
              <p>${work.strCategoryDescription}</p>
              <div class="likes">
                    <div class="likes-content" draggable="false"> <i id="heart-${work.idCategory}" class="heart far fa-heart"></i>
                      <span class="counter"><span class="likesCounter-${work.idCategory}">0</span> Likes</span>
                    </div>
                    <button data-modal-target="#modal${work.idCategory}" id=${work.idCategory} type="button">Comment</button>
              </div>   
          </div>
        </div>`;

    workProject.innerHTML = workContent;
    worksContainer.appendChild(workProject);

    const heartLikesBtn = document.getElementById(`heart-${work.idCategory}`);
    heartLikesBtn.addEventListener('click', () => {
      const lastValue = Number(
        document.querySelector(`.likesCounter-${work.idCategory}`).textContent,
      );
      document.querySelector(`.likesCounter-${work.idCategory}`).innerHTML = `${
        lastValue + 1
      }`;
      // add like to api
      (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(work.idCategory);
    });

    const modalOpenButton = document.getElementById(work.idCategory);
    modalOpenButton.addEventListener('click', () => {
      (0,_renderModal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(work);
      const modalChoose = document.querySelector(`#modal${work.idCategory}`);
      modalChoose.classList.add('active');
      worksContainer.classList.add('blur');
      document.body.classList.toggle('noScroll');
      (0,_apiComments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(work.idCategory);
    });
  });

  likeList = likeList.filter((item) => item.item_id !== '1234');
  likeList.forEach((item) => {
    document.querySelector(`.likesCounter-${item.item_id}`).innerHTML = item.likes;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMeals);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



const renderModal = (item) => {
  // creat modal
  const modalContainer = document.createElement('div');
  modalContainer.id = `modal${item.idCategory}`;
  modalContainer.classList.add('modal');
  const modalContent = `
    <div class="modal-header">
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal-content">
        <img class="modal-img" src=${item.strCategoryThumb} alt="sdadsa" draggable="false" />
        <div class="modal-body">
          <h2>${item.strCategory}</h2>
          <div class="modal-detail">
            ${item.strCategoryDescription}
          </div>
        </div>
    </div>
    <div class="form-comments" >
      <form id=form${item.idCategory}>
        <h3>Add Comment</h3>
        <input name="name" type="text" placeholder="Name" />
        <textarea name="comment" type="message" rows="5" cols="25" placeholder="Your delicious Comment" ></textarea>
        <button name='button' type="submit" id=${item.idCategory} class="comment-btn">Comment</button>
      </form>
      <div class="modal-comment-container">
        <h3 class="counter-${item.idCategory}">Comments</h3>
        <ul class="comments" id=comments-${item.idCategory}>
        
        </ul>
      </div>
    </div>
    `;
  modalContainer.innerHTML = modalContent;
  document.body.appendChild(modalContainer);

  const form = document.querySelector(`#form${item.idCategory}`);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const commnetLength = document.querySelectorAll(
      `#comments-${item.idCategory} li`,
    ).length;
    const commentList = document.getElementById(`comments-${item.idCategory}`);

    if (form.elements.name.value.trim() && form.elements.comment.value.trim()) {
      document.querySelector(
        `.counter-${item.idCategory}`,
      ).innerHTML = `Comments ( ${commnetLength + 1} )`;
      if (
        commnetLength === 1
        && document
          .querySelectorAll(`#comments-${item.idCategory} li`)[0]
          .classList.contains('special')
      ) {
        commentList.innerHTML = `<li><small>${(0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])()}</small> | <span>${form.elements.name.value.trim()}:</span> ${form.elements.comment.value.trim()}</li>`;
      } else {
        commentList.innerHTML += `<li><small>${(0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])()}</small> | <span>${form.elements.name.value.trim()}:</span> ${form.elements.comment.value.trim()}</li>`;
      }
      (0,_apiComments__WEBPACK_IMPORTED_MODULE_0__["default"])(
        item.idCategory,
        form.elements.name.value.trim(),
        form.elements.comment.value.trim(),
      );
    } else {
      alert('Please, enter your delicious data !!!');
    }

    form.reset();
    form.focus();
  });

  const worksContainer = document.querySelector('#portfolio');
  const modalCloseButtons = document.querySelectorAll('[data-close-button]');
  function modalClose(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    worksContainer.classList.remove('blur');
  }
  modalCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modalChoose = button.closest('.modal');
      document.body.classList.toggle('noScroll');
      modalClose(modalChoose);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderModal);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterComments": () => (/* binding */ counterComments),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const InvolveApiId = 'C3gRBaouCzCheKjXVJzf';

const AddComment = async (id, name, comment) => {
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolveApiId}/comments?item_id=${id}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    },
  );
};

const commentsRender = (data, id) => {
  const list = document.getElementById(`comments-${id}`);
  list.innerHTML = '';
  if (data.length) {
    data.forEach((comment) => {
      list.innerHTML += `<li><small>${comment.creation_date}</small> | <span>${comment.username}:</span> ${comment.comment}</li>`;
    });
  } else {
    list.innerHTML = '<li class="special">No comments </li>';
  }
};

const counterComments = (id, data) => {
  let { length } = data;
  if (!data.length) {
    length = 0;
  }
  document.querySelector(`.counter-${id}`).innerHTML = `Comments ( ${length} )`;
};

const getComments = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolveApiId}/comments?item_id=${id}`,
  );
  const data = await response.json();
  commentsRender(data, id);
  counterComments(id, data);
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddComment);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const newDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newDate);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/F3s8vkUg6h9SLp2FMoph/likes';
const getLikes = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const addLike = async (id) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countItems = (listMeals) => {
  const len = listMeals.length;
  document.querySelector('.item-number').innerHTML = `Meals (${len})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const getMeals = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data.categories;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_renderMeals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_apiMeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _modules_likes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);





window.onload = async () => {
  (0,_modules_renderMeals__WEBPACK_IMPORTED_MODULE_1__["default"])(await (0,_modules_apiMeals__WEBPACK_IMPORTED_MODULE_2__["default"])(), await (0,_modules_likes__WEBPACK_IMPORTED_MODULE_3__["default"])());
};
})();

/******/ })()
;