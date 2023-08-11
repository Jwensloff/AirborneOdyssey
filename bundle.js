/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof b},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,f=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=O.p(f),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return O.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return O.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return O.s(u,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=O.p(d),m=w(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return O.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:O.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),_=b.prototype;return w.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_ross_parmly_rf6ywHVkrlY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_ross_parmly_rf6ywHVkrlY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n  margin: 0px;\n  padding: 0px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\nmain {\n  background-color: rgb(175, 199, 237, 0.3);\n}\n\nnav {\n  background-color: rgb(255, 255, 255, 0.4);\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n  font-family: \"Work Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 12vh;\n  padding-left: 20px;\n  padding-right: 30px;\n}\n\n.main-wrapper {\n  height: 87vh;\n  margin: 10px 20px 10px 20px;\n  overflow: hidden;\n}\n\n.inner-box{\n   margin-top: 10px;\n   width: 100%;\n   height: 95%;\n}\n\n.login-input {\n  height: 90%;\n}\n\n.user-name{\n  margin-bottom: 5px;\n}\n\n.username-buttons{\n  display: flex;\n  flex-direction: column;\n}\n\n.login-page {\n  height: 30%;\n  display: flex;\n  padding-top: 18vh;\n  flex-direction: column;\n  align-items: center;\n  align-items: left;\n  width: 100%;\n}\n\nh1{\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.login-page > h1 {\n  font-size: 50px;\n  margin-bottom: 0px;\n}\n\nh2 {\n  font-family: \"Work Sans\", sans-serif;\n}\n\n.login-page > p {\n  margin-left: 200px;\n  font-size: 20px;\n  padding-bottom: 50px;\n}\n\n.password-input {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.left-nav-bar-section {\n  display: flex;\n  height: 35px;\n  justify-content: flex-end;\n}\n\n.main-nav-button {\n  margin-left: 5px;\n  margin-right: 5px;\n  min-width: 75px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.welcome-text-wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-nav-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.login-button {\n  height: 100%;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.login-wrapper {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.fa-regular,\n.fa-solid {\n  color:black;\n  margin-right: 5px;\n  margin-left: 10px;\n}\n\n.user-icon {\n  display: flex;\n}\n\n.user-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.user-stats-wrapper {\n  width: 65%;\n  height: 10vh;\n  margin-top: 10px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px 10px 20px;\n}\n\n.stat-text {\n  font-size: 20px;\n}\n\n.dashboard-page {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n  font-family: \"Work Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0px 20px 0px 20px;\n}\n\n.grid-wrapper {\n  display: flex;\n  justify-content: space-between;\n  height: 68vh;\n  width: 90%;\n}\n\n.upcoming-trip-grid-wrapper,\n.past-trip-grid-wrapper {\n  height: 90%;\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.upcoming-trip-grid,\n.past-user-trip-grid {\n  width: 95%;\n  height: 55vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n  grid-column-gap: 20px;\n  padding: 20px;\n}\n\n.upcoming-trip-grid::-webkit-scrollbar,\n.past-user-trip-grid::-webkit-scrollbar {\n  display: none; \n}\n\n.pick-destination-card,\n.destination-card {\n  font-family: \"Work Sans\", sans-serif;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  color: black;\n  height: 120px;\n  width: 550px;\n  flex-shrink: 0;\n  margin-bottom: 15px;\n}\n\n.destination-card img {\n  height: 100%;\n  width: 25vh;\n}\n\n.pick-destination-card {\n  height: 150px;\n  margin-bottom: 5px;\n}\n\n.card-text-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\n\n.card-text-wrapper > p {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.card-text-wrapper > h2 {\n  font-weight: 6000;\n  font-size: 20px;\n}\n\n.book-button {\n  height: 40px;\n  width: 130px;\n  margin-top: 25px;\n}\n\nbutton,\ninput {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 15px;\n}\n\n.select-destination-button {\n  width: 140px;\n}\n\n.card-text-wrapper > button {\n  margin-top: 5px;\n  width: 140px;\n}\n\n.pick-destination-card img {\n  height: 100%;\n  width: 25vh;\n}\n\n.destinations-grid-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.destinations-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n  max-height: 70vh;\n  overflow-y: scroll;\n}\n\n.destinations-grid::-webkit-scrollbar {\n  display: none;\n}\n\n.pick-destination-card > p {\n  font-size: 15px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.user-plan-trip-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.plan-trip-wrapper {\n  font-family: \"Work Sans\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50%;\n  width: 50%;\n}\n\n.select-num-people-wrapper,\n.select-date-wrapper {\n  display: flex;\n  margin-top: 30px;\n  margin-bottom: 13px;\n}\n\n.select-num-people-wrapper > label,\n.select-date-wrapper > label {\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.num-traveler-input,\n.date {\n  margin-right: 30px;\n  margin-left: 5px;\n}\n\n.fa-square-check:hover{\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.confirmation-page{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.confirmation-page-wrapper {\n  font-family: \"Work Sans\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.7);\n  width:60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n  padding-bottom: 20px;\n}\n\n.confirmation-page-wrapper > button {\n  height: 50px;\n  width: 150px;\n}\n\n.confirmation-page-image {\n  height: 350px;\n  width: auto;\n}\n\n.confirmation-page-text {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.error-message {\n  margin-right: 10px;\n  font-weight: 600;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n  margin: 0px;\n  padding: 0px;\n  background-image: url(\"../images/ross-parmly-rf6ywHVkrlY-unsplash.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\nmain {\n  background-color: rgb(175, 199, 237, 0.3);\n}\n\nnav {\n  background-color: rgb(255, 255, 255, 0.4);\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n  font-family: \"Work Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 12vh;\n  padding-left: 20px;\n  padding-right: 30px;\n}\n\n.main-wrapper {\n  height: 87vh;\n  margin: 10px 20px 10px 20px;\n  overflow: hidden;\n}\n\n.inner-box{\n   margin-top: 10px;\n   width: 100%;\n   height: 95%;\n}\n\n.login-input {\n  height: 90%;\n}\n\n.user-name{\n  margin-bottom: 5px;\n}\n\n.username-buttons{\n  display: flex;\n  flex-direction: column;\n}\n\n.login-page {\n  height: 30%;\n  display: flex;\n  padding-top: 18vh;\n  flex-direction: column;\n  align-items: center;\n  align-items: left;\n  width: 100%;\n}\n\nh1{\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.login-page > h1 {\n  font-size: 50px;\n  margin-bottom: 0px;\n}\n\nh2 {\n  font-family: \"Work Sans\", sans-serif;\n}\n\n.login-page > p {\n  margin-left: 200px;\n  font-size: 20px;\n  padding-bottom: 50px;\n}\n\n.password-input {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.left-nav-bar-section {\n  display: flex;\n  height: 35px;\n  justify-content: flex-end;\n}\n\n.main-nav-button {\n  margin-left: 5px;\n  margin-right: 5px;\n  min-width: 75px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.welcome-text-wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.main-nav-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.login-button {\n  height: 100%;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.login-wrapper {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.fa-regular,\n.fa-solid {\n  color:black;\n  margin-right: 5px;\n  margin-left: 10px;\n}\n\n.user-icon {\n  display: flex;\n}\n\n.user-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.user-stats-wrapper {\n  width: 65%;\n  height: 10vh;\n  margin-top: 10px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px 10px 20px;\n}\n\n.stat-text {\n  font-size: 20px;\n}\n\n.dashboard-page {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-family: \"Raleway\", sans-serif;\n  font-family: \"Work Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0px 20px 0px 20px;\n}\n\n.grid-wrapper {\n  display: flex;\n  justify-content: space-between;\n  height: 68vh;\n  width: 90%;\n}\n\n.upcoming-trip-grid-wrapper,\n.past-trip-grid-wrapper {\n  height: 90%;\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.upcoming-trip-grid,\n.past-user-trip-grid {\n  width: 95%;\n  height: 55vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n  grid-column-gap: 20px;\n  padding: 20px;\n}\n\n.upcoming-trip-grid::-webkit-scrollbar,\n.past-user-trip-grid::-webkit-scrollbar {\n  display: none; \n}\n\n.pick-destination-card,\n.destination-card {\n  font-family: \"Work Sans\", sans-serif;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  color: black;\n  height: 120px;\n  width: 550px;\n  flex-shrink: 0;\n  margin-bottom: 15px;\n}\n\n.destination-card img {\n  height: 100%;\n  width: 25vh;\n}\n\n.pick-destination-card {\n  height: 150px;\n  margin-bottom: 5px;\n}\n\n.card-text-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\n\n.card-text-wrapper > p {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.card-text-wrapper > h2 {\n  font-weight: 6000;\n  font-size: 20px;\n}\n\n.book-button {\n  height: 40px;\n  width: 130px;\n  margin-top: 25px;\n}\n\nbutton,\ninput {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 15px;\n}\n\n.select-destination-button {\n  width: 140px;\n}\n\n.card-text-wrapper > button {\n  margin-top: 5px;\n  width: 140px;\n}\n\n.pick-destination-card img {\n  height: 100%;\n  width: 25vh;\n}\n\n.destinations-grid-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.destinations-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n  max-height: 70vh;\n  overflow-y: scroll;\n}\n\n.destinations-grid::-webkit-scrollbar {\n  display: none;\n}\n\n.pick-destination-card > p {\n  font-size: 15px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.user-plan-trip-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.plan-trip-wrapper {\n  font-family: \"Work Sans\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50%;\n  width: 50%;\n}\n\n.select-num-people-wrapper,\n.select-date-wrapper {\n  display: flex;\n  margin-top: 30px;\n  margin-bottom: 13px;\n}\n\n.select-num-people-wrapper > label,\n.select-date-wrapper > label {\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.num-traveler-input,\n.date {\n  margin-right: 30px;\n  margin-left: 5px;\n}\n\n.fa-square-check:hover{\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.confirmation-page{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.confirmation-page-wrapper {\n  font-family: \"Work Sans\", sans-serif;\n  background-color: rgb(255, 255, 255, 0.7);\n  width:60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n  padding-bottom: 20px;\n}\n\n.confirmation-page-wrapper > button {\n  height: 50px;\n  width: 150px;\n}\n\n.confirmation-page-image {\n  height: 350px;\n  width: auto;\n}\n\n.confirmation-page-text {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.error-message {\n  margin-right: 10px;\n  font-weight: 600;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/ross-parmly-rf6ywHVkrlY-unsplash.jpg");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "masterData": () => (/* binding */ masterData),
/* harmony export */   "createFetchRequests": () => (/* binding */ createFetchRequests),
/* harmony export */   "postUserTrip": () => (/* binding */ postUserTrip)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
const allTravelersURL = "https://airborne-odyssey-fc6kohqgk-jwensloff.vercel.app/api/v1/travelers";
const allTripsURL = "https://airborne-odyssey-fc6kohqgk-jwensloff.vercel.app/api/v1/trips";
const allDestinations = "https://airborne-odyssey-fc6kohqgk-jwensloff.vercel.app/api/v1/destinations";

const urlArray = [allTravelersURL, allTripsURL, allDestinations];



let masterData = {
  today: dayjs().format("YYYY/MM/DD"),
};

// GET requests
const createFetchRequests = () => {
  return urlArray.map((url) =>
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .catch((error) => console.log("Error", error))
  );
};

const postUserTrip = (newTripObject) => {
  console.log("from apiCalls file", newTripObject);
  let newID = masterData.trips.length + 1;

  let data = {
    id: newID,
    userID: newTripObject.userID,
    destinationID: newTripObject.destinationID,
    travelers: newTripObject.travelers,
    date: newTripObject.date,
    duration: newTripObject.duration,
    status: "pending",
    suggestedActivities: [],
  };

  return fetch(allTripsURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentUserInformation": () => (/* binding */ getCurrentUserInformation),
/* harmony export */   "findUsersTrips": () => (/* binding */ findUsersTrips),
/* harmony export */   "filterUserTripsByDate": () => (/* binding */ filterUserTripsByDate),
/* harmony export */   "findUserTripDestinations": () => (/* binding */ findUserTripDestinations),
/* harmony export */   "calculateTotalUserSpending": () => (/* binding */ calculateTotalUserSpending),
/* harmony export */   "calculateNewTripCost": () => (/* binding */ calculateNewTripCost),
/* harmony export */   "validateUserLogin": () => (/* binding */ validateUserLogin)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const getCurrentUserInformation = (travelerID, travelersArray) => {
  let traveler = travelersArray.find((traveler) => traveler.id === travelerID);
  if (!traveler) {
    return "The traveler id you entered does not match our records.";
  } else {
    return traveler;
  }
};

const findUsersTrips = (travelerID, tripsArray) => {
  const userTrips = tripsArray.filter((trip) => trip.userID === travelerID);
  if (!userTrips || userTrips.length === 0) {
    return "The traveler id you entered does not match our records.";
  } else {
    return userTrips;
  }
};

const filterUserTripsByDate = (userTrips) => {
  let allUserTrips = {
    pastTrips: [],
    upcomingTrips: [],
  };
  userTrips.forEach((trip) => {
    const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY/MM/DD");
    const parsedCurrentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(today);
    const parsedTripDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(trip.date);

    if (parsedTripDate.isBefore(parsedCurrentDate)) {
      allUserTrips.pastTrips.push(trip);
    } else {
      allUserTrips.upcomingTrips.push(trip);
    }
  });
  return allUserTrips;
};

const findUserTripDestinations = (findUserTrips, destinations) => {
  const userDestinations = findUserTrips.reduce((destinationArray, trip) => {
    destinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        destinationArray.push(destination);
      }
    });
    return destinationArray;
  }, []);
  return userDestinations;
};

const calculateTotalUserSpending = (
  findUsersTrips,
  findUserTripDestinations
) => {
  const spending = findUsersTrips.reduce((sum, trip) => {
    const numTravelers = trip.travelers;
    const duration = trip.duration;
    const travelDays = duration * numTravelers;

    let flightCost;
    findUserTripDestinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        flightCost = destination.estimatedFlightCostPerPerson;
      }
    });

    let costPerDay;

    findUserTripDestinations.forEach((destination) => {
      if (destination.id === trip.destinationID) {
        costPerDay = destination.estimatedLodgingCostPerDay;
      }
    });
    const totalLodgingCost = costPerDay * travelDays;
    const totalFlightCost = flightCost * numTravelers;
    sum += totalFlightCost + totalLodgingCost;
    return sum;
  }, 0);

  const totalCostWithTravelAgentFees = spending + spending * 0.1;
  return totalCostWithTravelAgentFees;
};

const calculateNewTripCost = (allDestinations, newTripObject) => {
  const newDestinaton = allDestinations.find(
    (destination) => destination.id === newTripObject.destinationID
  );
  const lodgingCostPerDay =
    newDestinaton.estimatedLodgingCostPerDay * newTripObject.travelers;
  const totalCostOfLodging = lodgingCostPerDay * newTripObject.duration;
  const totalCostOfFlights =
    newDestinaton.estimatedFlightCostPerPerson * newTripObject.travelers;
  const newTripCost = totalCostOfFlights + totalCostOfLodging;

  const travelersAgentFee = newTripCost * 0.1;
  const totalNewTripCost = newTripCost + travelersAgentFee;
  return totalNewTripCost;
};

const validateUserLogin = (username) => {

  const idBasedOnLogin = username.slice(8);
  const login = username.slice(0, 8);
  const id = Number(idBasedOnLogin);

  if (idBasedOnLogin < 1 || idBasedOnLogin > 50) {
    return false;
  }

  if (login !== "traveler") {
    return false;
  }

  if (!Number.isInteger(id)) {
    return false;
  }
  if(username !== login+id) {
    return false;
  }
  return true;
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "innerWrapper": () => (/* binding */ innerWrapper),
/* harmony export */   "loginButton": () => (/* binding */ loginButton),
/* harmony export */   "newTripButton": () => (/* binding */ newTripButton),
/* harmony export */   "homeButton": () => (/* binding */ homeButton),
/* harmony export */   "bookButton": () => (/* binding */ bookButton),
/* harmony export */   "seeAllTripsButton": () => (/* binding */ seeAllTripsButton),
/* harmony export */   "inputError": () => (/* binding */ inputError),
/* harmony export */   "passwordElement": () => (/* binding */ passwordElement),
/* harmony export */   "userNameElement": () => (/* binding */ userNameElement),
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage),
/* harmony export */   "startDateInput": () => (/* binding */ startDateInput),
/* harmony export */   "endDateInput": () => (/* binding */ endDateInput),
/* harmony export */   "numPeopleInput": () => (/* binding */ numPeopleInput),
/* harmony export */   "displayNumInputField": () => (/* binding */ displayNumInputField),
/* harmony export */   "pickDestinationGrid": () => (/* binding */ pickDestinationGrid),
/* harmony export */   "displayConfirmationPage": () => (/* binding */ displayConfirmationPage),
/* harmony export */   "showMainPage": () => (/* binding */ showMainPage),
/* harmony export */   "displayUserName": () => (/* binding */ displayUserName),
/* harmony export */   "displayUserSpending": () => (/* binding */ displayUserSpending),
/* harmony export */   "renderMainPage": () => (/* binding */ renderMainPage),
/* harmony export */   "showChooseDestinationPage": () => (/* binding */ showChooseDestinationPage),
/* harmony export */   "backToMainPage": () => (/* binding */ backToMainPage),
/* harmony export */   "captureDestinationID": () => (/* binding */ captureDestinationID),
/* harmony export */   "displaySelectDateForTrip": () => (/* binding */ displaySelectDateForTrip),
/* harmony export */   "setupDateInputs": () => (/* binding */ setupDateInputs),
/* harmony export */   "displaySelectNumPeople": () => (/* binding */ displaySelectNumPeople),
/* harmony export */   "displayBookItButton": () => (/* binding */ displayBookItButton),
/* harmony export */   "displayUpcomingTrips": () => (/* binding */ displayUpcomingTrips),
/* harmony export */   "displayUserSpendingForThisYear": () => (/* binding */ displayUserSpendingForThisYear),
/* harmony export */   "checkUserNamePassword": () => (/* binding */ checkUserNamePassword),
/* harmony export */   "checkUserTripInput": () => (/* binding */ checkUserTripInput)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



// query selectors

// main
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const innerWrapper = document.querySelector('.inner-box');
// buttons
const loginButton = document.querySelector(".login-button");
const newTripButton = document.querySelector(".new-trip-button");
const homeButton = document.querySelector(".home-button");
const bookButton = document.querySelector(".book-button");
const seeAllTripsButton = document.querySelector(
  ".see-all-trips-button"
);

// user input
const inputError = document.querySelector(".input-error");
const passwordElement = document.querySelector(".password-input");
const userNameElement = document.querySelector(".username-input");

const errorMessage = document.querySelector(".error-message");
const startDateInput = document.getElementById("start-date-input");
const endDateInput = document.getElementById("end-date-input");
const numPeopleInput = document.querySelector(".num-traveler-input");
const displayNumInputField =
  document.querySelectorAll(".select-num-people");

// update DOM

const mainNav = document.querySelector(".main-nav-wrapper");
const userName = document.querySelector(".user-name");
const userSpending = document.querySelector(".display-user-spending");
const pastUserTripGrid = document.querySelector(".past-user-trip-grid");
const upcomingUserTripGrid = document.querySelector(".upcoming-trip-grid");
const resetPlanTripInput = document.querySelectorAll(".reset");
const displayNewTripCost = document.querySelector(
  ".display-upcoming-trip-cost"
);
const loginItems = document.querySelectorAll(".login");
const dashboardItems = document.querySelectorAll(".dashboard");
const destinationSelectionItems = document.querySelector(".destinations");
const dashBoardPage = document.querySelectorAll(".dashboard");
const showUserTripPlanPage = document.querySelector(".user-plan-trip-page");
const pickDestinationGrid = document.querySelector(".destinations-grid");
const confirmationPage = document.querySelectorAll(".confirmation-page");
const planUserTripPage = document.querySelector(".user-plan-trip-page");
const displayNewTripLocation = document.querySelector(
  ".display-new-trip-location"
);
const displayNewTripTotalCost = document.querySelector(
  ".display-new-trip-total-cost"
);
const displayNewTripImg = document.querySelector(".display-new-trip-image");
const noUpcomingTripsMessage = document.querySelector(
  ".no-upcoming-trip-message"
);

const displayConfirmationPage = (
  newTripObject,
  newTripCost,
  allDestinations
) => {
  planUserTripPage.classList.add("hidden");
  confirmationPage.forEach((item) => item.classList.remove("hidden"));
  displayNewTripLocation.innerText = "";

  const newDestinaton = allDestinations.find(
    (destination) => destination.id === newTripObject.destinationID
  );

  const tripStartDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(newTripObject.date);
  const tripEndDate = tripStartDate.add(newTripObject.duration, "day");
  displayNewTripLocation.innerText = `You're going to ${
    newDestinaton.destination
  } from ${tripStartDate.format("MM/DD/YYYY")} through ${tripEndDate.format(
    "MM/DD/YYYY"
  )}.`;
  displayNewTripTotalCost.innerText = "";
  displayNewTripTotalCost.innerText = `Total cost: $${newTripCost}`;

  displayNewTripImg.innerHTML = "";
  displayNewTripImg.innerHTML = `<img class='confirmation-page-image' 
   src='${newDestinaton.image}' alt='${newDestinaton.alt}'></img>`;
};

const showMainPage = () => {
  loginItems.forEach((item) => item.classList.add("hidden"));
  dashboardItems.forEach((item) => item.classList.remove("hidden"));
  mainNav.classList.remove("hidden");
};

const displayUserName = (currentUser) => {
  userName.innerText = "";
  userName.innerText = ` Welcome back ${currentUser.name}!`;
};

const displayUserSpending = (calculatedTotalUserSpending) => {
  userSpending.innerText = "";
  userSpending.innerText = `You have spent a total of $${calculatedTotalUserSpending} on your travels!`;
};

const renderMainPage = (allUserTrips, userTripDestinations) => {
  pastUserTripGrid.innerHTML = "";

  allUserTrips.pastTrips.forEach((trip) => {
    const currentTripDestination = userTripDestinations.find(
      (destination) => destination.id === trip.destinationID
    );

    const tripStartDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(trip.date);
    const tripEndDate = tripStartDate.add(trip.duration, "day");

    pastUserTripGrid.innerHTML += `<article class='destination-card' id='${
      currentTripDestination.id
    }'>
      <img class='currentTripDestination-card img' src='${
        currentTripDestination.image
      }' alt='${currentTripDestination.alt}'>
      <div class="card-text-wrapper">
      <h2>${currentTripDestination.destination}</h2>
      <p>Status: Past</p>
      <p>Date: ${tripStartDate.format("YYYY/MM/DD")} - ${tripEndDate.format(
      "YYYY/MM/DD"
    )}</p>  </article>
    </div>`;
  });
  if (allUserTrips.upcomingTrips.length < 1) {
    noUpcomingTripsMessage.innerText =
      "You don't have any upcoming trips planned";
  } else {
    renderUpcomingTripsGrid(allUserTrips, userTripDestinations);
  }
  return userTripDestinations;
};

const showChooseDestinationPage = (allDestinations) => {
  pickDestinationGrid.innerHTML = "";
  dashBoardPage.forEach((item) => item.classList.add("hidden"));
  destinationSelectionItems.classList.remove("hidden");
  let sortedDestinations = allDestinations.sort((a, b) =>
    a.destination.localeCompare(b.destination)
  );

  sortedDestinations.forEach((destination) => {
    if (destination.id !== 45) {
      pickDestinationGrid.innerHTML += `<article class='pick-destination-card' id='${destination.id}'>
  <img class='pick-destination-card img' src='${destination.image}' alt='${destination.alt}'>
  <div class="card-text-wrapper">
  
  <h2>${destination.destination}<i id='${destination.id}' class="fa-regular fa-square-check""></i></h2>
  <p> Lodging: $${destination.estimatedLodgingCostPerDay} per person</p>
  <p>Flight: $${destination.estimatedFlightCostPerPerson} per person</p>
  </article></div>`;
    }
  });
};

const backToMainPage = () => {
  destinationSelectionItems.classList.add("hidden");
  dashboardItems.forEach((item) => item.classList.remove("hidden"));
  showUserTripPlanPage.classList.add("hidden");
  resetPlanTripInput.forEach((item) => item.classList.add("hidden"));
  confirmationPage.forEach((item) => item.classList.add("hidden"));
  displayNumInputField.forEach((item) => item.classList.add("hidden"));
  numPeopleInput.value = "";
  inputError.innerText = "";
  startDateInput.value = "yyyy/mm/dd";
  endDateInput.value = "yyyy/mm/dd";
};

const captureDestinationID = (masterData, event) => {
  let newTripObject = {
    userID: parseInt(masterData.currentUser.id),
    destinationID: parseInt(event.target.closest("i").id),
    status: "pending",
  };
  return newTripObject;
};

const displaySelectDateForTrip = () => {
  destinationSelectionItems.classList.add("hidden");
  showUserTripPlanPage.classList.remove("hidden");
};

function setupDateInputs() {
  const today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
  startDateInput.min = today;
  startDateInput.addEventListener("change", function () {
    const selectedStartDate = startDateInput.value;

    endDateInput.min = selectedStartDate;
    
  });
};

const numPeipleInputWreapper = document.querySelector(
  ".select-num-people-wrapper"
);
const displaySelectNumPeople = () => {
  inputError.innerText = "";
  displayNumInputField.forEach((item) => item.classList.remove("hidden"));
  numPeipleInputWreapper.classList.remove("hidden");
};

const displayBookItButton = () => {
  bookButton.classList.remove("hidden");
};

const displayUpcomingTrips = (allUserTrips, userTripDestinations) => {
  pastUserTripGrid.innerHTML = "";

  allUserTrips.pastTrips.forEach((trip) => {
    const currentTripDestination = userTripDestinations.find(
      (destination) => destination.id === trip.destinationID
    );

    const tripStartDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(trip.date);
    const tripEndDate = tripStartDate.add(trip.duration, "day");

    pastUserTripGrid.innerHTML += `<article class='destination-card' id='${
      currentTripDestination.id
    }'>
      <img class='currentTripDestination-card img' src='${
        currentTripDestination.image
      }' alt='${currentTripDestination.alt}'>
      <h2>${currentTripDestination.destination}</h2>
      <h2>Date: ${tripStartDate.format("YYYY/MM/DD")} - ${tripEndDate.format(
      "YYYY/MM/DD"
    )}</h2> </article>`;
  });
};

const renderUpcomingTripsGrid = (allUserTrips, userTripDestinations) => {
  upcomingUserTripGrid.innerHTML = "";

  allUserTrips.upcomingTrips.forEach((trip) => {
    const upcomingTripDestination = userTripDestinations.find(
      (destination) => destination.id === trip.destinationID
    );
    const tripStartDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(trip.date);
    const tripEndDate = tripStartDate.add(trip.duration, "day");

    upcomingUserTripGrid.innerHTML += `<article class='destination-card' id='${
      upcomingTripDestination.id
    }'>
    <img class='upcomingTripDestination-card img' src='${
      upcomingTripDestination.image
    }' alt='${upcomingTripDestination.alt}'>
    <div class="card-text-wrapper">
    <h2>${upcomingTripDestination.destination}</h2>
    <p>Status: Pending</p>
    <p>Date: ${tripStartDate.format("YYYY/MM/DD")} - ${tripEndDate.format(
      "YYYY/MM/DD"
    )}</p>  <div/>
    </article>`;
  });
};

const displayUserSpendingForThisYear = (
  allUserTrips,
  findUserTripDestinations
) => {
  displayNewTripCost.innerText = "";

  if (allUserTrips.upcomingTrips.length === 0) {
    displayNewTripCost.innerText = `You have spent $0 on trips this year`;
  } else {
    const spendingOnTripsThisYear = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.calculateTotalUserSpending)(
      allUserTrips.upcomingTrips,
      findUserTripDestinations
    );
    displayNewTripCost.innerText = `You have spent $${spendingOnTripsThisYear} on trips this year`;
  }
};

const checkUserNamePassword = (username, password) => {
  if (username === "" && password == "") {
    errorMessage.innerText = "";
    errorMessage.innerText = "Please login to continue";
    return false;
  }
  if (username === "") {
    errorMessage.innerText = "";
    errorMessage.innerText = "Please enter your username";
    return false;
  }
  if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.validateUserLogin)(username)) {
    errorMessage.innerText = "";
    errorMessage.innerText = "The username or password you entered was incorrect";
    return false;
  }
  if (password === "") {
    errorMessage.innerText = "";
    errorMessage.innerText = "Please enter your password";
    return false;
  }
  if (password !== `travel`) {
    errorMessage.innerText = "";
    errorMessage.innerText =
      "The username or password you entered was incorrect";
    return false;
  }
};

const checkUserTripInput = () => {
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const numTravelers = Number(numPeopleInput.value);

  if (!startDate || !endDate) {
    inputError.innerText = "";
    inputError.innerText = "Please enter a valid date to continue";
    bookButton.classList.add("hidden");

    return false;
  }
  if (!numTravelers || numTravelers === 0 || numTravelers < 0) {
    inputError.innerText = "";
    inputError.innerText =
      "Please specify the number of travelers there will be to continue";
    bookButton.classList.add("hidden");

    return false;
  }
  inputError.innerText = "";
};


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
const dayjs = __webpack_require__(1);









let newTripObject;

// create Data
window.addEventListener("load", () => {
  Promise.all((0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.createFetchRequests)()).then((promiseArray) => {
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.travelers = promiseArray[0].travelers;
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.trips = promiseArray[1].trips;
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.destinations = promiseArray[2].destinations;
  });
});

const generateWebPage = () => {
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.currentUser = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getCurrentUserInformation)(
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.currentUserId,
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.travelers
  );
  const userTrips = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.findUsersTrips)(_apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.currentUserId, _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.trips);
  const userTripsByDate = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.filterUserTripsByDate)(userTrips);
  const userTripDestinations = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.findUserTripDestinations)(
    userTrips,
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.destinations
  );
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displayUserName)(_apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.currentUser);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displayUserSpending)(
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.calculateTotalUserSpending)(userTrips, userTripDestinations)
  );
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displayUserSpendingForThisYear)(userTripsByDate, userTripDestinations);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.renderMainPage)(userTripsByDate, userTripDestinations);
};

// event listeners
_domUpdates__WEBPACK_IMPORTED_MODULE_3__.loginButton.addEventListener("click", () => {
  let username = _domUpdates__WEBPACK_IMPORTED_MODULE_3__.userNameElement.value;
  let id = Number(username.slice(8));
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.currentUserId = id;
  let password = _domUpdates__WEBPACK_IMPORTED_MODULE_3__.passwordElement.value;
  let checkLogin = (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.checkUserNamePassword)(username, password);
  if (checkLogin === false) {
    return;
  } else {
    generateWebPage();
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.showMainPage)();
    _domUpdates__WEBPACK_IMPORTED_MODULE_3__.innerWrapper.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    _domUpdates__WEBPACK_IMPORTED_MODULE_3__.main.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
    _domUpdates__WEBPACK_IMPORTED_MODULE_3__.nav.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
  }
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.newTripButton.addEventListener("click", () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.showChooseDestinationPage)(_apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.destinations);
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.homeButton.addEventListener("click", () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.backToMainPage)();
  generateWebPage();
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.pickDestinationGrid.addEventListener("click", (event) => {
  newTripObject = (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.captureDestinationID)(_apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData, event);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displaySelectDateForTrip)();
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.setupDateInputs)();
  return newTripObject;
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.startDateInput.addEventListener("change", (event) => {
  const selectedDate = event.target.value;
  let formattedDate = dayjs(selectedDate);
  newTripObject.date = formattedDate.format("YYYY/MM/DD");
  return newTripObject;
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.endDateInput.addEventListener("change", (event) => {
  const selectedEndDate = event.target.value;
  let formattedEndDate = dayjs(selectedEndDate);
  let difference = formattedEndDate.diff(dayjs(newTripObject.date), "day");
  newTripObject.duration = parseInt(difference);
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displaySelectNumPeople)();
  return newTripObject;
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.numPeopleInput.addEventListener("change", (event) => {
  const numPeople = parseInt(event.target.value);
  newTripObject.travelers = numPeople;
  if ((0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.checkUserTripInput)() === false) {
    return;
  } else {
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displayBookItButton)();
  }
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.numPeopleInput.addEventListener("keyup", (event) => {
  const numPeople = parseInt(event.target.value);
  newTripObject.travelers = numPeople;
  if ((0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.checkUserTripInput)() === false) {
    return;
  } else {
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displayBookItButton)();
  }
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.bookButton.addEventListener("click", () => {
  (0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.postUserTrip)(newTripObject)
    .then(() => {
      return fetch("https://airborne-odyssey-fc6kohqgk-jwensloff.vercel.app/api/v1/trips");
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.trips = data.trips;
      const userTrips = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.findUsersTrips)(
        _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.currentUserId,
        _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.trips
      );
      const userTripsByDate = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.filterUserTripsByDate)(userTrips);
      (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displayConfirmationPage)(
        newTripObject,
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.calculateNewTripCost)(_apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.destinations, newTripObject),
        _apiCalls__WEBPACK_IMPORTED_MODULE_1__.masterData.destinations
      );
    })
    .catch((error) => console.log("Error", error));

  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.displaySelectNumPeople)();
  _domUpdates__WEBPACK_IMPORTED_MODULE_3__.bookButton.classList.add("hidden");
});

_domUpdates__WEBPACK_IMPORTED_MODULE_3__.seeAllTripsButton.addEventListener("click", () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_3__.backToMainPage)();
  generateWebPage();
  _domUpdates__WEBPACK_IMPORTED_MODULE_3__.numPeopleInput.value = "";
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map