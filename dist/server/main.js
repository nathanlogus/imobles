(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_0, View_ɵEmptyOutletComponent_Host_0, ɵEmptyOutletComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵEmptyOutletComponent", function() { return RenderType_ɵEmptyOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_0", function() { return View_ɵEmptyOutletComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_Host_0", function() { return View_ɵEmptyOutletComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory", function() { return ɵEmptyOutletComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });

function View_ɵEmptyOutletComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵEmptyOutletComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], [], null, null)], null, null); }
var ɵEmptyOutletComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], View_ɵEmptyOutletComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: GalleryModuleNgFactory, RenderType_GalleryComponent, View_GalleryComponent_0, View_GalleryComponent_Host_0, GalleryComponentNgFactory, RenderType_GalleryIframeComponent, View_GalleryIframeComponent_0, View_GalleryIframeComponent_Host_0, GalleryIframeComponentNgFactory, RenderType_GalleryImageComponent, View_GalleryImageComponent_0, View_GalleryImageComponent_Host_0, GalleryImageComponentNgFactory, RenderType_GalleryVideoComponent, View_GalleryVideoComponent_0, View_GalleryVideoComponent_Host_0, GalleryVideoComponentNgFactory, RenderType_ɵd, View_ɵd_0, View_ɵd_Host_0, ɵdNgFactory, RenderType_ɵe, View_ɵe_0, View_ɵe_Host_0, ɵeNgFactory, RenderType_ɵf, View_ɵf_0, View_ɵf_Host_0, ɵfNgFactory, RenderType_ɵg, View_ɵg_0, View_ɵg_Host_0, ɵgNgFactory, RenderType_ɵh, View_ɵh_0, View_ɵh_Host_0, ɵhNgFactory, RenderType_ɵi, View_ɵi_0, View_ɵi_Host_0, ɵiNgFactory, RenderType_ɵj, View_ɵj_0, View_ɵj_Host_0, ɵjNgFactory, RenderType_ɵk, View_ɵk_0, View_ɵk_Host_0, ɵkNgFactory, RenderType_ɵl, View_ɵl_0, View_ɵl_Host_0, ɵlNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModuleNgFactory", function() { return GalleryModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GalleryComponent", function() { return RenderType_GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryComponent_0", function() { return View_GalleryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryComponent_Host_0", function() { return View_GalleryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponentNgFactory", function() { return GalleryComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GalleryIframeComponent", function() { return RenderType_GalleryIframeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryIframeComponent_0", function() { return View_GalleryIframeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryIframeComponent_Host_0", function() { return View_GalleryIframeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryIframeComponentNgFactory", function() { return GalleryIframeComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GalleryImageComponent", function() { return RenderType_GalleryImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryImageComponent_0", function() { return View_GalleryImageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryImageComponent_Host_0", function() { return View_GalleryImageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImageComponentNgFactory", function() { return GalleryImageComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GalleryVideoComponent", function() { return RenderType_GalleryVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryVideoComponent_0", function() { return View_GalleryVideoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryVideoComponent_Host_0", function() { return View_GalleryVideoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryVideoComponentNgFactory", function() { return GalleryVideoComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵd", function() { return RenderType_ɵd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵd_0", function() { return View_ɵd_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵd_Host_0", function() { return View_ɵd_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵdNgFactory", function() { return ɵdNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵe", function() { return RenderType_ɵe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵe_0", function() { return View_ɵe_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵe_Host_0", function() { return View_ɵe_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵeNgFactory", function() { return ɵeNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵf", function() { return RenderType_ɵf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵf_0", function() { return View_ɵf_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵf_Host_0", function() { return View_ɵf_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵfNgFactory", function() { return ɵfNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵg", function() { return RenderType_ɵg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵg_0", function() { return View_ɵg_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵg_Host_0", function() { return View_ɵg_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgNgFactory", function() { return ɵgNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵh", function() { return RenderType_ɵh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵh_0", function() { return View_ɵh_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵh_Host_0", function() { return View_ɵh_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵhNgFactory", function() { return ɵhNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵi", function() { return RenderType_ɵi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵi_0", function() { return View_ɵi_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵi_Host_0", function() { return View_ɵi_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵiNgFactory", function() { return ɵiNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵj", function() { return RenderType_ɵj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵj_0", function() { return View_ɵj_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵj_Host_0", function() { return View_ɵj_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵjNgFactory", function() { return ɵjNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵk", function() { return RenderType_ɵk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵk_0", function() { return View_ɵk_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵk_Host_0", function() { return View_ɵk_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵkNgFactory", function() { return ɵkNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵl", function() { return RenderType_ɵl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵl_0", function() { return View_ɵl_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵl_Host_0", function() { return View_ɵl_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵlNgFactory", function() { return ɵlNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var GalleryModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) { return [p0_0, new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵc"](p1_0)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_h"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });

var styles_GalleryComponent = ["gallery-core[dotsPosition=top] gallery-dots{top:0}  gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}  gallery-dots{margin:7px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}  .g-dot{cursor:pointer;z-index:20}  .g-dot:hover .g-dot-inner{opacity:1}  .g-dot-active .g-dot-inner{opacity:1;-webkit-transform:scale(1.5)!important;transform:scale(1.5)!important}  .g-dot-inner{background-color:#fff;opacity:.6;width:30%;height:30%;border-radius:50%;box-shadow:0 0 1px #000;transition:.2s}  .g-dot,   .g-dot-inner,   gallery-dots{display:flex;justify-content:center;align-items:center}  .g-nav-next,   .g-nav-prev{position:absolute;top:50%;width:30px;height:40px;cursor:pointer;z-index:999}  .g-nav-next{right:.5em;-webkit-transform:translateY(-50%) perspective(1px);transform:translateY(-50%) perspective(1px)}  .g-nav-prev{left:.5em;-webkit-transform:translateY(-50%) perspective(1px) scale(-1,-1);transform:translateY(-50%) perspective(1px) scale(-1,-1)}@media only screen and (max-width:480px){  .g-nav-next{right:.2em}  .g-nav-prev{left:.2em}}  .g-items-container{height:100%}  .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}  gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}  gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}  gallery-thumbs{display:block;z-index:1;overflow:unset}  .g-thumbs-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex;overflow:unset}  gallery-core[disableThumb=true] gallery-thumb{cursor:default}  gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,   gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;top:0;left:50%}  gallery-core[thumbPosition=bottom] gallery-thumb,   gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}  gallery-core[thumbPosition=left] gallery-thumbs .g-slider,   gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;top:50%;left:0}  gallery-core[thumbPosition=left] gallery-thumb,   gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}  gallery-core[thumbPosition=top]{flex-direction:column}  gallery-core[thumbPosition=left]{flex-direction:row}  gallery-core[thumbPosition=right]{flex-direction:row-reverse}  gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}  gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}  .g-thumb-loading{position:relative;overflow:hidden;height:100%;background-color:#262626}  .g-thumb-loading::before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:.8s linear infinite phAnimation;animation:.8s linear infinite phAnimation;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@-webkit-keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}  gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}  gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}  .g-counter{z-index:50;position:absolute;left:50%;-webkit-transform:translateX(-50%) perspective(1px);transform:translateX(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:#fff;background-color:rgba(0,0,0,.5)}  gallery[gallerize] gallery-item{cursor:pointer}  gallery-item,   gallery-thumb{position:relative;height:100%;width:100%;display:block;overflow:hidden}  gallery-item h2,   gallery-item h4,   gallery-thumb h2,   gallery-thumb h4{color:coral;margin:0}  gallery-item h2,   gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}  gallery-item h4,   gallery-thumb h4{font-size:1.6em}  gallery-item{z-index:10}  gallery-item iframe,   gallery-item video{position:absolute;width:100%;height:100%}  gallery-thumb{opacity:.5;cursor:pointer;transition:opacity .3s cubic-bezier(.5,0,.5,1)}  gallery-thumb.g-active-thumb{opacity:1}  .g-image-item{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100%;height:100%}  .g-image-error-message,   .g-loading,   .g-template{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}  gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}  gallery{position:relative;z-index:1;overflow:hidden;display:block;height:500px;background-color:#000}  gallery *{box-sizing:border-box}  gallery,   gallery-core{position:relative;overflow:hidden}  .g-box,   .g-slider,   gallery-core{display:flex;height:100%;width:100%}  gallery[fluid]{-webkit-transform:translateX(-50vw);transform:translateX(-50vw);width:100vw;left:50%}  gallery[fluid][fluid=false]{-webkit-transform:none;transform:none;width:initial;left:initial}  .g-no-transition{transition:unset!important}  .g-box,   gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}  .g-btn-close svg,   gallery-nav svg{width:100%;height:100%;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);transition:opacity .2s linear;opacity:.6}  .g-btn-close svg:hover,   gallery-nav svg:hover{opacity:1}@-webkit-keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}@keyframes stroke-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:rotate(1170deg);transform:rotate(1170deg)}50%{-webkit-transform:rotate(2340deg);transform:rotate(2340deg)}75%{-webkit-transform:rotate(3510deg);transform:rotate(3510deg)}100%{-webkit-transform:rotate(4680deg);transform:rotate(4680deg)}}  radial-progress{display:block;position:relative}  radial-progress svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}  radial-progress circle{-webkit-transform-origin:center;transform-origin:center;stroke:#fff}  radial-progress .radial-progress-meter,   radial-progress .radial-progress-value{fill:none}  radial-progress .radial-progress-meter{opacity:.3}  radial-progress .radial-progress-value{transition:.2s linear;stroke-linecap:round}  radial-progress[mode=indeterminate] svg{-webkit-animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate;animation:7s cubic-bezier(.87,.03,.33,1) infinite stroke-rotate}"];
var RenderType_GalleryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_GalleryComponent, data: {} });

function View_GalleryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "gallery-core", [], [[1, "thumbPosition", 0], [1, "slidingDirection", 0], [1, "disableThumb", 0], [1, "imageSize", 0], [1, "dotsPosition", 0], [1, "counterPosition", 0]], [[null, "action"], [null, "itemClick"], [null, "thumbClick"], [null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.onAction($event) !== false);
        ad = (pd_0 && ad);
    } if (("itemClick" === en)) {
        var pd_1 = (_co.onItemClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("thumbClick" === en)) {
        var pd_2 = (_co.onThumbClick($event) !== false);
        ad = (pd_2 && ad);
    } if (("error" === en)) {
        var pd_3 = (_co.onError($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, View_ɵf_0, RenderType_ɵf)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵf"], [], { state: [0, "state"], config: [1, "config"] }, { action: "action", itemClick: "itemClick", thumbClick: "thumbClick", error: "error" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform(_co.galleryRef.state)); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).transform(_co.galleryRef.config)); _ck(_v, 1, 0, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).thumbPosition; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).slidingDirection; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disableThumb; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).imageSize; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).dotsPosition; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).counterPosition; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_GalleryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery", [], null, null, null, View_GalleryComponent_0, RenderType_GalleryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GalleryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"], View_GalleryComponent_Host_0, { id: "id", items: "items", nav: "nav", dots: "dots", loop: "loop", thumb: "thumb", zoomOut: "zoomOut", counter: "counter", dotsSize: "dotsSize", autoPlay: "autoPlay", gestures: "gestures", thumbWidth: "thumbWidth", thumbHeight: "thumbHeight", disableThumb: "disableThumb", panSensitivity: "panSensitivity", playerInterval: "playerInterval", itemTemplate: "itemTemplate", thumbTemplate: "thumbTemplate", thumbMode: "thumbMode", imageSize: "imageSize", dotsPosition: "dotsPosition", counterPosition: "counterPosition", slidingDirection: "slidingDirection", loadingMode: "loadingMode", loadingStrategy: "loadingStrategy", thumbPosition: "thumbPosition", destroyRef: "destroyRef", skipInitConfig: "skipInitConfig" }, { itemClick: "itemClick", thumbClick: "thumbClick", playingChange: "playingChange", indexChange: "indexChange", itemsChange: "itemsChange", error: "error" }, ["*"]);

var styles_GalleryIframeComponent = [];
var RenderType_GalleryIframeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_GalleryIframeComponent, data: {} });

function View_GalleryIframeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { iframe: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["iframe", 1]], null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"]], [[8, "src", 5]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.iframeSrc; _ck(_v, 1, 0, currVal_0); }); }
function View_GalleryIframeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-iframe", [], null, null, null, View_GalleryIframeComponent_0, RenderType_GalleryIframeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryIframeComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GalleryIframeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-iframe", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryIframeComponent"], View_GalleryIframeComponent_Host_0, { src: "src", pauseVideo: "pause" }, {}, []);

var styles_GalleryImageComponent = [];
var RenderType_GalleryImageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_GalleryImageComponent, data: { "animation": [{ type: 7, name: "fadeIn", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "300ms ease-in" }], options: null }], options: {} }] } });

function View_GalleryImageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "g-image-item"]], [[24, "@fadeIn", 0], [4, "backgroundImage", null]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; var currVal_1 = _co.imageUrl; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_GalleryImageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorTemplate; _ck(_v, 0, 0, currVal_0); }); }
function View_GalleryImageComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u26A0"]))], null, null); }
function View_GalleryImageComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u26A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Unable to load the image!"]))], null, null); }
function View_GalleryImageComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryImageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["isLarge", 2]], null, 0, null, View_GalleryImageComponent_6))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isThumbnail; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GalleryImageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "g-image-error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryImageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["defaultError", 2]], null, 0, null, View_GalleryImageComponent_4))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorTemplate; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_GalleryImageComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "g-loading"]], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderTemplate; _ck(_v, 0, 0, currVal_0); }); }
function View_GalleryImageComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "g-thumb-loading"]], null, null, null, null, null))], null, null); }
function View_GalleryImageComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "radial-progress", [], [[1, "mode", 0], [4, "width", "px"], [4, "height", "px"]], null, null, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [], { mode: [0, "mode"], value: [1, "value"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.mode; var currVal_4 = _co.progress; _ck(_v, 1, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).diameter; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).diameter; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_GalleryImageComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryImageComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["progressLoader", 2]], null, 0, null, View_GalleryImageComponent_11))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isThumbnail; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_GalleryImageComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryImageComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["defaultLoader", 2]], null, 0, null, View_GalleryImageComponent_9))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaderTemplate; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_GalleryImageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, null, null, null, null, function (_v, en, $event) { var ad = true; var _co = _v.component; if (("progress" === en)) {
        var pd_0 = (_co.onProgress($event) !== false);
        ad = (pd_0 && ad);
    } if (("loaded" === en)) {
        var pd_1 = (_co.onLoaded($event) !== false);
        ad = (pd_1 && ad);
    } if (("error" === en)) {
        var pd_2 = (_co.onError($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵm"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]], { src: [0, "src"], mode: [1, "mode"] }, { progress: "progress", loaded: "loaded", error: "error" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryImageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryImageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryImageComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform(_co.state)); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.src; var currVal_2 = _co.mode; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = "success"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "failed"; _ck(_v, 7, 0, currVal_4); var currVal_5 = "loading"; _ck(_v, 9, 0, currVal_5); }, null); }
function View_GalleryImageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-image", [], [[2, "g-image-loaded", null], [2, "g-image-error", null]], null, null, View_GalleryImageComponent_0, RenderType_GalleryImageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryImageComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).imageLoadSuccess; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).imageLoadFailed; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var GalleryImageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-image", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryImageComponent"], View_GalleryImageComponent_Host_0, { mode: "mode", isThumbnail: "isThumbnail", src: "src", loadingIcon: "loadingIcon", loadingError: "loadingError" }, { error: "error" }, []);

var styles_GalleryVideoComponent = [];
var RenderType_GalleryVideoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_GalleryVideoComponent, data: {} });

function View_GalleryVideoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "source", [], [[8, "src", 4], [8, "type", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_v.context.$implicit == null) ? null : _v.context.$implicit.url), ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_v.context.$implicit == null) ? null : _v.context.$implicit.type), ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_GalleryVideoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { video: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["video", 1]], null, 2, "video", [["controls", ""]], [[8, "poster", 4]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.error.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GalleryVideoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.videoSources; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.poster, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_GalleryVideoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-video", [], null, null, null, View_GalleryVideoComponent_0, RenderType_GalleryVideoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryVideoComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GalleryVideoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-video", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryVideoComponent"], View_GalleryVideoComponent_Host_0, { src: "src", poster: "poster", pauseVideo: "pause" }, { error: "error" }, []);

var styles_ɵd = [];
var RenderType_ɵd = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵd, data: {} });

function View_ɵd_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "i", [["aria-label", "Previous"], ["class", "g-nav-prev"]], [[8, "innerHTML", 1]], [[null, "tapClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapClick" === en)) {
        var pd_0 = (_co.action.emit("prev") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵn"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, { tapClick: "tapClick" })], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.navIcon; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵd_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "i", [["aria-label", "Next"], ["class", "g-nav-next"]], [[8, "innerHTML", 1]], [[null, "tapClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapClick" === en)) {
        var pd_0 = (_co.action.emit("next") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵn"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, { tapClick: "tapClick" })], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.navIcon; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵd_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵd_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵd_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.config.loop || _co.state.hasPrev); _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.config.loop || _co.state.hasNext); _ck(_v, 3, 0, currVal_1); }, null); }
function View_ɵd_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-nav", [], null, null, null, View_ɵd_0, RenderType_ɵd)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵd"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵdNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-nav", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵd"], View_ɵd_Host_0, { state: "state", config: "config" }, { action: "action" }, []);

var styles_ɵe = [];
var RenderType_ɵe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵe, data: {} });

function View_ɵe_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "g-dot"]], [[2, "g-dot-active", null], [4, "width", "px"], [4, "height", "px"]], [[null, "tapClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapClick" === en)) {
        var pd_0 = (_co.action.emit(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵn"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, { tapClick: "tapClick" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "div", [["class", "g-dot-inner"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.index === _co.state.currIndex); var currVal_1 = ((_co.config == null) ? null : _co.config.dotsSize); var currVal_2 = ((_co.config == null) ? null : _co.config.dotsSize); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_ɵe_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵe_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state.items; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵe_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-dots", [], null, null, null, View_ɵe_0, RenderType_ɵe)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵe"], [], null, null)], null, null); }
var ɵeNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-dots", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵe"], View_ɵe_Host_0, { state: "state", config: "config" }, { action: "action" }, []);

var styles_ɵf = [];
var RenderType_ɵf = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵf, data: {} });

function View_ɵf_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-thumbs", [], [[4, "height", null], [4, "width", null]], [[null, "action"], [null, "thumbClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.action.emit($event) !== false);
        ad = (pd_0 && ad);
    } if (("thumbClick" === en)) {
        var pd_1 = (_co.thumbClick.emit($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_ɵi_0, RenderType_ɵi)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵi"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], { state: [0, "state"], config: [1, "config"] }, { action: "action", thumbClick: "thumbClick" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.state; var currVal_3 = _co.config; _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).height; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).width; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ɵf_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-nav", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.action.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵd_0, RenderType_ɵd)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵd"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { state: [0, "state"], config: [1, "config"] }, { action: "action" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state; var currVal_1 = _co.config; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ɵf_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-dots", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.action.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ɵe_0, RenderType_ɵe)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵe"], [], { state: [0, "state"], config: [1, "config"] }, { action: "action" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state; var currVal_1 = _co.config; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ɵf_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-counter", [], null, null, null, View_ɵh_0, RenderType_ɵh)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵh"], [], { state: [0, "state"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵf_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 8, "div", [["class", "g-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "gallery-slider", [], null, [[null, "action"], [null, "itemClick"], [null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.action.emit($event) !== false);
        ad = (pd_0 && ad);
    } if (("itemClick" === en)) {
        var pd_1 = (_co.itemClick.emit($event) !== false);
        ad = (pd_1 && ad);
    } if (("error" === en)) {
        var pd_2 = (_co.error.emit($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_ɵg_0, RenderType_ɵg)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵg"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], { state: [0, "state"], config: [1, "config"] }, { action: "action", itemClick: "itemClick", error: "error" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ɵf_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵf_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.config.thumb; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.state; var currVal_2 = _co.config; _ck(_v, 4, 0, currVal_1, currVal_2); var currVal_3 = (_co.config.nav && (_co.state.items.length > 1)); _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.config.dots; _ck(_v, 8, 0, currVal_4); var currVal_5 = _co.config.counter; _ck(_v, 10, 0, currVal_5); }, null); }
function View_ɵf_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-core", [], [[1, "thumbPosition", 0], [1, "slidingDirection", 0], [1, "disableThumb", 0], [1, "imageSize", 0], [1, "dotsPosition", 0], [1, "counterPosition", 0]], null, null, View_ɵf_0, RenderType_ɵf)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵf"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).thumbPosition; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).slidingDirection; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disableThumb; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).imageSize; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).dotsPosition; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).counterPosition; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
var ɵfNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-core", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵf"], View_ɵf_Host_0, { state: "state", config: "config" }, { action: "action", itemClick: "itemClick", thumbClick: "thumbClick", error: "error" }, []);

var styles_ɵg = [];
var RenderType_ɵg = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵg, data: {} });

function View_ɵg_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "gallery-item", [], [[2, "g-active-item", null]], [[null, "tapClick"], [null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapClick" === en)) {
        var pd_0 = (_co.itemClick.emit(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } if (("error" === en)) {
        var pd_1 = (_co.error.emit({ itemIndex: _v.context.index, error: $event }) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_ɵk_0, RenderType_ɵk)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵk"], [], { config: [0, "config"], index: [1, "index"], currIndex: [2, "currIndex"], type: [3, "type"], data: [4, "data"] }, { error: "error" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵn"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, { tapClick: "tapClick" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.config; var currVal_2 = _v.context.index; var currVal_3 = _co.state.currIndex; var currVal_4 = _v.context.$implicit.type; var currVal_5 = _v.context.$implicit.data; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isActive; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵg_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "g-items-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["class", "g-slider"]], [[2, "g-no-transition", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵg_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.zoom; _ck(_v, 1, 0, currVal_0); var currVal_2 = _v.context.$implicit.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.state.items; _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.active; _ck(_v, 2, 0, currVal_1); }); }
function View_ɵg_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵg_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform(_co.sliderState$)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵg_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-slider", [], null, null, null, View_ɵg_0, RenderType_ɵg)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵg"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵgNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-slider", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵg"], View_ɵg_Host_0, { state: "state", config: "config" }, { action: "action", itemClick: "itemClick", error: "error" }, ["*"]);

var styles_ɵh = [];
var RenderType_ɵh = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵh, data: {} });

function View_ɵh_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "g-counter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.state.currIndex + 1) + "/") + _co.state.items.length); _ck(_v, 1, 0, currVal_0); }); }
function View_ɵh_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-counter", [], null, null, null, View_ɵh_0, RenderType_ɵh)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵh"], [], null, null)], null, null); }
var ɵhNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-counter", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵh"], View_ɵh_Host_0, { state: "state" }, {}, []);

var styles_ɵi = [];
var RenderType_ɵi = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵi, data: {} });

function View_ɵi_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "gallery-thumb", [], [[2, "g-active-thumb", null]], [[null, "tapClick"], [null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapClick" === en)) {
        var pd_0 = (_co.thumbClick.emit(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } if (("error" === en)) {
        var pd_1 = (_co.error.emit({ itemIndex: _v.context.index, error: $event }) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_ɵj_0, RenderType_ɵj)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵj"], [], { config: [0, "config"], index: [1, "index"], currIndex: [2, "currIndex"], type: [3, "type"], data: [4, "data"] }, { error: "error" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵn"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tapClickDisabled: [0, "tapClickDisabled"] }, { tapClick: "tapClick" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.config; var currVal_2 = _v.context.index; var currVal_3 = _co.state.currIndex; var currVal_4 = _v.context.$implicit.type; var currVal_5 = _v.context.$implicit.data; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.config.disableThumb; _ck(_v, 2, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isActive; _ck(_v, 0, 0, currVal_0); }); }
function View_ɵi_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "g-thumbs-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "g-slider"]], [[2, "g-no-transition", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵi_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.context.$implicit.style; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.state.items; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.active; _ck(_v, 1, 0, currVal_0); }); }
function View_ɵi_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵi_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).transform(_co.sliderState$)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵi_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-thumbs", [], [[4, "height", null], [4, "width", null]], null, null, View_ɵi_0, RenderType_ɵi)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵi"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).height; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).width; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var ɵiNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-thumbs", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵi"], View_ɵi_Host_0, { state: "state", config: "config" }, { action: "action", thumbClick: "thumbClick", error: "error" }, []);

var styles_ɵj = [];
var RenderType_ɵj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵj, data: {} });

function View_ɵj_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_ɵj_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "g-template g-thumb-template"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵj_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { index: 0, type: 1, data: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.index, _co.type, _co.data); var currVal_1 = _co.config.thumbTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ɵj_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-image", [["mode", "indeterminate"]], [[2, "g-image-loaded", null], [2, "g-image-error", null]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.error.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_GalleryImageComponent_0, RenderType_GalleryImageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryImageComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { mode: [0, "mode"], isThumbnail: [1, "isThumbnail"], src: [2, "src"], loadingIcon: [3, "loadingIcon"], loadingError: [4, "loadingError"] }, { error: "error" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵj_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "indeterminate"; var currVal_3 = true; var currVal_4 = _co.data.thumb; var currVal_5 = _co.config.thumbLoadingIcon; var currVal_6 = _co.config.thumbLoadingError; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.config.thumbTemplate; _ck(_v, 3, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).imageLoadSuccess; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).imageLoadFailed; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ɵj_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-thumb", [], [[2, "g-active-thumb", null]], null, null, View_ɵj_0, RenderType_ɵj)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵj"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isActive; _ck(_v, 0, 0, currVal_0); }); }
var ɵjNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-thumb", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵj"], View_ɵj_Host_0, { config: "config", index: "index", currIndex: "currIndex", type: "type", data: "data" }, { error: "error" }, []);

var styles_ɵk = [];
var RenderType_ɵk = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵk, data: {} });

function View_ɵk_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_ɵk_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "gallery-image", [], [[2, "g-image-loaded", null], [2, "g-image-error", null]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.error.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_GalleryImageComponent_0, RenderType_GalleryImageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryImageComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { mode: [0, "mode"], src: [1, "src"], loadingIcon: [2, "loadingIcon"], loadingError: [3, "loadingError"] }, { error: "error" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "div", [["class", "g-template g-item-template"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵk_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](6, { index: 0, currIndex: 1, type: 2, data: 3 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.config.loadingMode; var currVal_3 = _co.data.src; var currVal_4 = _co.config.loadingIcon; var currVal_5 = _co.config.loadingError; _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _ck(_v, 6, 0, _co.index, _co.currIndex, _co.type, _co.data); var currVal_7 = _co.config.itemTemplate; _ck(_v, 5, 0, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).imageLoadSuccess; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).imageLoadFailed; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ɵk_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-video", [], null, [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.error.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_GalleryVideoComponent_0, RenderType_GalleryVideoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryVideoComponent"], [], { src: [0, "src"], poster: [1, "poster"], pauseVideo: [2, "pauseVideo"] }, { error: "error" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.src; var currVal_1 = _co.data.poster; var currVal_2 = (_co.currIndex !== _co.index); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_ɵk_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-iframe", [], null, null, null, View_GalleryIframeComponent_0, RenderType_GalleryIframeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryIframeComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { src: [0, "src"], pauseVideo: [1, "pauseVideo"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.src; var currVal_1 = (_co.currIndex !== _co.index); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-iframe", [], null, null, null, View_GalleryIframeComponent_0, RenderType_GalleryIframeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["GalleryIframeComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { src: [0, "src"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.src; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵk_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_ɵk_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "g-template g-item-template"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ɵk_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { index: 0, currIndex: 1, type: 2, data: 3 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, _co.index, _co.currIndex, _co.type, _co.data); var currVal_1 = _co.config.itemTemplate; _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_ɵk_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.type; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.Types.Image; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.Types.Video; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.Types.Youtube; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.Types.Iframe; _ck(_v, 9, 0, currVal_4); }, null); }
function View_ɵk_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵk_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.load; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵk_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gallery-item", [], [[2, "g-active-item", null]], null, null, View_ɵk_0, RenderType_ɵk)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵk"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isActive; _ck(_v, 0, 0, currVal_0); }); }
var ɵkNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gallery-item", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵk"], View_ɵk_Host_0, { config: "config", index: "index", currIndex: "currIndex", type: "type", data: "data" }, { error: "error" }, []);

var styles_ɵl = [];
var RenderType_ɵl = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵl, data: {} });

function View_ɵl_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, ":svg:svg", [["class", "radial-progress"], ["focusable", "false"], ["preserveAspectRatio", "xMidYMid meet"]], [[4, "width", "px"], [4, "height", "px"], [1, "viewBox", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, ":svg:circle", [["class", "radial-progress-meter"], ["cx", "50%"], ["cy", "50%"]], [[1, "r", 0], [4, "stroke-width", "%"]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, ":svg:circle", [["class", "radial-progress-value"], ["cx", "50%"], ["cy", "50%"]], [[1, "r", 0], [4, "stroke-dashoffset", "px"], [4, "stroke-dasharray", "px"], [4, "stroke-width", "%"]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.diameter; var currVal_1 = _co.diameter; var currVal_2 = _co.viewBox; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.circleRadius; var currVal_4 = _co.circleStrokeWidth; _ck(_v, 1, 0, currVal_3, currVal_4); var currVal_5 = _co.circleRadius; var currVal_6 = _co.strokeDashOffset; var currVal_7 = _co.strokeCircumference; var currVal_8 = _co.circleStrokeWidth; _ck(_v, 2, 0, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_ɵl_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "radial-progress", [], [[1, "mode", 0], [4, "width", "px"], [4, "height", "px"]], null, null, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).diameter; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).diameter; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var ɵlNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("radial-progress", _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ɵl"], View_ɵl_Host_0, { mode: "mode", value: "value", diameter: "diameter", strokeWidth: "strokeWidth" }, {}, []);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imoble_imoble_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imoble/imoble.component */ "./src/app/imoble/imoble.component.ts");
/* harmony import */ var _hotsite_hotsite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotsite/hotsite.component */ "./src/app/hotsite/hotsite.component.ts");



var routes = [
    { path: '', redirectTo: 'imobles', pathMatch: 'full' },
    { path: 'imobles', component: _imoble_imoble_component__WEBPACK_IMPORTED_MODULE_1__["ImobleComponent"] },
    { path: 'terramundieldorado', component: _hotsite_hotsite_component__WEBPACK_IMPORTED_MODULE_2__["HotsiteComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AppComponent = [];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _imoble_imoble_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imoble/imoble.component.ngfactory */ "./src/app/imoble/imoble.component.ngfactory.js");
/* harmony import */ var _hotsite_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotsite/hotsite.component.ngfactory */ "./src/app/hotsite/hotsite.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nguniversal/common */ "@nguniversal/common");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_common__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "@nicky-lenaers/ngx-scroll-to");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/http */ "@angular/http");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_http__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _imoble_imoble_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./imoble/imoble.component */ "./src/app/imoble/imoble.component.ts");
/* harmony import */ var _hotsite_hotsite_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hotsite/hotsite.component */ "./src/app/hotsite/hotsite.component.ts");
/* harmony import */ var _imoble_imoble_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./imoble/imoble.module */ "./src/app/imoble/imoble.module.ts");
/* harmony import */ var _hotsite_hotsite_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hotsite/hotsite.module */ "./src/app/hotsite/hotsite.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _imoble_imoble_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ImobleComponentNgFactory"], _hotsite_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HotsiteComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_LOADER"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_12__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["ɵa"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nguniversal_common__WEBPACK_IMPORTED_MODULE_15__["ɵTransferHttpCacheInterceptor"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_15__["ɵTransferHttpCacheInterceptor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p2_0) { return [p0_0, new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["ɵc"](p1_0), p2_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["ɵa"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_15__["ɵTransferHttpCacheInterceptor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_17__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["ɵa"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["WINDOW"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["windowFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["DocumentService"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["DocumentService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["NGT_DOCUMENT"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["documentFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["DocumentService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["ɵb"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["LOCAL_STORAGE"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["localStorageFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["BrowserXhr"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["XSRFStrategy"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["XHRBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_19__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["XSRFStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_19__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_19__["Http"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_g"], [_angular_http__WEBPACK_IMPORTED_MODULE_19__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["BEFORE_APP_SERIALIZED"], function (p0_0, p0_1, p0_2) { return [_angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_server_platform_server_b"](p0_0, p0_1, p0_2)]; }, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_20__["ModuleMapNgFactoryLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_20__["MODULE_MAP"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () { return [[{ path: "", redirectTo: "imobles", pathMatch: "full" }, { path: "imobles", component: _imoble_imoble_component__WEBPACK_IMPORTED_MODULE_21__["ImobleComponent"] }, { path: "terramundieldorado", component: _hotsite_hotsite_component__WEBPACK_IMPORTED_MODULE_22__["HotsiteComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _imoble_imoble_module__WEBPACK_IMPORTED_MODULE_23__["ImobleModule"], _imoble_imoble_module__WEBPACK_IMPORTED_MODULE_23__["ImobleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["GalleryModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_14__["GalleryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _hotsite_hotsite_module__WEBPACK_IMPORTED_MODULE_24__["HotsiteModule"], _hotsite_hotsite_module__WEBPACK_IMPORTED_MODULE_24__["HotsiteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_common__WEBPACK_IMPORTED_MODULE_15__["TransferHttpCacheModule"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_15__["TransferHttpCacheModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["NgtUniversalModule"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_18__["NgtUniversalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_26__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_26__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_20__["ModuleMapLoaderModule"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_20__["ModuleMapLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ServerTransferStateModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_9__["ServerTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], "NoopAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_AdvantagesHotsiteComponent, View_AdvantagesHotsiteComponent_0, View_AdvantagesHotsiteComponent_Host_0, AdvantagesHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvantagesHotsiteComponent", function() { return RenderType_AdvantagesHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvantagesHotsiteComponent_0", function() { return View_AdvantagesHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvantagesHotsiteComponent_Host_0", function() { return View_AdvantagesHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvantagesHotsiteComponentNgFactory", function() { return AdvantagesHotsiteComponentNgFactory; });
/* harmony import */ var _advantages_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advantages-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _advantages_hotsite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advantages-hotsite.component */ "./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AdvantagesHotsiteComponent = [_advantages_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AdvantagesHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AdvantagesHotsiteComponent, data: {} });

function View_AdvantagesHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 43, "section", [["class", "section has-text-centered content"], ["id", "advantages"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 42, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "header has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sustentabilidade que voc\u00EA sente no bolso!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [["class", "has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" O conceito Terra Mundi ganhou pr\u00EAmios em todo o Brasil por seu foco em SUSTENTABILIDADE, que combina respeito ao meio ambiente, conforto e economia. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 36, "div", [["class", "icons columns subtitle is-uppercase\tis-mobile is-multiline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "div", [["class", "column is-one-third-desktop is-one-third-tablet is-half-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "assets/img/terramundi/icone_6.svg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Energia solar para "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["elevadores e ilumina\u00E7\u00E3o "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "div", [["class", "column is-one-third-desktop is-one-third-tablet is-half-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "assets/img/terramundi/icone_2.svg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Reaproveitamento de"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00E1gua para uso em limpeza "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["class", "column is-one-third-desktop is-one-third-tablet is-half-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "assets/img/terramundi/icone_3.svg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Aquecimento de \u00E1gua "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["atrav\u00E9s de pain\u00E9is solares "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 5, "div", [["class", "column is-one-third-desktop is-one-third-tablet is-half-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "assets/img/terramundi/icone_1.svg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ar condicionado "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["instalado e sem custo extra "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 5, "div", [["class", "column is-one-third-desktop is-one-third-tablet is-half-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "assets/img/terramundi/icone_4.svg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Porcelanato de "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" alto padr\u00E3o (60X60) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 5, "div", [["class", "column is-one-third-desktop is-one-third-tablet is-half-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "assets/img/terramundi/icone_5.svg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Uma das maiores "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00E1reas verdes da cidade "]))], null, null); }
function View_AdvantagesHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-advantages-hotsite", [], null, null, null, View_AdvantagesHotsiteComponent_0, RenderType_AdvantagesHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _advantages_hotsite_component__WEBPACK_IMPORTED_MODULE_2__["AdvantagesHotsiteComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdvantagesHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-advantages-hotsite", _advantages_hotsite_component__WEBPACK_IMPORTED_MODULE_2__["AdvantagesHotsiteComponent"], View_AdvantagesHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".container[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: 60px; }\n\n.section[_ngcontent-%COMP%] {\n  background: #073846; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #2cd48f;\n  margin-left: auto;\n  margin-right: auto; }\n\n.icons[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n  color: #2cd48f;\n  margin-top: 50px; }\n\n.terraicon[_ngcontent-%COMP%] {\n  margin: 5px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9hZHZhbnRhZ2VzLWhvdHNpdGUvYWR2YW50YWdlcy1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1CQUEwQixFQUFBOztBQUc5QjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob3RzaXRlL2FkdmFudGFnZXMtaG90c2l0ZS9hZHZhbnRhZ2VzLWhvdHNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNywgNTYsIDcwKTtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYmFja2dyb3VuZDogIzJjZDQ4ZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pY29ucyB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMyY2Q0OGY7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRlcnJhaWNvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AdvantagesHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvantagesHotsiteComponent", function() { return AdvantagesHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AdvantagesHotsiteComponent = /** @class */ (function () {
    function AdvantagesHotsiteComponent() {
    }
    AdvantagesHotsiteComponent.prototype.ngOnInit = function () {
    };
    return AdvantagesHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/award-hotsite/award-hotsite.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/core/hotsite/award-hotsite/award-hotsite.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_AwardHotsiteComponent, View_AwardHotsiteComponent_0, View_AwardHotsiteComponent_Host_0, AwardHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AwardHotsiteComponent", function() { return RenderType_AwardHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AwardHotsiteComponent_0", function() { return View_AwardHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AwardHotsiteComponent_Host_0", function() { return View_AwardHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardHotsiteComponentNgFactory", function() { return AwardHotsiteComponentNgFactory; });
/* harmony import */ var _award_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./award-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/award-hotsite/award-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory */ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _award_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./award-hotsite.component */ "./src/app/core/hotsite/award-hotsite/award-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_AwardHotsiteComponent = [_award_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AwardHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AwardHotsiteComponent, data: {} });

function View_AwardHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "section", [["class", "section has-text-centered content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "div", [["class", "container content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pr\u00EAmios NewInc e Conceito Terra Mundi"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 16, "div", [["class", "icons columns subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "column is-one-quarter-desktop is-one-quarter-tablet is-one-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "/assets/img/terramundi/exame.png"], ["width", "50px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Guia Exame Sustentabilidade 2017"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "div", [["class", "column is-one-quarter-desktop is-one-quarter-tablet is-one-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "/assets/img/terramundi/bestworld.jpg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Best for the World 2016"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [["class", "column is-one-quarter-desktop is-one-quarter-tablet is-one-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "/assets/img/terramundi/istoe.svg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pr\u00EAmio ISTO\u00C9 Empresas Conscientes 2014"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "div", [["class", "column is-one-quarter-desktop is-one-quarter-tablet is-one-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "img", [["class", "terraicon"], ["src", "/assets/img/terramundi/santander.jpg"], ["width", "150px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pr\u00EAmio Santander Obra Sustent\u00E1vel 2012 - Maior Nota do Brasil"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 4, "section", [["class", "hero is-large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "container is-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "gallery", [["id", "awards"]], null, null, null, _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GalleryComponent_0"], _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], { id: [0, "id"] }, null)], function (_ck, _v) { var currVal_0 = "awards"; _ck(_v, 26, 0, currVal_0); }, null); }
function View_AwardHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-award-hotsite", [], null, null, null, View_AwardHotsiteComponent_0, RenderType_AwardHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _award_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["AwardHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AwardHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-award-hotsite", _award_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["AwardHotsiteComponent"], View_AwardHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/award-hotsite/award-hotsite.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/hotsite/award-hotsite/award-hotsite.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".separator[_ngcontent-%COMP%] {\n  background: #2cd48f;\n  margin-left: auto;\n  margin-right: auto; }\n\n.icons[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n  margin-top: 50px; }\n\n.bg-image[_ngcontent-%COMP%] {\n  background-position-y: 95%; }\n\ngallery[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 850px; }\n\n@media screen and (max-width: 768px) {\n  gallery[_ngcontent-%COMP%] {\n    width: 350px; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9hd2FyZC1ob3RzaXRlL2F3YXJkLWhvdHNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG90c2l0ZS9hd2FyZC1ob3RzaXRlL2F3YXJkLWhvdHNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VwYXJhdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmNkNDhmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmljb25zIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYmctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOTUlO1xufVxuXG5nYWxsZXJ5IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdhbGxlcnkge1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgfVxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/core/hotsite/award-hotsite/award-hotsite.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/hotsite/award-hotsite/award-hotsite.component.ts ***!
  \***********************************************************************/
/*! exports provided: AwardHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardHotsiteComponent", function() { return AwardHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);


var AwardHotsiteComponent = /** @class */ (function () {
    function AwardHotsiteComponent(gallery) {
        this.gallery = gallery;
        this.galleryId = 'awards';
        this.galleryConfig = {
            loadingIcon: "Loading...",
            imageSize: "cover",
            loadingMode: "determinate",
            loadingStrategy: "preload",
            counter: false,
            thumb: false,
            dots: false
        };
    }
    AwardHotsiteComponent.prototype.ngAfterViewInit = function () {
        this.gallery.ref('awards').setConfig(this.galleryConfig);
    };
    AwardHotsiteComponent.prototype.ngOnInit = function () {
        var galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.addIframe({ src: 'https://www.youtube.com/embed/-R33WW1ivXI' });
    };
    return AwardHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: RenderType_CommonsHotsiteComponent, View_CommonsHotsiteComponent_0, View_CommonsHotsiteComponent_Host_0, CommonsHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CommonsHotsiteComponent", function() { return RenderType_CommonsHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommonsHotsiteComponent_0", function() { return View_CommonsHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommonsHotsiteComponent_Host_0", function() { return View_CommonsHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsHotsiteComponentNgFactory", function() { return CommonsHotsiteComponentNgFactory; });
/* harmony import */ var _commons_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory */ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commons_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commons-hotsite.component */ "./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_CommonsHotsiteComponent = [_commons_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CommonsHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CommonsHotsiteComponent, data: {} });

function View_CommonsHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "section", [["class", "section"], ["id", "commons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "div", [["class", "container is-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 16, "div", [["class", "column content is-medium"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Complexo de lazer de 10 mil m\u00B2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "ul", [["style", "list-style-type:square;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00C1reas verdes com pra\u00E7as"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Espa\u00E7os de relaxamento"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3 piscinas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Diversas quadras de esporte"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sal\u00F5es de festas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Churrasqueiras"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "gallery", [["id", "commons"]], null, null, null, _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GalleryComponent_0"], _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], { id: [0, "id"] }, null)], function (_ck, _v) { var currVal_0 = "commons"; _ck(_v, 22, 0, currVal_0); }, null); }
function View_CommonsHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-commons-hotsite", [], null, null, null, View_CommonsHotsiteComponent_0, RenderType_CommonsHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _commons_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["CommonsHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CommonsHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-commons-hotsite", _commons_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["CommonsHotsiteComponent"], View_CommonsHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.scss.shim.ngstyle.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["gallery[_ngcontent-%COMP%] {\n  height: 600px; }\n\nli[_ngcontent-%COMP%] {\n  margin-bottom: 25px; }\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-bottom: 60px; }\n\n@media screen and (max-width: 768px) {\n  gallery[_ngcontent-%COMP%] {\n    height: 350px; } }\n\n.separator[_ngcontent-%COMP%] {\n  background: #f18d21;\n  margin-left: -10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9jb21tb25zLWhvdHNpdGUvY29tbW9ucy1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG90c2l0ZS9jb21tb25zLWhvdHNpdGUvY29tbW9ucy1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZ2FsbGVyeSB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbn1cblxubGkge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBnYWxsZXJ5IHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG59XG5cbi5zZXBhcmF0b3Ige1xuICAgIGJhY2tncm91bmQ6ICNmMThkMjE7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommonsHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsHotsiteComponent", function() { return CommonsHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);


var CommonsHotsiteComponent = /** @class */ (function () {
    function CommonsHotsiteComponent(gallery) {
        this.gallery = gallery;
        this.galleryId = 'commons';
        this.galleryConfig = {
            loadingIcon: "Loading...",
            imageSize: "cover",
            loadingMode: "determinate",
            loadingStrategy: "preload",
            thumb: false,
            dots: true
        };
    }
    CommonsHotsiteComponent.prototype.ngAfterViewInit = function () {
        this.gallery.ref('commons').setConfig(this.galleryConfig);
    };
    CommonsHotsiteComponent.prototype.ngOnInit = function () {
        var galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.addImage({ src: 'assets/img/terramundi/biribol.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/churrasqueira.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/piscina-infantil.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/praca-lual.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/quadra.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/solarium.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/bar-piscina.jpg' });
        galleryRef.play();
    };
    return CommonsHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: RenderType_ConceptHotsiteComponent, View_ConceptHotsiteComponent_0, View_ConceptHotsiteComponent_Host_0, ConceptHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ConceptHotsiteComponent", function() { return RenderType_ConceptHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConceptHotsiteComponent_0", function() { return View_ConceptHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConceptHotsiteComponent_Host_0", function() { return View_ConceptHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptHotsiteComponentNgFactory", function() { return ConceptHotsiteComponentNgFactory; });
/* harmony import */ var _concept_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concept-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory */ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _concept_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concept-hotsite.component */ "./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ConceptHotsiteComponent = [_concept_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ConceptHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ConceptHotsiteComponent, data: {} });

function View_ConceptHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "section", [["class", "hero is-large"], ["id", "concept"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "column content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "title has-text-white has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["O seu momento de viver o verdadeiro Eldorado!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "gallery", [["id", "concept"]], null, null, null, _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GalleryComponent_0"], _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], { id: [0, "id"] }, null)], function (_ck, _v) { var currVal_0 = "concept"; _ck(_v, 8, 0, currVal_0); }, null); }
function View_ConceptHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-concept-hotsite", [], null, null, null, View_ConceptHotsiteComponent_0, RenderType_ConceptHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _concept_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["ConceptHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ConceptHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-concept-hotsite", _concept_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["ConceptHotsiteComponent"], View_ConceptHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.scss.shim.ngstyle.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".container[_ngcontent-%COMP%] {\n  margin-top: 60px; }\n\n.hero[_ngcontent-%COMP%] {\n  padding: 2em;\n  background: #073846; }\n\nul[_ngcontent-%COMP%] {\n  list-style: none; }\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\\25A0\";\n  color: orange;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em; }\n\ngallery[_ngcontent-%COMP%] {\n  float: none;\n  margin: 0 auto;\n  max-width: 850px; }\n\n@media screen and (max-width: 768px) {\n  gallery[_ngcontent-%COMP%] {\n    height: 350px; } }\n\n.separator[_ngcontent-%COMP%] {\n  background: orange;\n  margin-left: auto;\n  margin-right: auto; }\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 3em; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9jb25jZXB0LWhvdHNpdGUvY29uY2VwdC1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLG1CQUEwQixFQUFBOztBQUc5QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob3RzaXRlL2NvbmNlcHQtaG90c2l0ZS9jb25jZXB0LWhvdHNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uaGVybyB7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYig3LCA1NiwgNzApO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwgbGk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDI1QTBcIjtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xufVxuXG5nYWxsZXJ5IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdhbGxlcnkge1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIH1cbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConceptHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptHotsiteComponent", function() { return ConceptHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);


var ConceptHotsiteComponent = /** @class */ (function () {
    function ConceptHotsiteComponent(gallery) {
        this.gallery = gallery;
        this.galleryId = 'concept';
        this.galleryConfig = {
            loadingIcon: "Loading...",
            imageSize: "cover",
            loadingMode: "determinate",
            loadingStrategy: "preload",
            thumb: false,
            dots: true
        };
    }
    ConceptHotsiteComponent.prototype.ngAfterViewInit = function () {
        this.gallery.ref('concept').setConfig(this.galleryConfig);
    };
    ConceptHotsiteComponent.prototype.ngOnInit = function () {
        var galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.addIframe({ src: 'https://www.youtube.com/embed/XoqJlQlZ4EA' });
    };
    return ConceptHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: RenderType_ContactHotsiteComponent, View_ContactHotsiteComponent_0, View_ContactHotsiteComponent_Host_0, ContactHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactHotsiteComponent", function() { return RenderType_ContactHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactHotsiteComponent_0", function() { return View_ContactHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactHotsiteComponent_Host_0", function() { return View_ContactHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHotsiteComponentNgFactory", function() { return ContactHotsiteComponentNgFactory; });
/* harmony import */ var _contact_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_hotsite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-hotsite.component */ "./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ContactHotsiteComponent = [_contact_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactHotsiteComponent, data: {} });

function View_ContactHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "section", [["class", "section has-text-centered content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fas fa-phone-alt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["0800 024 4344 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fab fa-whatsapp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+55 (62) 99624 2399 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["class", "far fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["contato@terramundieldorado.goiania.br "]))], null, null); }
function View_ContactHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact-hotsite", [], null, null, null, View_ContactHotsiteComponent_0, RenderType_ContactHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_hotsite_component__WEBPACK_IMPORTED_MODULE_2__["ContactHotsiteComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact-hotsite", _contact_hotsite_component__WEBPACK_IMPORTED_MODULE_2__["ContactHotsiteComponent"], View_ContactHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.scss.shim.ngstyle.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".section[_ngcontent-%COMP%] {\n  padding: 1em; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #f17221;\n  margin-left: auto;\n  margin-right: auto; }\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  vertical-align: middle;\n  margin: 10px; }\n\n.column[_ngcontent-%COMP%] {\n  padding: 1em;\n  min-height: 64px;\n  color: white;\n  background-color: #f17221;\n  border-color: #d46a28;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative; }\n\n.column[_ngcontent-%COMP%]:first-child {\n  border-radius: 15px 0 0 15px; }\n\n.column[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 15px 15px 0; }\n\n@media screen and (max-width: 768px) {\n  .column[_ngcontent-%COMP%]:first-child {\n    border-radius: 15px 15px 0 0; }\n  .column[_ngcontent-%COMP%]:last-child {\n    border-radius: 0 0 15px 15px; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9jb250YWN0LWhvdHNpdGUvY29udGFjdC1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSTtJQUNJLDRCQUE0QixFQUFBO0VBR2hDO0lBQ0ksNEJBQTZCLEVBQUEsRUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hvdHNpdGUvY29udGFjdC1ob3RzaXRlL2NvbnRhY3QtaG90c2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi5zZXBhcmF0b3Ige1xuICAgIGJhY2tncm91bmQ6ICNmMTcyMjE7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY29sdW1uIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbWluLWhlaWdodDogNjRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNzIyMTtcbiAgICBib3JkZXItY29sb3I6ICNkNDZhMjg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbHVtbjpmaXJzdC1jaGlsZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xufVxuXG4uY29sdW1uOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sdW1uOmZpcnN0LWNoaWxke1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICAgIH1cblxuICAgIC5jb2x1bW46bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweCA7XG4gICAgfVxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHotsiteComponent", function() { return ContactHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ContactHotsiteComponent = /** @class */ (function () {
    function ContactHotsiteComponent() {
    }
    ContactHotsiteComponent.prototype.ngOnInit = function () {
    };
    return ContactHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: RenderType_DecoratedHotsiteComponent, View_DecoratedHotsiteComponent_0, View_DecoratedHotsiteComponent_Host_0, DecoratedHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DecoratedHotsiteComponent", function() { return RenderType_DecoratedHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DecoratedHotsiteComponent_0", function() { return View_DecoratedHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DecoratedHotsiteComponent_Host_0", function() { return View_DecoratedHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratedHotsiteComponentNgFactory", function() { return DecoratedHotsiteComponentNgFactory; });
/* harmony import */ var _decorated_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorated-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory */ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _decorated_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorated-hotsite.component */ "./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DecoratedHotsiteComponent = [_decorated_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DecoratedHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DecoratedHotsiteComponent, data: {} });

function View_DecoratedHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { decoratedModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 16, "section", [["class", "hero is-large has-text-centered"], ["id", "decorated"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [["class", "hero-head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "div", [["class", "container content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Espa\u00E7o Interno"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "p", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" As plantas do Terra Mundi Eldorado foram projetadas para garantir o melhor aproveitamento do espa\u00E7o e o conforto em todos os c\u00F4modos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Na entrega das chaves voc\u00EA j\u00E1 ter\u00E1 ar condicionado instalado, sem custo adicional, nos quartos e salas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Al\u00E9m disso, os pisos ser\u00E3o de porcelanato 60x60, conferindo requinte e sofistica\u00E7\u00E3o em cada detalhe do acabamento. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "a", [["class", "visit button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Agende AGORA visita ao apartamento decorado\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["class", "fas fa-angle-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "gallery", [["id", "decorated"]], null, null, null, _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GalleryComponent_0"], _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, [[1, 0], ["decoratedModal", 1]], null, 4, "div", [["class", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "div", [["class", "modal-background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "p", [["class", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "button", [["aria-label", "close"], ["class", "modal-close is-large"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var currVal_0 = "decorated"; _ck(_v, 17, 0, currVal_0); }, null); }
function View_DecoratedHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-decorated-hotsite", [], null, null, null, View_DecoratedHotsiteComponent_0, RenderType_DecoratedHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _decorated_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["DecoratedHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DecoratedHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-decorated-hotsite", _decorated_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["DecoratedHotsiteComponent"], View_DecoratedHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.scss.shim.ngstyle.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["gallery[_ngcontent-%COMP%] {\n  height: 750px; }\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 30px; }\n\n@media screen and (max-width: 768px) {\n  gallery[_ngcontent-%COMP%] {\n    height: 350px; }\n  .visit[_ngcontent-%COMP%] {\n    font-size: 0.8em; } }\n\n.hero-head[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n  padding: 2em; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #2cd48f;\n  margin-left: auto;\n  margin-right: auto; }\n\n.visit[_ngcontent-%COMP%] {\n  background-color: #d1301b;\n  font-weight: bold;\n  border: 0;\n  z-index: 2;\n  height: 82px;\n  position: absolute;\n  left: 0;\n  border-radius: 0;\n  color: white;\n  box-shadow: -10px 10px #a01d0c; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9kZWNvcmF0ZWQtaG90c2l0ZS9kZWNvcmF0ZWQtaG90c2l0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0k7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFHTDtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG90c2l0ZS9kZWNvcmF0ZWQtaG90c2l0ZS9kZWNvcmF0ZWQtaG90c2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImdhbGxlcnkge1xuICAgIGhlaWdodDogNzUwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ2FsbGVyeSB7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgfVxuXG4gICAgLnZpc2l0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG59XG5cbi5oZXJvLWhlYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uc2VwYXJhdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmNkNDhmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnZpc2l0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzMDFiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogODJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAtMTBweCAxMHB4ICNhMDFkMGM7XG5cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DecoratedHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratedHotsiteComponent", function() { return DecoratedHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);


var DecoratedHotsiteComponent = /** @class */ (function () {
    function DecoratedHotsiteComponent(gallery) {
        this.gallery = gallery;
        this.galleryId = 'decorated';
        this.galleryConfig = {
            loadingIcon: "Loading...",
            imageSize: "cover",
            loadingMode: "determinate",
            loadingStrategy: "preload",
            thumb: false,
            dots: true
        };
    }
    DecoratedHotsiteComponent.prototype.ngAfterViewInit = function () {
        this.gallery.ref('decorated').setConfig(this.galleryConfig);
    };
    DecoratedHotsiteComponent.prototype.ngOnInit = function () {
        var galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna1.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna2.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna3.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna4.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna5.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/internas/interna6.jpg' });
        galleryRef.play();
    };
    DecoratedHotsiteComponent.prototype.openModal = function () {
        var _this = this;
        this.decoratedModal.nativeElement.classList.add('is-active');
        this.decoratedModal.nativeElement.addEventListener('click', function (e) {
            if (e.target.className === 'modal-background') {
                _this.decoratedModal.nativeElement.classList.remove('is-active');
            }
        });
    };
    DecoratedHotsiteComponent.prototype.closeModal = function () {
        this.decoratedModal.nativeElement.classList.remove('is-active');
    };
    return DecoratedHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_FooterHotsiteComponent, View_FooterHotsiteComponent_0, View_FooterHotsiteComponent_Host_0, FooterHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterHotsiteComponent", function() { return RenderType_FooterHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterHotsiteComponent_0", function() { return View_FooterHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterHotsiteComponent_Host_0", function() { return View_FooterHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterHotsiteComponentNgFactory", function() { return FooterHotsiteComponentNgFactory; });
/* harmony import */ var _footer_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_hotsite_contact_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-hotsite/contact-hotsite.component.ngfactory */ "./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.ngfactory.js");
/* harmony import */ var _contact_hotsite_contact_hotsite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-hotsite/contact-hotsite.component */ "./src/app/core/hotsite/contact-hotsite/contact-hotsite.component.ts");
/* harmony import */ var _footer_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer-hotsite.component */ "./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FooterHotsiteComponent = [_footer_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterHotsiteComponent, data: {} });

function View_FooterHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "footer", [["class", "footer"], ["id", "contact"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "container content has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contato"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-contact-hotsite", [], null, null, null, _contact_hotsite_contact_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ContactHotsiteComponent_0"], _contact_hotsite_contact_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ContactHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _contact_hotsite_contact_hotsite_component__WEBPACK_IMPORTED_MODULE_3__["ContactHotsiteComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Powered by"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "a", [["routerLink", "/imoble"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["class", "logo"], ["src", "/assets/img/logo.png"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_FooterHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer-hotsite", [], null, null, null, View_FooterHotsiteComponent_0, RenderType_FooterHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["FooterHotsiteComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer-hotsite", _footer_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["FooterHotsiteComponent"], View_FooterHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".footer[_ngcontent-%COMP%] {\n  background: none;\n  background-image: url(\"/assets/img/footer.png\");\n  background-position: bottom;\n  background-repeat: repeat-x;\n  background-size: 200px; }\n\n.container[_ngcontent-%COMP%] {\n  padding: 1em; }\n\n.icon[_ngcontent-%COMP%] {\n  color: #f17221;\n  font-size: 32px;\n  vertical-align: middle;\n  margin: 5px; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #f17221;\n  margin-left: auto;\n  margin-right: auto; }\n\n.logo[_ngcontent-%COMP%] {\n  width: 150px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9mb290ZXItaG90c2l0ZS9mb290ZXItaG90c2l0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hvdHNpdGUvZm9vdGVyLWhvdHNpdGUvZm9vdGVyLWhvdHNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Zvb3Rlci5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xufVxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmljb24ge1xuICAgIGNvbG9yOiAjZjE3MjIxO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uc2VwYXJhdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjE3MjIxO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiAxNTBweDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.ts ***!
  \*************************************************************************/
/*! exports provided: FooterHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterHotsiteComponent", function() { return FooterHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var FooterHotsiteComponent = /** @class */ (function () {
    function FooterHotsiteComponent() {
    }
    FooterHotsiteComponent.prototype.ngOnInit = function () {
    };
    return FooterHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: RenderType_GalleryHotsiteComponent, View_GalleryHotsiteComponent_0, View_GalleryHotsiteComponent_Host_0, GalleryHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GalleryHotsiteComponent", function() { return RenderType_GalleryHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryHotsiteComponent_0", function() { return View_GalleryHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryHotsiteComponent_Host_0", function() { return View_GalleryHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryHotsiteComponentNgFactory", function() { return GalleryHotsiteComponentNgFactory; });
/* harmony import */ var _gallery_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory */ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gallery_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery-hotsite.component */ "./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_GalleryHotsiteComponent = [_gallery_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_GalleryHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_GalleryHotsiteComponent, data: {} });

function View_GalleryHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { galleryModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 46, "section", [["class", "section"], ["id", "gallery"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 45, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "gallery", [["id", "first"]], null, null, null, _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GalleryComponent_0"], _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 41, "div", [["class", "column content is-medium"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h1", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Por que o Terra Mundi"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 35, "ol", [["type", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Porque \u00E9 o "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00DALTIMO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" empreendimento do Bairro Eldorado. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["VALORIZA\u00C7\u00C3O ACIMA DA M\u00C9DIA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" para seu investimento!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Por que a efici\u00EAncia de \u00E1gua e energia garantem "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SUSTENTABILIDADE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" com "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TAXA DE CONDOM\u00CDNIO REDUZIDA!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Porque \u00E9 um condom\u00EDnio "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLUBE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". Natureza e lazer sem sair de casa!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Porque todos os apartamentos s\u00E3o entregues com "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AR CONDICIONADO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Porque a entrada \u00E9 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FACILITADA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" com planos de pagamento personalizados!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Porque se voc\u00EA comprar agora poder\u00E1 escolher as "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MELHORES UNIDADES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "a", [["class", "chat button is-large"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Receba mais detalhes\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 0, "i", [["class", "fas fa-angle-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, [[1, 0], ["galleryModal", 1]], null, 4, "div", [["class", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 0, "div", [["class", "modal-background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "p", [["class", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 0, "button", [["aria-label", "close"], ["class", "modal-close is-large"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var currVal_0 = "first"; _ck(_v, 5, 0, currVal_0); }, null); }
function View_GalleryHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-gallery-hotsite", [], null, null, null, View_GalleryHotsiteComponent_0, RenderType_GalleryHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _gallery_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["GalleryHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GalleryHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-gallery-hotsite", _gallery_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["GalleryHotsiteComponent"], View_GalleryHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.scss.shim.ngstyle.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["gallery[_ngcontent-%COMP%] {\n  height: 600px; }\n\n@media screen and (max-width: 768px) {\n  gallery[_ngcontent-%COMP%] {\n    height: 350px; } }\n\n.columns[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.chat[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 2em;\n  background-color: #f88842;\n  border: 0;\n  font-weight: bold;\n  height: 82px;\n  position: absolute;\n  right: 0;\n  border-radius: 0;\n  color: white;\n  box-shadow: 10px 10px #f17221; }\n\n.chat[_ngcontent-%COMP%]:hover {\n  color: white; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9nYWxsZXJ5LWhvdHNpdGUvZ2FsbGVyeS1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hvdHNpdGUvZ2FsbGVyeS1ob3RzaXRlL2dhbGxlcnktaG90c2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImdhbGxlcnkge1xuICAgIGhlaWdodDogNjAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ2FsbGVyeSB7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgfVxufVxuXG4uY29sdW1ucyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY2hhdCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ODg0MjtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiA4MnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2YxNzIyMTtcbn1cblxuLmNoYXQ6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.ts ***!
  \***************************************************************************/
/*! exports provided: GalleryHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryHotsiteComponent", function() { return GalleryHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);


var GalleryHotsiteComponent = /** @class */ (function () {
    function GalleryHotsiteComponent(gallery) {
        this.gallery = gallery;
        this.galleryId = 'first';
        this.galleryConfig = {
            loadingIcon: "Loading...",
            imageSize: "cover",
            loadingMode: "determinate",
            loadingStrategy: "preload",
            thumb: false,
            dots: true
        };
    }
    GalleryHotsiteComponent.prototype.ngAfterViewInit = function () {
        this.gallery.ref('first').setConfig(this.galleryConfig);
    };
    GalleryHotsiteComponent.prototype.ngOnInit = function () {
        var galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.addImage({ src: 'assets/img/terramundi/passaro.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/fachada-noite.jpg' });
        galleryRef.addImage({ src: 'assets/img/terramundi/piscina-adulto.jpg' });
        galleryRef.play();
    };
    GalleryHotsiteComponent.prototype.openModal = function () {
        var _this = this;
        this.galleryModal.nativeElement.classList.add('is-active');
        this.galleryModal.nativeElement.addEventListener('click', function (e) {
            if (e.target.className === 'modal-background') {
                _this.galleryModal.nativeElement.classList.remove('is-active');
            }
        });
    };
    GalleryHotsiteComponent.prototype.closeModal = function () {
        this.galleryModal.nativeElement.classList.remove('is-active');
    };
    return GalleryHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_HeroHotsiteComponent, View_HeroHotsiteComponent_0, View_HeroHotsiteComponent_Host_0, HeroHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeroHotsiteComponent", function() { return RenderType_HeroHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroHotsiteComponent_0", function() { return View_HeroHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroHotsiteComponent_Host_0", function() { return View_HeroHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroHotsiteComponentNgFactory", function() { return HeroHotsiteComponentNgFactory; });
/* harmony import */ var _hero_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_hotsite_navigation_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation-hotsite/navigation-hotsite.component.ngfactory */ "./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.ngfactory.js");
/* harmony import */ var _navigation_hotsite_navigation_hotsite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation-hotsite/navigation-hotsite.component */ "./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hero_hotsite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-hotsite.component */ "./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_HeroHotsiteComponent = [_hero_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeroHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeroHotsiteComponent, data: {} });

function View_HeroHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "section", [["class", "hero is-fullheight-with-navbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "hero-head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-navigation-hotsite", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _navigation_hotsite_navigation_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NavigationHotsiteComponent_0"], _navigation_hotsite_navigation_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NavigationHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _navigation_hotsite_navigation_hotsite_component__WEBPACK_IMPORTED_MODULE_3__["NavigationHotsiteComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["WINDOW"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "hero-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h1", [["class", "title animated fadeInUp is-uppercase has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Terra Mundi Eldorado "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h1", [["class", "subtitle animated fadeInUp is-uppercase has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Conceito premiado e hist\u00F3rico de sucesso! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "h2", [["class", "subtitle animated fadeInUp has-text-white is-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2 e 3 Dormit\u00F3rios "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Complexo de lazer de 10 mil m\u00B2 "]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_HeroHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hero-hotsite", [], null, null, null, View_HeroHotsiteComponent_0, RenderType_HeroHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _hero_hotsite_component__WEBPACK_IMPORTED_MODULE_6__["HeroHotsiteComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeroHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-hero-hotsite", _hero_hotsite_component__WEBPACK_IMPORTED_MODULE_6__["HeroHotsiteComponent"], View_HeroHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.scss.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".brand[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  margin-left: 2em; }\n\n.hero[_ngcontent-%COMP%] {\n  background: #000;\n  background-image: linear-gradient(to right, #031c23, rgba(0, 0, 0, 0)), url(\"/assets/img/terramundi/fachada-dia.jpg\");\n  background-position: center;\n  background-position-y: 90%;\n  background-size: cover;\n  min-height: 100vh; }\n\n.title[_ngcontent-%COMP%] {\n  font-size: 3.5em; }\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 300; }\n\n.button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 15px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9oZXJvLWhvdHNpdGUvaGVyby1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixxSEFBZ0k7RUFDaEksMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob3RzaXRlL2hlcm8taG90c2l0ZS9oZXJvLWhvdHNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmQge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG4uaGVybyB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMywgMjgsIDM1LCAxKSwgcmdiYSgwLCAwLCAwLCAwKSksIHVybCgnL2Fzc2V0cy9pbWcvdGVycmFtdW5kaS9mYWNoYWRhLWRpYS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA5MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMuNWVtO1xufVxuXG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idXR0b24gaXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeroHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroHotsiteComponent", function() { return HeroHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var HeroHotsiteComponent = /** @class */ (function () {
    function HeroHotsiteComponent() {
    }
    HeroHotsiteComponent.prototype.ngOnInit = function () {
    };
    return HeroHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! exports provided: RenderType_LocalizationHotsiteComponent, View_LocalizationHotsiteComponent_0, View_LocalizationHotsiteComponent_Host_0, LocalizationHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LocalizationHotsiteComponent", function() { return RenderType_LocalizationHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LocalizationHotsiteComponent_0", function() { return View_LocalizationHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LocalizationHotsiteComponent_Host_0", function() { return View_LocalizationHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationHotsiteComponentNgFactory", function() { return LocalizationHotsiteComponentNgFactory; });
/* harmony import */ var _localization_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localization-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory */ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _localization_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localization-hotsite.component */ "./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_LocalizationHotsiteComponent = [_localization_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LocalizationHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LocalizationHotsiteComponent, data: {} });

function View_LocalizationHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "section", [["class", "hero is-large has-text-centered"], ["id", "localization"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "hero-head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "container content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "header has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bairro Eldorado: infraestrutura, seguran\u00E7a e tranquilidade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [["class", "has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" O Eldorado \u00E9 um bairro planejado, por isso conta com s\u00F3lida presen\u00E7a de com\u00E9rcios, escolas, restaurantes, \u00E1reas de lazer e ruas amplas e arborizadas. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 15, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "gallery", [["id", "localization"]], null, null, null, _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GalleryComponent_0"], _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 11, "div", [["class", "column content is-medium"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h1", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pr\u00F3ximo do Terra Mundi Eldorado:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "ul", [["style", "list-style-type:square;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Shopping Plaza D'oro"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Parque Bernardo Elis (Macambira) - 76 mil m\u00B2 de \u00E1rea verde"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Supermercados Store, Extra, Assa\u00ED e Carrefour"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Restaurantes diversos, incluindo McDonald's"]))], function (_ck, _v) { var currVal_0 = "localization"; _ck(_v, 11, 0, currVal_0); }, null); }
function View_LocalizationHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-localization-hotsite", [], null, null, null, View_LocalizationHotsiteComponent_0, RenderType_LocalizationHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _localization_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["LocalizationHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LocalizationHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-localization-hotsite", _localization_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["LocalizationHotsiteComponent"], View_LocalizationHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["gallery[_ngcontent-%COMP%] {\n  height: 450px; }\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 80px; }\n\n@media screen and (max-width: 768px) {\n  gallery[_ngcontent-%COMP%] {\n    height: 300px; } }\n\n.columns[_ngcontent-%COMP%] {\n  padding: 1.8em; }\n\n.hero-head[_ngcontent-%COMP%] {\n  padding: 3.5em;\n  background: #000;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"/assets/img/terramundi/aerea.jpg\");\n  background-position: center;\n  background-size: cover; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #2cd48f;\n  margin-left: auto;\n  margin-right: auto; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9sb2NhbGl6YXRpb24taG90c2l0ZS9sb2NhbGl6YXRpb24taG90c2l0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCwyQkFBMkI7RUFDM0Isc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG90c2l0ZS9sb2NhbGl6YXRpb24taG90c2l0ZS9sb2NhbGl6YXRpb24taG90c2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImdhbGxlcnkge1xuICAgIGhlaWdodDogNDUwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ2FsbGVyeSB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufVxuXG4uY29sdW1ucyB7XG4gICAgcGFkZGluZzogMS44ZW07XG59XG5cbi5oZXJvLWhlYWQge1xuICAgIHBhZGRpbmc6IDMuNWVtO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybCgnL2Fzc2V0cy9pbWcvdGVycmFtdW5kaS9hZXJlYS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYmFja2dyb3VuZDogIzJjZDQ4ZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LocalizationHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationHotsiteComponent", function() { return LocalizationHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);


var LocalizationHotsiteComponent = /** @class */ (function () {
    function LocalizationHotsiteComponent(gallery) {
        this.gallery = gallery;
        this.galleryId = 'localization';
        this.galleryConfig = {
            loadingIcon: "Loading...",
            imageSize: "cover",
            loadingMode: "determinate",
            loadingStrategy: "preload",
            thumb: false,
            dots: true
        };
    }
    LocalizationHotsiteComponent.prototype.ngAfterViewInit = function () {
        this.gallery.ref('localization').setConfig(this.galleryConfig);
    };
    LocalizationHotsiteComponent.prototype.ngOnInit = function () {
        var galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.addImage({ src: 'assets/img/terramundi/mapa.png' });
        galleryRef.addIframe({ src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2778452659422!2d-49.323500482947374!3d-16.71298290442426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6f5953faabd%3A0xfb19168a0b33ea6!2sTerra+Mundi+Eldorado!5e0!3m2!1spt-BR!2sbr!4v1559494037863!5m2!1spt-BR!2sbr' });
    };
    return LocalizationHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_NavigationHotsiteComponent, View_NavigationHotsiteComponent_0, View_NavigationHotsiteComponent_Host_0, NavigationHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NavigationHotsiteComponent", function() { return RenderType_NavigationHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavigationHotsiteComponent_0", function() { return View_NavigationHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavigationHotsiteComponent_Host_0", function() { return View_NavigationHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationHotsiteComponentNgFactory", function() { return NavigationHotsiteComponentNgFactory; });
/* harmony import */ var _navigation_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "@nicky-lenaers/ngx-scroll-to");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigation_hotsite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-hotsite.component */ "./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_NavigationHotsiteComponent = [_navigation_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NavigationHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NavigationHotsiteComponent, data: {} });

function View_NavigationHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { navBurger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { navMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 33, "nav", [["aria-label", "main navigation"], ["class", "navbar is-fixed-top is-transparent"], ["id", "navbar"], ["role", "navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "navbar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "brand white"], ["id", "brand"], ["src", "assets/img/terramundi/logo2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, [[1, 0], ["navBurger", 1]], null, 3, "a", [["aria-expanded", "false"], ["aria-label", "menu"], ["class", "navbar-burger burger"], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleNavbar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, [[2, 0], ["navMenu", 1]], null, 26, "div", [["class", "navbar-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 25, "div", [["class", "navbar-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 24, "div", [["class", "navbar-item is-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Oportunidade "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Sustentabilidade "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lazer "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Espa\u00E7o Interno "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Plantas "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Localiza\u00E7\u00E3o "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Conceito "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 2, "a", [["class", "navbar-item"], ["ngx-scroll-to", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4210688, null, 0, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngxScrollTo: [0, "ngxScrollTo"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Contato "]))], function (_ck, _v) { var currVal_0 = "#gallery"; _ck(_v, 13, 0, currVal_0); var currVal_1 = "#advantages"; _ck(_v, 16, 0, currVal_1); var currVal_2 = "#commons"; _ck(_v, 19, 0, currVal_2); var currVal_3 = "#decorated"; _ck(_v, 22, 0, currVal_3); var currVal_4 = "#plants"; _ck(_v, 25, 0, currVal_4); var currVal_5 = "#localization"; _ck(_v, 28, 0, currVal_5); var currVal_6 = "#concept"; _ck(_v, 31, 0, currVal_6); var currVal_7 = "#contact"; _ck(_v, 34, 0, currVal_7); }, null); }
function View_NavigationHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-navigation-hotsite", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NavigationHotsiteComponent_0, RenderType_NavigationHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _navigation_hotsite_component__WEBPACK_IMPORTED_MODULE_3__["NavigationHotsiteComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["WINDOW"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NavigationHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-navigation-hotsite", _navigation_hotsite_component__WEBPACK_IMPORTED_MODULE_3__["NavigationHotsiteComponent"], View_NavigationHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".navbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  z-index: 10;\n  transition: background-color .5s ease 0s; }\n\na.navbar-item[_ngcontent-%COMP%] {\n  padding: 1em;\n  color: white; }\n\n.brand[_ngcontent-%COMP%] {\n  padding: 1em; }\n\n@media screen and (max-width: 768px) {\n  .brand[_ngcontent-%COMP%] {\n    padding: .2em; }\n  .navbar[_ngcontent-%COMP%] {\n    background-color: white;\n    border: none;\n    z-index: 100;\n    transition: background-color .5s ease 0s; }\n  a.navbar-item[_ngcontent-%COMP%] {\n    padding: 1em;\n    color: black; } }\n\n.scroll[_ngcontent-%COMP%] {\n  background-color: white;\n  transition: background .5s ease-in-out, opacity .5s ease; }\n\n.white[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0) invert(1);\n  filter: brightness(0) invert(1); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9uYXZpZ2F0aW9uLWhvdHNpdGUvbmF2aWdhdGlvbi1ob3RzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBRUk7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWix3Q0FBd0MsRUFBQTtFQUc1QztJQUNJLFlBQVk7SUFDWixZQUFZLEVBQUEsRUFDZjs7QUFJTDtFQUNJLHVCQUF1QjtFQUd2Qix3REFBd0QsRUFBQTs7QUFHNUQ7RUFDSSx1Q0FBdUM7RUFDdkMsK0JBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hvdHNpdGUvbmF2aWdhdGlvbi1ob3RzaXRlL25hdmlnYXRpb24taG90c2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlIDBzO1xufVxuXG5hLm5hdmJhci1pdGVtIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnJhbmQge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblxuICAgIC5icmFuZCB7XG4gICAgICAgIHBhZGRpbmc6IC4yZW07XG4gICAgfVxuXG4gICAgLm5hdmJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZSAwcztcbiAgICB9XG4gICAgXG4gICAgYS5uYXZiYXItaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICBcbn1cblxuLnNjcm9sbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLWluLW91dCwgb3BhY2l0eSAuNXMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IC41cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IC41cyBlYXNlO1xufVxuXG4ud2hpdGUge1xuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xuXG59Il19 */"];



/***/ }),

/***/ "./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core/hotsite/navigation-hotsite/navigation-hotsite.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NavigationHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationHotsiteComponent", function() { return NavigationHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);


var NavigationHotsiteComponent = /** @class */ (function () {
    function NavigationHotsiteComponent(window, document, vps) {
        this.window = window;
        this.vps = vps;
    }
    NavigationHotsiteComponent.prototype.ngOnInit = function () {
        if (this.window.innerWidth < 768) {
            var logo = document.getElementById('brand');
            logo.classList.add('black');
        }
    };
    NavigationHotsiteComponent.prototype.onWindowScroll = function (e) {
        if (this.window.pageYOffset > 50) {
            var element_1 = document.getElementById('navbar');
            var logo = document.getElementById('brand');
            element_1.classList.add('scroll');
            logo.classList.remove('white');
            var elements = document.getElementsByClassName('navbar-item');
            for (var index = 0; index < elements.length; index++) {
                var element_2 = elements[index];
                element_2.classList.add('has-text-black');
            }
        }
        else {
            var element_3 = document.getElementById('navbar');
            var logo = document.getElementById('brand');
            if (this.window.innerWidth > 768) {
                logo.classList.add('white');
            }
            element_3.classList.remove('scroll');
            var elements = document.getElementsByClassName('navbar-item');
            for (var index = 0; index < elements.length; index++) {
                var element_4 = elements[index];
                element_4.classList.remove('has-text-black');
            }
        }
    };
    NavigationHotsiteComponent.prototype.toggleNavbar = function () {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    };
    return NavigationHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/others-hotsite/others-hotsite.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/core/hotsite/others-hotsite/others-hotsite.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_OthersHotsiteComponent, View_OthersHotsiteComponent_0, View_OthersHotsiteComponent_Host_0, OthersHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_OthersHotsiteComponent", function() { return RenderType_OthersHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_OthersHotsiteComponent_0", function() { return View_OthersHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_OthersHotsiteComponent_Host_0", function() { return View_OthersHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersHotsiteComponentNgFactory", function() { return OthersHotsiteComponentNgFactory; });
/* harmony import */ var _others_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./others-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/others-hotsite/others-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _others_hotsite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./others-hotsite.component */ "./src/app/core/hotsite/others-hotsite/others-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_OthersHotsiteComponent = [_others_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_OthersHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_OthersHotsiteComponent, data: {} });

function View_OthersHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { othersModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "section", [["class", "section has-text-centered content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Outros empreendimentos Terra Mundi"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "curtain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "curtain__wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--left white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["src", "/assets/img/terramundi/santos.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2014 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "curtain__prize image"], ["style", "background-image: url('/assets/img/terramundi/fachada-dia.jpg')"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "a", [["class", "button is-primary "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["100% VENDIDO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--right red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "a", [["class", "button is-primary is-inverted is-outlined"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mais Informa\u00E7\u00F5es"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 10, "div", [["class", "curtain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 9, "div", [["class", "curtain__wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--left white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "img", [["src", "/assets/img/terramundi/america.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2016 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "curtain__prize image"], ["style", "background-image: url('/assets/img/terramundi/fachada-dia.jpg')"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "a", [["class", "button is-primary "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["100% VENDIDO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--right red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "a", [["class", "button is-primary is-inverted is-outlined"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mais Informa\u00E7\u00F5es"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 10, "div", [["class", "curtain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 9, "div", [["class", "curtain__wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--left white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "img", [["src", "/assets/img/terramundi/cascavel.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2017 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "div", [["class", "curtain__prize image"], ["style", "background-image: url('/assets/img/terramundi/fachada-dia.jpg')"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "a", [["class", "button is-link "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unidades Dispon\u00EDveis"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--right blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "a", [["class", "button is-primary is-inverted is-outlined"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mais Informa\u00E7\u00F5es"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 10, "div", [["class", "curtain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 9, "div", [["class", "curtain__wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--left white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "img", [["src", "/assets/img/terramundi/office.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2017 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "div", [["class", "curtain__prize image"], ["style", "background-image: url('/assets/img/terramundi/fachada-dia.jpg')"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "a", [["class", "button is-link "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unidades Dispon\u00EDveis"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--right blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "a", [["class", "button is-primary is-inverted is-outlined"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mais Informa\u00E7\u00F5es"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 10, "div", [["class", "curtain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 9, "div", [["class", "curtain__wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--left white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 0, "img", [["src", "/assets/img/terramundi/one.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2021 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "div", [["class", "curtain__prize image"], ["style", "background-image: url('/assets/img/terramundi/fachada-dia.jpg')"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "a", [["class", "button is-warning "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Em Constru\u00E7\u00E3o"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--right orange"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "a", [["class", "button is-primary is-inverted is-outlined"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mais Informa\u00E7\u00F5es"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 10, "div", [["class", "curtain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 9, "div", [["class", "curtain__wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--left white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 0, "img", [["src", "/assets/img/terramundi/anapolis.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2021 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "div", [["class", "curtain__prize image"], ["style", "background-image: url('/assets/img/terramundi/fachada-dia.jpg')"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "a", [["class", "button is-warning "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Em Constru\u00E7\u00E3o"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 2, "div", [["class", "curtain__panel curtain__panel--right orange"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "a", [["class", "button is-primary is-inverted is-outlined"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mais Informa\u00E7\u00F5es"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, [[1, 0], ["othersModal", 1]], null, 5, "div", [["class", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 0, "div", [["class", "modal-background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "p", [["class", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "iframe", [["allow", "geolocation; microphone; camera"], ["allowfullscreen", "true"], ["allowtransparency", "true"], ["frameborder", "0"], ["id", "JotFormIFrame-91597625637673"], ["scrolling", "no"], ["src", "https://form.jotformz.com/91597625637673"], ["style", "width: 1px;\n      min-width: 100%;\n      height:539px;\n      border:none;"], ["title", "Terra Mundi Eldorado - CTA 4 - Outros Terra Mundi"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 0, "button", [["aria-label", "close"], ["class", "modal-close is-large"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_OthersHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-others-hotsite", [], null, null, null, View_OthersHotsiteComponent_0, RenderType_OthersHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _others_hotsite_component__WEBPACK_IMPORTED_MODULE_2__["OthersHotsiteComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OthersHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-others-hotsite", _others_hotsite_component__WEBPACK_IMPORTED_MODULE_2__["OthersHotsiteComponent"], View_OthersHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/others-hotsite/others-hotsite.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/hotsite/others-hotsite/others-hotsite.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".separator[_ngcontent-%COMP%] {\n  background: #2cd48f;\n  margin-left: auto;\n  margin-right: auto; }\n\n.curtain[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  overflow: hidden; }\n\n.curtain__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%; }\n\n.curtain__panel[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 250px;\n  position: relative;\n  z-index: 2;\n  transition: all .5s ease-out; }\n\n.curtain[_ngcontent-%COMP%]:hover   .curtain__panel[_ngcontent-%COMP%] {\n  width: 35%; }\n\n@media screen and (max-width: 768px) {\n  .curtain__panel[_ngcontent-%COMP%] {\n    width: 45%; }\n  .curtain[_ngcontent-%COMP%]:hover   .curtain__panel[_ngcontent-%COMP%] {\n    width: 45%; } }\n\n.curtain__panel--left[_ngcontent-%COMP%] {\n  float: left;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.curtain__panel--left.white[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent transparent white;\n  position: absolute;\n  right: -45px; }\n\n.curtain__panel--left.red[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent transparent #d1301b;\n  position: absolute;\n  right: -45px; }\n\n.curtain__panel--left.blue[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent transparent #1e9cfc;\n  position: absolute;\n  right: -45px; }\n\n.curtain__panel--left.orange[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent transparent #f88842;\n  position: absolute;\n  right: -45px; }\n\n.curtain__panel--right.white[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent white transparent;\n  position: absolute;\n  left: -45px; }\n\n.curtain__panel--right.red[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent #d1301b transparent;\n  position: absolute;\n  left: -45px; }\n\n.curtain__panel--right.blue[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent #1e9cfc transparent;\n  position: absolute;\n  left: -45px; }\n\n.curtain__panel--right.orange[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-style: solid;\n  border-width: 0px 0px 250px 45px;\n  border-color: transparent transparent #f88842 transparent;\n  position: absolute;\n  left: -45px; }\n\n.curtain__panel--right[_ngcontent-%COMP%] {\n  float: right;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.curtain__prize[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background: #333;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin: 0 auto;\n  height: 250px; }\n\n.image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position-y: 80%; }\n\n.white[_ngcontent-%COMP%] {\n  background-color: white; }\n\n.red[_ngcontent-%COMP%] {\n  background-color: #d1301b; }\n\n.orange[_ngcontent-%COMP%] {\n  background-color: #f88842; }\n\n.blue[_ngcontent-%COMP%] {\n  background-color: #1e9cfc; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9vdGhlcnMtaG90c2l0ZS9vdGhlcnMtaG90c2l0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUdkO0lBQ0ksVUFBVSxFQUFBLEVBQ2I7O0FBR0w7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx1REFBdUQ7RUFDdkQsa0JBQWtCO0VBQ2xCLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHlEQUF5RDtFQUN6RCxrQkFBa0I7RUFDbEIsWUFBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVTtFQUNWLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMseURBQXlEO0VBQ3pELGtCQUFrQjtFQUNsQixZQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx5REFBeUQ7RUFDekQsa0JBQWtCO0VBQ2xCLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHVEQUF1RDtFQUN2RCxrQkFBa0I7RUFDbEIsV0FBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVTtFQUNWLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMseURBQXlEO0VBQ3pELGtCQUFrQjtFQUNsQixXQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx5REFBeUQ7RUFDekQsa0JBQWtCO0VBQ2xCLFdBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHlEQUF5RDtFQUN6RCxrQkFBa0I7RUFDbEIsV0FBVSxFQUFBOztBQUdkO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHNCQUFzQjtFQUN0QiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG90c2l0ZS9vdGhlcnMtaG90c2l0ZS9vdGhlcnMtaG90c2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXBhcmF0b3Ige1xuICAgIGJhY2tncm91bmQ6ICMyY2Q0OGY7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY3VydGFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3VydGFpbl9fd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuICAgIFxuLmN1cnRhaW5fX3BhbmVsIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcbn1cblxuLmN1cnRhaW46aG92ZXIgLmN1cnRhaW5fX3BhbmVse1xuICAgIHdpZHRoOiAzNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmN1cnRhaW5fX3BhbmVsIHtcbiAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICB9XG5cbiAgICAuY3VydGFpbjpob3ZlciAuY3VydGFpbl9fcGFuZWx7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgfVxufVxuXG4uY3VydGFpbl9fcGFuZWwtLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1cnRhaW5fX3BhbmVsLS1sZWZ0LndoaXRlOmJlZm9yZSB7XG4gICAgY29udGVudDpcIlwiO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDI1MHB4IDQ1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6LTQ1cHg7XG59XG5cbi5jdXJ0YWluX19wYW5lbC0tbGVmdC5yZWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMjUwcHggNDVweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNkMTMwMWI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0Oi00NXB4O1xufVxuXG4uY3VydGFpbl9fcGFuZWwtLWxlZnQuYmx1ZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAyNTBweCA0NXB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFlOWNmYztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6LTQ1cHg7XG59XG5cbi5jdXJ0YWluX19wYW5lbC0tbGVmdC5vcmFuZ2U6YmVmb3JlIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMjUwcHggNDVweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmODg4NDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0Oi00NXB4O1xufVxuXG4uY3VydGFpbl9fcGFuZWwtLXJpZ2h0LndoaXRlOmFmdGVyIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMjUwcHggNDVweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0Oi00NXB4O1xufVxuXG4uY3VydGFpbl9fcGFuZWwtLXJpZ2h0LnJlZDphZnRlciB7XG4gICAgY29udGVudDpcIlwiO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDI1MHB4IDQ1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZDEzMDFiIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0Oi00NXB4O1xufVxuXG4uY3VydGFpbl9fcGFuZWwtLXJpZ2h0LmJsdWU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAyNTBweCA0NXB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFlOWNmYyB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDotNDVweDtcbn1cblxuLmN1cnRhaW5fX3BhbmVsLS1yaWdodC5vcmFuZ2U6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAyNTBweCA0NXB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2Y4ODg0MiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDotNDVweDtcbn1cblxuLmN1cnRhaW5fX3BhbmVsLS1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1cnRhaW5fX3ByaXplIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogODAlO1xufVxuXG4ud2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEzMDFiO1xufVxuXG4ub3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg4ODQyO1xufVxuXG4uYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWNmYztcbn1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/core/hotsite/others-hotsite/others-hotsite.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/hotsite/others-hotsite/others-hotsite.component.ts ***!
  \*************************************************************************/
/*! exports provided: OthersHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersHotsiteComponent", function() { return OthersHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var OthersHotsiteComponent = /** @class */ (function () {
    function OthersHotsiteComponent() {
    }
    OthersHotsiteComponent.prototype.ngOnInit = function () {
    };
    OthersHotsiteComponent.prototype.openModal = function () {
        var _this = this;
        this.othersModal.nativeElement.classList.add('is-active');
        this.othersModal.nativeElement.addEventListener('click', function (e) {
            if (e.target.className === 'modal-background') {
                _this.othersModal.nativeElement.classList.remove('is-active');
            }
        });
    };
    OthersHotsiteComponent.prototype.closeModal = function () {
        this.othersModal.nativeElement.classList.remove('is-active');
    };
    return OthersHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_PlantsHotsiteComponent, View_PlantsHotsiteComponent_0, View_PlantsHotsiteComponent_Host_0, PlantsHotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PlantsHotsiteComponent", function() { return RenderType_PlantsHotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlantsHotsiteComponent_0", function() { return View_PlantsHotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlantsHotsiteComponent_Host_0", function() { return View_PlantsHotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsHotsiteComponentNgFactory", function() { return PlantsHotsiteComponentNgFactory; });
/* harmony import */ var _plants_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plants-hotsite.component.scss.shim.ngstyle */ "./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory */ "./node_modules/@ngx-gallery/core/ngx-gallery-core.ngfactory.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plants_hotsite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plants-hotsite.component */ "./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_PlantsHotsiteComponent = [_plants_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PlantsHotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PlantsHotsiteComponent, data: {} });

function View_PlantsHotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { galleryModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 52, "section", [["class", "hero is-large has-text-centered"], ["id", "plants"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "hero-head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "container content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h1", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apartamentos de 2 e 3 Quartos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "hr", [["class", "separator"], ["width", "160px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 46, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "column is-half-desktop is-half-tablet is-one-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "gallery", [["id", "plants"]], null, [[null, "indexChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("indexChange" === en)) {
        var pd_0 = (_co.indexChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_GalleryComponent_0"], _node_modules_ngx_gallery_core_ngx_gallery_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_GalleryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 770048, null, 0, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], { id: [0, "id"] }, { indexChange: "indexChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 42, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 16, "div", [["class", "tabs is-toggle is-toggle-rounded is-full-width is-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 15, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "li", [["class", "is-active"], ["id", "first-plant"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goTo(0, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2 Quartos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(64m\u00B2)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "li", [["id", "second-plant"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goTo(1, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3 Quartos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(88m\u00B2)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 4, "li", [["id", "third-plant"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goTo(2, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3 Quartos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(90m\u00B2)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 21, "table", [["class", "table is-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 20, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00C1rea"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quartos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vagas de Garagem"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sacada com Churrasqueira"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "a", [["class", "price button is-large"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Simule seu plano de pagamento\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 0, "i", [["class", "fas fa-angle-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, [[1, 0], ["plantsModal", 1]], null, 4, "div", [["class", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 0, "div", [["class", "modal-background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, "p", [["class", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "button", [["aria-label", "close"], ["class", "modal-close is-large"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var currVal_0 = "plants"; _ck(_v, 10, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.area; _ck(_v, 35, 0, currVal_1); var currVal_2 = _co.rooms; _ck(_v, 40, 0, currVal_2); var currVal_3 = _co.garage; _ck(_v, 45, 0, currVal_3); var currVal_4 = _co.balcony; _ck(_v, 50, 0, currVal_4); }); }
function View_PlantsHotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-plants-hotsite", [], null, null, null, View_PlantsHotsiteComponent_0, RenderType_PlantsHotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _plants_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["PlantsHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["Gallery"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PlantsHotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-plants-hotsite", _plants_hotsite_component__WEBPACK_IMPORTED_MODULE_4__["PlantsHotsiteComponent"], View_PlantsHotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@media screen and (max-width: 768px) {\n  gallery[_ngcontent-%COMP%] {\n    height: 350px; } }\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 110px;\n  margin-bottom: 60px; }\n\n.hero[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.center[_ngcontent-%COMP%] {\n  background: Red;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  max-width: 100px; }\n\n.tabs.is-toggle[_ngcontent-%COMP%]   li.is-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #f17221 !important;\n  border-color: #f17221 !important; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #f17221;\n  margin-left: auto;\n  margin-right: auto; }\n\n.table[_ngcontent-%COMP%] {\n  width: 310px;\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.price[_ngcontent-%COMP%] {\n  background-color: #1e9cfc;\n  border: 0;\n  font-weight: bold;\n  height: 82px;\n  position: absolute;\n  right: 0;\n  border-radius: 0;\n  color: white;\n  box-shadow: 10px 10px #1167a8; }\n\n.price[_ngcontent-%COMP%]:hover {\n  color: white; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaG90c2l0ZS9wbGFudHMtaG90c2l0ZS9wbGFudHMtaG90c2l0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxvQ0FBb0M7RUFDcEMsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFHbkI7RUFDSSx5QkFBeUI7RUFDekIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDZCQUE2QixFQUFBOztBQUlqQztFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG90c2l0ZS9wbGFudHMtaG90c2l0ZS9wbGFudHMtaG90c2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ2FsbGVyeSB7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uaGVybyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY2VudGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBSZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udGFicyBsaSB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE3MjIxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjE3MjIxICFpbXBvcnRhbnQ7XG59XG5cbi5zZXBhcmF0b3Ige1xuICAgIGJhY2tncm91bmQ6ICNmMTcyMjE7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udGFibGUge1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5wcmljZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWNmYztcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiA4MnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggIzExNjdhODtcblxufVxuXG4ucHJpY2U6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlantsHotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsHotsiteComponent", function() { return PlantsHotsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__);


var PlantsHotsiteComponent = /** @class */ (function () {
    function PlantsHotsiteComponent(gallery) {
        this.gallery = gallery;
        this.area = "64m²";
        this.rooms = "1 Suíte";
        this.garage = "1";
        this.balcony = "Sim";
        this.galleryId = 'plants';
        this.galleryRef = this.gallery.ref(this.galleryId);
        this.galleryConfig = {
            loadingIcon: "Loading...",
            imageSize: "cover",
            loadingMode: "determinate",
            loadingStrategy: "preload",
            thumb: false,
            dots: true
        };
    }
    PlantsHotsiteComponent.prototype.ngAfterViewInit = function () {
        this.gallery.ref('plants').setConfig(this.galleryConfig);
    };
    PlantsHotsiteComponent.prototype.ngOnInit = function () {
        var galleryRef = this.gallery.ref(this.galleryId);
        var items = [
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: 'assets/img/terramundi/plan2q.jpg' }),
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: 'assets/img/terramundi/plan3q.jpg' }),
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: 'assets/img/terramundi/plan3q2.jpg' }),
        ];
        galleryRef.load(items);
    };
    PlantsHotsiteComponent.prototype.goTo = function (index, event) {
        var elementId = event.srcElement.parentElement.id;
        this.galleryRef.set(index);
        if (elementId == 'first-plant') {
            document.getElementById('first-plant').classList.add('is-active');
            document.getElementById('second-plant').classList.remove('is-active');
            document.getElementById('third-plant').classList.remove('is-active');
            this.area = "64m²";
            this.rooms = "1 Suíte";
            this.garage = "1";
            this.balcony = "Sim";
        }
        else if (elementId == 'second-plant') {
            document.getElementById('first-plant').classList.remove('is-active');
            document.getElementById('second-plant').classList.add('is-active');
            document.getElementById('third-plant').classList.remove('is-active');
            this.area = "88m²";
            this.rooms = "3 Suítes";
            this.garage = "1";
            this.balcony = "Sim";
        }
        else if (elementId == 'third-plant') {
            document.getElementById('first-plant').classList.remove('is-active');
            document.getElementById('second-plant').classList.remove('is-active');
            document.getElementById('third-plant').classList.add('is-active');
            this.area = "89m²";
            this.rooms = "3 Suítes";
            this.garage = "2";
            this.balcony = "Sim";
        }
    };
    PlantsHotsiteComponent.prototype.indexChanged = function () {
        var _this = this;
        this.galleryRef.state.source.subscribe(function (value) {
            if (value.currIndex == 0) {
                document.getElementById('first-plant').classList.add('is-active');
                document.getElementById('second-plant').classList.remove('is-active');
                document.getElementById('third-plant').classList.remove('is-active');
                _this.area = "64m²";
                _this.rooms = "1 Suíte";
                _this.garage = "1";
                _this.balcony = "Sim";
            }
            else if (value.currIndex == 1) {
                document.getElementById('first-plant').classList.remove('is-active');
                document.getElementById('second-plant').classList.add('is-active');
                document.getElementById('third-plant').classList.remove('is-active');
                _this.area = "88m²";
                _this.rooms = "3 Suítes";
                _this.garage = "1";
                _this.balcony = "Sim";
            }
            else if (value.currIndex == 2) {
                document.getElementById('first-plant').classList.remove('is-active');
                document.getElementById('second-plant').classList.remove('is-active');
                document.getElementById('third-plant').classList.add('is-active');
                _this.area = "89m²";
                _this.rooms = "3 Suítes";
                _this.garage = "2";
                _this.balcony = "Sim";
            }
        });
    };
    PlantsHotsiteComponent.prototype.openModal = function () {
        var _this = this;
        this.galleryModal.nativeElement.classList.add('is-active');
        this.galleryModal.nativeElement.addEventListener('click', function (e) {
            if (e.target.className === 'modal-background') {
                _this.galleryModal.nativeElement.classList.remove('is-active');
            }
        });
    };
    PlantsHotsiteComponent.prototype.closeModal = function () {
        this.galleryModal.nativeElement.classList.remove('is-active');
    };
    return PlantsHotsiteComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/about/about.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/core/imobles/about/about.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function() { return RenderType_AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function() { return View_AboutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function() { return View_AboutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function() { return AboutComponentNgFactory; });
/* harmony import */ var _about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.scss.shim.ngstyle */ "./src/app/core/imobles/about/about.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/core/imobles/about/about.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AboutComponent = [_about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutComponent, data: {} });

function View_AboutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "about"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "section", [["class", "section is-medium has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "/assets/img/funil imobles.svg"]], null, null, null, null, null))], null, null); }
function View_AboutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AboutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about", _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/about/about.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/core/imobles/about/about.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".about[_ngcontent-%COMP%] {\n  background-color: #212121;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23242424' stroke-width='2.3'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234f4f4f'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n  background-position-y: 70%; }\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 72px; }\n\n.box[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 3em;\n  height: 200px; }\n\n.lead[_ngcontent-%COMP%] {\n  font-size: 42px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaW1vYmxlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixpNkNBQWk2QztFQUNqNkMsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaW1vYmxlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMDAnIGhlaWdodD0nMTAwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzI0MjQyNCcgc3Ryb2tlLXdpZHRoPScyLjMnJTNFJTNDcGF0aCBkPSdNNzY5IDIyOUwxMDM3IDI2MC45TTkyNyA4ODBMNzMxIDczNyA1MjAgNjYwIDMwOSA1MzggNDAgNTk5IDI5NSA3NjQgMTI2LjUgODc5LjUgNDAgNTk5LTE5NyA0OTMgMTAyIDM4Mi0zMSAyMjkgMTI2LjUgNzkuNS02OS02MycvJTNFJTNDcGF0aCBkPSdNLTMxIDIyOUwyMzcgMjYxIDM5MCAzODIgNjAzIDQ5MyAzMDguNSA1MzcuNSAxMDEuNSAzODEuNU0zNzAgOTA1TDI5NSA3NjQnLyUzRSUzQ3BhdGggZD0nTTUyMCA2NjBMNTc4IDg0MiA3MzEgNzM3IDg0MCA1OTkgNjAzIDQ5MyA1MjAgNjYwIDI5NSA3NjQgMzA5IDUzOCAzOTAgMzgyIDUzOSAyNjkgNzY5IDIyOSA1NzcuNSA0MS41IDM3MCAxMDUgMjk1IC0zNiAxMjYuNSA3OS41IDIzNyAyNjEgMTAyIDM4MiA0MCA1OTkgLTY5IDczNyAxMjcgODgwJy8lM0UlM0NwYXRoIGQ9J001MjAtMTQwTDU3OC41IDQyLjUgNzMxLTYzTTYwMyA0OTNMNTM5IDI2OSAyMzcgMjYxIDM3MCAxMDVNOTAyIDM4Mkw1MzkgMjY5TTM5MCAzODJMMTAyIDM4MicvJTNFJTNDcGF0aCBkPSdNLTIyMiA0MkwxMjYuNSA3OS41IDM3MCAxMDUgNTM5IDI2OSA1NzcuNSA0MS41IDkyNyA4MCA3NjkgMjI5IDkwMiAzODIgNjAzIDQ5MyA3MzEgNzM3TTI5NS0zNkw1NzcuNSA0MS41TTU3OCA4NDJMMjk1IDc2NE00MC0yMDFMMTI3IDgwTTEwMiAzODJMLTI2MSAyNjknLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjM0ZjRmNGYnJTNFJTNDY2lyY2xlIGN4PSc3NjknIGN5PScyMjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTM5JyBjeT0nMjY5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzYwMycgY3k9JzQ5Mycgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc3MzEnIGN5PSc3MzcnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTIwJyBjeT0nNjYwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzMwOScgY3k9JzUzOCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyOTUnIGN5PSc3NjQnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNDAnIGN5PSc1OTknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMTAyJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEyNycgY3k9JzgwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM3MCcgY3k9JzEwNScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1NzgnIGN5PSc0Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyMzcnIGN5PScyNjEnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzkwJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA3MCU7XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDcycHg7XG59XG5cbi5ib3gge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDNlbTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubGVhZCB7XG4gICAgZm9udC1zaXplOjQycHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/core/imobles/about/about.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/imobles/about/about.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/cases/cases.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/core/imobles/cases/cases.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_CasesComponent, View_CasesComponent_0, View_CasesComponent_Host_0, CasesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CasesComponent", function() { return RenderType_CasesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CasesComponent_0", function() { return View_CasesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CasesComponent_Host_0", function() { return View_CasesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponentNgFactory", function() { return CasesComponentNgFactory; });
/* harmony import */ var _cases_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases.component.scss.shim.ngstyle */ "./src/app/core/imobles/cases/cases.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cases.component */ "./src/app/core/imobles/cases/cases.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_CasesComponent = [_cases_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CasesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CasesComponent, data: {} });

function View_CasesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "section", [["class", "section is-white has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "div", [["class", "container is-narrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "title is-spaced is-size-3-desktop is-size-4-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nossos Cases"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 10, "div", [["class", "project-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 9, "div", [["class", "columns is-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "card-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["src", "/assets/img/terramundi/logo2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "footer", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "a", [["class", "card-footer-item"], ["routerLink", "/terramundieldorado"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Visite j\u00E1"]))], function (_ck, _v) { var currVal_2 = "/terramundieldorado"; _ck(_v, 13, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_0, currVal_1); }); }
function View_CasesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-cases", [], null, null, null, View_CasesComponent_0, RenderType_CasesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _cases_component__WEBPACK_IMPORTED_MODULE_4__["CasesComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CasesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-cases", _cases_component__WEBPACK_IMPORTED_MODULE_4__["CasesComponent"], View_CasesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/cases/cases.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/core/imobles/cases/cases.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin: 0 auto;\n  max-width: 400px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaW1vYmxlcy9jYXNlcy9jYXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2ltb2JsZXMvY2FzZXMvY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/core/imobles/cases/cases.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/imobles/cases/cases.component.ts ***!
  \*******************************************************/
/*! exports provided: CasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponent", function() { return CasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var CasesComponent = /** @class */ (function () {
    function CasesComponent() {
    }
    CasesComponent.prototype.ngOnInit = function () {
    };
    return CasesComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/contact/contact.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/core/imobles/contact/contact.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function() { return RenderType_ContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function() { return View_ContactComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function() { return View_ContactComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function() { return ContactComponentNgFactory; });
/* harmony import */ var _contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.scss.shim.ngstyle */ "./src/app/core/imobles/contact/contact.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/core/imobles/contact/contact.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ContactComponent = [_contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactComponent, data: {} });

function View_ContactComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "section", [["class", "section has-text-centered content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fab fa-whatsapp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+55 (48) 3181 0307 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "far fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["contato@imobles.com "]))], null, null); }
function View_ContactComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact", _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/contact/contact.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/core/imobles/contact/contact.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".section[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #f17221;\n  margin-left: auto;\n  margin-right: auto; }\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  vertical-align: middle;\n  margin: 10px; }\n\n.column[_ngcontent-%COMP%] {\n  padding: 1em;\n  min-height: 64px;\n  color: white;\n  background-color: #f17221;\n  border-color: #d46a28;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative; }\n\n.column[_ngcontent-%COMP%]:first-child {\n  border-radius: 15px 0 0 15px; }\n\n.column[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 15px 15px 0; }\n\n@media screen and (max-width: 768px) {\n  .column[_ngcontent-%COMP%]:first-child {\n    border-radius: 15px 15px 0 0; }\n  .column[_ngcontent-%COMP%]:last-child {\n    border-radius: 0 0 15px 15px; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaW1vYmxlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSTtJQUNJLDRCQUE0QixFQUFBO0VBR2hDO0lBQ0ksNEJBQTZCLEVBQUEsRUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2ltb2JsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYmFja2dyb3VuZDogI2YxNzIyMTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5jb2x1bW4ge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE3MjIxO1xuICAgIGJvcmRlci1jb2xvcjogI2Q0NmEyODtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29sdW1uOmZpcnN0LWNoaWxke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDE1cHg7XG59XG5cbi5jb2x1bW46bGFzdC1jaGlsZHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb2x1bW46Zmlyc3QtY2hpbGR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gICAgfVxuXG4gICAgLmNvbHVtbjpsYXN0LWNoaWxke1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4IDtcbiAgICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/core/imobles/contact/contact.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/imobles/contact/contact.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/footer/footer.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/core/imobles/footer/footer.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function() { return RenderType_FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function() { return View_FooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function() { return View_FooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function() { return FooterComponentNgFactory; });
/* harmony import */ var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/core/imobles/footer/footer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/core/imobles/footer/footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "footer", [["class", "footer"], ["id", "contact"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "a", [["routerLink", "/imoble"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "logo"], ["src", "/assets/img/logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\u00A9 ", ". Todos os direitos Reservados. "]))], function (_ck, _v) { var currVal_2 = "/imoble"; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _co.year; _ck(_v, 5, 0, currVal_3); }); }
function View_FooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/footer/footer.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/core/imobles/footer/footer.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".footer[_ngcontent-%COMP%] {\n  background: none;\n  background-image: url(\"/assets/img/footer.png\");\n  background-position: bottom;\n  background-repeat: repeat-x;\n  background-size: 200px; }\n\n.container[_ngcontent-%COMP%] {\n  padding: 1em; }\n\n.icon[_ngcontent-%COMP%] {\n  color: #f17221;\n  font-size: 32px;\n  vertical-align: middle;\n  margin: 5px; }\n\n.separator[_ngcontent-%COMP%] {\n  background: #f17221;\n  margin-left: auto;\n  margin-right: auto; }\n\n.logo[_ngcontent-%COMP%] {\n  width: 150px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaW1vYmxlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaW1vYmxlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9mb290ZXIucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi5pY29uIHtcbiAgICBjb2xvcjogI2YxNzIyMTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYmFja2dyb3VuZDogI2YxNzIyMTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMTUwcHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/core/imobles/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/imobles/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/hero/hero.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/core/imobles/hero/hero.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_HeroComponent, View_HeroComponent_0, View_HeroComponent_Host_0, HeroComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeroComponent", function() { return RenderType_HeroComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroComponent_0", function() { return View_HeroComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroComponent_Host_0", function() { return View_HeroComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponentNgFactory", function() { return HeroComponentNgFactory; });
/* harmony import */ var _hero_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.component.scss.shim.ngstyle */ "./src/app/core/imobles/hero/hero.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_navigation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation.component.ngfactory */ "./src/app/core/imobles/navigation/navigation.component.ngfactory.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.component */ "./src/app/core/imobles/navigation/navigation.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero.component */ "./src/app/core/imobles/hero/hero.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_HeroComponent = [_hero_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeroComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeroComponent, data: {} });

function View_HeroComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "section", [["class", "hero is-fullheight-with-navbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "hero-head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-navigation", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _navigation_navigation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NavigationComponent_0"], _navigation_navigation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NavigationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["WINDOW"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "hero-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "container has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h1", [["class", "title animated fadeInUp has-text-info is-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" M\u00C1QUINA DE MARKETING E VENDAS ESPECIALIZADA EM LAN\u00C7AMENTOS IMOBILI\u00C1RIOS "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h2", [["class", "subtitle animated fadeInUp delay-.8s has-text-white is-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" MAIS LEADS, MAIOR CONVERS\u00C3O, VENDA DE MELHOR QUALIDADE "]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_HeroComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hero", [], null, null, null, View_HeroComponent_0, RenderType_HeroComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeroComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-hero", _hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"], View_HeroComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/hero/hero.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/core/imobles/hero/hero.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".hero[_ngcontent-%COMP%] {\n  background: #000;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"/assets/img/hero.jpg\");\n  background-position: center;\n  background-size: cover;\n  min-height: 100vh; }\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2em; }\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  font-weight: 300; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaW1vYmxlcy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsaUhBQWdIO0VBQ2hILDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaW1vYmxlcy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwwLjYpKSwgdXJsKCcvYXNzZXRzL2ltZy9oZXJvLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/imobles/hero/hero.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/imobles/hero/hero.component.ts ***!
  \*****************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/investors/investors.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/core/imobles/investors/investors.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_InvestorsComponent, View_InvestorsComponent_0, View_InvestorsComponent_Host_0, InvestorsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InvestorsComponent", function() { return RenderType_InvestorsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InvestorsComponent_0", function() { return View_InvestorsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InvestorsComponent_Host_0", function() { return View_InvestorsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorsComponentNgFactory", function() { return InvestorsComponentNgFactory; });
/* harmony import */ var _investors_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investors.component.scss.shim.ngstyle */ "./src/app/core/imobles/investors/investors.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _investors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investors.component */ "./src/app/core/imobles/investors/investors.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_InvestorsComponent = [_investors_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_InvestorsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_InvestorsComponent, data: {} });

function View_InvestorsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "section", [["class", "section has-text-centered investors is-medium"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "h1", [["class", "title is-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" O que "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "has-text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fazemos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 20, "div", [["class", "columns content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Geramos mais Leads"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Porque somos especializados em m\u00EDdias digitais, estabelecemos massiva presen\u00E7a online e geramos forte reputa\u00E7\u00E3o para nossos empreendimentos (busca org\u00E2nica, m\u00EDdia paga e plataformas imobili\u00E1rias especializadas), captando compradores que hoje n\u00E3o est\u00E3o sendo alcan\u00E7ados. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Convertemos melhor/vendemos mais"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nossas p\u00E1ginas na internet e canais de comunica\u00E7\u00E3o s\u00E3o otimizados continuamente para proporcionar m\u00E1xima efici\u00EAncia de convers\u00E3o e trazem todas as informa\u00E7\u00F5es necess\u00E1rias para que nossos vendedores saibam direcionar a venda de forma mais assertiva. Todo o processo \u00E9 otimizado com base em dados de comportamento dos clientes. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Efetuamos vendas de alta qualidade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nosso processo de vendas \u00E9 estruturado e previs\u00EDvel, nossa equipe de segmentada para diferentes etapas do fluxo de vendas e com seus incentivos alinhados aos interesses da incorporadora. Temos um controle r\u00EDgido sobre todos os neg\u00F3cios realizados e mantemos relacionamento com os clientes ap\u00F3s a assinatura do contrato. O resultado: vendas de alta qualidade e menor ocorr\u00EAncia de distratos e disputas judiciais. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 4, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Estabelecemos parcerias de longo prazo, 100% baseadas em resultado"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Somente somos remunerados mediante neg\u00F3cios realizados. Buscamos relacionamentos de longo prazo com nossos clientes, tanto compradores como vendedores. Prezamos pela excel\u00EAncia e uniformidade na comunica\u00E7\u00E3o e relacionamento, fortalecendo a reputa\u00E7\u00E3o da incorporadora, mesmo em prospec\u00E7\u00F5es e campanhas que n\u00E3o resultem em venda. "]))], null, null); }
function View_InvestorsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-investors", [], null, null, null, View_InvestorsComponent_0, RenderType_InvestorsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _investors_component__WEBPACK_IMPORTED_MODULE_2__["InvestorsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var InvestorsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-investors", _investors_component__WEBPACK_IMPORTED_MODULE_2__["InvestorsComponent"], View_InvestorsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/investors/investors.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/core/imobles/investors/investors.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".investors[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Cpath fill='%23f4bd2d' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z'/%3E%3Cpath fill='%231c7de1' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z'/%3E%3Cg fill='%23FFF'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z'/%3E%3Ccircle cx='1013.7' cy='153.9' r='7.1'/%3E%3Ccircle cx='1024.3' cy='132.1' r='7.1'/%3E%3Ccircle cx='1037.3' cy='148.9' r='7.1'/%3E%3Cpath d='M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z'/%3E%3C/g%3E%3C/svg%3E\");\n  background-position-y: 70%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaW1vYmxlcy9pbnZlc3RvcnMvaW52ZXN0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLHU3TUFBdTdNO0VBQ3Y3TSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaW1vYmxlcy9pbnZlc3RvcnMvaW52ZXN0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmVzdG9ycyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2MDAnIGhlaWdodD0nODAwJyB2aWV3Qm94PScwIDAgMTYwMCA4MDAnJTNFJTNDcGF0aCBmaWxsPSclMjNmNGJkMmQnIGQ9J00xMTAyLjUgNzM0LjhjMi41LTEuMiAyNC44LTguNiAyNS42LTcuNS41LjctMy45IDIzLjgtNC42IDI0LjVDMTEyMy4zIDc1Mi4xIDExMDcuNSA3MzkuNSAxMTAyLjUgNzM0Ljh6TTEyMjYuMyAyMjkuMWMwLS4xLTQuOS05LjQtNy0xNC4yLS4xLS4zLS4zLTEuMS0uNC0xLjYtLjEtLjQtLjMtLjctLjYtLjktLjMtLjItLjYtLjEtLjguMWwtMTMuMSAxMi4zYzAgMCAwIDAgMCAwLS4yLjItLjMuNS0uNC44IDAgLjMgMCAuNy4yIDEgLjEuMSAxLjQgMi41IDIuMSAzLjYgMi40IDMuNyA2LjUgMTIuMSA2LjUgMTIuMi4yLjMuNC41LjcuNi4zIDAgLjUtLjEuNy0uMyAwIDAgMS44LTIuNSAyLjctMy42IDEuNS0xLjYgMy0zLjIgNC42LTQuNyAxLjItMS4yIDEuNi0xLjQgMi4xLTEuNi41LS4zIDEuMS0uNSAyLjUtMS45QzEyMjYuNSAyMzAuNCAxMjI2LjYgMjI5LjYgMTIyNi4zIDIyOS4xek0zMyA3NzAuM0MzMyA3NzAuMyAzMyA3NzAuMyAzMyA3NzAuM2MwLS43LS41LTEuMi0xLjItMS4yLS4xIDAtLjMgMC0uNC4xLTEuNi4yLTE0LjMuMS0yMi4yIDAtLjMgMC0uNi4xLS45LjQtLjIuMi0uNC41LS40LjkgMCAuMiAwIDQuOS4xIDUuOWwuNCAxMy42YzAgLjMuMi42LjQuOS4yLjIuNS4zLjguMyAwIDAgLjEgMCAuMSAwIDcuMy0uNyAxNC43LS45IDIyLS42LjMgMCAuNy0uMS45LS4zLjItLjIuNC0uNi40LS45QzMyLjkgNzgzLjMgMzIuOSA3NzYuMiAzMyA3NzAuM3onLyUzRSUzQ3BhdGggZmlsbD0nJTIzMWM3ZGUxJyBkPSdNMTcxLjEgMzgzLjRjMS4zLTIuNSAxNC4zLTIyIDE1LjYtMjEuNi44LjMgMTEuNSAyMS4yIDExLjUgMjIuMUMxOTguMSAzODQuMiAxNzcuOSAzODQgMTcxLjEgMzgzLjR6TTU5Ni40IDcxMS44Yy0uMS0uMS02LjctOC4yLTkuNy0xMi41LS4yLS4zLS41LTEtLjctMS41LS4yLS40LS40LS43LS43LS44LS4zLS4xLS42IDAtLjguM0w1NzQgNzEyYzAgMCAwIDAgMCAwLS4yLjItLjIuNS0uMi45IDAgLjMuMi43LjQuOS4xLjEgMS44IDIuMiAyLjggMy4xIDMuMSAzLjEgOC44IDEwLjUgOC45IDEwLjYuMi4zLjUuNC44LjQuMyAwIC41LS4yLjYtLjUgMCAwIDEuMi0yLjggMi00LjEgMS4xLTEuOSAyLjMtMy43IDMuNS01LjUuOS0xLjQgMS4zLTEuNyAxLjctMiAuNS0uNCAxLS43IDIuMS0yLjRDNTk2LjkgNzEzLjEgNTk2LjggNzEyLjMgNTk2LjQgNzExLjh6TTcyNy41IDE3OS45QzcyNy41IDE3OS45IDcyNy41IDE3OS45IDcyNy41IDE3OS45Yy42LjIgMS4zLS4yIDEuNC0uOCAwLS4xIDAtLjIgMC0uNC4yLTEuNCAyLjgtMTIuNiA0LjUtMTkuNS4xLS4zIDAtLjYtLjItLjgtLjItLjMtLjUtLjQtLjgtLjUtLjIgMC00LjctMS4xLTUuNy0xLjNsLTEzLjQtMi43Yy0uMy0uMS0uNyAwLS45LjItLjIuMi0uNC40LS41LjYgMCAwIDAgLjEgMCAuMS0uOCA2LjUtMi4yIDEzLjEtMy45IDE5LjQtLjEuMyAwIC42LjIuOS4yLjMuNS40LjguNUM3MTQuOCAxNzYuOSA3MjEuNyAxNzguNSA3MjcuNSAxNzkuOXpNNzI4LjUgMTc4LjFjLS4xLS4xLS4yLS4yLS40LS4yQzcyOC4zIDE3Ny45IDcyOC40IDE3OCA3MjguNSAxNzguMXonLyUzRSUzQ2cgZmlsbD0nJTIzRkZGJyUzRSUzQ3BhdGggZD0nTTY5OS42IDQ3Mi43Yy0xLjUgMC0yLjgtLjgtMy41LTIuMy0uOC0xLjkgMC00LjIgMS45LTUgMy43LTEuNiA2LjgtNC43IDguNC04LjUgMS42LTMuOCAxLjctOC4xLjItMTEuOS0uMy0uOS0uOC0xLjgtMS4yLTIuOC0uOC0xLjctMS44LTMuNy0yLjMtNS45LS45LTQuMS0uMi04LjYgMi0xMi44IDEuNy0zLjEgNC4xLTYuMSA3LjYtOS4xIDEuNi0xLjQgNC0xLjIgNS4zLjQgMS40IDEuNiAxLjIgNC0uNCA1LjMtMi44IDIuNS00LjcgNC43LTUuOSA3LTEuNCAyLjYtMS45IDUuMy0xLjMgNy42LjMgMS40IDEgMi44IDEuNyA0LjMuNSAxLjEgMSAyLjIgMS41IDMuMyAyLjEgNS42IDIgMTItLjMgMTcuNi0yLjMgNS41LTYuOCAxMC4xLTEyLjMgMTIuNUM3MDAuNiA0NzIuNiA3MDAuMSA0NzIuNyA2OTkuNiA0NzIuN3pNNzQwLjQgNDIxLjRjMS41LS4yIDMgLjUgMy44IDEuOSAxLjEgMS44LjQgNC4yLTEuNCA1LjMtMy43IDIuMS02LjQgNS42LTcuNiA5LjUtMS4yIDQtLjggOC40IDEuMSAxMi4xLjQuOSAxIDEuNyAxLjYgMi43IDEgMS43IDIuMiAzLjUgMyA1LjcgMS40IDQgMS4yIDguNy0uNiAxMy4yLTEuNCAzLjQtMy41IDYuNi02LjggMTAuMS0xLjUgMS42LTMuOSAxLjctNS41LjItMS42LTEuNC0xLjctMy45LS4yLTUuNCAyLjYtMi44IDQuMy01LjMgNS4zLTcuNyAxLjEtMi44IDEuMy01LjYuNS03LjktLjUtMS4zLTEuMy0yLjctMi4yLTQuMS0uNi0xLTEuMy0yLjEtMS45LTMuMi0yLjgtNS40LTMuNC0xMS45LTEuNy0xNy44IDEuOC01LjkgNS44LTExIDExLjItMTRDNzM5LjQgNDIxLjYgNzM5LjkgNDIxLjQgNzQwLjQgNDIxLjR6TTI2MS4zIDU5MC45YzUuNyA2LjggOSAxNS43IDkuNCAyMi40LjUgNy4zLTIuNCAxNi40LTEwLjIgMjAuNC0zIDEuNS02LjcgMi4yLTExLjIgMi4yLTcuOS0uMS0xMi45LTIuOS0xNS40LTguNC0yLjEtNC43LTIuMy0xMS40IDEuOC0xNS45IDMuMi0zLjUgNy44LTQuMSAxMS4yLTEuNiAxLjIuOSAxLjUgMi43LjYgMy45LS45IDEuMi0yLjcgMS41LTMuOS42LTEuOC0xLjMtMy42LjYtMy44LjgtMi40IDIuNi0yLjEgNy0uOCA5LjkgMS41IDMuNCA0LjcgNSAxMC40IDUuMSAzLjYgMCA2LjQtLjUgOC42LTEuNiA0LjctMi40IDcuNy04LjYgNy4yLTE1LS41LTcuMy01LjMtMTguMi0xMy0yMy45LTQuMi0zLjEtOC41LTQuMS0xMi45LTMuMS0zLjEuNy02LjIgMi40LTkuNyA1LTYuNiA1LjEtMTEuNyAxMS44LTE0LjIgMTktMi43IDcuNy0yLjEgMTUuOCAxLjkgMjMuOS43IDEuNC4xIDMuMS0xLjMgMy43LTEuNC43LTMuMS4xLTMuNy0xLjMtNC42LTkuNC01LjQtMTkuMi0yLjItMjguMiAyLjktOC4yIDguNi0xNS45IDE2LjEtMjEuNiA0LjEtMy4xIDgtNS4xIDExLjgtNiA2LTEuNCAxMiAwIDE3LjUgNEMyNTcuNiA1ODYuOSAyNTkuNiA1ODguOCAyNjEuMyA1OTAuOXonLyUzRSUzQ2NpcmNsZSBjeD0nMTAxMy43JyBjeT0nMTUzLjknIHI9JzcuMScvJTNFJTNDY2lyY2xlIGN4PScxMDI0LjMnIGN5PScxMzIuMScgcj0nNy4xJy8lM0UlM0NjaXJjbGUgY3g9JzEwMzcuMycgY3k9JzE0OC45JyByPSc3LjEnLyUzRSUzQ3BhdGggZD0nTTE1MDguNyAyOTcuMmMtNC44LTUuNC05LjctMTAuOC0xNC44LTE2LjIgNS42LTUuNiAxMS4xLTExLjUgMTUuNi0xOC4yIDEuMi0xLjcuNy00LjEtMS01LjItMS43LTEuMi00LjEtLjctNS4yIDEtNC4yIDYuMi05LjEgMTEuNi0xNC41IDE2LjktNC44LTUtOS43LTEwLTE0LjctMTQuOS0xLjUtMS41LTMuOS0xLjUtNS4zIDAtMS41IDEuNS0xLjUgMy45IDAgNS4zIDQuOSA0LjggOS43IDkuOCAxNC41IDE0LjgtMS4xIDEuMS0yLjMgMi4yLTMuNSAzLjItNC4xIDMuOC04LjQgNy44LTEyLjQgMTItMS40IDEuNS0xLjQgMy44IDAgNS4zIDAgMCAwIDAgMCAwIDEuNSAxLjQgMy45IDEuNCA1LjMtLjEgMy45LTQgOC4xLTcuOSAxMi4xLTExLjcgMS4yLTEuMSAyLjMtMi4yIDMuNS0zLjMgNC45IDUuMyA5LjggMTAuNiAxNC42IDE1LjkuMS4xLjEuMS4yLjIgMS40IDEuNCAzLjcgMS41IDUuMi4yQzE1MTAgMzAxLjIgMTUxMC4xIDI5OC44IDE1MDguNyAyOTcuMnpNMzI3LjYgMjQ4LjZsLS40LTIuNmMtMS41LTExLjEtMi4yLTIzLjItMi4zLTM3IDAtNS41IDAtMTEuNS4yLTE4LjUgMC0uNyAwLTEuNSAwLTIuMyAwLTUgMC0xMS4yIDMuOS0xMy41IDIuMi0xLjMgNS4xLTEgOC41LjkgNS43IDMuMSAxMy4yIDguNyAxNy41IDE0LjkgNS41IDcuOCA3LjMgMTYuOSA1IDI1LjctMy4yIDEyLjMtMTUgMzEtMzAgMzIuMUwzMjcuNiAyNDguNnpNMzMyLjEgMTc5LjJjLS4yIDAtLjMgMC0uNC4xLS4xLjEtLjcuNS0xLjEgMi43LS4zIDEuOS0uMyA0LjItLjMgNi4zIDAgLjggMCAxLjcgMCAyLjQtLjIgNi45LS4yIDEyLjgtLjIgMTguMy4xIDEyLjUuNyAyMy41IDIgMzMuNyAxMS0yLjcgMjAuNC0xOC4xIDIzLTI3LjggMS45LTcuMi40LTE0LjgtNC4yLTIxLjNsMCAwQzM0NyAxODguMSAzNDAgMTgzIDMzNSAxODAuMyAzMzMuNiAxNzkuNSAzMzIuNiAxNzkuMiAzMzIuMSAxNzkuMnpNNTE2LjMgNjAuOGMtLjEgMC0uMiAwLS40LS4xLTIuNC0uNy00LS45LTYuNy0uNy0uNyAwLTEuMy0uNS0xLjQtMS4yIDAtLjcuNS0xLjMgMS4yLTEuNCAzLjEtLjIgNC45IDAgNy42LjguNy4yIDEuMS45LjkgMS42QzUxNy4zIDYwLjQgNTE2LjggNjAuOCA1MTYuMyA2MC44ek01MDYuMSA3MC41Yy0uNSAwLTEtLjMtMS4yLS44LS44LTIuMS0xLjItNC4zLTEuMy02LjYgMC0uNy41LTEuMyAxLjItMS4zLjcgMCAxLjMuNSAxLjMgMS4yLjEgMiAuNSAzLjkgMS4xIDUuOC4yLjctLjEgMS40LS44IDEuNkM1MDYuNCA3MC41IDUwNi4yIDcwLjUgNTA2LjEgNzAuNXpNNDk0LjEgNjQuNGMtLjQgMC0uOC0uMi0xLS41LS40LS42LS4zLTEuNC4yLTEuOCAxLjgtMS40IDMuNy0yLjYgNS44LTMuNi42LS4zIDEuNCAwIDEuNy42LjMuNiAwIDEuNC0uNiAxLjctMS45LjktMy43IDItNS4zIDMuM0M0OTQuNyA2NC4zIDQ5NC40IDY0LjQgNDk0LjEgNjQuNHpNNTAwLjUgNTUuM2MtLjUgMC0uOS0uMy0xLjItLjctLjUtMS0xLjItMS45LTIuNC0zLjQtLjMtLjQtLjctLjktMS4xLTEuNC0uNC0uNi0uMy0xLjQuMi0xLjguNi0uNCAxLjQtLjMgMS44LjIuNC41LjggMSAxLjEgMS40IDEuMyAxLjYgMi4xIDIuNiAyLjcgMy45LjMuNiAwIDEuNC0uNiAxLjdDNTAwLjkgNTUuMyA1MDAuNyA1NS4zIDUwMC41IDU1LjN6TTUwNi43IDU1Yy0uMyAwLS41LS4xLS44LS4yLS42LS40LS43LTEuMi0uMy0xLjggMS4yLTEuNyAyLjMtMy40IDMuMy01LjIuMy0uNiAxLjEtLjkgMS43LS41LjYuMy45IDEuMS41IDEuNy0xIDEuOS0yLjIgMy44LTMuNSA1LjZDNTA3LjQgNTQuOCA1MDcuMSA1NSA1MDYuNyA1NXpNMTAyOS4zIDM4Mi44Yy0uMSAwLS4yIDAtLjQtLjEtMi40LS43LTQtLjktNi43LS43LS43IDAtMS4zLS41LTEuNC0xLjIgMC0uNy41LTEuMyAxLjItMS40IDMuMS0uMiA0LjkgMCA3LjYuOC43LjIgMS4xLjkuOSAxLjZDMTAzMC4zIDM4Mi40IDEwMjkuOCAzODIuOCAxMDI5LjMgMzgyLjh6TTEwMTkuMSAzOTIuNWMtLjUgMC0xLS4zLTEuMi0uOC0uOC0yLjEtMS4yLTQuMy0xLjMtNi42IDAtLjcuNS0xLjMgMS4yLTEuMy43IDAgMS4zLjUgMS4zIDEuMi4xIDIgLjUgMy45IDEuMSA1LjguMi43LS4xIDEuNC0uOCAxLjZDMTAxOS40IDM5Mi41IDEwMTkuMiAzOTIuNSAxMDE5LjEgMzkyLjV6TTEwMDcuMSAzODYuNGMtLjQgMC0uOC0uMi0xLS41LS40LS42LS4zLTEuNC4yLTEuOCAxLjgtMS40IDMuNy0yLjYgNS44LTMuNi42LS4zIDEuNCAwIDEuNy42LjMuNiAwIDEuNC0uNiAxLjctMS45LjktMy43IDItNS4zIDMuM0MxMDA3LjcgMzg2LjMgMTAwNy40IDM4Ni40IDEwMDcuMSAzODYuNHpNMTAxMy41IDM3Ny4zYy0uNSAwLS45LS4zLTEuMi0uNy0uNS0xLTEuMi0xLjktMi40LTMuNC0uMy0uNC0uNy0uOS0xLjEtMS40LS40LS42LS4zLTEuNC4yLTEuOC42LS40IDEuNC0uMyAxLjguMi40LjUuOCAxIDEuMSAxLjQgMS4zIDEuNiAyLjEgMi42IDIuNyAzLjkuMy42IDAgMS40LS42IDEuN0MxMDEzLjkgMzc3LjMgMTAxMy43IDM3Ny4zIDEwMTMuNSAzNzcuM3pNMTAxOS43IDM3N2MtLjMgMC0uNS0uMS0uOC0uMi0uNi0uNC0uNy0xLjItLjMtMS44IDEuMi0xLjcgMi4zLTMuNCAzLjMtNS4yLjMtLjYgMS4xLS45IDEuNy0uNS42LjMuOSAxLjEuNSAxLjctMSAxLjktMi4yIDMuOC0zLjUgNS42QzEwMjAuNCAzNzYuOCAxMDIwLjEgMzc3IDEwMTkuNyAzNzd6TTEzMjkuNyA1NzMuNGMtMS40IDAtMi45LS4yLTQuNS0uNy04LjQtMi43LTE2LjYtMTIuNy0xOC43LTIwLS40LTEuNC0uNy0yLjktLjktNC40LTguMSAzLjMtMTUuNSAxMC42LTE1LjQgMjEgMCAxLjUtMS4yIDIuNy0yLjcgMi44IDAgMCAwIDAgMCAwLTEuNSAwLTIuNy0xLjItMi43LTIuNy0uMS02LjcgMi40LTEyLjkgNy0xOCAzLjYtNCA4LjQtNy4xIDEzLjctOC44LjUtNi41IDMuMS0xMi45IDcuNC0xNy40IDctNy40IDE4LjItOC45IDI3LjMtMTAuMWwuNy0uMWMxLjUtLjIgMi45LjkgMy4xIDIuMy4yIDEuNS0uOSAyLjktMi4zIDMuMWwtLjcuMWMtOC42IDEuMi0xOC40IDIuNS0yNCA4LjQtMyAzLjItNSA3LjctNS43IDEyLjQgNy45LTEgMTcuNyAxLjMgMjQuMyA1LjcgNC4zIDIuOSA3LjEgNy44IDcuMiAxMi43LjIgNC4zLTEuNyA4LjMtNS4yIDExLjFDMTMzNS4yIDU3Mi40IDEzMzIuNiA1NzMuNCAxMzI5LjcgNTczLjR6TTEzMTEgNTQ2LjdjLjEgMS41LjQgMyAuOCA0LjQgMS43IDUuOCA4LjcgMTQuMiAxNS4xIDE2LjMgMi44LjkgNS4xLjUgNy4yLTEuMSAyLjctMi4xIDMuMi00LjggMy4xLTYuNi0uMS0zLjItMi02LjQtNC44LTguM0MxMzI2LjcgNTQ3LjUgMTMxNy43IDU0NS42IDEzMTEgNTQ2Ljd6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA3MCU7XG59XG4iXX0= */"];



/***/ }),

/***/ "./src/app/core/imobles/investors/investors.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/imobles/investors/investors.component.ts ***!
  \***************************************************************/
/*! exports provided: InvestorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorsComponent", function() { return InvestorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var InvestorsComponent = /** @class */ (function () {
    function InvestorsComponent() {
    }
    InvestorsComponent.prototype.ngOnInit = function () {
    };
    return InvestorsComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/navigation/navigation.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/core/imobles/navigation/navigation.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_NavigationComponent, View_NavigationComponent_0, View_NavigationComponent_Host_0, NavigationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NavigationComponent", function() { return RenderType_NavigationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavigationComponent_0", function() { return View_NavigationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavigationComponent_Host_0", function() { return View_NavigationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponentNgFactory", function() { return NavigationComponentNgFactory; });
/* harmony import */ var _navigation_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component.scss.shim.ngstyle */ "./src/app/core/imobles/navigation/navigation.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component */ "./src/app/core/imobles/navigation/navigation.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_NavigationComponent = [_navigation_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NavigationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NavigationComponent, data: {} });

function View_NavigationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { navBurger: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { navMenu: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 19, "nav", [["aria-label", "main navigation"], ["class", "navbar is-fixed-top is-transparent"], ["id", "navbar"], ["role", "navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "navbar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["class", "logo"], ["src", "/assets/img/logo.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, [[1, 0], ["navBurger", 1]], null, 3, "a", [["aria-expanded", "false"], ["aria-label", "menu"], ["class", "navbar-burger burger has-text-white"], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleNavbar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, [[2, 0], ["navMenu", 1]], null, 12, "div", [["class", "navbar-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 11, "div", [["class", "navbar-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 10, "div", [["class", "navbar-item is-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "a", [["class", "navbar-item has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" O Que Fazemos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "a", [["class", "navbar-item has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nossa f\u00F3rmula m\u00E1gina "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "a", [["class", "navbar-item has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cases "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "a", [["class", "navbar-item has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Quem Somos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "a", [["class", "navbar-item has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Contatos "]))], null, null); }
function View_NavigationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-navigation", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NavigationComponent_0, RenderType_NavigationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NavigationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-navigation", _navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], View_NavigationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/navigation/navigation.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/core/imobles/navigation/navigation.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".navbar[_ngcontent-%COMP%] {\n  background: transparent; }\n\n.scroll[_ngcontent-%COMP%] {\n  background-color: #fff;\n  transition: background .5s ease-in-out, opacity .5s ease; }\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding: 1.5em; }\n\n.logo[_ngcontent-%COMP%] {\n  width: 192px;\n  height: 52px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2NvcmUvaW1vYmxlcy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxzQkFBc0I7RUFHdEIsd0RBQXdELEVBQUE7O0FBRzVEO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2ltb2JsZXMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLWluLW91dCwgb3BhY2l0eSAuNXMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IC41cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IC41cyBlYXNlO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOjE5MnB4O1xuICAgIGhlaWdodDogNTJweDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/imobles/navigation/navigation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/imobles/navigation/navigation.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(window, document) {
        this.window = window;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onWindowScroll = function (e) {
        if (this.window.pageYOffset > 50) {
            var element = document.getElementById('navbar');
            element.classList.add('scroll');
            this.navBurger.nativeElement.classList.remove('has-text-white');
            var elements = document.getElementsByClassName('navbar-item');
            for (var index = 0; index < elements.length; index++) {
                var element_1 = elements[index];
                element_1.classList.add('has-text-black');
            }
        }
        else {
            var element = document.getElementById('navbar');
            element.classList.remove('scroll');
            var elements = document.getElementsByClassName('navbar-item');
            this.navBurger.nativeElement.classList.add('has-text-white');
            for (var index = 0; index < elements.length; index++) {
                var element_2 = elements[index];
                element_2.classList.remove('has-text-black');
            }
        }
    };
    NavigationComponent.prototype.toggleNavbar = function () {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    };
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/imobles/who/who.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/core/imobles/who/who.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_WhoComponent, View_WhoComponent_0, View_WhoComponent_Host_0, WhoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WhoComponent", function() { return RenderType_WhoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhoComponent_0", function() { return View_WhoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhoComponent_Host_0", function() { return View_WhoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoComponentNgFactory", function() { return WhoComponentNgFactory; });
/* harmony import */ var _who_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./who.component.scss.shim.ngstyle */ "./src/app/core/imobles/who/who.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _who_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./who.component */ "./src/app/core/imobles/who/who.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_WhoComponent = [_who_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_WhoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_WhoComponent, data: {} });

function View_WhoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "section", [["class", "section has-text-centered has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "div", [["class", "container content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [["class", "has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quem Somos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Juntamos mais de 20 anos de experi\u00EAncia no mercado imobili\u00E1rio, no Brasil e exterior, com mais de 50 anos de experi\u00EAncia em tecnologia. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Somos um grupo de empreendedores que se uniu pela vis\u00E3o de que neg\u00F3cios devem ser feitos somente quando s\u00E3o positivos para todos os envolvidos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Acreditamos que: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "div", [["class", "blockquote-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "blockquote"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A longo prazo, uma abordagem honesta e justa ao fazer neg\u00F3cios ser\u00E1 sempre mais rent\u00E1vel. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "h5", [["class", "has-text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u2014Robert Bosch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1921"]))], null, null); }
function View_WhoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-who", [], null, null, null, View_WhoComponent_0, RenderType_WhoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _who_component__WEBPACK_IMPORTED_MODULE_2__["WhoComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var WhoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-who", _who_component__WEBPACK_IMPORTED_MODULE_2__["WhoComponent"], View_WhoComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/imobles/who/who.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/core/imobles/who/who.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\nsection[_ngcontent-%COMP%] {\n  background-color: #212121;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23242424' stroke-width='2.3'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234f4f4f'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n  background-position-y: 70%; }\n\n.blockquote-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 200px; }\n\n.blockquote[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  padding: 30px 0;\n  width: 100%;\n  max-width: 800px;\n  z-index: 1;\n  margin: 80px auto;\n  align-self: center;\n  border-top: solid 1px;\n  border-bottom: solid 1px; }\n\n.blockquote[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\u201D\";\n  color: white;\n  color: white;\n  font-size: 10rem;\n  line-height: 0;\n  bottom: -43px;\n  right: 30px; }\n\n.blockquote[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  position: relative;\n  color: white;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 1;\n  margin: 0;\n  padding-top: 20px;\n  z-index: 1; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9pbW9ibGVzL3doby93aG8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9uYXRoYW4vw4FyZWEgZGUgVHJhYmFsaG8vUElSUkFML2ltb2JsZXMvc3JjL2FwcC9jb3JlL2ltb2JsZXMvd2hvL3doby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSx5QkFBeUI7RUFDekIsaTZDQUFpNkM7RUFDajZDLDBCQUEwQixFQUFBO0FBRTlCLHNDQUFBO0FBQ0E7RUFDSSxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBR2hCLDBCQUFBO0FBQ0E7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3QkFBd0IsRUFBQTtBQUc1QixtQ0FBQTtBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVM7RUFDVCxZQUFZO0VBQ1osWUFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVyxFQUFBO0FBR2YseUJBQUE7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsU0FBUztFQUNULGlCQUFpQjtFQUNqQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2ltb2JsZXMvd2hvL3doby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMDAnIGhlaWdodD0nMTAwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzI0MjQyNCcgc3Ryb2tlLXdpZHRoPScyLjMnJTNFJTNDcGF0aCBkPSdNNzY5IDIyOUwxMDM3IDI2MC45TTkyNyA4ODBMNzMxIDczNyA1MjAgNjYwIDMwOSA1MzggNDAgNTk5IDI5NSA3NjQgMTI2LjUgODc5LjUgNDAgNTk5LTE5NyA0OTMgMTAyIDM4Mi0zMSAyMjkgMTI2LjUgNzkuNS02OS02MycvJTNFJTNDcGF0aCBkPSdNLTMxIDIyOUwyMzcgMjYxIDM5MCAzODIgNjAzIDQ5MyAzMDguNSA1MzcuNSAxMDEuNSAzODEuNU0zNzAgOTA1TDI5NSA3NjQnLyUzRSUzQ3BhdGggZD0nTTUyMCA2NjBMNTc4IDg0MiA3MzEgNzM3IDg0MCA1OTkgNjAzIDQ5MyA1MjAgNjYwIDI5NSA3NjQgMzA5IDUzOCAzOTAgMzgyIDUzOSAyNjkgNzY5IDIyOSA1NzcuNSA0MS41IDM3MCAxMDUgMjk1IC0zNiAxMjYuNSA3OS41IDIzNyAyNjEgMTAyIDM4MiA0MCA1OTkgLTY5IDczNyAxMjcgODgwJy8lM0UlM0NwYXRoIGQ9J001MjAtMTQwTDU3OC41IDQyLjUgNzMxLTYzTTYwMyA0OTNMNTM5IDI2OSAyMzcgMjYxIDM3MCAxMDVNOTAyIDM4Mkw1MzkgMjY5TTM5MCAzODJMMTAyIDM4MicvJTNFJTNDcGF0aCBkPSdNLTIyMiA0MkwxMjYuNSA3OS41IDM3MCAxMDUgNTM5IDI2OSA1NzcuNSA0MS41IDkyNyA4MCA3NjkgMjI5IDkwMiAzODIgNjAzIDQ5MyA3MzEgNzM3TTI5NS0zNkw1NzcuNSA0MS41TTU3OCA4NDJMMjk1IDc2NE00MC0yMDFMMTI3IDgwTTEwMiAzODJMLTI2MSAyNjknLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjM0ZjRmNGYnJTNFJTNDY2lyY2xlIGN4PSc3NjknIGN5PScyMjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTM5JyBjeT0nMjY5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzYwMycgY3k9JzQ5Mycgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc3MzEnIGN5PSc3MzcnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTIwJyBjeT0nNjYwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzMwOScgY3k9JzUzOCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyOTUnIGN5PSc3NjQnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNDAnIGN5PSc1OTknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMTAyJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEyNycgY3k9JzgwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM3MCcgY3k9JzEwNScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1NzgnIGN5PSc0Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyMzcnIGN5PScyNjEnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzkwJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNzAlOyB9XG5cbi8qIGNlbnRlciB0aGUgYmxvY2txdW90ZSBpbiB0aGUgcGFnZSAqL1xuLmJsb2NrcXVvdGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjAwcHg7IH1cblxuLyogQmxvY2txdW90ZSBtYWluIHN0eWxlICovXG4uYmxvY2txdW90ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDgwcHggYXV0bztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDsgfVxuXG4vKiBCbG9ja3F1b3RlIHJpZ2h0IGRvdWJsZSBxdW90ZXMgKi9cbi5ibG9ja3F1b3RlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIuKAnVwiO1xuICBjb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGJvdHRvbTogLTQzcHg7XG4gIHJpZ2h0OiAzMHB4OyB9XG5cbi8qIEJsb2NrcXVvdGUgc3ViaGVhZGVyICovXG4uYmxvY2txdW90ZSBoNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHotaW5kZXg6IDE7IH1cbiIsInNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAwJyBoZWlnaHQ9JzEwMDAnIHZpZXdCb3g9JzAgMCA4MDAgODAwJyUzRSUzQ2cgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMyNDI0MjQnIHN0cm9rZS13aWR0aD0nMi4zJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzNGY0ZjRmJyUzRSUzQ2NpcmNsZSBjeD0nNzY5JyBjeT0nMjI5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUzOScgY3k9JzI2OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNzMxJyBjeT0nNzM3JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUyMCcgY3k9JzY2MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczMDknIGN5PSc1MzgnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjk1JyBjeT0nNzY0JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzQwJyBjeT0nNTk5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEwMicgY3k9JzM4Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMjcnIGN5PSc4MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczNzAnIGN5PScxMDUnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTc4JyBjeT0nNDInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjM3JyBjeT0nMjYxJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM5MCcgY3k9JzM4Micgcj0nNScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNzAlO1xufVxuLyogY2VudGVyIHRoZSBibG9ja3F1b3RlIGluIHRoZSBwYWdlICovXG4uYmxvY2txdW90ZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gfVxuIFxuIC8qIEJsb2NrcXVvdGUgbWFpbiBzdHlsZSAqL1xuIC5ibG9ja3F1b3RlIHtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgIHotaW5kZXg6IDE7XG4gICAgIG1hcmdpbjogODBweCBhdXRvO1xuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xufVxuIFxuIC8qIEJsb2NrcXVvdGUgcmlnaHQgZG91YmxlIHF1b3RlcyAqL1xuIC5ibG9ja3F1b3RlOmFmdGVyIHtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICBjb250ZW50OiBcIuKAnVwiO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICBmb250LXNpemU6IDEwcmVtO1xuICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgYm90dG9tOiAtNDNweDtcbiAgICAgcmlnaHQ6IDMwcHg7XG4gfVxuICBcbiAvKiBCbG9ja3F1b3RlIHN1YmhlYWRlciAqL1xuIC5ibG9ja3F1b3RlIGg0IHtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgei1pbmRleDogMTtcbiB9Il19 */"];



/***/ }),

/***/ "./src/app/core/imobles/who/who.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/imobles/who/who.component.ts ***!
  \***************************************************/
/*! exports provided: WhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoComponent", function() { return WhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var WhoComponent = /** @class */ (function () {
    function WhoComponent() {
    }
    WhoComponent.prototype.ngOnInit = function () {
    };
    return WhoComponent;
}());



/***/ }),

/***/ "./src/app/hotsite/hotsite.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/hotsite/hotsite.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_HotsiteComponent, View_HotsiteComponent_0, View_HotsiteComponent_Host_0, HotsiteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HotsiteComponent", function() { return RenderType_HotsiteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HotsiteComponent_0", function() { return View_HotsiteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HotsiteComponent_Host_0", function() { return View_HotsiteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotsiteComponentNgFactory", function() { return HotsiteComponentNgFactory; });
/* harmony import */ var _hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotsite.component.scss.shim.ngstyle */ "./src/app/hotsite/hotsite.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_hotsite_hero_hotsite_hero_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/hotsite/hero-hotsite/hero-hotsite.component.ngfactory */ "./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_hero_hotsite_hero_hotsite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/hotsite/hero-hotsite/hero-hotsite.component */ "./src/app/core/hotsite/hero-hotsite/hero-hotsite.component.ts");
/* harmony import */ var _core_hotsite_gallery_hotsite_gallery_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/hotsite/gallery-hotsite/gallery-hotsite.component.ngfactory */ "./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_gallery_hotsite_gallery_hotsite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/hotsite/gallery-hotsite/gallery-hotsite.component */ "./src/app/core/hotsite/gallery-hotsite/gallery-hotsite.component.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-gallery/core */ "@ngx-gallery/core");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_hotsite_advantages_hotsite_advantages_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/hotsite/advantages-hotsite/advantages-hotsite.component.ngfactory */ "./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_advantages_hotsite_advantages_hotsite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/hotsite/advantages-hotsite/advantages-hotsite.component */ "./src/app/core/hotsite/advantages-hotsite/advantages-hotsite.component.ts");
/* harmony import */ var _core_hotsite_commons_hotsite_commons_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/hotsite/commons-hotsite/commons-hotsite.component.ngfactory */ "./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_commons_hotsite_commons_hotsite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/hotsite/commons-hotsite/commons-hotsite.component */ "./src/app/core/hotsite/commons-hotsite/commons-hotsite.component.ts");
/* harmony import */ var _core_hotsite_decorated_hotsite_decorated_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/hotsite/decorated-hotsite/decorated-hotsite.component.ngfactory */ "./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_decorated_hotsite_decorated_hotsite_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/hotsite/decorated-hotsite/decorated-hotsite.component */ "./src/app/core/hotsite/decorated-hotsite/decorated-hotsite.component.ts");
/* harmony import */ var _core_hotsite_plants_hotsite_plants_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/hotsite/plants-hotsite/plants-hotsite.component.ngfactory */ "./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_plants_hotsite_plants_hotsite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/hotsite/plants-hotsite/plants-hotsite.component */ "./src/app/core/hotsite/plants-hotsite/plants-hotsite.component.ts");
/* harmony import */ var _core_hotsite_localization_hotsite_localization_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/hotsite/localization-hotsite/localization-hotsite.component.ngfactory */ "./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_localization_hotsite_localization_hotsite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/hotsite/localization-hotsite/localization-hotsite.component */ "./src/app/core/hotsite/localization-hotsite/localization-hotsite.component.ts");
/* harmony import */ var _core_hotsite_concept_hotsite_concept_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/hotsite/concept-hotsite/concept-hotsite.component.ngfactory */ "./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_concept_hotsite_concept_hotsite_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/hotsite/concept-hotsite/concept-hotsite.component */ "./src/app/core/hotsite/concept-hotsite/concept-hotsite.component.ts");
/* harmony import */ var _core_hotsite_others_hotsite_others_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/hotsite/others-hotsite/others-hotsite.component.ngfactory */ "./src/app/core/hotsite/others-hotsite/others-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_others_hotsite_others_hotsite_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/hotsite/others-hotsite/others-hotsite.component */ "./src/app/core/hotsite/others-hotsite/others-hotsite.component.ts");
/* harmony import */ var _core_hotsite_award_hotsite_award_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/hotsite/award-hotsite/award-hotsite.component.ngfactory */ "./src/app/core/hotsite/award-hotsite/award-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_award_hotsite_award_hotsite_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/hotsite/award-hotsite/award-hotsite.component */ "./src/app/core/hotsite/award-hotsite/award-hotsite.component.ts");
/* harmony import */ var _core_hotsite_footer_hotsite_footer_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/hotsite/footer-hotsite/footer-hotsite.component.ngfactory */ "./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.ngfactory.js");
/* harmony import */ var _core_hotsite_footer_hotsite_footer_hotsite_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/hotsite/footer-hotsite/footer-hotsite.component */ "./src/app/core/hotsite/footer-hotsite/footer-hotsite.component.ts");
/* harmony import */ var _hotsite_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hotsite.component */ "./src/app/hotsite/hotsite.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var styles_HotsiteComponent = [_hotsite_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HotsiteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HotsiteComponent, data: {} });

function View_HotsiteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hero-hotsite", [], null, null, null, _core_hotsite_hero_hotsite_hero_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeroHotsiteComponent_0"], _core_hotsite_hero_hotsite_hero_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeroHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _core_hotsite_hero_hotsite_hero_hotsite_component__WEBPACK_IMPORTED_MODULE_3__["HeroHotsiteComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-gallery-hotsite", [], null, null, null, _core_hotsite_gallery_hotsite_gallery_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_GalleryHotsiteComponent_0"], _core_hotsite_gallery_hotsite_gallery_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_GalleryHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4308992, null, 0, _core_hotsite_gallery_hotsite_gallery_hotsite_component__WEBPACK_IMPORTED_MODULE_5__["GalleryHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["Gallery"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-advantages-hotsite", [], null, null, null, _core_hotsite_advantages_hotsite_advantages_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AdvantagesHotsiteComponent_0"], _core_hotsite_advantages_hotsite_advantages_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AdvantagesHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _core_hotsite_advantages_hotsite_advantages_hotsite_component__WEBPACK_IMPORTED_MODULE_8__["AdvantagesHotsiteComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-commons-hotsite", [], null, null, null, _core_hotsite_commons_hotsite_commons_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_CommonsHotsiteComponent_0"], _core_hotsite_commons_hotsite_commons_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_CommonsHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4308992, null, 0, _core_hotsite_commons_hotsite_commons_hotsite_component__WEBPACK_IMPORTED_MODULE_10__["CommonsHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["Gallery"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-decorated-hotsite", [], null, null, null, _core_hotsite_decorated_hotsite_decorated_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_DecoratedHotsiteComponent_0"], _core_hotsite_decorated_hotsite_decorated_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_DecoratedHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4308992, null, 0, _core_hotsite_decorated_hotsite_decorated_hotsite_component__WEBPACK_IMPORTED_MODULE_12__["DecoratedHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["Gallery"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-plants-hotsite", [], null, null, null, _core_hotsite_plants_hotsite_plants_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_PlantsHotsiteComponent_0"], _core_hotsite_plants_hotsite_plants_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_PlantsHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4308992, null, 0, _core_hotsite_plants_hotsite_plants_hotsite_component__WEBPACK_IMPORTED_MODULE_14__["PlantsHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["Gallery"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "app-localization-hotsite", [], null, null, null, _core_hotsite_localization_hotsite_localization_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_LocalizationHotsiteComponent_0"], _core_hotsite_localization_hotsite_localization_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_LocalizationHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4308992, null, 0, _core_hotsite_localization_hotsite_localization_hotsite_component__WEBPACK_IMPORTED_MODULE_16__["LocalizationHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["Gallery"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "app-concept-hotsite", [], null, null, null, _core_hotsite_concept_hotsite_concept_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_ConceptHotsiteComponent_0"], _core_hotsite_concept_hotsite_concept_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_ConceptHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4308992, null, 0, _core_hotsite_concept_hotsite_concept_hotsite_component__WEBPACK_IMPORTED_MODULE_18__["ConceptHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["Gallery"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "app-others-hotsite", [], null, null, null, _core_hotsite_others_hotsite_others_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_OthersHotsiteComponent_0"], _core_hotsite_others_hotsite_others_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_OthersHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, null, 0, _core_hotsite_others_hotsite_others_hotsite_component__WEBPACK_IMPORTED_MODULE_20__["OthersHotsiteComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "app-award-hotsite", [], null, null, null, _core_hotsite_award_hotsite_award_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_AwardHotsiteComponent_0"], _core_hotsite_award_hotsite_award_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_AwardHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4308992, null, 0, _core_hotsite_award_hotsite_award_hotsite_component__WEBPACK_IMPORTED_MODULE_22__["AwardHotsiteComponent"], [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["Gallery"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "app-footer-hotsite", [], null, null, null, _core_hotsite_footer_hotsite_footer_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_FooterHotsiteComponent_0"], _core_hotsite_footer_hotsite_footer_hotsite_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_FooterHotsiteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _core_hotsite_footer_hotsite_footer_hotsite_component__WEBPACK_IMPORTED_MODULE_24__["FooterHotsiteComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); _ck(_v, 9, 0); _ck(_v, 11, 0); _ck(_v, 13, 0); _ck(_v, 15, 0); _ck(_v, 17, 0); _ck(_v, 19, 0); _ck(_v, 21, 0); }, null); }
function View_HotsiteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "hotsite", [], null, null, null, View_HotsiteComponent_0, RenderType_HotsiteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _hotsite_component__WEBPACK_IMPORTED_MODULE_25__["HotsiteComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["Meta"]], null, null)], null, null); }
var HotsiteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("hotsite", _hotsite_component__WEBPACK_IMPORTED_MODULE_25__["HotsiteComponent"], View_HotsiteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/hotsite/hotsite.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/hotsite/hotsite.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdHNpdGUvaG90c2l0ZS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/hotsite/hotsite.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hotsite/hotsite.component.ts ***!
  \**********************************************/
/*! exports provided: HotsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotsiteComponent", function() { return HotsiteComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);

var HotsiteComponent = /** @class */ (function () {
    function HotsiteComponent(titleService, metaSerice) {
        this.titleService = titleService;
        this.metaSerice = metaSerice;
        this.titleService.setTitle('Terra Mundi Eldorado | Empreedimento em Goiânia Apts. 64 e 90m²');
        this.metaSerice.updateTag({ name: 'description', content: 'Empreedimento em Goiânia Apts. 64 e 90m²' });
    }
    return HotsiteComponent;
}());



/***/ }),

/***/ "./src/app/hotsite/hotsite.module.ts":
/*!*******************************************!*\
  !*** ./src/app/hotsite/hotsite.module.ts ***!
  \*******************************************/
/*! exports provided: HotsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotsiteModule", function() { return HotsiteModule; });
var HotsiteModule = /** @class */ (function () {
    function HotsiteModule() {
    }
    return HotsiteModule;
}());



/***/ }),

/***/ "./src/app/imoble/imoble.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/imoble/imoble.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_ImobleComponent, View_ImobleComponent_0, View_ImobleComponent_Host_0, ImobleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ImobleComponent", function() { return RenderType_ImobleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImobleComponent_0", function() { return View_ImobleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImobleComponent_Host_0", function() { return View_ImobleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImobleComponentNgFactory", function() { return ImobleComponentNgFactory; });
/* harmony import */ var _imoble_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imoble.component.scss.shim.ngstyle */ "./src/app/imoble/imoble.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_imobles_hero_hero_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/imobles/hero/hero.component.ngfactory */ "./src/app/core/imobles/hero/hero.component.ngfactory.js");
/* harmony import */ var _core_imobles_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/imobles/hero/hero.component */ "./src/app/core/imobles/hero/hero.component.ts");
/* harmony import */ var _core_imobles_investors_investors_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/imobles/investors/investors.component.ngfactory */ "./src/app/core/imobles/investors/investors.component.ngfactory.js");
/* harmony import */ var _core_imobles_investors_investors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/imobles/investors/investors.component */ "./src/app/core/imobles/investors/investors.component.ts");
/* harmony import */ var _core_imobles_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/imobles/about/about.component.ngfactory */ "./src/app/core/imobles/about/about.component.ngfactory.js");
/* harmony import */ var _core_imobles_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/imobles/about/about.component */ "./src/app/core/imobles/about/about.component.ts");
/* harmony import */ var _core_imobles_cases_cases_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/imobles/cases/cases.component.ngfactory */ "./src/app/core/imobles/cases/cases.component.ngfactory.js");
/* harmony import */ var _core_imobles_cases_cases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/imobles/cases/cases.component */ "./src/app/core/imobles/cases/cases.component.ts");
/* harmony import */ var _core_imobles_who_who_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/imobles/who/who.component.ngfactory */ "./src/app/core/imobles/who/who.component.ngfactory.js");
/* harmony import */ var _core_imobles_who_who_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/imobles/who/who.component */ "./src/app/core/imobles/who/who.component.ts");
/* harmony import */ var _core_imobles_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/imobles/contact/contact.component.ngfactory */ "./src/app/core/imobles/contact/contact.component.ngfactory.js");
/* harmony import */ var _core_imobles_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/imobles/contact/contact.component */ "./src/app/core/imobles/contact/contact.component.ts");
/* harmony import */ var _core_imobles_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/imobles/footer/footer.component.ngfactory */ "./src/app/core/imobles/footer/footer.component.ngfactory.js");
/* harmony import */ var _core_imobles_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/imobles/footer/footer.component */ "./src/app/core/imobles/footer/footer.component.ts");
/* harmony import */ var _imoble_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./imoble.component */ "./src/app/imoble/imoble.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_ImobleComponent = [_imoble_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ImobleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ImobleComponent, data: {} });

function View_ImobleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hero", [], null, null, null, _core_imobles_hero_hero_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeroComponent_0"], _core_imobles_hero_hero_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeroComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _core_imobles_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__["HeroComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-investors", [], null, null, null, _core_imobles_investors_investors_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_InvestorsComponent_0"], _core_imobles_investors_investors_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_InvestorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _core_imobles_investors_investors_component__WEBPACK_IMPORTED_MODULE_5__["InvestorsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-about", [], null, null, null, _core_imobles_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AboutComponent_0"], _core_imobles_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AboutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _core_imobles_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-cases", [], null, null, null, _core_imobles_cases_cases_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_CasesComponent_0"], _core_imobles_cases_cases_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_CasesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _core_imobles_cases_cases_component__WEBPACK_IMPORTED_MODULE_9__["CasesComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-who", [], null, null, null, _core_imobles_who_who_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_WhoComponent_0"], _core_imobles_who_who_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_WhoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _core_imobles_who_who_component__WEBPACK_IMPORTED_MODULE_11__["WhoComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-contact", [], null, null, null, _core_imobles_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ContactComponent_0"], _core_imobles_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ContactComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, _core_imobles_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "app-footer", [], null, null, null, _core_imobles_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_FooterComponent_0"], _core_imobles_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 114688, null, 0, _core_imobles_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); _ck(_v, 9, 0); _ck(_v, 11, 0); _ck(_v, 13, 0); }, null); }
function View_ImobleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "imoble", [], null, null, null, View_ImobleComponent_0, RenderType_ImobleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _imoble_component__WEBPACK_IMPORTED_MODULE_16__["ImobleComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_17__["WINDOW"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Meta"]], null, null)], null, null); }
var ImobleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("imoble", _imoble_component__WEBPACK_IMPORTED_MODULE_16__["ImobleComponent"], View_ImobleComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/imoble/imoble.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/imoble/imoble.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  transition: all .2s ease-in-out; }\n\n.chat[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 100px;\n  transition: all .2s ease-in-out; }\n\nbutton[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  display: inline-block;\n  padding: 10px 5px 5px 5px;\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  border-radius: 50%;\n  background: #1c7de1;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, -webkit-transform 150ms ease;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  transition: background 250ms ease-in-out, transform 150ms ease, -webkit-transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  transition: all .2s ease-in-out; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hdGhhbi/DgXJlYSBkZSBUcmFiYWxoby9QSVJSQUwvaW1vYmxlcy9zcmMvYXBwL2ltb2JsZS9pbW9ibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNFQUE4RDtFQUE5RCw4REFBOEQ7RUFBOUQsNEZBQThEO0VBQzlELHdCQUF3QjtFQUN4QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSwrQkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ltb2JsZS9pbW9ibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLXRvLXRvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogMzBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hhdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMxYzdkZTE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDE1MG1zIGVhc2U7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLnNob3ctc2Nyb2xsVG9wIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/imoble/imoble.component.ts":
/*!********************************************!*\
  !*** ./src/app/imoble/imoble.component.ts ***!
  \********************************************/
/*! exports provided: ImobleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImobleComponent", function() { return ImobleComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);

var ImobleComponent = /** @class */ (function () {
    function ImobleComponent(window, titleService, metaSerice) {
        this.window = window;
        this.titleService = titleService;
        this.metaSerice = metaSerice;
        this.titleService.setTitle('imobles | Escalamos seu empreendimento!');
        this.metaSerice.updateTag({ name: 'description', content: 'Empreedimentos imobiliários e Marketing Digital' });
    }
    return ImobleComponent;
}());



/***/ }),

/***/ "./src/app/imoble/imoble.module.ts":
/*!*****************************************!*\
  !*** ./src/app/imoble/imoble.module.ts ***!
  \*****************************************/
/*! exports provided: ImobleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImobleModule", function() { return ImobleModule; });
var ImobleModule = /** @class */ (function () {
    function ImobleModule() {
    }
    return ImobleModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nathan/Área de Trabalho/PIRRAL/imobles/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-toolkit/universal":
/*!****************************************!*\
  !*** external "@ng-toolkit/universal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-toolkit/universal");

/***/ }),

/***/ "@nguniversal/common":
/*!**************************************!*\
  !*** external "@nguniversal/common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/common");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "@ngx-gallery/core":
/*!************************************!*\
  !*** external "@ngx-gallery/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-gallery/core");

/***/ }),

/***/ "@nicky-lenaers/ngx-scroll-to":
/*!***********************************************!*\
  !*** external "@nicky-lenaers/ngx-scroll-to" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nicky-lenaers/ngx-scroll-to");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map