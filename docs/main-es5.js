(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchBox\">\n    <input [(ngModel)]=\"term\" placeholder=\"search\" autofocus/>\n    <span class=\"count\">{{ruleCount(data | search: term)}}</span>\n    <small><a href=\"assets/about.html\">about</a></small>\n</div>\n\n<section class=\"group\" *ngFor=\"let group of data | search: term\">\n    <h1>{{group.title}}</h1>\n    <section class=\"rule\" *ngFor=\"let rule of group.rules\">\n        <h1>{{rule.title}}</h1>\n        <div [innerHTML]=\"rule.content\"></div>\n        <div class=\"tags\" *ngFor=\"let tag of rule.tags\">\n            <span class=\"tag\">{{tag}}</span>\n        </div>\n    </section>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.title = 'Korean';
        this.term = '';
        this.data = dataService.data;
    }
    AppComponent.prototype.ruleCount = function (groups) {
        var e_1, _a;
        var ruleCount = 0;
        try {
            for (var groups_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](groups), groups_1_1 = groups_1.next(); !groups_1_1.done; groups_1_1 = groups_1.next()) {
                var group = groups_1_1.value;
                ruleCount += group.rules.length;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (groups_1_1 && !groups_1_1.done && (_a = groups_1.return)) _a.call(groups_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return ruleCount + ' rules in ' + groups.length + ' groups';
    };
    AppComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

/* tslint:disable:max-line-length */


var DataService = /** @class */ (function () {
    function DataService(sanitizer) {
        this.data = [
            {
                title: "Basics",
                rules: [
                    {
                        title: "\uC694",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: sanitizer.bypassSecurityTrustHtml("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"140\" width=\"200\">\n                        <text x=\"0\" y=\"72\">\uBC1B\uCE68</text>\n                        <text x=\"12\" y=\"50\">no</text>\n                        <text x=\"7\" y=\"95\">yes</text>\n                        <text x=\"47\" y=\"21\">others</text>\n                        <text x=\"47\" y=\"57\">\u3161\u21E8X*</text>\n                        <text x=\"47\" y=\"91\">\u3137\u21E8\u3139</text>\n                        <text x=\"47\" y=\"104\">\u3142\u21E8\uC6B0</text>\n                        <text x=\"47\" y=\"125\">others</text>\n                        <text x=\"113\" y=\"16\">\u3157</text>\n                        <text x=\"113\" y=\"31\">\u315C</text>\n                        <text x=\"113\" y=\"47\">\u3163</text>\n                        <text x=\"110\" y=\"64\">others</text>\n                        <text x=\"104\" y=\"85\">\u314F\u3151\u3157\u315B</text>\n                        <text x=\"102\" y=\"125\">\u3153\u3155\u315C\u3160\u3161l</text>\n                        <text class=\"topic\" x=\"162\" y=\"15\">\u3158\uC694</text>\n                        <text class=\"topic\" x=\"162\" y=\"35\">\u315D\uC694</text>\n                        <text class=\"topic\" x=\"162\" y=\"55\">\u3155\uC694</text>\n                        <text class=\"topic\" x=\"173\" y=\"75\">\uC694</text>\n                        <text class=\"topic\" x=\"162\" y=\"95\">\uC544\uC694</text>\n                        <text class=\"topic\" x=\"162\" y=\"115\">\uC5B4\uC694</text>\n\n                        <path d=\"m22,70l8,-30\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m22,70l8,30\" fill=\"none\" stroke=\"#000\"></path>\n\n                        <path d=\"m30,40s35,-35 70,0\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m30,40s6,11 15,13\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m85,53s14,6 15,46\" fill=\"none\" stroke=\"#000\"></path>\n\n                        <path d=\"m100,40s1,-28 60,-28\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m100,40s1,-8 60,-8\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m100,40s1,12 60,12\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m100,40s1,36 60,32\" fill=\"none\" stroke=\"#000\"></path>\n\n                        <path d=\"m30,100s6,-11 15,-13\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m30,100l0,0 15,0\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m85,100l0,0 15,0\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m30,100s35,35 70,0\" fill=\"none\" stroke=\"#000\"></path>\n\n                        <path d=\"m100,100s-7,-11 -18,-13\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m100,100s16,-12 60,-11\" fill=\"none\" stroke=\"#000\"></path>\n                        <path d=\"m100,100s17,12 60,11\" fill=\"none\" stroke=\"#000\"></path>\n                        </svg>\n                        <p class=\"exception\">\uD558\uB2E4 \u21E8 \uD574\uC694</p>\n                        <p class=\"exception\">vowel + \uC774\uB2E4 \u21E8 -\uC608\uC694</p>\n                        <p class=\"exception\">consonant + \uC774\uB2E4 \u21E8 -\uC774\uC5D0\uC694</p>\n                        <p class=\"exception\">* delete and use previous vowel (or \u3153 if none) to decide</p>\n                        <p class=\"exception\">see also exceptions of <a href=\"#exceptionRule1\">exception rule 1</a></p>"),
                    },
                    {
                        title: "Negative",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">\uC548</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C <span class=\"topic\">\uC548</span> \uBA39\uC5B4\uC694.</p>\n\n                        <p class=\"topic\">-\uC9C0 \uC54A\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC9C0 \uC54A\uC544\uC694.</span></p>",
                    },
                    {
                        title: "Future",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\u3139 \uAC70\uC608\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC744 \uAC70\uC608\uC694.</span></p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Doing",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uACE0 \uC788\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uACE0 \uC788\uC5B4\uC694.</span></p>",
                    },
                ],
            },
            {
                title: "Want / Plan to",
                rules: [
                    {
                        title: "Want to",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uACE0 \uC2F6\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uACE0 \uC2F6\uC5B4\uC694</span>.</p>",
                    },
                    {
                        title: "Intent to",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\uB824\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC73C\uB824\uACE0 \uD574\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>",
                    },
                    {
                        title: "Promise to",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\u3139\uAC8C\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC744\uAC8C\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Let's do?",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\u3139 \uAE4C\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC744 \uAE4C\uC694</span>?</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Let's do!",
                        tags: [
                            "Ewha 1-2",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\u3142\uC2DC\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC74D\uC2DC\uB2E4</span>!</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Let's not do!",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">V-\uC9C0 \uB9D9\uC2DC\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC9C0 \uB9D9\uC2DC\uB2E4</span>!</p>",
                    },
                    {
                        title: "Can help by doing X ?",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-\uC544/\uC5B4 \uB4DC\uB9B4\uAE4C\uC694 <span class=\"comment\">formal</span></p>\n                        <p class=\"example\">\uC9D0\uC744 \uB4E4<span class=\"topic\">\uC5B4 \uB4DC\uB9B4\uAE4C\uC694</span>?</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule4\">exception polite verbs</a></p>",
                    },
                    {
                        title: "Will help by doing X",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-\uC544/\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 <span class=\"comment\">formal</span></p>\n                        <p class=\"example\">\uC9D0\uC744 \uB4E4<span class=\"topic\">\uC5B4 \uB4DC\uB9B4\uAC8C\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule4\">exception polite verbs</a></p>",
                    },
                    {
                        title: "Will ?",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\uC2DC\uACA0\uC2B5\uB2C8\uAE4C <span class=\"comment\">formal</span></p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uB4DC<span class=\"topic\">\uC2DC\uACA0\uC2B5\uB2C8\uAE4C</span>?</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule4\">exception polite verbs</a></p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Promise to",
                        tags: [
                            "Ewha 2-1",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">V-\uAE30\uB85C \uD558\uB2E4</p>\n                        <p class=\"example\">\uB0B4\uC77C \uCE5C\uAD6C\uB97C \uB9CC\uB098<span class=\"topic\">\uAE30\uB85C \uD588\uC5B4\uC694</span>.</p>",
                    },
                    {
                        title: "Will you ? / I will",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\u3139\uB798\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC744\uB798\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>\n                        <p class=\"comment\">can use with \uC548 / \uBABB</p>",
                    },
                    {
                        title: "I definitely will",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-\uACA0-</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uACA0\uC2B5\uB2C8\uB2E4</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "If want X do Y",
                        tags: [
                            "Ewha 2-1",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\uB824\uBA74</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC73C\uB824\uBA74</span> \uC0AC\uC57C \uD574\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>",
                    },
                ],
            },
            {
                title: "Description",
                rules: [
                    {
                        title: "Adjective",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">A-(\uC73C)\u3134 + N</p>\n                            <p class=\"example\"><span class=\"topic\">\uBE44\uC2FC</span> \uC0AC\uACFC\uC608\uC694.</p>\n                            <p class=\"exception\">\uC788\uB2E4 \u21E8 \uC788\uB294</p>\n                            <p class=\"exception\">\uC5C6\uB2E4 \u21E8 \uC5C6\uB294</p>\n                            <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "The thing being",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">V-\uB294 + N</p>\n                            <p class=\"example\">\uBA39<span class=\"topic\">\uB294</span> \uC0AC\uACFC\uAC00 \uB9DB\uC788\uC5B4\uC694.</p>\n                            <p class=\"exception\">\u3139 \u21E8 delete</p>",
                    },
                    {
                        title: "The thing that has been",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\u3134 + N</p>\n                            <p class=\"example\">\uBA39<span class=\"topic\">\uC740</span> \uC0AC\uACFC\uAC00 \uB9DB\uC788\uC5C8\uC5B4\uC694.</p>\n                            <p class=\"exception\">\u3137 \u21E8 \u3139</p>\n                            <p class=\"exception\">\u3139 \u21E8 delete</p>",
                    },
                    {
                        title: "The thing that will be",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\u3139 + N</p>\n                            <p class=\"example\">\uBA39<span class=\"topic\">\uC744</span> \uC0AC\uACFC\uAC00 \uB9DB\uC788\uACA0\uC5B4\uC694.</p>\n                            <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "To be called",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N-(\uC774)\uB77C\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC800\uB294 \uB9C8\uC774\uD074<span class=\"topic\">\uC774\uB77C\uACE0 \uD574\uC694</span>.</p>",
                    },
                    {
                        title: "Doing",
                        tags: [
                            "Ewha 2-1",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">N \uC911 \uC774\uB2E4/\uC5D0</p>\n                        <p class=\"example\">\uACF5\uC0AC <span class=\"topic\"> \uC911\uC774\uC5D0\uC694</span>.</p>\n\n                        <p class=\"topic\">V-\uB294 \uC911 \uC774\uB2E4/\uC5D0</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uB294 \uC911\uC774\uC5D0\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Oh! It's X",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N-(\uC774)\uAD70\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uB2EC<span class=\"topic\">\uAD70\uC694</span>.</p>\n\n                        <p class=\"topic\">A-\uAD70\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uB2EC<span class=\"topic\">\uAD70\uC694</span>.</p>\n\n                        <p class=\"topic\">V-\uB294\uAD70\uC694</p>\n                        <p class=\"example\">\uB208\uC774 \uC624<span class=\"topic\">\uB294\uAD70\uC694</span>.</p>\n                        <p class=\"exception\">\u3139 \u21E8 delete</p>\n                        <p class=\"exception\">\uC788\uB2E4 \u21E8 \uC788\uAD70\uC694</p>\n                        <p class=\"exception\">\uC5C6\uB2E4 \u21E8 \uC5C6\uAD70\uC694</p>",
                    },
                ],
            },
            {
                title: "From, To",
                rules: [
                    {
                        title: "Person",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC5D0\uAC8C\uC11C or -\uD55C\uD14C\uC11C</p>\n                            <p class=\"example\">\uCE5C\uAD6C<span class=\"topic\">\uC5D0\uAC8C\uC11C</span> \uD3B8\uC9C0\uB97C \uBC1B\uC544\uC694.</p>\n\n                            <p class=\"topic\">-\uC5D0\uAC8C or -\uD55C\uD14C</p>\n                            <p class=\"example\">\uCE5C\uAD6C<span class=\"topic\">\uC5D0\uAC8C</span> \uC804\uD654\uD574\uC694.</p>",
                    },
                    {
                        title: "Place",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC5D0\uC11C</p>\n                            <p class=\"example\">\uC9D1<span class=\"topic\">\uC5D0\uC11C</span> \uC640\uC694.</p>\n\n                            <p class=\"topic\">-\uAE4C\uC9C0</p>\n                            <p class=\"example\">\uD559\uAD50<span class=\"topic\">\uAE4C\uC9C0</span> \uAC00\uC694.</p>",
                    },
                    {
                        title: "Time",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uBD80\uD130</p>\n                            <p class=\"example\">\uC544\uCE68<span class=\"topic\">\uBD80\uD130</span> \uBE44\uAC00 \uC640\uC694.</p>\n\n                            <p class=\"topic\">-\uAE4C\uC9C0</p>\n                            <p class=\"example\">\uC800\uB141<span class=\"topic\">\uAE4C\uC9C0</span> \uBE44\uAC00 \uC640\uC694.</p>",
                    },
                ],
            },
            {
                title: "Purpose",
                rules: [
                    {
                        title: "Do X to do Y",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\uB824\uACE0</p>\n                            <p class=\"example\">\uBA39<span class=\"topic\">\uC73C\uB824\uACE0</span> \uC0AC\uACFC\uB97C \uC0AC\uC694.</p>\n\n                            <p class=\"exception\">cannot use with \uD558\uC138\uC694/\uD569\uC2DC\uB2E4</p>\n                            <p class=\"exception\">subject cannot change</p>",
                    },
                    {
                        title: "Do X to do Y",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-\uAE30 \uC704\uD574(\uC11C)</p>\n                            <p class=\"example\">\uBA39<span class=\"topic\">\uAE30 \uC704\uD574\uC11C</span> \uC0AC\uACFC\uB97C \uC0AC\uC694.</p>",
                    },
                    {
                        title: "Purpose",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">A/V-\uB3C4\uB85D</p>\n                            <p class=\"example\">\uCE5C\uAD6C\uAC00 \uBA39<span class=\"topic\">\uB3C4\uB85D</span> \uC0AC\uACFC\uB97C \uC0AC\uC694.</p>\n                            <p class=\"comment\">to give directions or make requests</p>",
                    },
                ],
            },
            {
                title: "Explanations",
                rules: [
                    {
                        title: "Guess it is",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uACA0-</p>\n                            <p class=\"example\">\uC7AC\uBBF8\uC788<span class=\"topic\">\uACA0</span>\uC5B4\uC694.</p>\n                            <p class=\"example\">\uC7AC\uBBF8\uC788\uC5C8<span class=\"topic\">\uACA0</span>\uC5B4\uC694.</p>",
                    },
                    {
                        title: "X is more than Y",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">Y-\uBCF4\uB2E4</p>\n                            <p class=\"example\">\uC0AC\uACFC\uB97C \uBC14\uB098\uB098<span class=\"topic\">\uBCF4\uB2E4</span> \uC88B\uC544\uD574\uC694.</p>",
                    },
                    {
                        title: "Go to X to do Y",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">Y-(\uC73C)\uB7EC \uAC00\uB2E4/\uC624\uB2E4/\uB2E4\uB2C8\uB2E4</p>\n                            <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC73C\uB7EC</span> \uC9D1\uC5D0 <span class=\"topic\">\uAC00\uC694</span>.</p>\n                            <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>",
                    },
                    {
                        title: "Do X because Y",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">Y-\uC544\uC11C/-\uC5B4\uC11C</p>\n                            <p class=\"example\">\uBC30\uACE0<span class=\"topic\">\uD30C\uC11C</span> \uC0AC\uACFC\uB97C \uBA39\uC5B4\uC694.</p>\n                            <p class=\"exception\">Y is always present</p>\n                            <p class=\"exception\">\uD558\uB2E4 \u21E8 \uD574\uC11C</p>\n                            <p class=\"exception\">vowel + \uC774\uB2E4 \u21E8 -\uC5EC\uC11C or -\uB77C\uC11C</p>\n                            <p class=\"exception\">consonant + \uC774\uB2E4 \u21E8 -\uC774\uC5B4\uC11C or -\uC774\uB77C\uC11C</p>",
                    },
                    {
                        title: "Not X but Y",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N-\uC774/\uAC00 \uC544\uB2C8\uB77C</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uAC00 \uC544\uB2C8\uB77C</span> \uBC14\uB098\uB098\uC608\uC694.</p>\n\n                        <p class=\"topic\">A-(\uC73C)\u3134 \uAC8C \uC544\uB2C8\uB77C</p>\n                        <p class=\"example\">\uB9CE<span class=\"topic\">\uC740 \uAC8C \uC544\uB2C8\uB77C</span> \uC801\uC5B4\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>\n\n                        <p class=\"topic\">V-(\uC73C)\u3134 \uAC8C \uC544\uB2C8\uB77C <span class=\"comment\">past</span></p>\n                        <p class=\"example\">\uBA39<span class=\"topic\">\uC740 \uAC8C \uC544\uB2C8\uB77C</span> \uB9C8\uC2E0 \uAC70\uC608\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>\n\n                        <p class=\"topic\">V-\uB294 \uAC8C \uC544\uB2C8\uB77C <span class=\"comment\">present</span></p>\n                        <p class=\"example\">\uBA39<span class=\"topic\">\uB294 \uAC8C \uC544\uB2C8\uB77C</span> \uB9C8\uC2DC\uB294 \uAC70\uC608\uC694.</p>\n                        <p class=\"exception\">\u3139 \u21E8 delete</p>\n\n                        <p class=\"topic\">V-(\uC73C)\u3139 \uAC8C \uC544\uB2C8\uB77C <span class=\"comment\">future</span></p>\n                        <p class=\"example\">\uBA39<span class=\"topic\">\uC744 \uAC8C \uC544\uB2C8\uB77C</span> \uB9C8\uC2E4 \uAC70\uC608\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Given X it's Y",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N-\uC5D0 \uBE44\uD574(\uC11C)</p>\n                        <p class=\"example\">\uD06C\uAE30<span class=\"topic\">\uC5D0 \uBE44\uD574\uC11C</span> \uC0AC\uACFC\uAC00 \uC2F8\uC694.</p>\n                        <p class=\"comment\">Can be used like \uBCF4\uB2E4 too. But \uBCF4\uB2E4 can only be used to compare same characteristics (size1 VS size2, or quality1 VS quality2) but never for different characteristics (size1 VS price2, or quality1 VS quantity2)</p>",
                    },
                    {
                        title: "Because",
                        tags: [
                            "Ewha 2-1",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">N \uB54C\uBB38\uC5D0</p>\n                        <p class=\"example\">\uC2DC\uD5D8 <span class=\"topic\">\uB54C\uBB38\uC5D0</span> \uACF5\uBD80\uD574\uC694.</p>\n\n                        <p class=\"topic\">A/V-\uAE30 \uB54C\uBB38\uC5D0</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uB9DB\uC788<span class=\"topic\">\uAE30 \uB54C\uBB38\uC5D0</span> \uBA39\uC5B4\uC694.</p>\n                        <p class=\"exception\">cannot use with \uD558\uC138\uC694/\uD569\uC2DC\uB2E4</p>\n                        <p class=\"comment\">usually used for writing</p>",
                    },
                    {
                        title: "Because",
                        tags: [
                            "Ewha 2-1",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">A/V-\uAC70\uB4E0\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39\uC5B4\uC694. \uBC30\uACE0\uD504<span class=\"topic\">\uAC70\uB4E0\uC694</span>.</p>",
                    },
                    {
                        title: "Because",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">A/V-(\uC73C)\uB2C8\uAE4C</p>\n                        <p class=\"example\">\uBC30\uACE0\uD504<span class=\"topic\">\uB2C8\uAE4C</span> \uC0AC\uACFC\uB97C \uBA39\uC5B4\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                ],
            },
            {
                title: "Imperatives",
                rules: [
                    {
                        title: "Please / Do smth for smb",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC544/\uC5B4 \uC8FC\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uC0AC<span class=\"topic\"> \uC8FC\uC138\uC694</span>.</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uCC3E<span class=\"topic\">\uC544 \uC8FC\uC138\uC694</span>.</p>\n                        <p class=\"example\">\uC5EC\uC790<span class=\"topic\">\uB97C \uC704\uD574\uC11C</span> \uC0AC\uACFC\uB97C \uC0AC<span class=\"topic\"> \uC8FC\uC138\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule4\">exception polite verbs</a></p>",
                    },
                    {
                        title: "Have to",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC544\uC57C/-\uC5B4\uC57C \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uC0AC\uC11C \uB3C8\uC774 \uC788<span class=\"topic\">\uC5B4\uC57C \uD574\uC694</span>.</p>\n                        <p class=\"exception\">\uD558\uB2E4 \u21E8 \uD574\uC57C</p>\n                        <p class=\"exception\">vowel + \uC774\uB2E4 \u21E8 -\uC5EC\uC57C</p>\n                        <p class=\"exception\">consonant + \uC774\uB2E4 \u21E8 -\uC774\uC5B4\uC57C</p>",
                    },
                    {
                        title: "Do",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\uC138\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uC0AC<span class=\"topic\">\uC138\uC694</span>.</p>",
                    },
                    {
                        title: "Don't",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC9C0 \uB9C8\uC138\uC694</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uC0AC<span class=\"topic\">\uC9C0 \uB9C8\uC138\uC694</span>.</p>",
                    },
                    {
                        title: "Do (polite)",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\uC2ED\uC2DC\uC624</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uC0AC<span class=\"topic\">\uC2ED\uC2DC\uC624</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule4\">exception polite verbs</a></p>",
                    },
                    {
                        title: "Don't (polite)",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC9C0 \uB9C8\uC2ED\uC2DC\uC624</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uC0AC<span class=\"topic\">\uC9C0 \uB9C8\uC2ED\uC2DC\uC624</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule4\">exception polite verbs</a></p>",
                    },
                    {
                        title: "Have to",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC544/\uC5B4\uC57C \uD558\uB2E4/\uB418\uB2E4</p>\n                        <p class=\"example\">\uBC30\uACE0\uD30C\uC11C \uBA39<span class=\"topic\">\uC5B4\uC57C \uD574\uC694</span>.</p>\n                        <p class=\"exception\">\uD558\uB2E4 \u21E8 \uD574\uC57C \uD574\uC694</p>\n                        <p class=\"exception\">vowel + \uC774\uB2E4 \u21E8 -\uC5EC\uC57C \uD574\uC694</p>\n                        <p class=\"exception\">consonant + \uC774\uB2E4 \u21E8 -\uC774\uC5B4\uC57C \uD574\uC694</p>",
                    },
                ],
            },
            {
                title: "Miscellaneous",
                rules: [
                    {
                        title: "If",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\uBA74</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uC788<span class=\"topic\">\uC73C\uBA74</span> \uBA39\uC5B4\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>",
                    },
                    {
                        title: "Or",
                        tags: [
                            "Ewha 1-2",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">N-(\uC774)\uB098</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uB098</span> \uBC14\uB098\uB098\uB97C \uBA39\uC5B4\uC694.</p>\n\n                        <p class=\"topic\">A/V-\uAC70\uB098</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uC8FC<span class=\"topic\">\uAC70\uB098</span> \uBA39\uC5B4\uC694.</p>",
                    },
                    {
                        title: "And / With",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">N-\uD558\uACE0</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uD558\uACE0</span> \uBC14\uB098\uB098\uB97C \uBA39\uC5B4\uC694.</p>",
                    },
                    {
                        title: "By / In (means)",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\uB85C</p>\n                        <p class=\"example\">\uBC84\uC2A4<span class=\"topic\">\uB85C</span> \uAC00\uC694.</p>\n                        <p class=\"example\">\uD55C\uAD6D\uC5B4<span class=\"topic\">\uB85C</span> \uB9D0\uD574\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>",
                    },
                    {
                        title: "Via",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\uB85C \uD574\uC11C</p>\n                        <p class=\"example\">\uC11C\uC6B8\uC5D0\uC11C \uB3C4\uCFC4<span class=\"topic\">\uB85C \uD574\uC11C</span> \uD30C\uB9AC\uAE4C\uC9C0 \uAC00\uC694.</p>",
                    },
                    {
                        title: "Isn't it?",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC9C0\uC694? <span class=\"comment\">pronouced \"\uC8E0\"</span></p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39\uC5C8<span class=\"topic\">\uC9C0\uC694?</span></p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC9C0\uC694?</span></p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39\uC744 \uAC70<span class=\"topic\">\uC9C0\uC694?</span></p>\n                        <p class=\"exception\">vowel + \uC774\uB2E4 \u21E8 -\uC9C0\uC694?</p>\n                        <p class=\"exception\">consonant + \uC774\uB2E4 \u21E8 -\uC774\uC9C0\uC694?</p>",
                    },
                    {
                        title: "About",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N-\uC5D0 \uB300\uD574(\uC11C) + V</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uC5D0 \uB300\uD574\uC11C</span> \uB9D0\uD574\uC694.</p>\n\n                        <p class=\"topic\">N-\uC5D0 \uB300\uD55C + N</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uC5D0 \uB300\uD55C</span> \uAE00\uC774\uC5D0\uC694.</p>\n                        <p class=\"comment\">eg: \uAE00, \uAE30\uC0AC, \uCC45, \uC18C\uBB38, \uC774\uC57C\uAE30</p>",
                    },
                    {
                        title: "But",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">A/V-\uC9C0\uB9CC</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uBE44\uC2F8<span class=\"topic\">\uC9C0\uB9CC</span> \uB9DB\uC788\uC5B4\uC694.</p>",
                    },
                    {
                        title: "Just",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N-(\uC774)\uB098</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uB098</span> \uBA39\uC5B4\uC694.</p>",
                    },
                    {
                        title: "Asking gently",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N-\uC778\uAC00\uC694</p>\n                        <p class=\"example\">\uD559\uC0DD<span class=\"topic\">\uC778\uAC00\uC694</span>?</p>\n\n                        <p class=\"topic\">A-(\uC73C)\u3134 \uAC00\uC694</p>\n                        <p class=\"example\">\uBE44<span class=\"topic\">\uC2FC \uAC00\uC694</span>?</p>\n\n                        <p class=\"topic\">V-\uB098\uC694</p>\n                        <p class=\"example\">\uBA39<span class=\"topic\">\uB098\uC694</span>?</p>\n                        <p class=\"example\">\uBA39<span class=\"topic\">\uC744 \uAC74\uAC00\uC694</span>?</p>",
                    },
                    {
                        title: "Hope/Request",
                        tags: [
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">V-\uAE30 \uBC14\uB78D\uB2C8\uB2E4</p>\n                        <p class=\"example\">\uC640 \uC8FC\uC2DC<span class=\"topic\">\uAE30 \uBC14\uB78D\uB2C8\uB2E4</span>.</p>",
                    },
                    {
                        title: "And (with connections)",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-\uC544/\uC5B4\uC11C</p>\n                        <p class=\"example\">\uAC00\uAC8C\uC5D0 \uAC00<span class=\"topic\">\uC11C</span> \uC0AC\uACFC \uC0C0\uC5B4\uC694.</p>\n                        <p class=\"exception\">cannot be used with \uC785\uB2E4, \uC4F0\uB2E4, \uC2E0\uB2E4, \uB4E4\uB2E4, \uD0C0\uB2E4</p>",
                    },
                ],
            },
            {
                title: "Ability",
                rules: [
                    {
                        title: "Can",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\u3139 \uC218 \uC788\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC744 \uC218 \uC788\uC5B4\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Can't",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\u3139 \uC218 \uC5C6\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC744 \uC218 \uC5C6\uC5B4\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>\n\n                        <p class=\"topic\">\uBABB</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C <span class=\"topic\">\uBABB</span> \uBA39\uC5B4\uC694.</p>",
                    },
                    {
                        title: "Try to (present) / Have experienced (past)",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC544/\uC5B4 \uBCF4\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC5B4 \uBCF4\uC138\uC694</span>.</p>\n                        <p class=\"example\">\uD55C\uAD6D\uC5D0\uC11C \uC0B4<span class=\"topic\">\uC544 \uBD24\uC5B4\uC694</span>.</p>\n                        <p class=\"exception\">\uD558\uB2E4 \u21E8 \uD574 \uBCF4\uB2E4</p>",
                    },
                    {
                        title: "Permission",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-\uC544/\uC5B4\uB3C4 \uB418\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC5B4\uB3C4 \uB418\uC694</span>.</p>\n                        <p class=\"exception\">\uD558\uB2E4 \u21E8 \uD574\uB3C4 \uB418\uB2E4</p>",
                    },
                    {
                        title: "Interdiction",
                        tags: [
                            "Ewha 1-2",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\uBA74 \uC548 \uB418\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC73C\uBA74 \uC548 \uB418\uC694</span>.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>",
                    },
                    {
                        title: "Didn't know it is X",
                        tags: [
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">A/V-(\uC73C)\u3139 \uC904 \uBAB0\uB790\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uBE44<span class=\"topic\">\uC300 \uC904 \uBAB0\uB790\uC5B4\uC694</span>.</p>",
                    },
                ],
            },
            {
                title: "Time related",
                rules: [
                    {
                        title: "Before",
                        tags: [
                            "Ewha 1-2",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">-\uAE30 \uC804\uC5D0</p>\n                            <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uAE30 \uC804\uC5D0</span> \uC0C0\uC5B4\uC694.</p>",
                    },
                    {
                        title: "After",
                        tags: [
                            "Ewha 1-2",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">-(\uC73C)\u3134 \uD6C4\uC5D0</p>\n                            <p class=\"example\">\uC0AC\uACFC\uB97C <span class=\"topic\">\uC0B0 \uD6C4\uC5D0</span> \uBA39\uC744 \uAC70\uC608\uC694.</p>\n                            <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>\n\n                            <p class=\"topic\">-\uACE0 <span class=\"comment\">short of \uADF8\uB9AC\uACE0</span></p>\n                            <p class=\"example\">\uC0AC\uACFC\uB97C \uC0AC<span class=\"topic\">\uACE0</span> \uBA39\uC744 \uAC70\uC608\uC694.</p>",
                    },
                    {
                        title: "Since X it's been Y",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\u3134 \uC9C0</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC740 \uC9C0</span> 1\uB144\uC774 \uB410\uC5B4\uC694.</p>\n\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>\n                        <p class=\"comment\">almost: \uB2E4 \uB410\uC5B4\uC694 / (\uB2E4) \uB418\uC5B4 \uAC00\uC694</p>\n                        <p class=\"comment\">exact: \uB410\uC5B4\uC694</p>\n                        <p class=\"comment\">over: \uC9C0\uB0AC\uC5B4\uC694 / \uB118\uC5C8\uC5B4\uC694</p>",
                    },
                    {
                        title: "When",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N \uB54C</p>\n                        <p class=\"example\">\uD559\uC0DD <span class=\"topic\">\uB54C</span> \uC88B\uC544\uC694.</p>\n\n                        <p class=\"topic\">A/V-(\uC73C)\u3139 \uB54C</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC744 \uB54C</span> \uC88B\uC544\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "When it was",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">A/V-\uC558/\uC5C8\uC744 \uB54C</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC5C8\uC744 \uB54C</span> \uC88B\uC558\uC5B4\uC694.</p>\n                        <p class=\"exception\">vowel + \uC774\uB2E4 \u21E8 -\uC600\uC744 \uB54C</p>\n                        <p class=\"exception\">consonant + \uC774\uB2E4 \u21E8 -\uC774\uC5C8\uC744 \uB54C</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "Have you ever",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\u3134 \uC801\uC774 \uC788\uB2E4/\uC5C6\uB2E4/\uB9CE\uB2E4/\uC801\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC740 \uC801\uC774 \uC788\uC5B4\uC694</span>?</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule2\">exception rule 2</a></p>",
                    },
                    {
                        title: "While",
                        tags: [
                            "Ewha 2-1",
                        ],
                        content: "<p class=\"topic\">N \uB3D9\uC548(\uC5D0)</p>\n                        <p class=\"example\">\uD734\uAC00 <span class=\"topic\">\uB3D9\uC548</span> \uC0AC\uACFC\uB97C \uBA39\uC5B4\uC694.</p>\n\n                        <p class=\"topic\">V-\uB294 \uB3D9\uC548(\uC5D0)</p>\n                        <p class=\"example\">\uC601\uD654\uB97C \uBCF4<span class=\"topic\">\uB294 \uB3D9\uC548</span> \uC0AC\uACFC\uB97C \uBA39\uC5B4\uC694.</p>\n                        <p class=\"exception\">\u3139 \u21E8 delete</p>",
                    },
                    {
                        title: "Should have done X",
                        tags: [
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">V-\uC558/\uC5C8\uC5B4\uC57C \uB410\uB294\uB370</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC5C8\uC5B4\uC57C \uB410\uB294\uB370</span>...</p>",
                    },
                ],
            },
            {
                title: "Reporting speech",
                rules: [
                    {
                        title: "Affirmative",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">N-(\uC774)\uB77C\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uB77C\uACE0 \uD588\uC5B4\uC694</span>.</p>\n\n                        <p class=\"topic\">A-\uB2E4\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uB2EC<span class=\"topic\">\uB2E4\uACE0 \uD588\uC5B4\uC694</span>.</p>\n\n                        <p class=\"topic\">V-\u3134/\uB294\uB2E4\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uB294\uB2E4\uACE0 \uD588\uC5B4\uC694</span>.</p>\n\n                        <p class=\"topic\">P-\uC558/\uC5C8/\uC600\uB2E4\uACE0 \uD558\uB2E4 <span class=\"comment\">past</span></p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC5C8\uB2E4\uACE0 \uD588\uC5B4\uC694</span>.</p>",
                    },
                    {
                        title: "Question ?",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">N/A/V-\uB0D0\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uB0D0\uACE0 \uD588\uC5B4\uC694</span>.</p>\n                        <p class=\"exception\">\u3139 \u21E8 delete</p>",
                    },
                    {
                        title: "Imperative",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">V-(\uC73C)\uB77C\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC73C\uB77C\uACE0 \uD588\uC5B4\uC694</span>.</p>\n\n                        <p class=\"comment\">original: V-(\uC73C)\uC138\uC694</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>\n                        <p class=\"exception\">\uC8FC\uB2E4: if original speaker ask for himself, change: \uC800\uB97C \uB3C4\uC640\uC8FC\uC138\uC694 \u21E8 \uB3C4\uC640\uB2EC\uB77C\uACE0 \uD588\uC5B4\uC694</p>",
                    },
                    {
                        title: "Let's do!",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">V-\uC790\uACE0 \uD558\uB2E4</p>\n                        <p class=\"example\">\uC0AC\uACFC\uB97C \uBA39<span class=\"topic\">\uC790\uACE0 \uD588\uC5B4\uC694</span>.</p>\n\n                        <p class=\"comment\">original: V-(\uC73C)\u3142\uC2DC\uB2E4</p>",
                    },
                ],
            },
            {
                title: "Other stuff",
                rules: [
                    {
                        title: "As you know",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">N/A/V-\uC796\uC544\uC694</p>\n                        <p class=\"example\">\uC544\uB0B4\uAC00 \uC608\uC058<span class=\"topic\">\uC796\uC544\uC694</span>.</p>",
                    },
                    {
                        title: "Because did X, bad Y happened",
                        tags: [
                            "Easy Korean 4",
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">V-\uB290\uB77C\uACE0</p>\n                        <p class=\"example\">\uC601\uD654\uB97C \uBCF4<span class=\"topic\">\uB290\uB77C\uACE0</span>  \uD53C\uC790\uAC00 \uD0D4\uC5B4\uC694.</p>",
                    },
                    {
                        title: "Not only X but also Y",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">N-\uBFD0(\uB9CC) \uC544\uB2C8\uB77C</p>\n                        <p class=\"example\">\uC0AC\uACFC<span class=\"topic\">\uBFD0\uB9CC \uC544\uB2C8\uB77C</span> \uBC14\uB098\uB098\uB3C4 \uC88B\uC544\uD574\uC694.</p>\n\n                        <p class=\"topic\">A-(\uC73C)\u3139 \uBFD0(\uB9CC) \uC544\uB2C8\uB77C</p>\n                        <p class=\"example\">\uC0AC\uACFC\uAC00 \uB9DB\uC788<span class=\"topic\">\uC744 \uBFD0\uB9CC \uC544\uB2C8\uB77C</span> \uC2F8\uC694.</p>\n\n                        <p class=\"topic\">V-(\uC73C)\u3139 \uBFD0(\uB9CC) \uC544\uB2C8\uB77C</p>\n                        <p class=\"example\">\uC544\uB0B4\uAC00 \uB178\uB798<span class=\"topic\">\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C</span> \uCDA4\uB3C4 \uCDB0\uC694.</p>\n                        <p class=\"exception\"><a href=\"#exceptionRule3\">exception rule 3</a></p>",
                    },
                    {
                        title: "Even though do X, Y happens",
                        tags: [
                            "Active Korean 4",
                        ],
                        content: "<p class=\"topic\">\uC544\uBB34\uB9AC V-\uC544/\uC5B4\uB3C4</p>\n                        <p class=\"example\"><span class=\"topic\">\uC544\uBB34\uB9AC</span> \uBA39\uC5B4<span class=\"topic\">\uB3C4</span> \uBC30\uAC00 \uACE0\uD30C\uC694.</p>",
                    },
                ],
            },
            {
                title: "Exceptions",
                rules: [
                    {
                        title: "Rule 1",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">\u3137 \u21E8 \u3139</p>\n                        <p class=\"example\">\uB4E3\uB2E4 \u21E8 \uB4E4\u2026</p>\n                        <p class=\"exception\">\uB2EB\uB2E4 \u21E8 \uB2EB\uC544\uC694</p>\n                        <p class=\"exception\">\uBC1B\uB2E4 \u21E8 \uBC1B\uC544\uC694</p>\n                        <p class=\"exception\">\uBBFF\uB2E4 \u21E8 \uBBFF\uC5B4\uC694</p>\n\n                        <p class=\"topic\">\u3142 \u21E8 \uC6B0</p>\n                        <p class=\"example\">\uC90D\uB2E4 \u21E8 \uC8FC\uC6CC\u2026</p>\n                        <p class=\"exception\">\uB3D5\uB2E4 \u21E8 \uB3C4\uC640\uC694</p>\n                        <p class=\"exception\">\uC785\uB2E4 \u21E8 \uC785\uC5B4\uC694</p>\n                        <p class=\"exception\">\uC881\uB2E4 \u21E8 \uC881\uC544\uC694</p>\n                        <p class=\"exception\">\uC7A1\uB2E4 \u21E8 \uC7A1\uC544\uC694</p>",
                    },
                    {
                        title: "Rule 2",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p>Same as <a href=\"#exceptionRule1\">exception rule 1</a>, and:</p>\n\n                        <p class=\"topic\">\u3139 \u21E8 delete, but use as if vowel, not consonant</p>\n                        <p class=\"example\">\uC0B4\uB2E4 \u21E8 \uC0BD\uC2DC\uB2E4</p>",
                    },
                    {
                        title: "Rule 3",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p>Same as <a href=\"#exceptionRule1\">exception rule 1</a>, and:</p>\n                        <p class=\"topic\">\u3139 \u21E8 \u3139, but use as if vowel, not consonant</p>\n                        <p class=\"example\">\uC0B4\uB2E4 \u21E8 \uC0B4\uBA74</p>",
                    },
                    {
                        title: "Polite verbs",
                        tags: [
                            "Easy Korean 4",
                        ],
                        content: "<p class=\"topic\">\uBA39\uB2E4 \u21E8 \uB4DC\uC2DC\uB2E4 / \uC7A1\uC218\uC2DC\uB2E4</p>\n                        <p class=\"topic\">\uB9C8\uC2DC\uB2E4 \u21E8 \uB4DC\uC2DC\uB2E4 / \uC7A1\uC218\uC2DC\uB2E4</p>\n                        <p class=\"topic\">\uC790\uB2E4 \u21E8 \uC8FC\uBB34\uC2DC\uB2E4</p>\n                        <p class=\"topic\">\uB9D0\uD558\uB2E4 \u21E8 \uB9D0\uC500\uD558\uC2DC\uB2E4</p>\n                        <p class=\"topic\">\uC8FC\uB2E4 \u21E8 \uB4DC\uB9AC\uB2E4</p>\n                        <p class=\"topic\">\uC788\uB2E4 \u21E8 \uACC4\uC2DC\uB2E4</p>",
                    },
                ],
            },
        ];
    }
    DataService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (groups, rawTerms) {
        var e_1, _a, e_2, _b;
        var terms = this.getRegExps(rawTerms);
        if (!terms.length) {
            return groups;
        }
        var result = [];
        try {
            for (var groups_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](groups), groups_1_1 = groups_1.next(); !groups_1_1.done; groups_1_1 = groups_1.next()) {
                var group = groups_1_1.value;
                var groupCopy = {
                    title: group.title,
                    rules: [],
                };
                if (this.matchRule(terms, group)) {
                    result.push(group);
                }
                else {
                    try {
                        for (var _c = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](group.rules)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var rule = _d.value;
                            if (this.matchRule(terms, rule)) {
                                groupCopy.rules.push(rule);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (groupCopy.rules.length) {
                        result.push(groupCopy);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (groups_1_1 && !groups_1_1.done && (_a = groups_1.return)) _a.call(groups_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    // Escape user input to be treated as a literal string within a regular expression
    SearchPipe.prototype.escapeRegExp = function (value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    };
    SearchPipe.prototype.getRegExps = function (terms) {
        var e_3, _a;
        var splitTerms;
        if (!terms) {
            splitTerms = [];
        }
        else {
            splitTerms = terms.trim().split(/ +/);
        }
        var result = [];
        try {
            for (var splitTerms_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](splitTerms), splitTerms_1_1 = splitTerms_1.next(); !splitTerms_1_1.done; splitTerms_1_1 = splitTerms_1.next()) {
                var term = splitTerms_1_1.value;
                result.push(new RegExp(this.escapeRegExp(term), 'i'));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (splitTerms_1_1 && !splitTerms_1_1.done && (_a = splitTerms_1.return)) _a.call(splitTerms_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    SearchPipe.prototype.matchRule = function (terms, o) {
        var e_4, _a;
        var match = true;
        try {
            for (var terms_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](terms), terms_1_1 = terms_1.next(); !terms_1_1.done; terms_1_1 = terms_1.next()) {
                var term = terms_1_1.value;
                var termMatch = o.title.match(term);
                if (o.content) {
                    termMatch = termMatch || o.content.toString().match(term);
                }
                match = match && termMatch;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (terms_1_1 && !terms_1_1.done && (_a = terms_1.return)) _a.call(terms_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return match;
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /sites/korean/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map