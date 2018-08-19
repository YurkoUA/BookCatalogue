webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsListPageModule", function() { return AuthorsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authors_list__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthorsListPageModule = /** @class */ (function () {
    function AuthorsListPageModule() {
    }
    AuthorsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__authors_list__["a" /* AuthorsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__authors_list__["a" /* AuthorsListPage */]),
            ],
        })
    ], AuthorsListPageModule);
    return AuthorsListPageModule;
}());

//# sourceMappingURL=authors-list.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_paging_model__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorsListPage = /** @class */ (function () {
    function AuthorsListPage(authorService) {
        this.authorService = authorService;
        this.pagingModel = new __WEBPACK_IMPORTED_MODULE_1__models_paging_model__["a" /* PagingModel */]();
        this.authorsList = [];
    }
    AuthorsListPage.prototype.ngOnInit = function () {
        this.loadAuthors();
    };
    AuthorsListPage.prototype.loadAuthors = function () {
        var _this = this;
        this.authorService.getAllAuthors(this.pagingModel)
            .subscribe(function (authors) {
            _this.authorsList = _this.authorsList.concat(authors);
        });
    };
    AuthorsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authors-list',template:/*ion-inline-start:"D:\Repositories\BookCatalogue\src\BookCatalogue\BookCatalogue.UI\BookCatalogue.Mobile\src\pages\authors-list\authors-list.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>authors-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf="authorsList.length > 0">\n    <ion-item *ngFor="let a of authorsList">\n      <ion-thumbnail item-start>\n        <img>\n      </ion-thumbnail>\n\n      <h2>{{a.Name}}</h2>\n\n      <p *ngIf="a.BooksCount > 0">Books: {{a.BooksCount}}</p>\n      <p *ngIf="a.BooksCount < 1">No books</p>\n    </ion-item>\n\n    <scrolling (scroll)="loadAuthors()"></scrolling>\n  </ion-list>\n\n  <p *ngIf="authorsList.length < 1">\n    No authors.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\Repositories\BookCatalogue\src\BookCatalogue\BookCatalogue.UI\BookCatalogue.Mobile\src\pages\authors-list\authors-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]])
    ], AuthorsListPage);
    return AuthorsListPage;
}());

//# sourceMappingURL=authors-list.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingModel; });
var PagingModel = /** @class */ (function () {
    function PagingModel(offset, take) {
        if (offset === void 0) { offset = 0; }
        if (take === void 0) { take = 20; }
        this.offset = offset;
        this.take = take;
    }
    return PagingModel;
}());

//# sourceMappingURL=paging.model.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_base_rest_api_service__ = __webpack_require__(272);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthorService = /** @class */ (function (_super) {
    __extends(AuthorService, _super);
    function AuthorService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorService.prototype.getAllAuthors = function (paging) {
        return this.get('api/author', paging);
    };
    AuthorService.prototype.getAuthorById = function (id) {
        return this.get('api/author', { id: id });
    };
    AuthorService.prototype.createAuthor = function (author) {
        return this.post('api/author', author);
    };
    AuthorService.prototype.editAuthor = function (id, author) {
        return this.put('api/author', author, { id: id });
    };
    AuthorService.prototype.deleteAuthor = function (id) {
        return this.delete('api/author', { id: id });
    };
    AuthorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthorService);
    return AuthorService;
}(__WEBPACK_IMPORTED_MODULE_1__core_api_base_rest_api_service__["a" /* BaseRestApiService */]));

//# sourceMappingURL=author.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseRestApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BaseRestApiService = /** @class */ (function (_super) {
    __extends(BaseRestApiService, _super);
    function BaseRestApiService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseRestApiService.prototype.get = function (url, params) {
        var _this = this;
        return this.http.get(this.baseUrl + url, { params: params })
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err); });
    };
    BaseRestApiService.prototype.post = function (url, data, params) {
        var _this = this;
        return this.http.post(this.baseUrl + url, data, { params: params })
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err); });
    };
    BaseRestApiService.prototype.put = function (url, data, params) {
        var _this = this;
        return this.http.put(this.baseUrl + url, data, { params: params })
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err); });
    };
    BaseRestApiService.prototype.delete = function (url, params) {
        var _this = this;
        return this.http.delete(this.baseUrl + url, { params: params })
            .map(this.extractData)
            .catch(function (err) { return _this.handleError(err); });
    };
    return BaseRestApiService;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));

//# sourceMappingURL=base-rest-api.service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApiService; });
var BaseApiService = /** @class */ (function () {
    function BaseApiService(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    Object.defineProperty(BaseApiService.prototype, "baseUrl", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    BaseApiService.prototype.extractData = function (resp) {
        return resp.body;
    };
    BaseApiService.prototype.handleError = function (error) {
        return {};
    };
    return BaseApiService;
}());

//# sourceMappingURL=base-api.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(10);
var catch_1 = __webpack_require__(275);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var catchError_1 = __webpack_require__(276);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return catchError_1.catchError(selector)(this);
}
exports._catch = _catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(50);
var subscribeToResult_1 = __webpack_require__(49);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @name catchError
 */
function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
exports.catchError = catchError;
var CatchOperator = (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CatchSubscriber = (function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        _super.call(this, destination);
        this.selector = selector;
        this.caught = caught;
    }
    // NOTE: overriding `error` instead of `_error` because we don't want
    // to have this flag this subscriber as `isStopped`. We can mimic the
    // behavior of the RetrySubscriber (from the `retry` operator), where
    // we unsubscribe from our source chain, reset our Subscriber flags,
    // then subscribe to the selector result.
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return CatchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(10);
var map_1 = __webpack_require__(194);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=0.js.map