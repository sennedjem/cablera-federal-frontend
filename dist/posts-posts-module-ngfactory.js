(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module-ngfactory"],{

/***/ "./src/app/layout/posts/posts-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/posts/posts-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.component */ "./src/app/layout/posts/posts.component.ts");
/* harmony import */ var _shared_resolves_posts_get_all_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/resolves/posts-get-all-resolver */ "./src/app/shared/resolves/posts-get-all-resolver.ts");



var routes = [
    {
        path: '', component: _posts_component__WEBPACK_IMPORTED_MODULE_1__["PostsComponent"], resolve: { posts: _shared_resolves_posts_get_all_resolver__WEBPACK_IMPORTED_MODULE_2__["PostsGetAllResolver"] }
    }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    return PostsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/posts/posts.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/layout/posts/posts.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_PostsComponent, View_PostsComponent_0, View_PostsComponent_Host_0, PostsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PostsComponent", function() { return RenderType_PostsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PostsComponent_0", function() { return View_PostsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PostsComponent_Host_0", function() { return View_PostsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponentNgFactory", function() { return PostsComponentNgFactory; });
/* harmony import */ var _posts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component.scss.shim.ngstyle */ "./src/app/layout/posts/posts.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modules_stat_stat_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/modules/stat/stat.component.ngfactory */ "./src/app/shared/modules/stat/stat.component.ngfactory.js");
/* harmony import */ var _shared_modules_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modules/stat/stat.component */ "./src/app/shared/modules/stat/stat.component.ts");
/* harmony import */ var _shared_services_date_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/date/date.service */ "./src/app/shared/services/date/date.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */ "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts.component */ "./src/app/layout/posts/posts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/posts/posts.service */ "./src/app/shared/services/posts/posts.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_PostsComponent = [_posts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PostsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PostsComponent, data: { "animation": [{ type: 7, name: "routerTransition", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { transform: "translateY(100%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { transform: "translateY(0%)" }, offset: null }, { type: 4, styles: { type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, timings: "0.5s ease-in-out" }], options: null }], options: {} }] } });

function View_PostsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "col-xl-6 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-stat", [], null, null, null, _shared_modules_stat_stat_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_StatComponent_0"], _shared_modules_stat_stat_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_StatComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_modules_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"], [_shared_services_date_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]], { icon: [0, "icon"], id: [1, "id"], image: [2, "image"], title: [3, "title"], content: [4, "content"], url: [5, "url"], tags: [6, "tags"], publicationDate: [7, "publicationDate"], site: [8, "site"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "fa-image"; var currVal_1 = _v.context.$implicit.id; var currVal_2 = _v.context.$implicit.image; var currVal_3 = _v.context.$implicit.title; var currVal_4 = _co.formatContent(_v.context.$implicit.content); var currVal_5 = _v.context.$implicit.url; var currVal_6 = _v.context.$implicit.tags; var currVal_7 = _v.context.$implicit.creation_date; var currVal_8 = _v.context.$implicit.site; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, null); }
function View_PostsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "col-md-12"]], [[24, "@routerTransition", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h2", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "col-xl-12 col-lg-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "row justify-content-md-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "pagination-controls", [["responsive", "true"]], null, [[null, "pageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = (_co.pageChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], [], { responsive: [0, "responsive"], previousLabel: [1, "previousLabel"], nextLabel: [2, "nextLabel"] }, { pageChange: "pageChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 3, null, View_PostsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, { itemsPerPage: 0, currentPage: 1, totalItems: 2 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationService"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [["class", "col-xl-12 col-lg-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "div", [["class", "row justify-content-md-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "pagination-controls", [["responsive", "true"]], null, [[null, "pageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageChange" === en)) {
        var pd_0 = (_co.pageChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], [], { responsive: [0, "responsive"], previousLabel: [1, "previousLabel"], nextLabel: [2, "nextLabel"] }, { pageChange: "pageChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_2 = "true"; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("layout.previous")), ""); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).transform("layout.next")), ""); _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform(_co.data, _ck(_v, 13, 0, _co.perPage, _co.page, _co.count))); _ck(_v, 12, 0, currVal_5); var currVal_6 = "true"; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).transform("layout.previous")), ""); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform("layout.next")), ""); _ck(_v, 18, 0, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("layout.posts")); _ck(_v, 2, 0, currVal_1); }); }
function View_PostsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-posts", [], null, null, null, View_PostsComponent_0, RenderType_PostsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _shared_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_11__["PostsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PostsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-posts", _posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"], View_PostsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/layout/posts/posts.component.scss.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/layout/posts/posts.component.scss.shim.ngstyle.js ***!
  \*******************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/layout/posts/posts.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/posts/posts.component.ts ***!
  \*************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/posts/posts.service */ "./src/app/shared/services/posts/posts.service.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(route, actRoute, postsService) {
        this.route = route;
        this.actRoute = actRoute;
        this.postsService = postsService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.data.subscribe(function (data) {
            _this.data = data.posts.data,
                _this.count = data.posts.total,
                _this.perPage = data.posts.per_page,
                _this.page = data.posts.current_page;
        });
        this.data.map(function (post) {
            return formatPost(post);
        });
        function formatPost(post) {
            post.tags = post.tags.map(function (tag) { return tag.description; });
            return post;
        }
    };
    PostsComponent.prototype.formatContent = function (content) {
        return content + '...';
    };
    PostsComponent.prototype.pageChange = function (newPage) {
        var _this = this;
        this.page = newPage;
        this.route.navigate([], {
            queryParams: {
                page: newPage
            }
        });
        this.postsService.getPosts("" + this.page).subscribe(function (data) { return _this.data = data['data']; });
        window.scrollTo(0, 0);
    };
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/layout/posts/posts.module.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/layout/posts/posts.module.ngfactory.js ***!
  \********************************************************/
/*! exports provided: PostsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModuleNgFactory", function() { return PostsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.module */ "./src/app/layout/posts/posts.module.ts");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ "./src/app/layout/posts/posts.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ngx_easy_table_ngx_easy_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ngx-easy-table/ngx-easy-table.ngfactory */ "./node_modules/ngx-easy-table/ngx-easy-table.ngfactory.js");
/* harmony import */ var _posts_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts.component.ngfactory */ "./src/app/layout/posts/posts.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-dnd */ "./node_modules/@swimlane/ngx-dnd/fesm5/swimlane-ngx-dnd.js");
/* harmony import */ var _shared_resolves_posts_get_all_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/resolves/posts-get-all-resolver */ "./src/app/shared/resolves/posts-get-all-resolver.ts");
/* harmony import */ var _shared_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/posts/posts.service */ "./src/app/shared/services/posts/posts.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_easy_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-easy-table */ "./node_modules/ngx-easy-table/fesm5/ngx-easy-table.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/layout/posts/posts-routing.module.ts");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var PostsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_posts_module__WEBPACK_IMPORTED_MODULE_1__["PostsModule"], [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _node_modules_ngx_easy_table_ngx_easy_table_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵbNgFactory"], _posts_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PostsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_8__["DrakeStoreService"], _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_8__["DrakeStoreService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_resolves_posts_get_all_resolver__WEBPACK_IMPORTED_MODULE_9__["PostsGetAllResolver"], _shared_resolves_posts_get_all_resolver__WEBPACK_IMPORTED_MODULE_9__["PostsGetAllResolver"], [_shared_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_10__["PostsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_12__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_12__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__["NgxSmartModalService"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__["NgxSmartModalService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_8__["NgxDnDModule"], _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_8__["NgxDnDModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_easy_table__WEBPACK_IMPORTED_MODULE_15__["ɵa"], ngx_easy_table__WEBPACK_IMPORTED_MODULE_15__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_easy_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"], ngx_easy_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _posts_routing_module__WEBPACK_IMPORTED_MODULE_16__["PostsRoutingModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_16__["PostsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__["NgxSmartModalModule"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__["NgxSmartModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_19__["StatModule"], _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_19__["StatModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _posts_module__WEBPACK_IMPORTED_MODULE_1__["PostsModule"], _posts_module__WEBPACK_IMPORTED_MODULE_1__["PostsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () { return [[{ path: "", component: _posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"], resolve: { posts: _shared_resolves_posts_get_all_resolver__WEBPACK_IMPORTED_MODULE_9__["PostsGetAllResolver"] } }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"], false, [])]); });



/***/ }),

/***/ "./src/app/layout/posts/posts.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/posts/posts.module.ts ***!
  \**********************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    return PostsModule;
}());



/***/ })

}]);
//# sourceMappingURL=posts-posts-module-ngfactory.js.map