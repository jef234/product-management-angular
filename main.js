(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _products_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/page-not-found.component */ "./src/app/shared/page-not-found.component.ts");
/* harmony import */ var _products_ProductGuard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/ProductGuard.service */ "./src/app/products/ProductGuard.service.ts");
/* harmony import */ var _home_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/register.component */ "./src/app/home/register.component.ts");









var routes = [
    { path: 'products', component: _products_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'products/:id', canActivate: [_products_ProductGuard_service__WEBPACK_IMPORTED_MODULE_7__["ProductGuardService"]], component: _products_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"] },
    { path: 'welcome', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'register', component: _home_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: _shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // title = 'sample-app';
        this.pageTitle = 'Product Management';
        // isOnline: boolean = true;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n  <nav class=\"navbar navbar-expand-sm navbar-dark bg-dark mb-3\">\n  <a class=\"navbar-brand\" href=\"\">{{pageTitle}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n  data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\"><a class=\"nav-item nav-link text-\" [routerLink]=\"['/welcome']\">Home</a></li>\n      <li class=\"nav-item\"><a class=\"nav-item nav-link text-link\" [routerLink]=\"['/products']\">Product List</a></li>\n      <li class=\"nav-item\"><a class=\"nav-item nav-link text-link\" [routerLink]=\"['/register']\">Register</a></li>\n    </ul>\n  </div>\n</nav>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>"
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/convert-to-spaces.pipe */ "./src/app/shared/convert-to-spaces.pipe.ts");
/* harmony import */ var _shared_star_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/star.component */ "./src/app/shared/star.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/page-not-found.component */ "./src/app/shared/page-not-found.component.ts");
/* harmony import */ var _products_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _products_ProductGuard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/ProductGuard.service */ "./src/app/products/ProductGuard.service.ts");
/* harmony import */ var _products_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _products_product_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/product-filter.pipe */ "./src/app/products/product-filter.pipe.ts");
/* harmony import */ var _products_product_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _home_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/register.component */ "./src/app/home/register.component.ts");
/* harmony import */ var _services_FormPoster_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/FormPoster.service */ "./src/app/services/FormPoster.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_7__["ConvertToSpacesPipe"],
                _shared_star_component__WEBPACK_IMPORTED_MODULE_8__["StarComponent"],
                _home_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _home_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _products_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"],
                _products_product_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["ProductFilterPipe"],
                _products_product_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _products_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
                _products_ProductGuard_service__WEBPACK_IMPORTED_MODULE_12__["ProductGuardService"],
                _services_FormPoster_service__WEBPACK_IMPORTED_MODULE_17__["FormPosterService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/register.component.css":
/*!*********************************************!*\
  !*** ./src/app/home/register.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/register.component.html":
/*!**********************************************!*\
  !*** ./src/app/home/register.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2 mb-4\">Register</h2>\n<form #form=\"ngForm\" (submit)='submitForm(form)'> \n  <div class=\"form-group row\">\n    <label for=\"firstName\" class=\"control-label col-sm-2 col-form-label\">First Name</label>\n    <div class=\"col-sm-10\">\n      <input #firstName=\"ngModel\" type=\"text\" class=\"form-control\" required id=\"firstName\" name=\"firstName\" placeholder=\"First Name\"\n        [(ngModel)]=\"model.firstName\" (ngModelChange)=\"firstLetterToUppercse($event)\"\n        [class.is-valid]=\"firstName.touched && firstName.valid\" [class.is-invalid]=\"firstName.touched && firstName.invalid\">\n        <div class=\"invalid-feedback\">First Name is Required</div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last Name</label>\n    <div class=\"col-sm-10\">\n      <input #lastName=\"ngModel\" required type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Last Name\"\n        [(ngModel)]=\"model.lastName\"\n        [class.is-valid]=\"lastName.touched && lastName.valid\" [class.is-invalid]=\"lastName.touched && lastName.invalid\">\n        <div class=\"invalid-feedback\">Last Name is Required</div>\n    </div>\n  </div>\n  <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" type=\"submit\">Submit</button>\n  <!-- <fieldset class=\"form-group\">\n    <div class=\"row\">\n      <legend class=\"col-form-label col-sm-2 pt-0\">Radios</legend>\n      <div class=\"col-sm-10\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n          <label class=\"form-check-label\" for=\"gridRadios1\">\n            First radio\n          </label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\n          <label class=\"form-check-label\" for=\"gridRadios2\">\n            Second radio\n          </label>\n        </div>\n        <div class=\"form-check disabled\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"option3\" disabled>\n          <label class=\"form-check-label\" for=\"gridRadios3\">\n            Third disabled radio\n          </label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-2\">Checkbox</div>\n    <div class=\"col-sm-10\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\">\n        <label class=\"form-check-label\" for=\"gridCheck1\">\n          Example checkbox\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n    </div>\n  </div> -->\n</form>\n<!-- <p>\n  register works! <br>\n  {{pageTitle}} <br>\n  Model Data :: {{model | json}} <br>\n  Form Data :: {{form.value | json}}\n</p> -->"

/***/ }),

/***/ "./src/app/home/register.component.ts":
/*!********************************************!*\
  !*** ./src/app/home/register.component.ts ***!
  \********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_employee_employee_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/employee/employee.module */ "./src/app/models/employee/employee.module.ts");
/* harmony import */ var _services_FormPoster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/FormPoster.service */ "./src/app/services/FormPoster.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formPoster) {
        this.formPoster = formPoster;
        this.pageTitle = 'Welcome to Register';
        this.languages = ['English', 'Hindi', 'French', 'German'];
        this.model = new _models_employee_employee_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeModule"]('Jeffrey', 'Rajkumar');
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.firstLetterToUppercse = function (value) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        }
    };
    RegisterComponent.prototype.submitForm = function (form) {
        console.log(form.value);
        // this.formPoster.postEmployeeData(form.value).subscribe((res) => console.log('Data posted'));
        this.formPoster.postEmployeeData(form.value);
        alert('Data posted');
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/home/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/home/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_FormPoster_service__WEBPACK_IMPORTED_MODULE_3__["FormPosterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/home/welcome.component.css":
/*!********************************************!*\
  !*** ./src/app/home/welcome.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/welcome.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/welcome.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center mt-5\">\n  Welcome to Product Managment\n</h3>\n"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/home/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/home/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/models/employee/employee.module.ts":
/*!****************************************************!*\
  !*** ./src/app/models/employee/employee.module.ts ***!
  \****************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var EmployeeModule = /** @class */ (function () {
    function EmployeeModule(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String])
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/products/ProductGuard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/products/ProductGuard.service.ts ***!
  \**************************************************/
/*! exports provided: ProductGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGuardService", function() { return ProductGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductGuardService = /** @class */ (function () {
    function ProductGuardService(_router) {
        this._router = _router;
    }
    ProductGuardService.prototype.canActivate = function (route, state) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid Product ID');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    };
    ProductGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductGuardService);
    return ProductGuardService;
}());



/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/product-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card row\">\n  <div class=\"card-header mb-3\">\n    <h5>{{productName}}</h5>\n  </div>\n  <span class=\"offset-4 col-4 offset-4\">\n    <img [src]=\"image\" class=\"img-fluid card-img-top\" [title]=\"productName\"/>\n  </span>\n  <div class=\"card-body text-center\">\n      <p class=\"card-text\">{{description}}</p>\n  </div>\n  <div class=\"card-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onBackPress()\">< Back</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'Product Detail Page';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        this._route.queryParams.subscribe(function (params) {
            _this.productName = params['name'];
            _this.image = params['img'];
            _this.description = params['desc'];
        });
        this.title += '>>>' + id;
    };
    ProductDetailComponent.prototype.onBackPress = function () {
        this._router.navigate(['./products']);
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/products/product-filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: ProductFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function() { return ProductFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductFilterPipe = /** @class */ (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (product) {
            return product.productName.toLocaleLowerCase()
                .indexOf(filterBy) !== -1;
        }) : value;
    };
    ProductFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ProductFilter'
        })
    ], ProductFilterPipe);
    return ProductFilterPipe;
}());



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/product-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h5>{{pageTitle}}</h5>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        Filter By:\n      </div>\n      <div class=\"col-md-4\">\n        <input type=\"text\" [(ngModel)]='listFilter' />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h4>Filtered Data >> {{listFilter}}</h4>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"table-responsive\">\n        <table class=\"table\" *ngIf=\"products && products.length\">\n          <thead>\n            <tr>\n              <th><button class=\"btn btn-primary\" (click)=\"toggleImage()\">{{showImage?\"Hide\":\"Show\"}} Image</button>\n              </th>\n              <th>Product</th>\n              <th>Code</th>\n              <th>Available</th>\n              <th>Price</th>\n              <th>Rating</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of products | ProductFilter:listFilter\">\n              <td><img [style.width.em]='5' [src]=\"product.imageUrl\" class=\"Responsive image\" [title]=\"product.productName\"\n                  *ngIf=\"showImage\"></td>\n              <td><a [routerLink]=\"['/products', product.productId]\"\n                  [queryParams]=\"{name: product.productName, img: product.imageUrl, desc: product.description}\">\n                  {{product.productName|uppercase}}</a></td>\n              <td>{{product.productCode|lowercase|ConvertToSpaces:'-'}}</td>\n              <td>{{product.releaseDate}}</td>\n              <td [style.color]=\"product.price>20? 'red':'green'\">{{product.price|currency:'INR'}}</td>\n              <td>\n                <app-star-review [rating]='product.starRating' (ratingClicked)=\"onRatingClicked($event)\"></app-star-review>\n              </td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List View';
        this.showImage = false;
        this.listFilter = '';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Inside Product list Oninit method');
        // this.products = this._productService.getProducts();
        this._productService.getProducts().subscribe(function (data) { return _this.products = data; });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        console.log("The Event data received " + message);
        this.pageTitle = message;
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
        // getProducts(): IProduct[] {
        //     return [{
        //         "productId": 1,
        //         "productName": "Chair",
        //         "productCode": "ABC-1001",
        //         "releaseDate": "March 1 2019",
        //         "description": "",
        //         "price": 30.89,
        //         "rating": 5,
        //         "imageUrl": "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
        //     }, {
        //         "productId": 2,
        //         "productName": "Fan",
        //         "productCode": "ABC-1001",
        //         "releaseDate": "March 1 2019",
        //         "description": "",
        //         "price": 10.80,
        //         "rating": 2.5,
        //         "imageUrl": "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
        //     }, {
        //         "productId": 3,
        //         "productName": "Table",
        //         "productCode": "ABC-1001",
        //         "releaseDate": "March 1 2019",
        //         "description": "",
        //         "price": 20.89,
        //         "rating": 1.2,
        //         "imageUrl": "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
        //     }];
        // }
        this.productURL = 'https://ngapi4.herokuapp.com/api/getProducts';
    }
    ProductService.prototype.ngOnInit = function () { };
    ProductService.prototype.getProducts = function () {
        return this._http.get(this.productURL);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/FormPoster.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/FormPoster.service.ts ***!
  \************************************************/
/*! exports provided: FormPosterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPosterService", function() { return FormPosterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FormPosterService = /** @class */ (function () {
    function FormPosterService(_http) {
        this._http = _http;
        this.URL = 'http://localhost:4002';
    }
    FormPosterService.prototype.postEmployeeData = function (employee) {
        console.log('Posting employee data :: ', employee);
        return 0; // this._http.post(this.URL, employee);
    };
    FormPosterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FormPosterService);
    return FormPosterService;
}());



/***/ }),

/***/ "./src/app/shared/convert-to-spaces.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/convert-to-spaces.pipe.ts ***!
  \**************************************************/
/*! exports provided: ConvertToSpacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpacesPipe", function() { return ConvertToSpacesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConvertToSpacesPipe = /** @class */ (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, character) {
        return value.replace(character, ' ');
    };
    ConvertToSpacesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ConvertToSpaces'
        })
    ], ConvertToSpacesPipe);
    return ConvertToSpacesPipe;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found.component.css":
/*!*****************************************************!*\
  !*** ./src/app/shared/page-not-found.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/page-not-found.component.html":
/*!******************************************************!*\
  !*** ./src/app/shared/page-not-found.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/page-not-found.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/page-not-found.component.ts ***!
  \****************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop{\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/star.component.html":
/*!********************************************!*\
  !*** ./src/app/shared/star.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.width.em]=\"starWidth\" [title]='rating' (click)=\"onClick()\">\n  <div>\n    <span class=\"fas fa-star\"></span>\n    <span class=\"fas fa-star\"></span>\n    <span class=\"fas fa-star\"></span>\n    <span class=\"fas fa-star\"></span>\n    <span class=\"fas fa-star\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnInit = function () {
        this.starWidth = this.rating * 5.6 / 5;
    };
    StarComponent.prototype.onClick = function () {
        // console.log(`The rating clicked is ${this.rating}`);
        this.ratingClicked.emit("The rating clicked is " + this.rating);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-star-review',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/shared/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarComponent);
    return StarComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\jr051323\MEAN\Angular\Simplilearn\Day1\Product-Management-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map