webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DependentService = (function () {
    function DependentService() {
        this.dependents = [
            { id: 1, firstname: "Michael", lastname: "A", thumb: "assets/image/1.png", gender: "Male", birthday: "", city: "", state: "", province: "" },
            { id: 2, firstname: "Johnny", lastname: "B", thumb: "assets/image/4.png", gender: "Male", birthday: "", city: "", state: "", province: "" }
        ];
    }
    DependentService.prototype.getAll = function () {
        return this.dependents;
    };
    DependentService.prototype.get = function (id) {
        var item = this.dependents.filter(function (dependent) { return dependent.id === id; });
        return item;
    };
    DependentService.prototype.update = function (id, data) {
        var index = this.dependents.findIndex(function (dependent) { return dependent.id === id; });
        this.dependents[index] = data;
    };
    DependentService.prototype.delete = function (id) {
        var index = this.dependents.findIndex(function (dependent) { return dependent.id === id; });
        this.dependents.splice(index, 1);
    };
    return DependentService;
}());
DependentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DependentService);

//# sourceMappingURL=dependent-service.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserService = (function () {
    function UserService(http, baseService) {
        this.http = http;
        this.baseService = baseService;
    }
    UserService.prototype.login = function (username, password) {
        var body = { email: username, password: password, type: 'ios' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.loginUrl, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.forgot = function (email) {
        var body = { email: email };
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.forgotUrl, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.signup = function (email, password, pw_confirm) {
        var body = { user: { email: email,
                password: password,
                password_confirmation: pw_confirm
            }
        };
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.signupUrl, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.updateInfo = function (email, auth_token, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(body) + " " + JSON.stringify(headers) + " " + this.baseService.updateUrl);
        return this.http.put(this.baseService.updateUrl, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.cancelAccount = function (email, auth_token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.baseService.cancelUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getPersonalProfiles = function (auth_token, email, profile_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        console.log(JSON.stringify(headers) + "headers");
        console.log(auth_token + profile_id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseService.getProfilesUrl + "/" + profile_id, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getProfiles = function (email, auth_token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        console.log(JSON.stringify(headers) + "headers");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseService.getProfilesUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.deleteProfile = function (auth_token, email, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var main_url = this.baseService.getDataUrl + id;
        console.log(main_url);
        return this.http.delete(main_url, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.createProfiles = function (email, auth_token, first_name, last_name, gender, birth_date, city, state, zip, country) {
        var body = { profile: {
                first_name: first_name,
                last_name: last_name,
                gender: gender,
                birth_date: birth_date,
                city: city,
                state: state,
                zip: zip,
                country: country
            }
        };
        console.log("body:" + JSON.stringify(body));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.createProfileUrl, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.dataGet = function (email, auth_token, id, endpoint) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var main_URL = this.baseService.getDataUrl + id + endpoint;
        console.log(headers);
        console.log(main_URL);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(main_URL, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.dataCreate = function (email, auth_token, id, endpoint, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var main_URL = this.baseService.getDataUrl + id + endpoint;
        console.log(main_URL);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(main_URL, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.dataUpdate = function (email, auth_token, id, endpoint, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var main_URL = this.baseService.getDataUrl + id + endpoint;
        console.log(main_URL);
        console.log(body);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(main_URL, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.dataDelete = function (email, auth_token, id, endpoint) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var main_URL = this.baseService.getDataUrl + id + endpoint;
        console.log(main_URL);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(main_URL, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getShares = function (email, auth_token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseService.getSharesUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getDocuments = function (email, auth_token, id, slug) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var main_URL;
        if (slug == undefined || slug == "") {
            main_URL = this.baseService.getDataUrl + id + '/load_documents_folders';
        }
        else {
            main_URL = this.baseService.getDataUrl + id + '/load_documents_folders?slug=' + slug;
        }
        console.log(main_URL);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(main_URL, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.checkIdPin = function (email, auth_token, url) {
        var body = {
            encoded_url: url
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.checkIdUrl, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.createIdBands = function (email, auth_token, profile_id, name, serial, pin) {
        var body = {
            id_band: {
                name: name,
                serial: serial,
                pin: pin
            }
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(headers));
        return this.http.post(this.baseService.baseUrl + "profiles/" + profile_id + "/id_bands", JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.updateIdBands = function (email, auth_token, profile_id, name, id) {
        var body = {
            id_band: {
                name: name
            }
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(headers));
        return this.http.put(this.baseService.baseUrl + "profiles/" + profile_id + "/id_bands/" + id, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.deleteIdBands = function (email, auth_token, profile_id, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(headers));
        return this.http.delete(this.baseService.baseUrl + "profiles/" + profile_id + "/id_bands/" + id, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.ShareProfile = function (email, auth_token, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(headers));
        return this.http.post(this.baseService.getSharesUrl, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.ShareSetPass = function (email, auth_token, id, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(headers));
        console.log(this.baseService.getSharesUrl + '/' + id);
        return this.http.put(this.baseService.getSharesUrl + '/' + id, JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.deleteShares = function (email, auth_token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'auth_token': auth_token, 'email': email });
        var main_URL = this.baseService.getSharesUrl + "/" + id;
        console.log(main_URL);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(main_URL, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.createFolder = function (email, auth_token, profile_id, folder_name, parent_id) {
        var body;
        if (parent_id == undefined || parent_id == "") {
            body = {
                'profile_id': profile_id.toString(),
                'folder': {
                    'name': folder_name
                }
            };
        }
        else {
            body = {
                'profile_id': profile_id.toString(),
                'folder': {
                    'name': folder_name,
                    'parent_id': parent_id.toString()
                }
            };
        }
        console.log(JSON.stringify(body) + "   " + this.baseService.createProfileUrl + '/' + profile_id + '/folders' + '   ');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'auth_token': auth_token, 'email': email, 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.createProfileUrl + '/' + profile_id + '/folders', JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.uploadFile = function (email, auth_token, profile_id, filename, url, folder_id) {
        var body;
        if (folder_id == undefined || folder_id == "") {
            body = {
                'profile_id': profile_id.toString(),
                'file_name': filename,
                'file_url': url
            };
        }
        else {
            body = {
                'profile_id': profile_id.toString(),
                'folder_id': folder_id.toString(),
                'file_name': filename,
                'file_url': url
            };
        }
        console.log(JSON.stringify(body) + "   " + this.baseService.createProfileUrl + '/' + profile_id + '/documents');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'auth_token': auth_token, 'email': email, 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.createProfileUrl + '/' + profile_id + '/documents', JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.deleteDocuments = function (email, auth_token, profile_id, selected_ids) {
        var body = {
            profile_id: profile_id.toString(),
            document_ids: selected_ids
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'auth_token': auth_token, 'email': email, 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.createProfileUrl + '/' + profile_id + '/documents/delete_documents', JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.deleteFolders = function (email, auth_token, profile_id, selected_ids) {
        var body = {
            profile_id: profile_id.toString(),
            folder_ids: selected_ids
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'auth_token': auth_token, 'email': email, 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseService.createProfileUrl + '/' + profile_id + '/folders/delete_folders', JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]])
], UserService);

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasscodeSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasscodeSettingPage = (function () {
    function PasscodeSettingPage(viewCtrl, navCtrl, params, loadingCtrl, storage) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.isLoading = false;
        this.checkValue = false;
        this.storage.get('passcode').then(function (val) {
            _this.passValue = val;
        });
        this.pageValue = params.get("val");
        console.log(this.pageValue);
    }
    PasscodeSettingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('passcode').then(function (val) {
            _this.passValue = val;
            if (_this.pageValue == 'set' && _this.passValue) {
                console.log("removePasscode");
                _this.removePasscode('Turn Off Passcode');
            }
            else if (_this.pageValue == 'change' && _this.passValue) {
                console.log("changePasscode");
                _this.changePasscode('Change Passcode');
            }
            else if (_this.pageValue == 'background' && _this.passValue) {
                console.log("check Passcode");
                _this.checkPasscode();
            }
            else if (!_this.passValue) {
                console.log("SetPasscode");
                _this.setPasscode('Enable Passcode');
            }
            else {
                console.log("Cancel");
            }
        });
    };
    PasscodeSettingPage.prototype.setPasscode = function (title) {
        this.title = title;
        this.checkValue = true;
        this.isLoading = true;
        var _t = this;
        this.passcodeOptions = {
            title: '<img class="logo" src="./assets/icon/main_logo.png"/><p>Enter your passcode</p>', deleteKeyType: 'icon', deleteKeyValue: 'backspace',
            onComplete: function (passcode) {
                return new Promise(function (resolve, reject) {
                    // the timeout is here to simulate the verifying process
                    setTimeout(function () {
                        resolve();
                        console.log(passcode);
                        // _t.storage.set('passcode', passcode);
                        _t.ReEnterPasscode('Enable Passcode', passcode);
                        // _t.dismiss(true);
                    }, 1000);
                });
            }
        };
    };
    PasscodeSettingPage.prototype.ReEnterPasscode = function (title, value) {
        this.title = title;
        this.checkValue = true;
        this.old_passcode = value;
        this.isLoading = true;
        var _t = this;
        this.passcodeOptions = {
            title: '<img class="logo" src="./assets/icon/main_logo.png"/><p>Re-enter your passcode</p>', deleteKeyType: 'icon', deleteKeyValue: 'backspace',
            onComplete: function (passcode) {
                var loader = _t.loadingCtrl.create();
                loader.present();
                return new Promise(function (resolve, reject) {
                    // the timeout is here to simulate the verifying process
                    setTimeout(function () {
                        loader.dismiss();
                        if (passcode != _t.old_passcode) {
                            reject();
                        }
                        else {
                            resolve();
                            _t.storage.set('passcode', passcode);
                            // _t.setPasscode('Set Passcode');
                            _t.dismiss(true);
                        }
                    }, 1000);
                });
            }
        };
    };
    PasscodeSettingPage.prototype.removePasscode = function (title) {
        this.title = title;
        this.checkValue = true;
        this.isLoading = true;
        var _t = this; // keeping a reference to `this`
        this.passcodeOptions = {
            title: '<img class="logo" src="./assets/icon/main_logo.png"/><p>Enter your passcode</p>', deleteKeyType: 'icon', deleteKeyValue: 'backspace',
            onComplete: function (passcode) {
                // (optional) show a message to your users while you are verifying the passcode
                var loader = _t.loadingCtrl.create();
                loader.present();
                return new Promise(function (resolve, reject) {
                    // the timeout is here to simulate the verifying process
                    setTimeout(function () {
                        loader.dismiss();
                        if (passcode != _t.passValue) {
                            reject();
                        }
                        else {
                            resolve();
                            _t.storage.set('passcode', null);
                            _t.dismiss(false);
                        }
                    }, 1000);
                });
            }
        };
    };
    PasscodeSettingPage.prototype.changePasscode = function (title) {
        this.title = title;
        this.checkValue = true;
        this.isLoading = true;
        var _t = this;
        this.passcodeOptions = {
            title: '<img class="logo" src="./assets/icon/main_logo.png"/><p>Enter your old passcode</p>', deleteKeyType: 'icon', deleteKeyValue: 'backspace',
            onComplete: function (passcode) {
                var loader = _t.loadingCtrl.create();
                loader.present();
                return new Promise(function (resolve, reject) {
                    // the timeout is here to simulate the verifying process
                    setTimeout(function () {
                        loader.dismiss();
                        if (passcode != _t.passValue) {
                            reject();
                        }
                        else {
                            resolve();
                            _t.storage.set('passcode', null);
                            _t.setPasscode('Enable Passcode');
                        }
                    }, 1000);
                });
            }
        };
    };
    PasscodeSettingPage.prototype.checkPasscode = function () {
        this.checkValue = false;
        this.isLoading = true;
        var _t = this;
        this.passcodeOptions = {
            title: '<img class="logo" src="./assets/icon/main_logo.png"/>', deleteKeyType: 'icon', deleteKeyValue: 'backspace',
            onComplete: function (passcode) {
                // let loader = _t.loadingCtrl.create({ content: 'Passcode: ' + passcode, dismissOnPageChange: true });
                // loader.present();
                var loader = _t.loadingCtrl.create();
                loader.present();
                return new Promise(function (resolve, reject) {
                    // the timeout is here to simulate the verifying process
                    setTimeout(function () {
                        loader.dismiss();
                        if (passcode != _t.passValue) {
                            reject();
                        }
                        else {
                            resolve();
                            _t.dismiss(false);
                        }
                    }, 1000);
                });
            }
        };
    };
    PasscodeSettingPage.prototype.closemodal = function () {
        this.dismiss(false);
    };
    ;
    PasscodeSettingPage.prototype.dismiss = function (flag) {
        this.viewCtrl.dismiss({ flag: flag });
    };
    return PasscodeSettingPage;
}());
PasscodeSettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/passcode-setting/passcode-setting.html"*/'<ion-header class="transparent-header" no-border>\n\n  <ion-navbar color="dark">\n    <button *ngIf="checkValue" ion-button icon-only clear style="color: #fff;" (click)="closemodal()" left>\n      <ion-icon name="md-arrow-back"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-margin-top" no-bounce>\n  <ion-passcode [options]="passcodeOptions" class="passcode-example" *ngIf="isLoading"></ion-passcode>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/passcode-setting/passcode-setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], PasscodeSettingPage);

//# sourceMappingURL=passcode-setting.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainPage = (function () {
    function MainPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    MainPage.prototype.ionViewWillEnter = function () {
        // console.log("ResumeSubscription");
        // let profileModal = this.modalCtrl.create(PasscodeSettingPage, {
        //   val: 'background'
        // });
        // this.storage.get('passcode').then(val=>{
        //   if(val == null){
        //     console.log("go on");
        //   } else {
        //     console.log("run passcode page")
        //     profileModal.present();
        //   }
        // });
        var _this = this;
        this.storage.get('data').then(function (val) {
            console.log(val);
            if (val != null && val.success == true) {
                console.log("home page");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
        });
    };
    MainPage.prototype.goLoginPage = function () {
        console.log("go LoginPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MainPage.prototype.goSignupPage = function () {
        console.log("go SignupPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/main/main.html"*/'\n\n<ion-content padding class="bg_img">\n  <div class="logo">\n    <img src="assets/icon/logo.png" alt="">\n    <p>Welcome to MyID</p>\n  </div>\n  <div class="sign">\n    <button ion-button full large class="signup" (click)="goSignupPage()">Sign Up</button>\n    <button ion-button full large class="login" color="white" clear (click)="goLoginPage()">Log In</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/main/main.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox_details_inbox_details__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxPage = (function () {
    function InboxPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [{ date: '4:59pm', title: 'Type 1 Diabetes Cure!',
                description: 'Multi-line lists are identical to regular lists, except items have multiple lines of text.', show: true, value: 'aa' },
            { date: 'Yesterday', title: 'Sliding items can be swiped to the left or right to reveal a hidden set of buttons',
                description: 'Below is an example with three lines of text.', show: true, value: 'bb' },
            { date: '8/17/2017', title: 'Skylar is crazy!', description: 'Type 1 Diabetes Cure', show: false, value: 'aa' },
            { date: 'Yesterday', title: 'Sliding items can be swiped to the left or right to reveal a hidden set of buttons', description: 'Below is an example with three lines of text.',
                show: false, value: 'bb' },
        ];
    }
    InboxPage.prototype.goInboxDetailsPage = function (event, items) {
        console.log('go AddCategory Page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inbox_details_inbox_details__["a" /* InboxDetailsPage */], { data: items.value });
    };
    return InboxPage;
}());
InboxPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-inbox',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/inbox/inbox.html"*/'<div class="nav-bar">\n  <div class="dd">\n    <img src="assets/icon/white/inbox.png" alt="">\n    <span>Inbox</span>\n  </div>\n  <div class="feature">\n    <button ion-button clear style="left: 0;">Edit</button>\n    <button ion-button icon-only clear style="right: 0"><ion-icon name="search"></ion-icon></button>\n  </div>\n</div>\n\n<ion-content class="content-box">\n  <ion-list>\n\n    <ion-item *ngFor="let item of items" (click)="goInboxDetailsPage($event, item)">\n      <ion-icon [ngClass]="{\'blue\' : item.show, \'white\':!item.show  }" name="leaf" item-start class="show"></ion-icon>\n      <p class="box-title">{{item.title}}<span class="ad">Ad</span></p>\n      <p>{{item.date}}</p>\n      <p>{{item.description}}</p>\n      <ion-icon name="ios-arrow-forward-outline" item-end color="primary"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/inbox/inbox.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], InboxPage);

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalNotificationService = (function () {
    function LocalNotificationService(localNotifications) {
        this.localNotifications = localNotifications;
        this.notifications = [];
    }
    LocalNotificationService.prototype.addNotification = function (data) {
        console.log("data=>", data);
        var notifications = [];
        if (data.take_as_needed) {
            var id = (data.dependent_id * 1000 + data.id) * 200;
            var template = {
                id: id,
                title: 'Please don\'t miss.',
                text: 'You can take ' + data.name + ' as you need',
                every: "day",
                firstAt: new Date(new Date().getTime() + 100),
            };
            this.localNotifications.schedule(template);
        }
        else if (data.scheduled) {
            var stringToSpilt = data.frequency;
            var x = stringToSpilt.split(" ");
            var times = +x[0];
            var schedule = +x[2];
            if (schedule == 1) {
                for (var i = 0; i < data.reminders.length; i++) {
                    console.log(i, data.reminders[i]);
                    var id = (data.dependent_id * 1000 + data.id) * 100 + i;
                    var t = data.reminders[i].value.split(" ");
                    var dateTmp = new Date();
                    dateTmp.setHours(+t[0] + 12 * (+t[2] - 1));
                    dateTmp.setMinutes(+t[1]);
                    console.log(t);
                    console.log(dateTmp);
                    var template = {
                        id: id,
                        title: 'Please don\'t miss.',
                        text: 'It\'s time to take ' + data.name,
                        every: "day",
                        at: dateTmp,
                    };
                    notifications.push(template);
                }
            }
            else if (schedule == 2) {
                for (var i = 0; i < data.reminders.length; i++) {
                    console.log(i, data.reminders[i]);
                    var id = (data.dependent_id * 1000 + data.id) * 100 + i;
                    var t = data.reminders[i].value.split(" ");
                    var dateTmp = new Date();
                    var currentDay = dateTmp.getDay();
                    var dayDifference = t[0] - currentDay;
                    if (dayDifference < 0) {
                        dayDifference = dayDifference + 7; // for cases where the day is in the following week
                    }
                    dateTmp.setDate(dateTmp.getDate() + dayDifference);
                    dateTmp.setHours(+t[1] + 12 * (+t[3] - 1));
                    dateTmp.setMinutes(+t[2]);
                    var template = {
                        id: id,
                        title: 'Please don\'t miss.',
                        text: 'It\'s time to take ' + data.name,
                        every: "week",
                        at: dateTmp,
                    };
                    notifications.push(template);
                }
            }
            this.localNotifications.schedule(notifications);
        }
    };
    LocalNotificationService.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
    };
    return LocalNotificationService;
}());
LocalNotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], LocalNotificationService);

//# sourceMappingURL=local-notification-service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_medicine_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reminders_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMedicationPage = (function () {
    function AddMedicationPage(navCtrl, navParams, viewCtrl, baseMedicineService, remindersService, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.baseMedicineService = baseMedicineService;
        this.remindersService = remindersService;
        this.alertController = alertController;
        this.medicationData = {};
        this.loaded = false;
        this.medicationData.dependent_id = this.navParams.get("id");
        console.log(this.medicationData.dependent_id);
        this.frequencyColumns = [
            {
                name: 'times',
                parentCol: 'schedule',
                options: [
                    { text: '1', value: '1', parentVal: '1' },
                    { text: '2', value: '2', parentVal: '1' },
                    { text: '3', value: '3', parentVal: '1' },
                    { text: '4', value: '4', parentVal: '1' },
                    { text: '5', value: '5', parentVal: '1' },
                    { text: '6', value: '6', parentVal: '1' },
                    { text: '1', value: '1', parentVal: '2' },
                    { text: '2', value: '2', parentVal: '2' },
                    { text: '3', value: '3', parentVal: '2' },
                    { text: '4', value: '4', parentVal: '2' },
                    { text: '5', value: '5', parentVal: '2' },
                    { text: '6', value: '6', parentVal: '2' },
                    { text: '7', value: '7', parentVal: '2' },
                    { text: '8', value: '8', parentVal: '2' },
                    { text: '9', value: '9', parentVal: '2' },
                    { text: '10', value: '10', parentVal: '2' },
                    { text: '11', value: '11', parentVal: '2' },
                    { text: '12', value: '12', parentVal: '2' },
                    { text: '13', value: '13', parentVal: '2' },
                    { text: '14', value: '14', parentVal: '2' }
                ]
            }, {
                name: 'schedule',
                options: [
                    { text: 'Daily', value: '1' },
                    { text: 'Weekly', value: '2' },
                ]
            }
        ];
        this.tablet_image = "assets/tablet-icon/icon-pill.png";
        // demo icons
        this.icons = [
            { type: "pill", color1: "#ff0000", color2: "#00ff00" },
            { type: "bubbles", color1: "#ffff00" },
            { type: "shape", color1: "#ff00ff" },
            { type: "tube", color1: "#0000ff" }
        ];
        this.default_forms = this.baseMedicineService.getForms();
        this.default_colors = this.baseMedicineService.getColors();
        this.selecting = {
            color1: false,
            color2: false,
            form: false,
            note: false
        };
        this.medicationData.form_Id = 1;
        this.medicationData.color1_Id = 1;
        this.medicationData.color2_Id = 1;
        this.medicationData.frequency = "3 times 1";
        this.medicationData.note = "";
        this.medicationData.visible = true;
        this.note_template = "";
    }
    AddMedicationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.viewCtrl.showBackButton(false);
        this.baseMedicineService.getColor(this.medicationData.color1_Id)
            .then(function (res) {
            _this.color1 = res;
            _this.baseMedicineService.getColor(_this.medicationData.color2_Id)
                .then(function (res) {
                _this.color2 = res;
                _this.baseMedicineService.getForm(_this.medicationData.form_Id)
                    .then(function (res) {
                    _this.form = res;
                    _this.loaded = true;
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    AddMedicationPage.prototype.selectForm = function () {
        this.selecting.form = !this.selecting.form;
    };
    AddMedicationPage.prototype.selectColor1 = function () {
        this.selecting.color1 = !this.selecting.color1;
    };
    AddMedicationPage.prototype.selectColor2 = function () {
        this.selecting.color2 = !this.selecting.color2;
    };
    AddMedicationPage.prototype.enterNote = function () {
        this.selecting.note = !this.selecting.note;
        this.note_template = this.medicationData.note;
    };
    AddMedicationPage.prototype.setForm = function (val) {
        this.form = val;
        this.medicationData.form_Id = val.id;
        this.selecting.form = false;
    };
    AddMedicationPage.prototype.setColor1 = function (val) {
        this.color1 = val;
        this.medicationData.color1_Id = val.id;
        this.selecting.color1 = false;
    };
    AddMedicationPage.prototype.setColor2 = function (val) {
        this.color2 = val;
        this.medicationData.color2_Id = val.id;
        this.selecting.color2 = false;
    };
    AddMedicationPage.prototype.noteCancel = function () {
        this.selecting.note = false;
    };
    AddMedicationPage.prototype.noteSave = function () {
        if (!this.note_template) {
            this.note_template = '';
        }
        this.selecting.note = false;
        this.medicationData.note = this.note_template;
    };
    AddMedicationPage.prototype.checkValidate = function () {
        var retVal = true;
        if (!this.medicationData.name || !this.medicationData.dose) {
            return false;
        }
        return retVal;
    };
    AddMedicationPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    AddMedicationPage.prototype.onSave = function () {
        var _this = this;
        console.log(this.medicationData);
        if (this.checkValidate()) {
            this.remindersService.add(this.medicationData)
                .then(function (res) {
                if (res == 'exist') {
                    var alert0 = _this.alertController.create({
                        title: 'Warning',
                        subTitle: 'This meditation is already added for this dependent.',
                        buttons: ['OK']
                    });
                    alert0.present();
                }
                else {
                    _this.navCtrl.pop();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            var alert_1 = this.alertController.create({
                title: 'Warning',
                subTitle: 'Please fill in the fields required in red.',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    return AddMedicationPage;
}());
AddMedicationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-medication',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/add-medication/add-medication.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start class="cancel">\n      <button (click)="onCancel()">Cancel</button>\n    </ion-buttons>\n    <p class="spec-title">Medication</p>\n\n    <div class="tablet-cover" *ngIf="loaded">\n      <div class="m-icon m-icon-pill" *ngIf="form.name == \'Pill\'">\n        <div class="icon-left"\n        [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + form.file + \')\', \'background-color\': color1.color}"\n        ></div>\n        <div class="icon-right"\n        [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + form.file + \')\', \'background-color\': color2.color}"\n        ></div>\n      </div>\n      <div class="m-icon" *ngIf="form.name !== \'Pill\'">\n        <div class="m-icon-normal"\n        [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + form.file + \')\', \'background-color\': color1.color}"\n        ></div>\n      </div>\n    </div>\n\n    <ion-buttons end class="save">\n      <button (click)="onSave()"><ion-icon name="md-checkmark"></ion-icon>&nbsp;Save</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="loaded">\n  <ion-item [ngClass]="{invalid: !medicationData.name}">\n    <ion-label>Name</ion-label>\n    <ion-input type="text" placeholder="Name of Medicine" [(ngModel)]="medicationData.name"></ion-input>\n  </ion-item>\n\n  <ion-item (click)="selectForm()">\n    <div class="" item-start>Form</div>\n    <div class="option-val" item-end>{{form.name}}</div>\n  </ion-item>\n\n  <!-- Form selection region -->\n\n  <div class="form-rgn" *ngIf="selecting.form">\n    <div class="form-item" *ngFor="let form of default_forms" (click)="setForm(form)">\n      <div class="form-img"\n      [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + form.file + \')\'}">\n      </div>\n      <div class="form-name">{{form.name}}</div>\n    </div>\n  </div>\n\n  <!------------------------->\n\n  <ion-item (click)="selectColor1()">\n    <div class="" item-start>\n      <span *ngIf="form.name !== \'Pill\'">Color</span>\n      <span *ngIf="form.name == \'Pill\'">Left Color</span>\n    </div>\n    <div class="option-val" item-end>{{color1.name}}</div>\n  </ion-item>\n\n  <!-- Color1 selection region -->\n\n  <div class="color-rgn" *ngIf="selecting.color1">\n    <div class="color-item" *ngFor="let color of default_colors" (click)="setColor1(color)">\n      <div class="color-img"\n        [ngStyle]="{\'background-color\': color.color }">\n      </div>\n      <div class="color-name">{{color.name}}</div>\n    </div>\n  </div>\n\n  <!------------------------->\n\n  <ion-item (click)="selectColor2()" *ngIf="form.name == \'Pill\'">\n    <div class="" item-start>Right Color</div>\n    <div class="option-val" item-end>{{color2.name}}</div>\n  </ion-item>\n\n  <!-- Color1 selection region -->\n\n  <div class="color-rgn" *ngIf="selecting.color2 && form.name == \'Pill\'">\n    <div class="color-item" *ngFor="let color of default_colors" (click)="setColor2(color)">\n      <div class="color-img"\n        [ngStyle]="{\'background-color\': color.color }">\n      </div>\n      <div class="color-name">{{color.name}}</div>\n    </div>\n  </div>\n\n  <!------------------------->\n\n  <ion-item [ngClass]="{invalid: !medicationData.dose}">\n    <ion-label>Dose</ion-label>\n    <ion-input type="tel" placeholder="Enter Dose" [(ngModel)]="medicationData.dose"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Frequency</ion-label>\n      <ion-multi-picker [(ngModel)] = "medicationData.frequency" placeholder="1 times Daily" separator=" times " item-content [multiPickerColumns]="frequencyColumns"></ion-multi-picker>\n  </ion-item>\n\n  <ion-item (click)="enterNote()">\n    <div class="" item-start>Notes</div>\n    <div class="option-val" item-end>\n      <p *ngIf="medicationData.note == \'\'">Add additional notes</p>\n      <p *ngIf="medicationData.note !== \'\'">{{medicationData.note}}</p>\n    </div>\n  </ion-item>\n\n  <div class="note-rgn" *ngIf="selecting.note">\n    <textarea name="name" rows="4" placeholder="Please type here ..." [(ngModel)]="note_template"></textarea>\n    <div class="note-buttons">\n      <button ion-button outline small color="light" (click)="noteCancel()">Cancel</button>\n      <button ion-button outline small color="light" (click)="noteSave()">OK</button>\n    </div>\n  </div>\n\n  <div class="space">\n  </div>\n\n  <ion-item>\n    <ion-label>Visible on public profile?</ion-label>\n    <ion-toggle [(ngModel)]="medicationData.visible"></ion-toggle>\n  </ion-item>\n\n  <div class="space">\n    Your Public Profile is what is displayed when a first Responder access your profile.\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/add-medication/add-medication.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_base_medicine_service__["a" /* BaseMedicineService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_reminders_service__["a" /* RemindersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], AddMedicationPage);

//# sourceMappingURL=add-medication.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Flags = (function () {
    function Flags() {
        this.changedFlag = false;
    }
    Flags.prototype.setChangedFlag = function (flag) {
        this.changedFlag = flag;
    };
    Flags.prototype.getChangedFlag = function () {
        return this.changedFlag;
    };
    return Flags;
}());
Flags = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Flags);

//# sourceMappingURL=flag.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_edit_other_edit__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtherInfoPage = (function () {
    function OtherInfoPage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
        this.email = "";
        this.auth_token = "";
    }
    OtherInfoPage.prototype.ngOnInit = function () {
        this.flagService.setChangedFlag(false);
        this.gettingdata();
    };
    OtherInfoPage.prototype.ionViewDidEnter = function () {
        if (this.flagService.getChangedFlag()) {
            this.gettingdata();
        }
    };
    OtherInfoPage.prototype.gettingdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/other_informations";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("OtherInformation Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.otherInfoData = data.other_informations;
                    }
                });
            });
        });
    };
    OtherInfoPage.prototype.createOtherInfoData = function () {
        console.log('go AllergiesCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__other_edit_other_edit__["a" /* OtherInfoEditPage */], { save: 'save', profile_id: this.profile_id });
        profileModal.present();
    };
    OtherInfoPage.prototype.editOtherInfoData = function (event, otherInfoData) {
        console.log('go otherInfoEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__other_edit_other_edit__["a" /* OtherInfoEditPage */], { edit: 'edit', otherInfoData: otherInfoData, profile_id: this.profile_id });
    };
    OtherInfoPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return OtherInfoPage;
}());
OtherInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-other-info',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/other-info/other-info.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createOtherInfoData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Other Information</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="">\n    <ion-card class="data-list" *ngFor="let item of otherInfoData">\n      <ion-item (click)="editOtherInfoData($event, item)" >\n          <ion-row>\n              <ion-col col-12 style="color: gray;">Label</ion-col>\n              <ion-col col-12 class="data-des">{{item.label}}</ion-col>\n          </ion-row>\n\n      </ion-item>\n      <button ion-button clear item-end class="sheet-btn"><ion-icon name="md-more"></ion-icon></button>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/other-info/other-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_flag__["a" /* Flags */]])
], OtherInfoPage);

//# sourceMappingURL=other-info.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_success_product_success__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinkEditPage = (function () {
    function LinkEditPage(navCtrl, platform, modalCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.barcodeScanner = barcodeScanner;
        this.platform = platform;
        this.barcode = '[empty]';
    }
    LinkEditPage.prototype.scan = function () {
        var _this = this;
        var options = {
            'preferFrontCamera': false,
            'prompt': 'Place a barcode inside the scan area',
            'orientation': 'portrait'
        };
        this.barcodeScanner.scan(options).then(function (result) {
            console.log(result);
            _this.goProductSuccessPage();
        }, function (err) {
            alert(err);
        });
    };
    LinkEditPage.prototype.goProductSuccessPage = function () {
        console.log('go LinkNew Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__product_success_product_success__["a" /* ProductSuccessPage */], { page: 'likeEdit' });
        profileModal.present();
    };
    LinkEditPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return LinkEditPage;
}());
LinkEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-link-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/link-edit/link-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="cancel()"> <ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      Link New Product\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/add-link.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n  <button ion-button color="secondary" outline full large class="scan" (click)="scan()"><ion-icon name="md-qr-scanner"></ion-icon>Scan Product QR Code</button>\n\n  <ion-list>\n\n    <ion-item class="data">\n      <ion-label>ID</ion-label>\n      <ion-input type="password" placeholder="xxxxxxx"></ion-input>\n    </ion-item>\n\n    <ion-item class="data">\n      <ion-label>PIN</ion-label>\n      <ion-input type="password" placeholder="xxxx"></ion-input>\n    </ion-item>\n\n    <ion-item class="data">\n      <ion-label>Label</ion-label>\n      <ion-input type="text" placeholder="e.g. blue Sport, Sliver Pod, etc."></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/link-edit/link-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], LinkEditPage);

//# sourceMappingURL=link-edit.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductSuccessPage = (function () {
    function ProductSuccessPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.page = navParams.get("page");
    }
    ProductSuccessPage.prototype.dismiss = function () {
        console.log('go Profile Page');
        // this.navCtrl.parent.select(ProfilePage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return ProductSuccessPage;
}());
ProductSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-product-success',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/product-success/product-success.html"*/'<div class="success" style="background-color: #32db63" *ngIf="this.page == \'likeEdit\'">\n  <div class="check">\n    <img src="assets/icon/white/check.png" alt="">\n    <h1 style="color: #fff">Product Successfully <br>Linked!</h1>\n    <button ion-button color="secondary" outline large (click)="dismiss()" class="product">Done</button>\n  </div>\n</div>\n\n<div class="success" style="background-color: #fff" *ngIf="this.page == \'document\'">\n  <div class="silde-check">\n    <img src="assets/icon/blue/circle-check.png" alt="">\n    <h1 >Thank you for your<br>purchase!</h1>\n    <button ion-button color="secondary" outline large full (click)="dismiss()" class="purchase">Done</button>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/product-success/product-success.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ProductSuccessPage);

//# sourceMappingURL=product-success.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDependentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddDependentPage = (function () {
    function AddDependentPage(navCtrl, navParams, viewCtrl, camera, crop, actionSheet, storage, loadingCtrl, userService, file, baseService, fileTransfer, flagService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.crop = crop;
        this.actionSheet = actionSheet;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.file = file;
        this.baseService = baseService;
        this.fileTransfer = fileTransfer;
        this.flagService = flagService;
        this.profile_info = { first_name: 'Kenji', last_name: 'Oyama', gender: 'male', birth_date: '1989-11-11', city: 'New York', state: 'California', country: 'US', zip: '91366' };
        this.imageChosen = 0;
        this.genders = [{ title: "Female", value: "female" },
            { title: "Male", value: "male" }];
    }
    AddDependentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
        this.storage.get('auth_token').then(function (val) {
            _this.auth_token = val;
        });
    };
    AddDependentPage.prototype.getPicture = function () {
        var _this = this;
        console.log("getPicture");
        var buttonLabels = ['Photo Library', 'Camera'];
        this.actionSheet
            .show({
            title: 'Source Library',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            destructiveButtonLast: true
        })
            .then(function (buttonIndex) {
            switch (buttonIndex) {
                case 1:
                    var options = {
                        destinationType: _this.camera.DestinationType.FILE_URI,
                        encodingType: _this.camera.EncodingType.JPEG,
                        mediaType: _this.camera.MediaType.PICTURE,
                        sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                    };
                    _this.camera.getPicture(options).then(function (imageData) {
                        _this.crop.crop(imageData, { quality: 75 })
                            .then(function (newImage) {
                            console.log('NewImage', newImage);
                            _this.imagePath = newImage;
                            // this.updatePhoto();
                        }, function (error) { return console.error('Error cropping image', JSON.stringify(error)); });
                    }, function (err) {
                        alert(JSON.stringify(err));
                    });
                    break;
                case 2:
                    var options1 = {
                        destinationType: _this.camera.DestinationType.FILE_URI,
                        encodingType: _this.camera.EncodingType.JPEG,
                        sourceType: _this.camera.PictureSourceType.CAMERA,
                    };
                    _this.camera.getPicture(options1).then(function (imageData) {
                        _this.crop.crop(imageData, { quality: 75 })
                            .then(function (newImage) {
                            console.log('NewImage', newImage);
                            _this.imagePath = newImage;
                            // this.updatePhoto();
                        }, function (error) { return console.error('Error cropping image', error); });
                    }, function (err) {
                        alert(JSON.stringify(err));
                    });
                    break;
                default:
                    break;
            }
        });
    };
    AddDependentPage.prototype.createProfile = function () {
        var _this = this;
        console.log('CreateProfile');
        var loading = this.loadingCtrl.create();
        loading.present();
        if (this.imagePath) {
            var filename = this.imagePath.split('/').pop();
            var options = {
                fileKey: "profile[image]",
                fileName: filename,
                chunkedMode: false,
                mimeType: "image/jpg",
                headers: { 'auth_token': this.auth_token, 'email': this.email },
                params: {
                    'profile[first_name]': this.profile_info.first_name,
                    'profile[last_name]': this.profile_info.last_name,
                    'profile[gender]': this.profile_info.gender,
                    'profile[birth_date]': this.profile_info.birth_date,
                    'profile[city]': this.profile_info.city,
                    'profile[state]': this.profile_info.state,
                    'profile[zip]': this.profile_info.zip,
                    'profile[country]': this.profile_info.country
                }
            };
            var fileTransfer = this.fileTransfer.create();
            fileTransfer.upload(this.imagePath, this.baseService.createProfileUrl, options).then(function (entry) {
                _this.imagePath = '';
                _this.imageChosen = 0;
                loading.dismiss();
                _this.flagService.setChangedFlag(true);
                _this.navCtrl.pop();
                console.log("success:" + JSON.stringify(entry));
            }, function (err) {
                loading.dismiss();
                console.log("failed:" + JSON.stringify(err));
            });
        }
        else {
            this.userService.createProfiles(this.email, this.auth_token, this.profile_info.first_name, this.profile_info.last_name, this.profile_info.gender, this.profile_info.birth_date, this.profile_info.city, this.profile_info.state, this.profile_info.zip, this.profile_info.country)
                .subscribe(function (data) {
                loading.dismiss();
                if (data.success == false) {
                    console.log("create Profiles:" + JSON.stringify(data));
                }
                else {
                    console.log("create Profiles:" + JSON.stringify(data));
                    _this.flagService.setChangedFlag(true);
                    _this.navCtrl.pop();
                }
            }, function (data) {
                loading.dismiss();
                console.log("get Profiles:" + JSON.stringify(data));
            });
        }
    };
    AddDependentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddDependentPage;
}());
AddDependentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-dependent',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/add-dependent/add-dependent.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn" style="right: 0px;"><ion-icon name="md-checkmark" (click)="createProfile()"></ion-icon>Save</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="background"></div>\n  <div class="profile_section">\n    <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n    <img *ngIf="imagePath" [src]="imagePath" alt="">\n    <button ion-button name="button" color="secondary" class="clange_photo" (click)="getPicture()"><ion-icon name="md-add"></ion-icon></button>\n    <ion-list class="list_view">\n\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" [(ngModel)]="profile_info.first_name" placeholder="Enter First Name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="profile_info.last_name" placeholder="Enter Last Name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-select [(ngModel)]="profile_info.gender" class="edit-select">\n          <ion-option *ngFor="let gender of genders" [value]="gender.value" placeholder="Choose Gender">{{gender.title}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Birthday</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MMM/DD/YYYY" [(ngModel)]="profile_info.birth_date" placeholder="Enter Birthday"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" [(ngModel)]="profile_info.city" placeholder="Enter City"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State/Province</ion-label>\n        <ion-input type="text" [(ngModel)]="profile_info.state" placeholder="State/Province"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-input type="text" [(ngModel)]="profile_info.country" placeholder="Country"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>ZipCode</ion-label>\n        <ion-input type="number" [(ngModel)]="profile_info.zip" placeholder="ZipCode"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/add-dependent/add-dependent.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__["a" /* Crop */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__["a" /* ActionSheet */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_9__providers_base_service__["a" /* BaseService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_10__providers_flag__["a" /* Flags */]])
], AddDependentPage);

//# sourceMappingURL=add-dependent.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link_edit_link_edit__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LinkNewPage = (function () {
    function LinkNewPage(navCtrl, viewCtrl, loadingCtrl, storage, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.userService = userService;
        this.categories = [
            { id: '1', name: 'Mickael' },
            { id: '2', name: 'Johnny' },
        ];
        this.storage.get('profileData').then(function (val) {
            _this.profileData = val;
            console.log(_this.profileData);
        });
    }
    LinkNewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LinkNewPage.prototype.goLinkEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__link_edit_link_edit__["a" /* LinkEditPage */]);
        this.dismiss();
    };
    return LinkNewPage;
}());
LinkNewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-link-new',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/link-new/link-new.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <div class="title">Which profile would you like to link?</div>\n    <ion-list>\n      <ion-item class="category" *ngFor="let item of profileData" (click)="goLinkEditPage()">\n        <img [src]="item.person.image_url.thumb" alt="">\n        <p>{{item.person.last_name}}</p>\n      </ion-item>\n    </ion-list>\n    <button ion-button full clear class="cancel" (click)="dismiss()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/link-new/link-new.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]])
], LinkNewPage);

//# sourceMappingURL=link-new.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageSharingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageSharingPage = (function () {
    function ManageSharingPage(navCtrl, navParams, viewCtrl, loadingCtrl, storage, userService, actionSheet, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.userService = userService;
        this.actionSheet = actionSheet;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.share = 'other';
        this.todayTime = new Date().getTime().toString();
        this.filter_list = [{ id: 0, title: 'Tennis', checked: false }, { id: 1, title: 'M Basketball', checked: false },
            { id: 3, title: 'Softball', checked: false }, { id: 4, title: 'Football', checked: false },
            { id: 5, title: 'W Basketball', checked: false }, { id: 6, title: 'Baseball', checked: false },
        ];
        this.filter_flag = false;
        this.initializeItems();
    }
    ManageSharingPage.prototype.initializeItems = function () {
        this.items = [];
    };
    ManageSharingPage.prototype.onButtonClick = function (selectedItem) {
        if (!selectedItem.checked) {
            this.filter_list.map(function (item) {
                if (item.id == selectedItem.id) {
                    item.checked = true;
                }
                else {
                    item.checked = false;
                }
            });
        }
    };
    ManageSharingPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ManageSharingPage.prototype.ngOnInit = function () {
        this.gettingData();
    };
    ManageSharingPage.prototype.gettingData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.getShares(_this.email, _this.auth_token)
                    .subscribe(function (data) {
                    loading.dismiss();
                    if (data.success == false) {
                    }
                    else {
                        _this.data = data;
                        console.log(data);
                        _this.others_profiles = data.sharing.shared_with_others.profiles;
                        _this.others_profiles_count = _this.others_profiles.length;
                        // console.log("get Shareed_with_me:" + JSON.stringify(data));
                        _this.others_documents = data.sharing.shared_with_others.documents;
                        _this.others_documents_count = _this.others_documents.length;
                        _this.me_data = data.sharing.shared_with_me.profiles;
                        _this.me_count = _this.me_data.length;
                    }
                }, function (data) {
                    loading.dismiss();
                });
            });
        });
    };
    ManageSharingPage.prototype.segmentChanged = function (event) {
        console.log(event.value);
        this.share = event.value;
    };
    ManageSharingPage.prototype.changeFlag = function () {
        console.log();
        this.filter_flag = !this.filter_flag;
        console.log(this.filter_flag);
    };
    ManageSharingPage.prototype.showOption = function (event, profile) {
        var _this = this;
        console.log('showOption');
        var actionSheet = this.actionSheetCtrl.create({
            title: profile.shareable.person.first_name + " " + profile.shareable.person.last_name + "'s Profile",
            subTitle: "Shared " + profile.updated_at.substr(0, 10) + " with\n" + profile.shared_email,
            cssClass: 'title-img',
            buttons: [
                {
                    text: 'Set Password',
                    handler: function () {
                        console.log('SetPassword clicked');
                        // this.setPassword(profile.id);
                        _this.setPasswordBox(profile.id);
                    }
                }, {
                    text: 'Set Expiration',
                    handler: function () {
                        console.log('SetExpiration clicked');
                        _this.setExpireBox(profile.id);
                    }
                }, {
                    text: 'Delete Shared Link',
                    role: 'destructive',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.deleteAlert(profile.id);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ManageSharingPage.prototype.setPasswordBox = function (id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Set Password',
            cssClass: 'alert-position',
            inputs: [
                {
                    type: 'password',
                    name: 'value',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        console.log(id + " " + data.value);
                        _this.setPassword(id, data.value);
                    }
                }
            ]
        });
        prompt.present();
    };
    ManageSharingPage.prototype.setPassword = function (id, value) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var body = { "id": id, "share": { "password": value } };
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.ShareSetPass(_this.email, _this.auth_token, id, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log(JSON.stringify(data));
                    if (data.success == false) {
                    }
                    else {
                        _this.gettingData();
                    }
                }, function (data) {
                    loading.dismiss();
                });
            });
        });
    };
    ManageSharingPage.prototype.setExpireBox = function (id) {
        var _this = this;
        var today = new Date();
        var prompt = this.alertCtrl.create({
            title: 'Set Expiration',
            cssClass: 'alert-position',
            inputs: [
                {
                    type: 'date',
                    name: 'date',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        console.log(id + " " + data.date);
                        var newDate = new Date(data.date);
                        var getDate = newDate.getTime().toString();
                        console.log(getDate);
                        console.log(_this.todayTime);
                        var dateNumber = _this.todayTime;
                        if (getDate.localeCompare(_this.todayTime) < 0) {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Error!',
                                subTitle: "Expiration date must be greater than today's date",
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        else {
                            _this.setExpiration(id, getDate);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ManageSharingPage.prototype.setExpiration = function (id, value) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var body = { "id": id, "share": { "expired_at": value } };
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.ShareSetPass(_this.email, _this.auth_token, id, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log(JSON.stringify(data));
                    if (data.success == false) {
                    }
                    else {
                        _this.gettingData();
                    }
                }, function (data) {
                    loading.dismiss();
                });
            });
        });
    };
    ManageSharingPage.prototype.deleteAlert = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Warning',
            message: 'Do you want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.deleteItem(id);
                    }
                }
            ]
        });
        alert.present();
    };
    ManageSharingPage.prototype.deleteItem = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.deleteShares(_this.email, _this.auth_token, id)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log(JSON.stringify(data));
                    if (data.success == false) {
                    }
                    else {
                        _this.gettingData();
                    }
                }, function (data) {
                    loading.dismiss();
                });
            });
        });
    };
    ManageSharingPage.prototype.gotoMeData = function (event, profile) {
        console.log('gotoMeData');
    };
    ManageSharingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ManageSharingPage;
}());
ManageSharingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-manage-sharing',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/manage-sharing/manage-sharing.html"*/'<div class="nav-bar">\n  <div class="dd">\n    <img src="assets/icon/white/share-2.png" alt="">\n    <span>Sharing</span>\n  </div>\n  <div class="feature">\n    <button ion-button clear style="left: 0;" (click)="dismiss()"><ion-icon name="ios-arrow-back"></ion-icon>Back</button>\n  </div>\n</div>\n\n<ion-segment [(ngModel)]="share" color="primary" (ionChange)="segmentChanged($event)">\n\n  <ion-segment-button value="other">Share with others</ion-segment-button>\n  <ion-segment-button value="me" >Share with me</ion-segment-button>\n\n</ion-segment>\n\n<ion-content class="content-box">\n  <div class="document" *ngIf="this.share==\'other\'">\n    <ion-item class="others-item-div">\n       <ion-icon name="ios-contact-outline" item-left></ion-icon>\n       Shared Profiles\n   </ion-item>\n   <div *ngIf="others_profiles_count == 0 || others_profiles_count == undefined">\n       <ion-icon name="ios-close-circle-outline" class="close-icon"></ion-icon>\n       <div class="desc-div">No profiles are shared with you</div>\n   </div>\n\n   <div *ngIf="others_profiles_count > 0">\n     <ion-card *ngFor="let profile of others_profiles" style="border-radius:6px;" class="test" (click)="showOption($event, profile);">\n       <ion-item>\n         <ion-avatar item-left>\n           <img [src]="profile.shareable.person.image_url.thumb" style="width:13vw; height:13vw;" onError="this.src=\'/assets/image/default_avatar.png\';"/>\n         </ion-avatar>\n         <h2 style="font-size:5vw;">{{profile.shareable.person.first_name}} {{profile.shareable.person.last_name}}</h2>\n         <div class="separator"></div>\n         <p>Shared {{profile.updated_at.substr(0, 10)}}</p>\n         <ion-icon name="ios-arrow-dropdown-outline" item-right></ion-icon>\n       </ion-item>\n     </ion-card>\n   </div>\n\n   <ion-item class="others-item-div">\n       <ion-icon name="ios-albums-outline" item-left></ion-icon>\n       Shared Documents\n   </ion-item>\n\n   <div *ngIf = "others_documents_count == 0 || others_documents_count == undefined">\n       <ion-icon name="ios-close-circle-outline" class="close-icon"></ion-icon>\n       <div class="desc-div">No documents are shared with others</div>\n   </div>\n\n   <div *ngIf="others_documents_count > 0">\n     <ion-card *ngFor="let document of others_documents" style="border-radius:6px;" (click)="gotoDocument($event, document);">\n       <ion-item>\n\n           <ion-icon name = "ios-document-outline" item-left></ion-icon>\n           <!-- <img [src]="document.shareable.person.image_url.thumb" style="width:13vw; height:13vw;" onError="this.src=\'/assets/image/default_avatar.png\';"/> -->\n\n         <h2 style="font-size:5vw;">{{document.shareable.file_name}}</h2>\n         <div class="separator"></div>\n         <p>Shared{{document.updated_at.substr(0, 10)}}</p>\n         <ion-icon name="ios-arrow-dropdown-outline" item-right></ion-icon>\n       </ion-item>\n     </ion-card>\n   </div>\n  </div>\n  <!-- <div class="me-div" *ngIf="relationship==\'me\' && (me_count == 0 || me_count == undefined)">\n   <ion-icon name="ios-close-circle-outline" class="close-icon"></ion-icon>\n   <div class="desc-div">{{\'No profiles are shared with you\' | translate}}</div>\n </div> -->\n<!--\n <div class="me-div" *ngIf="relationship==\'me\' && me_count > 0">\n     <ion-card *ngFor="let profile of me_data" style="border-radius:6px;" (click)="gotoMeData($event, profile);">\n       <ion-item>\n\n         <ion-avatar item-left>\n           <img [src]="profile.shareable.person.image_url.thumb" style="width:13vw; height:13vw;" onError="this.src=\'/assets/image/default_avatar.png\';"/>\n         </ion-avatar>\n         <h2 style="font-size:5vw;">{{profile.shareable.person.first_name}} {{profile.shareable.person.last_name}}</h2>\n         <div class="separator"></div>\n         <p *ngIf="profile.expired_at != undefined">Shared Expires {{profile.expired_at.substr(0, 10)}}</p>\n         <p *ngIf="profile.expired_at == undefined">Shared Never Expires</p>\n\n         <ion-icon name="ios-arrow-forward-outline" item-right></ion-icon>\n       </ion-item>\n     </ion-card>\n </div> -->\n <div class="me-div" *ngIf="share==\'me\'">\n   <div class="search_bar">\n     <ion-searchbar (ionInput)="getItems($event)" class="customer"></ion-searchbar>\n     <button ion-button icon-only class="filter" [ngClass]="{\'filter_off\': filter_flag, \'filter_on\': !filter_flag}" (click)="changeFlag()">\n       <ion-icon name="ios-pricetag-outline"></ion-icon>\n     </button>\n   </div>\n\n   <div class="filter_list" *ngIf="filter_flag">\n     <button ion-button outline [ngClass]="{\'checkedClass\': item.checked, \'discheckedClass\': !item.checked}" (click)="onButtonClick(item)" *ngFor="let item of filter_list">{{item.title}}</button>\n   </div>\n   <ion-list>\n     <ion-item *ngFor="let item of items">\n       {{ item }}\n     </ion-item>\n   </ion-list>\n\n </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/manage-sharing/manage-sharing.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__["a" /* ActionSheet */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], ManageSharingPage);

//# sourceMappingURL=manage-sharing.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditReminderModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reminders_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditReminderModal = (function () {
    function EditReminderModal(viewCtrl, remindersService, params) {
        this.viewCtrl = viewCtrl;
        this.remindersService = remindersService;
        this.reminderData = {};
        this.reminderData = params.get('reminder');
        var stringToSpilt = this.reminderData.frequency;
        var x = stringToSpilt.split(" ");
        var times = +x[0];
        this.schedule = +x[2];
        console.log(this.reminderData, this.schedule);
        this.tablet = { name: "Advil", type: "pill", color1: "#ff0000", color2: "#00ff00" };
        var value = new Date();
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]("en-US");
        var currentDateStr = datePipe.transform(value, 'yyyy-MM-dd');
        this.reminderData.refil_date = currentDateStr;
        this.reminderData.start_date = currentDateStr;
        this.dailyReminderColumns = [
            {
                name: 'time',
                options: [
                    { text: '01:', value: '1' },
                    { text: '02:', value: '2' },
                    { text: '03:', value: '3' },
                    { text: '04:', value: '4' },
                    { text: '05:', value: '5' },
                    { text: '06:', value: '6' },
                    { text: '07:', value: '7' },
                    { text: '08:', value: '8' },
                    { text: '09:', value: '9' },
                    { text: '10:', value: '10' },
                    { text: '11:', value: '11' },
                    { text: '12:', value: '12' }
                ]
            }, {
                name: 'minute',
                options: [
                    { text: '00', value: '0' },
                    { text: '05', value: '5' },
                    { text: '10', value: '10' },
                    { text: '15', value: '15' },
                    { text: '20', value: '20' },
                    { text: '25', value: '25' },
                    { text: '30', value: '30' },
                    { text: '35', value: '35' },
                    { text: '40', value: '40' },
                    { text: '45', value: '45' },
                    { text: '50', value: '50' },
                    { text: '55', value: '55' }
                ]
            }, {
                name: 'ap',
                options: [
                    { text: 'AM', value: '1' },
                    { text: 'PM', value: '2' }
                ]
            }
        ];
        this.weeklyReminderColumns = [
            {
                name: 'day',
                options: [
                    { text: 'Sun', value: '1' },
                    { text: 'Mon', value: '2' },
                    { text: 'Tue', value: '3' },
                    { text: 'Wed', value: '4' },
                    { text: 'Thu', value: '5' },
                    { text: 'Fri', value: '6' },
                    { text: 'Sat', value: '7' }
                ]
            }, {
                name: 'time',
                options: [
                    { text: '01:', value: '1' },
                    { text: '02:', value: '2' },
                    { text: '03:', value: '3' },
                    { text: '04:', value: '4' },
                    { text: '05:', value: '5' },
                    { text: '06:', value: '6' },
                    { text: '07:', value: '7' },
                    { text: '08:', value: '8' },
                    { text: '09:', value: '9' },
                    { text: '10:', value: '10' },
                    { text: '11:', value: '11' },
                    { text: '12:', value: '12' }
                ]
            }, {
                name: 'minute',
                options: [
                    { text: '00', value: '0' },
                    { text: '05', value: '5' },
                    { text: '10', value: '10' },
                    { text: '15', value: '15' },
                    { text: '20', value: '20' },
                    { text: '25', value: '25' },
                    { text: '30', value: '30' },
                    { text: '35', value: '35' },
                    { text: '40', value: '40' },
                    { text: '45', value: '45' },
                    { text: '50', value: '50' },
                    { text: '55', value: '55' }
                ]
            }, {
                name: 'ap',
                options: [
                    { text: 'AM', value: '1' },
                    { text: 'PM', value: '2' }
                ]
            }
        ];
        this.frequencyColumns = [
            {
                name: 'times',
                parentCol: 'schedule',
                options: [
                    { text: 'once', value: '1', parentVal: '1' },
                    { text: 'twice', value: '2', parentVal: '1' },
                    { text: '3 times', value: '3', parentVal: '1' },
                    { text: '4 times', value: '4', parentVal: '1' },
                    { text: '5 times', value: '5', parentVal: '1' },
                    { text: '6 times', value: '6', parentVal: '1' },
                    { text: 'once', value: '1', parentVal: '2' },
                    { text: 'twice', value: '2', parentVal: '2' },
                    { text: '3 times', value: '3', parentVal: '2' },
                    { text: '4 times', value: '4', parentVal: '2' },
                    { text: '5 times', value: '5', parentVal: '2' },
                    { text: '6 times', value: '6', parentVal: '2' },
                    { text: '7 times', value: '7', parentVal: '2' },
                    { text: '8 times', value: '8', parentVal: '2' },
                    { text: '9 times', value: '9', parentVal: '2' },
                    { text: '10 times', value: '10', parentVal: '2' },
                    { text: '11 times', value: '11', parentVal: '2' },
                    { text: '12 times', value: '12', parentVal: '2' },
                    { text: '13 times', value: '13', parentVal: '2' },
                    { text: '14 times', value: '14', parentVal: '2' }
                ]
            }, {
                name: 'schedule',
                options: [
                    { text: 'Daily', value: '1' },
                    { text: 'Weekly', value: '2' },
                ]
            }
        ];
    }
    EditReminderModal.prototype.ionViewDidEnter = function () {
        // this.initReminders();
    };
    EditReminderModal.prototype.initReminders = function () {
        var stringToSpilt = this.reminderData.frequency;
        var x = stringToSpilt.split(" ");
        var times = +x[0];
        this.schedule = +x[1];
        console.log(this.schedule, times);
        this.reminderData.reminders = [];
        var weeknum = 1;
        switch (this.schedule) {
            case 1:
                console.warn('initate reminder columns for Daily schedule');
                for (var i = 1; i <= times; i++) {
                    this.reminderData.reminders.push({ value: i + " 1" });
                }
                break;
            case 2:
                console.warn('initate reminder columns for Weekly schedule');
                for (var i = 1; i <= times; i++) {
                    if (weeknum > 7)
                        weeknum = 1;
                    this.reminderData.reminders.push({ value: weeknum + " 8 1" });
                    weeknum++;
                }
                break;
            default:
                break;
        }
    };
    EditReminderModal.prototype.take = function () {
        if (this.reminderData.quantity) {
            this.reminderData.quantity--;
        }
    };
    EditReminderModal.prototype.remove = function () {
        var _this = this;
        console.log(this.reminderData.id);
        this.remindersService.delete(this.reminderData.id)
            .then(function (res) {
            console.log(res);
            _this.viewCtrl.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    EditReminderModal.prototype.onChangeTake = function (e) {
        this.reminderData.scheduled = !this.reminderData.scheduled;
    };
    EditReminderModal.prototype.onChangeSchedule = function (e) {
        this.reminderData.take_as_needed = !this.reminderData.take_as_needed;
    };
    EditReminderModal.prototype.onDoesChange = function (e) {
    };
    EditReminderModal.prototype.onFrequencyChange = function (e) {
        // this.initReminders();
    };
    EditReminderModal.prototype.onCancel = function () {
        this.viewCtrl.dismiss();
    };
    EditReminderModal.prototype.onSave = function () {
        var _this = this;
        console.log(this.reminderData);
        this.remindersService.update(this.reminderData)
            .then(function (res) {
            console.log(res);
            _this.viewCtrl.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    return EditReminderModal;
}());
EditReminderModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-reminder',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/modals/edit-reminder/edit-reminder.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start class="cancel">\n      <button (click)="onCancel()">Cancel</button>\n    </ion-buttons>\n    <p class="spec-title">Edit Reminder</p>\n\n    <div class="tablet-cover">\n      <img src="assets/icon/clock.png" class="tablet">\n    </div>\n\n    <ion-buttons end class="save">\n      <button (click)="onSave()"><ion-icon name="md-checkmark"></ion-icon>&nbsp;Save</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="tablet-preview">\n    <div class="m-icon m-icon-pill" *ngIf="reminderData.form.name == \'Pill\'">\n      <div class="icon-left"\n      [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color1.color}"\n      ></div>\n      <div class="icon-right"\n      [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color2.color}"\n      ></div>\n    </div>\n    <div class="m-icon" *ngIf="reminderData.form.name !== \'Pill\'">\n      <div class="m-icon-normal"\n      [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color1.color}"\n      ></div>\n    </div>\n\n    <h3>{{reminderData.name}}</h3>\n\n    <button ion-button color="secondary" *ngIf="reminderData.take_as_needed" (click)="take()">Take now</button>\n  </div>\n\n  <ion-item [ngClass]="{invalid: !reminderData.quantity}">\n    <ion-label>Current quantity</ion-label>\n    <ion-input type="tel" placeholder="Enter Quantity" [(ngModel)]="reminderData.quantity"></ion-input>\n  </ion-item>\n\n  <ion-item class="reminder-item">\n    <ion-label primary>Refil date</ion-label>\n    <ion-datetime displayFormat="MMM DD, YYYY" min="2017" max="2020-12-31" [(ngModel)]="reminderData.refil_date"></ion-datetime>\n  </ion-item>\n\n  <div class="space"></div>\n\n  <ion-item>\n    <ion-label>Take as needed</ion-label>\n    <ion-toggle [(ngModel)]="reminderData.take_as_needed" (ngModelChange)="onChangeTake($event)"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Interval Schedule</ion-label>\n    <ion-toggle [(ngModel)]="reminderData.scheduled" (ngModelChange)="onChangeSchedule($event)"></ion-toggle>\n  </ion-item>\n\n  <ion-item  class="reminder-item">\n      <ion-label [ngClass]="{disabled: !reminderData.scheduled}">Frequency</ion-label>\n      <ion-multi-picker [(ngModel)] = "reminderData.frequency"\n                        item-content [multiPickerColumns]="frequencyColumns" (ngModelChange)="onChangeFrequency($event)"\n                        [ngClass]="{disabled: !reminderData.scheduled}"\n                        [disabled]="!reminderData.scheduled"></ion-multi-picker>\n  </ion-item>\n\n  <ion-list>\n    <ion-item class="" *ngFor="let reminder of reminderData.reminders; let i = index">\n      <ion-label [ngClass]="{disabled: !reminderData.scheduled}">Reminder</ion-label>\n      <ion-multi-picker *ngIf="schedule==1" [(ngModel)] = "reminderData.reminders[i].value" item-content [multiPickerColumns]="dailyReminderColumns"\n                        [ngClass]="{disabled: !reminderData.scheduled}"\n                        [disabled]="!reminderData.scheduled"></ion-multi-picker>\n      <ion-multi-picker *ngIf="schedule==2" [(ngModel)] = "reminderData.reminders[i].value" item-content [multiPickerColumns]="weeklyReminderColumns"\n                        [ngClass]="{disabled: !reminderData.scheduled}"\n                        [disabled]="!reminderData.scheduled"></ion-multi-picker>\n    </ion-item>\n  </ion-list>\n\n  <ion-item class="reminder-item" *ngIf="reminderData.scheduled">\n    <ion-label primary>Start date</ion-label>\n    <ion-datetime displayFormat="MMM DD, YYYY" min="2017" max="2020-12-31" [(ngModel)]="reminderData.start_date"></ion-datetime>\n  </ion-item>\n\n  <div class="space"></div>\n\n  <ion-item class="remove-item" (click)="remove()">\n    <div class="remove-button">\n      <img src="assets/icon/red/clock.png" alt="">\n      <span>Remove Reminder</span>\n    </div>\n  </ion-item>\n\n  <div class="space"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/modals/edit-reminder/edit-reminder.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_reminders_service__["a" /* RemindersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], EditReminderModal);

//# sourceMappingURL=edit-reminder.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 259;

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MapToIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSEscape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapToIterable = (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (value) {
        var result = [];
        if (value.entries) {
            for (var _i = 0, _a = value.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                result.push({ key: key, value: value });
            }
        }
        else {
            for (var key_1 in value) {
                result.push({ key: key_1, value: value[key_1] });
            }
        }
        return result;
    };
    return MapToIterable;
}());
MapToIterable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'mapToIterable' })
], MapToIterable);

var CSSEscape = (function () {
    function CSSEscape() {
    }
    /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    CSSEscape.escape = function (value) {
        var string = String(value);
        var length = string.length;
        var index = -1;
        var codeUnit;
        var result = '';
        var firstCodeUnit = string.charCodeAt(0);
        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            // Note: there’s no need to special-case astral symbols, surrogate
            // pairs, or lone surrogates.
            // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
            // (U+FFFD).
            if (codeUnit == 0x0000) {
                result += '\uFFFD';
                continue;
            }
            if (
            // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
            // U+007F, […]
            (codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
                // If the character is the first character and is in the range [0-9]
                // (U+0030 to U+0039), […]
                (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
                // If the character is the second character and is in the range [0-9]
                // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
                (index == 1 &&
                    codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
                    firstCodeUnit == 0x002D)) {
                // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
                result += '\\' + codeUnit.toString(16) + ' ';
                continue;
            }
            if (
            // If the character is the first character and is a `-` (U+002D), and
            // there is no second character, […]
            index == 0 &&
                length == 1 &&
                codeUnit == 0x002D) {
                result += '\\' + string.charAt(index);
                continue;
            }
            // If the character is not handled by one of the above rules and is
            // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
            // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
            // U+005A), or [a-z] (U+0061 to U+007A), […]
            if (codeUnit >= 0x0080 ||
                codeUnit == 0x002D ||
                codeUnit == 0x005F ||
                codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
                codeUnit >= 0x0041 && codeUnit <= 0x005A ||
                codeUnit >= 0x0061 && codeUnit <= 0x007A) {
                // the character itself
                result += string.charAt(index);
                continue;
            }
            // Otherwise, the escaped character.
            // https://drafts.csswg.org/cssom/#escape-a-character
            result += '\\' + string.charAt(index);
        }
        return result;
    };
    return CSSEscape;
}());

//# sourceMappingURL=util-classes.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    // public user: any = {email:'', password: ''};
    function LoginPage(navCtrl, alertCtrl, loadingCtrl, userService, storage) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.user = { email: 'dev1plus@fliptechdev.com', password: 'Fl1pT3chD3v' };
    }
    LoginPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title, subTitle: subTitle, buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.showConfirm = function (title, subtilte) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: title,
            message: subtilte,
            buttons: [
                {
                    text: 'Forgot?',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotpasswordPage */]);
                    }
                },
                {
                    text: 'Try Again',
                    handler: function () {
                        console.log('Try Again');
                    }
                }
            ]
        });
        confirm.present();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var title = "Error";
        var title1 = "Email Validation Failed";
        var subtitle0 = "Email is invalid";
        var subtitle1 = "Please fill out all information and then contune";
        var subtitle2 = "Incorrect Username or Password";
        if (this.user.email == '' || this.user.password == '' || !this.user.email || !this.user.password) {
            this.presentAlert(title, subtitle1);
        }
        else {
            loading.present();
            this.userService.login(this.user.email, this.user.password)
                .subscribe(function (data) {
                loading.dismiss();
                if (data.success == false) {
                    console.log(data);
                    _this.showConfirm(title, subtitle2);
                }
                else {
                    console.log("login result", data);
                    _this.storage.set('data', data);
                    _this.storage.set('email', data.user.email);
                    _this.storage.set('auth_token', data.user.authentication_token);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
            }, function (data) {
                loading.dismiss();
                console.log("Login error");
                _this.showConfirm(title, subtitle2);
            });
        }
    };
    LoginPage.prototype.goForgotPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotpasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Log In\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="signup">\n\n    <ion-item>\n      <ion-label stacked class="title">Email</ion-label>\n      <ion-input type="text" class="mail" placeholder="Email" [(ngModel)]="user.email" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked class="title">Password</ion-label>\n      <ion-input type="password" class="mail" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full large color="secondary" (click)="doLogin()">Log In</button>\n  <button ion-button clear item-end icon-right class="forgot_btn" (click)="goForgotPage()">Forgot Password<ion-icon style="color: #0093ca;" name="arrow-forward"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, viewCtrl, alertCtrl, loadingCtrl, userService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
    }
    ForgotpasswordPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title, subTitle: subTitle, buttons: ['OK']
        });
        alert.present();
    };
    ForgotpasswordPage.prototype.validEmailAddress = function () {
        this.validEmail = this.ValidationEmail(this.email);
    };
    ForgotpasswordPage.prototype.ValidationEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ForgotpasswordPage.prototype.doSubmit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var val_email = this.ValidationEmail(this.email);
        var title = "Email Validation Failed";
        var title0 = "Sent Email Successfully";
        var subtitile0 = "Please check your email for reset password instructions";
        var subtitle1 = "Email can't be blank";
        var subtitle2 = "Email doesn't exist in system";
        if (this.email == '' || !this.email) {
            this.presentAlert(title, subtitle1);
        }
        else if (val_email == false) {
            this.presentAlert(title, subtitle2);
        }
        else {
            loading.present();
            this.userService.forgot(this.email)
                .subscribe(function (data) {
                loading.dismiss();
                console.log("Send request:", data);
                if (data.success == false) {
                    _this.presentAlert(title, subtitle2);
                }
                else {
                    _this.presentAlert(title0, subtitile0);
                    _this.navCtrl.pop();
                }
            }, function (data) {
                loading.dismiss();
                console.log("Request error");
                _this.presentAlert(title, subtitle2);
                _this.navCtrl.pop();
            });
        }
    };
    return ForgotpasswordPage;
}());
ForgotpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/forgot-password/forgot-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Password?\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p style="font-size: 17px;">Enter your email address that was used to sign up for MyID and we\'ll send you a reset password link.</p>\n  <ion-list class="signup">\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Email</ion-label>\n      <ion-input type="text" class="mail" placeholder="Email Address" [(ngModel)]="email" (ionChange)="validEmailAddress()"></ion-input>\n      <ion-label *ngIf="validEmail" class="check"> <ion-icon name="md-checkmark"></ion-icon></ion-label>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full large color="secondary" (click)="doSubmit()">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/forgot-password/forgot-password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]])
], ForgotpasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_schedule__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reminders_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, storage, userService, remindersService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.userService = userService;
        this.remindersService = remindersService;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__["a" /* InboxPage */];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        // this.getData();
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.remindersService.getForToday()
            .then(function (res) {
            _this.reminders = res;
            console.log("reminders => ", _this.reminders);
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    HomePage.prototype.goInboxPage = function () {
        console.log('go Inbox Page');
        this.navCtrl.parent.select(3);
    };
    HomePage.prototype.goSchedulePage = function () {
        console.log('go Schedule Page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__schedule_schedule__["a" /* SchedulePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/home/home.html"*/'\n\n<ion-content padding class="bg-clr">\n  <img src="assets/icon/main_logo.png" alt="" class="logo">\n\n  <div class="inbox box">\n    <img src="assets/icon/blue/continued-circles-vertical.png" alt="" class="icon" (click)="goInboxPage()">\n    <h2>My Inbox</h2>\n    <p>You\'ve got <b>3</b> unread messages.</p>\n    <div class="section"></div>\n    <button ion-button color="secondary" clear small full>Read Messages</button>\n  </div>\n\n  <div class="schedule box">\n    <img src="assets/icon/blue/continued-circles-vertical.png" alt="" class="icon" (click)="goSchedulePage()">\n    <h2>My Schedule</h2>\n    <ion-item class="timing" *ngFor="let item of reminders">\n        <ion-row class="title">\n            <ion-col col-6><div class="row1">Today</div></ion-col>\n            <ion-col col-6><div class="row1">Medication</div></ion-col>\n        </ion-row>\n        <ion-row class="des">\n            <ion-col col-6><div class="row2">{{item.reminder.time}}:{{item.reminder.minute}} {{item.reminder.ap}}</div></ion-col>\n            <ion-col col-6><div class="row2">{{item.name}}</div></ion-col>\n        </ion-row>\n    </ion-item>\n    <!-- <button ion-button color="secondary" clear small full>View More</button> -->\n  </div>\n<!--\n  <div class="inbox box">\n    <img src="assets/icon/blue/continued-circles-vertical.png" alt="" class="icon">\n    <h2>My Community</h2>\n    <div class="com">\n      <img src="assets/icon/badge.png" alt="">\n      <p class="middle-name">TD</p>\n      <div class="notification">\n        <img src="assets/icon/noti_icon.png" alt="">\n        <p>3</p>\n      </div>\n      <p>T1 Diabeties</p>\n    </div>\n    <div class="com">\n      <img src="assets/icon/badge.png" alt="">\n      <p class="middle-name">ED</p>\n      <p>Ehios Danios</p>\n    </div>\n\n    <button ion-button color="secondary" clear small full>See Communities</button>\n  </div> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_reminders_service__["a" /* RemindersService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxDetailsPage = (function () {
    function InboxDetailsPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.items = navParams.get('data');
        console.log(this.items);
    }
    InboxDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return InboxDetailsPage;
}());
InboxDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-inbox-details',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/inbox-details/inbox-details.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <div class="desk-back desk-back1" *ngIf="items==\'aa\'"></div>\n    <div class="desk-back desk-back2" *ngIf="items==\'bb\'"></div>\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n\n    <button ion-button clear item-end class="back_btn create"><ion-icon name="ios-more"></ion-icon></button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="inbox1" *ngIf="items==\'aa\'">\n    <h1>NIke Improves Health</h1>\n    <p class="date">Auguest 7, 2017</p>\n    <p>Nike is the Bomb. And it has also proven to help cure everythin from the following:</p>\n    <ul>\n      <li>Asthma</li>\n      <li>Obesity</li>\n      <li>Cancer</li>\n    </ul>\n    <p>What\'s Next?</p>\n    <p>Learn more about how Nike can bring your blood presure down and your tstosterone levels up <span class="link">nike.com/myid</span></p>\n  </div>\n\n  <div class="inbox2" *ngIf="items==\'bb\'">\n    <h1>Type 2 Diabetes cure!</h1>\n    <p class="date">July 7, 2017</p>\n    <p>Insomnia is a very common complaint among older adults. The condition affects more than 70 million Americans.</p>\n    <ol>\n      <li>Keep a regular sleep schedule</li>\n      <li>exercise regulary but avoid exercise before bed</li>\n      <li>go to bed when sleepy</li>\n      <li>do relaxing and enjoyable activities befor bed</li>\n    </ol>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/inbox-details/inbox-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], InboxDetailsPage);

//# sourceMappingURL=inbox-details.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchedulePage = (function () {
    function SchedulePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [{ date: 'Today', value: '5' },
            { date: 'Augest 4, 2017', value: '1' },
            { date: 'Augest 5, 2017', value: '2' },
            { date: 'Augest 6, 2017', value: '5' },
            { date: 'Augest 7, 2017', value: '3' },
            { date: 'Augest 8, 2017', value: '4' },
            { date: 'Augest 9, 2017', value: '5' },
            { date: 'Augest 10, 2017', value: '6' }
        ];
    }
    SchedulePage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-schedule',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/schedule/schedule.html"*/'<div class="nav-bar">\n  <div class="dd">\n    <img src="assets/icon/white/cloud.png" alt="">\n    <span>Schedule</span>\n  </div>\n  <div class="feature">\n    <button ion-button clear (click)="dismiss()"><ion-icon name="ios-arrow-back"></ion-icon>Back</button>\n\n  </div>\n</div>\n\n<ion-content  class="content-box">\n  <ion-list>\n    <ion-item class="date" *ngFor="let item of items">\n      <ion-icon item-end>{{item.value}}</ion-icon>\n        {{item.date}}\n      <ion-icon name="ios-arrow-down" item-end></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/schedule/schedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_info_personal_info__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vital_medical_vital_medical__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emergency_emergency__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__allergies_allergies__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__medications_medications__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__physicians_physicians__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__insurance_info_insurance_info__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__other_info_other_info__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__linked_product_linked_product__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__popover_popover__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_category_add_category__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__explain_slide_explain_slide__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_dependent_add_dependent__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__preview_profile_preview_profile__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__link_new_link_new__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__manage_sharing_manage_sharing__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var ProfilePage = (function () {
    function ProfilePage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, actionSheetCtrl, popOverCtrl, inAppBrowser, storage, userService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popOverCtrl = popOverCtrl;
        this.inAppBrowser = inAppBrowser;
        this.storage = storage;
        this.userService = userService;
        this.isLoading = false;
        this.date_documents_array = {};
        this.date_month = [];
        this.selected_ids = [];
        this.sort_flag = "name";
        this.searchQuery = '';
        this.addedCategories = [];
        var that = this;
        this.config = {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            observer: true,
            spaceBetween: 40,
            grabCursor: true,
            onSlideChangeEnd: function (swiper) {
                that.swipe(swiper);
            }
        };
        this.email = "";
        this.auth_token = "";
        // this.pages = [{ id: 0, name: 'Personal Information', page: PersonalInfoPage , icon:'person', show: true, sup:'' },
        //               { id: 1, name: 'Vital Medical Conditions', page: VitalMedicalPage, icon: 'warning', show: true, sup:'' },
        //               { id: 2, name: 'Emergency Contacts', page: EmergencyPage, icon:'contacts-book', show: true, sup:'' },
        //               { id: 3, name: 'Allergies', page: AllergiesPage, icon:'eye', show: true, sup:'' },
        //               { id: 4, name: 'Medications', page: MedicationsPage, icon:'pill',  show: true, sup:'' },
        //               { id: 5, name: 'Physicians', page: PhysiciansPage, icon:'doctor', show: true, sup:'' },
        //               { id: 6, name: 'Insurance Information', page: InsuranceInfoPage, icon:'umbrella', show: true, sup:'' },
        //               { id: 7, name: 'Surgries', page: SurgeriesPage, icon:'surgeon', show: false, sup:'' },
        //               { id: 8, name: 'Labs', page: LabsPage, icon:'test-tube', show: false, sup:'' },
        //               { id: 9, name: 'Living Will', page: LivingWillPage, icon:'document-scroll-2', show: false, sup:'' },
        //               { id: 10, name: 'DNR', page: DNRPage, icon:'document-lines', show: false, sup:'' },
        //               { id: 11, name: 'Family History', page: FamilyHistoryPage, icon:'family', show: false, sup:'' },
        //               { id: 12, name: 'Immunizations', page: ImmunizationsPage, icon:'syringe', show: false, sup:'' },
        //               { id: 13, name: 'Pharmacies', page: PharmaciesPage, icon:'medical-kit', show: false, sup:'' },
        //               { id: 14, name: 'SureCell', page: SureCellPage, icon:'atom', show: false, sup:'TM' },
        //               { id: 15, name: 'Other Info', page: OtherInfoPage, icon:'info', show: false, sup:'' },
        //               { id: 16, name: 'Pregnancy', page: PregnancyPage, icon:'baby-stroller', show: false, sup:'' },
        //             ];
        this.pages = [{ id: 0, name: 'Personal Information', page: __WEBPACK_IMPORTED_MODULE_4__personal_info_personal_info__["a" /* PersonalInfoPage */], icon: 'person', show: true, sup: '' },
            { id: 1, name: 'Vital Medical Conditions', page: __WEBPACK_IMPORTED_MODULE_5__vital_medical_vital_medical__["a" /* VitalMedicalPage */], icon: 'warning', show: true, sup: '' },
            { id: 2, name: 'Emergency Contacts', page: __WEBPACK_IMPORTED_MODULE_6__emergency_emergency__["a" /* EmergencyPage */], icon: 'contacts-book', show: true, sup: '' },
            { id: 3, name: 'Allergies', page: __WEBPACK_IMPORTED_MODULE_7__allergies_allergies__["a" /* AllergiesPage */], icon: 'eye', show: true, sup: '' },
            { id: 4, name: 'Medications', page: __WEBPACK_IMPORTED_MODULE_8__medications_medications__["a" /* MedicationsPage */], icon: 'pill', show: true, sup: '' },
            { id: 5, name: 'Physicians', page: __WEBPACK_IMPORTED_MODULE_9__physicians_physicians__["a" /* PhysiciansPage */], icon: 'doctor', show: true, sup: '' },
            { id: 6, name: 'Insurance Information', page: __WEBPACK_IMPORTED_MODULE_10__insurance_info_insurance_info__["a" /* InsuranceInfoPage */], icon: 'umbrella', show: true, sup: '' },
            { id: 7, name: 'Other Info', page: __WEBPACK_IMPORTED_MODULE_11__other_info_other_info__["a" /* OtherInfoPage */], icon: 'info', show: false, sup: '' }
        ];
        this.relationship = 'edit';
        this.lists = [{ 'name': 'flask' }, { 'name': 'wifi' }, { 'name': 'beer' }, { 'name': 'football' },
            { 'name': 'basketball' }, { 'name': 'paper' }, { 'name': 'plane' }, { 'name': 'american' },
            { 'name': 'boat' }, { 'name': 'bluetooth' }, { 'name': 'build' }];
        this.slug = navParams.get('slug');
        console.log('slug', this.slug);
        this.currentPageClass = this;
        this.alphaScrollItemTemplate = '<div class="item-div">' +
            '<ion-card>' +
            '<ion-item (click)="currentPageClass.onItemClick(item)">' +
            '<ion-icon item-left *ngIf="item.item_type==\'folder\'" name="ios-folder-outline" class="icon-style"></ion-icon>' +
            '<ion-icon item-left *ngIf="item.media_type==\'image\'" name="ios-image-outline" class="icon-style"></ion-icon>' +
            '<ion-icon item-left *ngIf="item.media_type==\'video\'" name="ios-videocam-outline" class="icon-style"></ion-icon>' +
            '<ion-icon item-left *ngIf="item.media_type==\'document\'" name="ios-document-outline" class="icon-style"></ion-icon>' +
            '<h2 style="font-size:5vw;">{{item.name}}</h2>' +
            '<p>{{item.file_size}}</p>' +
            '</ion-item>' +
            '<ion-icon name="ios-arrow-dropdown-outline" item-right (click)="currentPageClass.moreOptions(item);"></ion-icon>' +
            '</ion-card>' +
            '</div>';
        this.alphaScrollItemTemplate1 = '<div class="item-div">' +
            '<ion-checkbox item-left (ionChange)="currentPageClass.check1(item.id);"></ion-checkbox>' +
            '<ion-item (click)="currentPageClass.onItemClick(item)">' +
            '<ion-icon item-left *ngIf="item.item_type==\'folder\'" name="ios-folder-outline" class="icon-style"></ion-icon>' +
            '<ion-icon item-left *ngIf="item.media_type==\'image\'" name="ios-image-outline" class="icon-style"></ion-icon>' +
            '<ion-icon item-left *ngIf="item.media_type==\'video\'" name="ios-videocam-outline" class="icon-style"></ion-icon>' +
            '<ion-icon item-left *ngIf="item.media_type==\'document\'" name="ios-document-outline" class="icon-style"></ion-icon>' +
            '<h2 style="font-size:5vw;">{{item.name}}</h2><p>{{item.file_size}}</p>' +
            '<ion-icon name="ios-arrow-dropdown-outline" item-right></ion-icon>' +
            '</ion-item>' +
            '</div>';
        this.triggerAlphaScrollChange = 0;
    }
    ProfilePage.prototype.swipe = function (swiper) {
        this.profile_id = this.profiles[swiper.activeIndex].id;
        this.personData = this.profiles[swiper.activeIndex].person;
        this.subscription_type = this.profiles[swiper.activeIndex].subscription_type;
        console.log(this.profile_id);
        console.log(this.subscription_type);
        if (this.relationship == 'document' && this.subscription_type == 'Premium') {
            this.getDocument();
        }
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    ProfilePage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.getProfiles(_this.email, _this.auth_token)
                    .subscribe(function (data) {
                    if (data.success == false) {
                        loading.dismiss();
                        console.log('Data Error');
                    }
                    else {
                        loading.dismiss();
                        console.log('profileData', data);
                        _this.isLoading = true;
                        _this.profiles = data.profiles;
                        _this.profile_id = _this.profiles[0].id;
                        _this.personData = _this.profiles[0].person;
                        _this.subscription_type = _this.profiles[0].subscription_type;
                        console.log(_this.profile_id);
                        console.log(_this.subscription_type);
                        _this.storage.set('profileData', data.profiles);
                    }
                }, function (data) {
                    loading.dismiss();
                    console.log('internet Fails');
                });
            });
        });
    };
    ProfilePage.prototype.optionSheet = function () {
        var _this = this;
        // Ionic 2 Component
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Add Dependent Profile',
                    icon: 'ios-person-add-outline',
                    handler: function () {
                        console.log('AddDependentPage clicked');
                        _this.goAddDependentPage();
                    }
                }, {
                    text: 'Preview Profile',
                    icon: 'ios-search-outline',
                    handler: function () {
                        console.log('PreviewProfilePage clicked');
                        _this.goPreviewProfilePage();
                    }
                }, {
                    text: 'Link New Product',
                    icon: 'ios-link-outline',
                    handler: function () {
                        console.log('LinkNewPage clicked');
                        _this.goLinkNewPage();
                    }
                }, {
                    text: ' Delete Profile',
                    icon: 'ios-trash',
                    role: 'destructive',
                    handler: function () {
                        console.log('Delete clicked');
                        _this.deleteAlert();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.addCategoryPage = function () {
        var _this = this;
        console.log('go AddCategory Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__add_category_add_category__["a" /* AddCategoryPage */], { ids: this.addedCategories });
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.addedCategories = _this.addedCategories.concat(data.category.id);
                _this.pages = _this.pages.concat(data.category);
            }
        });
        profileModal.present();
    };
    ProfilePage.prototype.goLinkedProductPage = function () {
        console.log('go LinkedProduct Page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__linked_product_linked_product__["a" /* LinkedProductPage */], { profile_id: this.profile_id, personData: this.personData });
    };
    ProfilePage.prototype.goAddDependentPage = function () {
        console.log('go AddDependentPage Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_16__add_dependent_add_dependent__["a" /* AddDependentPage */], {
            profile_id: this.profile_id
        });
        profileModal.present();
    };
    ProfilePage.prototype.goPreviewProfilePage = function () {
        console.log('go PreviewProfilePage Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_17__preview_profile_preview_profile__["a" /* PreviewProfilePage */]);
        profileModal.present();
    };
    ProfilePage.prototype.goLinkNewPage = function () {
        console.log('go LinkNewPage Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__link_new_link_new__["a" /* LinkNewPage */]);
        profileModal.present();
    };
    ProfilePage.prototype.goManageSharingPage = function () {
        console.log('go ManageSharing Page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__manage_sharing_manage_sharing__["a" /* ManageSharingPage */]);
    };
    ProfilePage.prototype.explainSlidePage = function () {
        console.log('go Slide Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__explain_slide_explain_slide__["a" /* ExplainSlidePage */], { personData: this.personData });
        profileModal.present();
    };
    ProfilePage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you want to delete this Profile?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteProfile();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.deleteProfile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.deleteProfile(this.auth_token, this.email, this.profile_id)
            .subscribe(function (data) {
            loading.dismiss();
            if (data.success == false) {
                console.log(data);
            }
            else {
                console.log("login result", data);
                _this.getData();
            }
        }, function (data) {
            loading.dismiss();
            console.log("Login error");
        });
    };
    ProfilePage.prototype.onPageClick = function (event, page) {
        console.log(page);
        this.navCtrl.push(page, { profile_id: this.profile_id, personData: this.personData });
    };
    ProfilePage.prototype.segmentChanged = function (event) {
        console.log(event.value);
        this.relationship = event.value;
    };
    // importFile(){
    //   let actionSheet = this.actionSheetCtrl.create({
    //
    //     buttons: [
    //       {
    //         text: 'Camera',
    //         icon: 'ios-camera-outline',
    //         handler: () => {
    //           console.log('Add Camera');
    //           // this.goAddDependentPage();
    //         }
    //       },{
    //         text: 'Choose a photo',
    //         icon: 'ios-images-outline',
    //         handler: () => {
    //           console.log('Choose a image');
    //           // this.goPreviewProfilePage();
    //
    //         }
    //       },{
    //         text: 'iCloud Files',
    //         icon: 'ios-cloud-outline',
    //         handler: () => {
    //           console.log('import iCloud');
    //           // this.addCategoryPage()
    //         }
    //       },{
    //         text: 'Cancel',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('Cancel clicked');
    //         }
    //       }
    //     ]
    //   });
    //   actionSheet.present();
    // }
    ProfilePage.prototype.onItemClick = function (item, profile_id) {
        console.log("item: " + JSON.stringify(item));
        if (item.item_type == "folder") {
            //  this.navCtrl.push(DocumentsPage, {
            //    slug: item.slug,
            //    profile_id: item.profile_id,
            //    parent_id: item.id
            //  });
            console.log('Next Document');
        }
        else {
            var options = {
                zoom: 'no',
                location: 'no',
                closebuttoncaption: '< Back',
                toolbarposition: 'bottom',
                toolbar: 'yes'
            };
            var browser = this.inAppBrowser.create(item.url, '_blank', options);
        }
    };
    ProfilePage.prototype.cancelSelect = function () {
        this.checkbox_flag = 0;
    };
    ProfilePage.prototype.check1 = function (id) {
        var index = this.selected_ids.indexOf(id);
        if (index > -1) {
            this.selected_ids.splice(index, 1);
        }
        else {
            this.selected_ids.push(id);
        }
        console.log(this.selected_ids);
    };
    ProfilePage.prototype.getDocument = function () {
        var _this = this;
        this.documents = [];
        this.date_documents = [];
        var loading = this.loadingCtrl.create();
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.getDocuments(_this.email, _this.auth_token, _this.profile_id, _this.slug)
                    .subscribe(function (data) {
                    loading.dismiss();
                    if (data.success == false) {
                        console.log("get Documents:" + JSON.stringify(data));
                    }
                    else {
                        _this.documents = data.items;
                        console.log(_this.documents);
                        _this.date_documents = data.items;
                        var name1 = void 0, name2 = void 0;
                        var temp = void 0;
                        for (var k = 0; k < _this.documents.length; k++) {
                            if (_this.documents[k].item_type == "document") {
                                var temp_document = { "item_type": "", "id": 0, "name": "", "profile_id": 0,
                                    "media_type": "", "folder_id": null, "file_size": 0, "file_size_in_bytes": 0,
                                    "updated_at": "", "url": "", "is_private": false };
                                temp_document.item_type = _this.documents[k].item_type;
                                temp_document.id = _this.documents[k].id;
                                temp_document.name = _this.documents[k].file_name;
                                temp_document.profile_id = _this.documents[k].profile_id;
                                temp_document.media_type = _this.documents[k].media_type;
                                temp_document.folder_id = _this.documents[k].folder_id;
                                temp_document.file_size = _this.documents[k].file_size;
                                temp_document.file_size_in_bytes = _this.documents[k].file_size_in_bytes;
                                temp_document.updated_at = _this.documents[k].updated_at;
                                temp_document.url = _this.documents[k].url;
                                temp_document.is_private = _this.documents[k].is_private;
                                _this.documents[k] = temp_document;
                                _this.date_documents[k] = temp_document;
                            }
                        }
                        if (_this.sort_flag == 'name') {
                            for (var i = 0; i < _this.documents.length; i++) {
                                for (var j = i + 1; j < _this.documents.length; j++) {
                                    if (_this.documents[i].name.localeCompare(_this.documents[j].name) > 0) {
                                        temp = _this.documents[i];
                                        _this.documents[i] = _this.documents[j];
                                        _this.documents[j] = temp;
                                    }
                                }
                            }
                        }
                        if (_this.sort_flag == 'date') {
                            for (var i = 0; i < _this.date_documents.length; i++) {
                                for (var j = i + 1; j < _this.date_documents.length; j++) {
                                    if (_this.date_documents[i].updated_at.localeCompare(_this.date_documents[j].updated_at) < 0) {
                                        temp = _this.date_documents[i];
                                        _this.date_documents[i] = _this.date_documents[j];
                                        _this.date_documents[j] = temp;
                                    }
                                }
                            }
                            for (var i = 0; i < _this.date_documents.length; i++) {
                                var temp_date_month = _this.date_documents[i].updated_at.substr(0, 7);
                                if (_this.date_month.indexOf(temp_date_month) == -1) {
                                    _this.date_month.push(temp_date_month);
                                }
                            }
                            for (var i = 0; i < _this.date_month.length; i++) {
                                _this.date_documents_array[_this.date_month[i]] = [];
                                for (var j = 0; j < _this.date_documents.length; j++) {
                                    if (_this.date_documents[j].updated_at.includes(_this.date_month[i])) {
                                        _this.date_documents_array[_this.date_month[i]].push(_this.date_documents[j]);
                                    }
                                }
                            }
                        }
                        console.log("get Documents:" + JSON.stringify(_this.date_documents_array));
                    }
                }, function (data) {
                    loading.dismiss();
                });
            });
        });
    };
    ProfilePage.prototype.deleteItems = function () {
        var _this = this;
        if (this.selected_ids.length > 0) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.storage.get('email').then(function (val) {
                _this.email = val;
                _this.storage.get('auth_token').then(function (val) {
                    _this.auth_token = val;
                    if (_this.profile_id == undefined) {
                        _this.profile_id = _this.profile_id;
                    }
                    _this.userService.deleteDocuments(_this.email, _this.auth_token, _this.profile_id, _this.selected_ids)
                        .subscribe(function (data) {
                        if (data.success == false) {
                            console.log("get Documents:" + JSON.stringify(_this.profiles));
                        }
                        else {
                        }
                        _this.userService.deleteFolders(_this.email, _this.auth_token, _this.profile_id, _this.selected_ids)
                            .subscribe(function (data) {
                            loading_1.dismiss();
                            if (data.success == false) {
                                console.log("get Documents:" + JSON.stringify(data));
                            }
                            else {
                            }
                            _this.getDocument();
                            _this.checkbox_flag = 0;
                        }, function (data) {
                            loading_1.dismiss();
                            console.log("get Documents:" + JSON.stringify(data));
                        });
                    }, function (data) {
                        loading_1.dismiss();
                    });
                });
            });
        }
    };
    ProfilePage.prototype.selectOptions = function (myEvent) {
        var _this = this;
        var data = { 'profile_id': this.profile_id, 'parent_id': this.parent_id, 'sort_flag': this.sort_flag };
        console.log("dataaa", data);
        var popover = this.popOverCtrl.create(__WEBPACK_IMPORTED_MODULE_13__popover_popover__["a" /* PopoverContentPage */], data);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (popoverData) {
            if (popoverData == '1') {
                _this.checkbox_flag = 1;
                _this.selected_ids = [];
                console.log(_this.checkbox_flag);
            }
            else if (popoverData == 'name') {
                _this.sort_flag = popoverData;
                _this.getDocument();
            }
            else if (popoverData == 'date') {
                _this.sort_flag = popoverData;
                _this.getDocument();
            }
            else {
                _this.getDocument();
            }
        });
    };
    ProfilePage.prototype.moreOptions = function (item) {
        if (item.item_type == 'folder') {
            var actionSheet = this.actionSheetCtrl.create({
                title: item.name,
                subTitle: "",
                buttons: [
                    {
                        text: 'Share Folder',
                        handler: function () {
                        }
                    }, {
                        text: 'Rename Folder',
                        handler: function () {
                        }
                    }, {
                        text: 'Move Folder',
                        handler: function () {
                        }
                    }, {
                        text: 'Delete Folder',
                        role: 'destructive',
                        handler: function () {
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: item.name,
                subTitle: "",
                buttons: [
                    {
                        text: 'Share File',
                        handler: function () {
                        }
                    }, {
                        text: 'Rename File',
                        handler: function () {
                        }
                    }, {
                        text: 'Move File',
                        handler: function () {
                        }
                    }, {
                        text: 'Delete File',
                        role: 'destructive',
                        handler: function () {
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/profile/profile.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n      <button ion-button icon-only  class="sheet" (click)="optionSheet()"><ion-icon name="ios-more"></ion-icon></button>\n    </ion-title>\n\n    <div class="slide-box">\n\n    	<swiper [config]="config"  style="height: 100%;" class="swiper-container" *ngIf="isLoading">\n        <div class="swiper-wrapper">\n            <div class="swiper-slide" *ngFor="let item of profiles">\n              <img [src]="item.person.image_url.origin" alt="">\n              <p>{{item.person.last_name}}</p>\n            </div>\n        </div>\n        <div class="swiper-scrollbar"></div>\n      </swiper>\n\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<!-- Segment UI -->\n<ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n\n  <ion-segment-button value="edit">Edit</ion-segment-button>\n  <ion-segment-button value="document" (click)="getDocument()">Documents</ion-segment-button>\n  <ion-segment-button value="share">Share</ion-segment-button>\n\n</ion-segment>\n\n<!-- List Content -->\n<ion-content>\n  <div *ngIf="relationship==\'edit\'">\n\n    <button ion-button full outline color="secondary" class="add-category" (click)="addCategoryPage()"><ion-icon name="add"></ion-icon>Add a new category</button>\n\n    <ion-list style="margin-top: 20px;">\n        <ion-item class="list-item" *ngFor="let item of pages" (click)="onPageClick($event, item.page)">\n          <img src="assets/icon/gray/{{item.icon}}.png" item-start class="start_icon">\n            {{item.name}}<sup>{{item.sup}}</sup>\n          <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n        </ion-item>\n    </ion-list>\n\n    <ion-list style="margin-top: 30px;">\n      <ion-item class="list-item" (click)="goLinkedProductPage()">\n        <img src="assets/icon/gray/link.png" item-start class="start_icon">\n          Manage Linked Products\n        <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n<!-- Document -->\n  <div class="document" *ngIf="relationship==\'document\'">\n    <!-- Lock Slider Page -->\n      <div class="no_premium" *ngIf="this.subscription_type == \'Normal\'">\n        <img src="assets/image/plus-lock.png" alt="">\n        <h2>Upgrade to Plus</h2>\n        <p>to attach documents to your profile and more</p>\n        <button ion-button type="button" name="button" full large color="secondary" (click)="explainSlidePage()">Find out more</button>\n      </div>\n\n      <!-- Docuament Page -->\n      <div class="premium" *ngIf="this.subscription_type == \'Premium\'">\n        <div class="filter-box">\n          <ion-searchbar (ionInput)="getItems($event)" class="search-bar"></ion-searchbar>\n          <button ion-button icon-only color="secondary" (click)="selectOptions($event);" *ngIf="checkbox_flag!=1"><ion-icon name="ios-add-outline"></ion-icon></button>\n          <button ion-button icon-only color="secondary" (click)="cancelSelect();" *ngIf="checkbox_flag==1">Cancel</button>\n        </div>\n\n        <!-- <ion-list>\n          <ion-item *ngFor="let item of items">\n            {{ item }}\n          </ion-item>\n        </ion-list> -->\n\n        <!-- <div *ngIf="sort_flag == \'name\'">\n\n            <ion-alpha-scroll *ngIf="documents"\n              [listData]="documents"\n              key="name"\n              [itemTemplate]="alphaScrollItemTemplate1"\n              [currentPageClass]="currentPageClass"\n              [triggerChange]="triggerAlphaScrollChange">\n            </ion-alpha-scroll>\n\n        </div> -->\n\n        <div *ngIf="sort_flag == \'name\'">\n          <div *ngIf="checkbox_flag==1">\n            <ion-alpha-scroll *ngIf="documents"\n              [listData]="documents"\n              key="name"\n              [itemTemplate]="alphaScrollItemTemplate1"\n              [currentPageClass]="currentPageClass"\n              [triggerChange]="triggerAlphaScrollChange">\n            </ion-alpha-scroll>\n          </div>\n          <div *ngIf="checkbox_flag!=1">\n            <ion-alpha-scroll *ngIf="documents"\n              [listData]="documents"\n              key="name"\n              [itemTemplate]="alphaScrollItemTemplate"\n              [currentPageClass]="currentPageClass"\n              [triggerChange]="triggerAlphaScrollChange">\n            </ion-alpha-scroll>\n          </div>\n        </div>\n\n        <div *ngIf="sort_flag == \'date\'">\n          <div *ngIf="checkbox_flag!=1">\n            <div *ngFor="let header of date_month">\n              <div class="item-header">{{header}}</div>\n              <div class="item-div" *ngFor="let item of date_documents_array[header]">\n                <ion-item (click)="currentPageClass.onItemClick(item)">\n                  <ion-icon item-left *ngIf="item.item_type==\'folder\'" name="ios-folder-outline" class="icon-style"></ion-icon>\n                  <ion-icon item-left *ngIf="item.media_type==\'image\'" name="ios-image-outline" class="icon-style"></ion-icon>\n                  <ion-icon item-left *ngIf="item.media_type==\'video\'" name="ios-videocam-outline" class="icon-style"></ion-icon>\n                  <ion-icon item-left *ngIf="item.media_type==\'document\'" name="ios-document-outline" class="icon-style"></ion-icon>\n                  <h2 style="font-size:5vw;">{{item.name}}</h2><p>{{item.file_size}}</p>\n                  <ion-icon name="ios-arrow-dropdown-outline" item-right (click)="currentPageClass.moreOptions(item);"></ion-icon>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf="checkbox_flag==1">\n            <div *ngFor="let header of date_month">\n              <div class="item-header">{{header}}</div>\n              <div class="item-div" *ngFor="let item of date_documents_array[header]">\n                <ion-checkbox item-left (ionChange)="currentPageClass.check1(item.id);"></ion-checkbox>\n                <ion-item (click)="currentPageClass.onItemClick(item)">\n                  <ion-icon item-left *ngIf="item.item_type==\'folder\'" name="ios-folder-outline" class="icon-style"></ion-icon>\n                  <ion-icon item-left *ngIf="item.media_type==\'image\'" name="ios-image-outline" class="icon-style"></ion-icon>\n                  <ion-icon item-left *ngIf="item.media_type==\'video\'" name="ios-videocam-outline" class="icon-style"></ion-icon>\n                  <ion-icon item-left *ngIf="item.media_type==\'document\'" name="ios-document-outline" class="icon-style"></ion-icon>\n                  <h2 style="font-size:5vw;">{{item.name}}</h2><p>{{item.file_size}}</p>\n                  <ion-icon name="ios-arrow-dropdown-outline" item-right (click)="currentPageClass.moreOptions(item);"></ion-icon>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <button color="danger" ion-button icon-only class="delete-btn" *ngIf="checkbox_flag==1" (click)="deleteItems();">\n        <ion-icon name="ios-trash"></ion-icon>\n      </button>\n  </div>\n\n<!-- Share -->\n  <div class="share" *ngIf="relationship==\'share\'">\n    <ion-list class="input_box">\n\n      <ion-item class="item_block">\n        <ion-label stacked class="title">Email your profile to:</ion-label>\n        <ion-input type="email" placeholder="sample@example.com"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>Message (optional):</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>Set Password (optional):</ion-label>\n        <ion-input type="text" placeholder="optional"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>Saet Expiration</ion-label>\n        <ion-input type="text" placeholder="Never"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button block large color="secondary" class="send"><img src="assets/icon/white/send.png">Send</button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list style="margin-top: 30px;">\n\n      <ion-item class="list-item" (click)="goManageSharingPage()">\n        <img src="assets/icon/gray/link.png" item-start class="start_icon" style="margin-left: 16px;">\n          Manage Sharing\n        <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_20__providers_user_service__["a" /* UserService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_country_service__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PersonalInfoPage = (function () {
    function PersonalInfoPage(navCtrl, navParams, alertCtrl, loadingCtrl, actionSheet, camera, crop, fileTransfer, file, storage, userService, baseService, countryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheet = actionSheet;
        this.camera = camera;
        this.crop = crop;
        this.fileTransfer = fileTransfer;
        this.file = file;
        this.storage = storage;
        this.userService = userService;
        this.baseService = baseService;
        this.countryService = countryService;
        this.person = {};
        this.address = {};
        this.imagePath = '';
        this.genders = [{ title: "Female", value: "female" },
            { title: "Male", value: "male" }];
        this.hairs = [{ color: "Black", value: "Black" }, { color: "Brown", value: "Brown" }, { color: "Alonde", value: "Alonde" },
            { color: "Auburn", value: "Auburn" }, { color: "Red", value: "Red" }, { color: "Gray", value: "Grey" },
            { color: "White", value: "White" }, { color: "Chestnut", value: "Chestnut" }, { color: "No Hair", value: "Bald" }];
        this.eyes = [{ color: "Brown", value: "Brown" }, { color: "Gray", value: "Gray" }, { color: "Green", value: "Green" }, { color: "Hazel", value: "Hezel" },
            { color: "Red", value: "Red" }, { color: "Violet", value: "Violet" }, { color: "Blue", value: "Blue" }, { color: "Other", value: "Other" }];
        this.bloods = [{ type: "O+", value: "O+" }, { type: "O-", value: "O-" }, { type: "A+", value: "A+" }, { type: "A-", value: "A-" },
            { type: "B+", value: "B+" }, { type: "B-", value: "B-" }, { type: "AB+", value: "AB+" }, { type: "AB-", value: "AB-" }];
        this.donors = [{ title: "Yes", value: true }, { title: "No", value: false }];
        this.countries = this.countryService.countries;
        this.profile_id = navParams.get("profile_id");
        console.log(this.profile_id);
    }
    PersonalInfoPage.prototype.ionViewWillEnter = function () {
        this.getData(this.profile_id);
    };
    PersonalInfoPage.prototype.getData = function (profile_id) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var endValue = "/preview";
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.getPersonalProfiles(_this.auth_token, _this.email, profile_id)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        console.log(data);
                        _this.person = data.profile.person;
                        _this.address = data.profile.address;
                        _this.imagePath = data.profile.image_url.thumb;
                    }
                }, function (data) {
                    loading.dismiss();
                    console.log('internet Fails');
                });
            });
        });
    };
    PersonalInfoPage.prototype.getPicture = function () {
        var _this = this;
        console.log("getPicture");
        var buttonLabels = ['Photo Library', 'Camera'];
        this.actionSheet
            .show({
            title: 'Source Library',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            destructiveButtonLast: true
        })
            .then(function (buttonIndex) {
            switch (buttonIndex) {
                case 1:
                    var options = {
                        destinationType: _this.camera.DestinationType.FILE_URI,
                        encodingType: _this.camera.EncodingType.JPEG,
                        mediaType: _this.camera.MediaType.PICTURE,
                        sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                    };
                    _this.camera.getPicture(options).then(function (imageData) {
                        _this.crop.crop(imageData, { quality: 75 })
                            .then(function (newImage) {
                            console.log('NewImage', newImage);
                            _this.imagePath = newImage;
                            _this.updatePhoto();
                        }, function (error) { return console.error('Error cropping image', JSON.stringify(error)); });
                    }, function (err) {
                        alert(JSON.stringify(err));
                    });
                    break;
                case 2:
                    var options1 = {
                        destinationType: _this.camera.DestinationType.FILE_URI,
                        encodingType: _this.camera.EncodingType.JPEG,
                        sourceType: _this.camera.PictureSourceType.CAMERA,
                    };
                    _this.camera.getPicture(options1).then(function (imageData) {
                        _this.crop.crop(imageData, { quality: 75 })
                            .then(function (newImage) {
                            console.log('NewImage', newImage);
                            _this.imagePath = newImage;
                            _this.updatePhoto();
                        }, function (error) { return console.error('Error cropping image', error); });
                    }, function (err) {
                        alert(JSON.stringify(err));
                    });
                    break;
                default:
                    break;
            }
        });
    };
    PersonalInfoPage.prototype.updatePhoto = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        if (this.imagePath) {
            var filename = this.imagePath.split('/').pop();
            var options = {
                fileKey: "profile[image]",
                fileName: filename,
                chunkedMode: false,
                httpMethod: "PUT",
                mimeType: "image/jpg",
                headers: { 'auth_token': this.auth_token, 'email': this.email }
            };
            var fileTransfer = this.fileTransfer.create();
            fileTransfer.upload(this.imagePath, this.baseService.createProfileUrl + "/" + this.person.id, options).then(function (entry) {
                console.log("url: " + _this.baseService.createProfileUrl + "/" + _this.person.id);
                if (JSON.stringify(entry).indexOf("error_code") == -1) {
                    _this.person.image_url.thumb = _this.imagePath;
                    loading.dismiss();
                }
                else {
                    loading.dismiss();
                    console.log("success:" + JSON.stringify(entry));
                }
            }, function (err) {
                loading.dismiss();
                console.log("failed:" + JSON.stringify(err));
            });
        }
    };
    PersonalInfoPage.prototype.personalDataUpdate = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        console.log(this.person.birth_date);
        var body = { "id": this.person.id, "profile": {
                "first_name": this.person.first_name,
                "middle_name": this.person.middle_name,
                "last_name": this.person.last_name,
                "phone_number": this.person.phone_number,
                "birth_date": this.person.birth_date,
                "gender": this.person.gender,
                "hair": this.person.hair,
                "eye_color": this.person.eye_color,
                "height": this.person.height,
                "weight": this.person.weight,
                "blood_type": this.person.blood_type,
                "donor": this.person.donor
            }
        };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.person.id, "", body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("PersonalInfo Data: ", data);
                    if (data.success == false) {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_2.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        console.log(data);
                        _this.updateAddress();
                    }
                });
            });
        });
    };
    PersonalInfoPage.prototype.updateAddress = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/address";
        var body = { "id": this.address.id, "address": {
                "line1": this.address.line1, "line2": this.address.line2,
                "city": this.address.city, "state": this.address.state,
                "country": this.address.country, "zip": this.address.zip
            } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Address Data: ", data);
                    if (data.success == false) {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        // this.flagService.setChangedFlag(true);
                        var alert_4 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                        });
                        alert_4.present();
                        console.log(data);
                        _this.navCtrl.pop();
                    }
                });
            });
        });
    };
    PersonalInfoPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return PersonalInfoPage;
}());
PersonalInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-personal-info',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/personal-info/personal-info.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn" style="right: 0px;" (click)="personalDataUpdate()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img [src]="imagePath"  alt="" onError="this.src=\'assets/image/default.png\';">\n        <p class="name">{{person.last_name}}</p>\n      </div>\n      <p class="view_title">Personal Information</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-clr">\n\n  <div class="profile_section">\n    <img [src]="imagePath"  alt="" onError="this.src=\'assets/image/default.png\';">\n    <button ion-button name="button" color="secondary" class="clange_photo" (click)="getPicture()"><ion-icon name="md-add"></ion-icon></button>\n      <ion-list class="list_view">\n\n        <ion-item>\n          <ion-label>First Name</ion-label>\n          <ion-input type="text" [(ngModel)]="person.first_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Second Name</ion-label>\n          <ion-input type="text" [(ngModel)]="person.middle_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Last Name</ion-label>\n          <ion-input type="text" [(ngModel)]="person.last_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Phone Number</ion-label>\n          <ion-input type="tel" [(ngModel)]="person.phone_number"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Birthdate</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MMM/DD/YYYY" [(ngModel)]="person.birth_date"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Gender</ion-label>\n          <ion-select [(ngModel)]="person.gender" class="edit-select">\n            <ion-option *ngFor="let gender of genders" [value]="gender.value">{{gender.title}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Hair</ion-label>\n          <ion-select [(ngModel)]="person.hair" class="edit-select">\n            <ion-option *ngFor="let hair of hairs" [value]="hair.value">{{hair.color}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Eye Color</ion-label>\n          <ion-select [(ngModel)]="person.eye_color" class="edit-select">\n            <ion-option *ngFor="let eye of eyes" [value]="eye.value">{{eye.color}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Height</ion-label>\n          <ion-input type="text" [(ngModel)]="person.height"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Weight</ion-label>\n          <ion-input type="text" [(ngModel)]="person.weight"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Blood Type</ion-label>\n          <ion-select [(ngModel)]="person.blood_type" class="edit-select" >\n            <ion-option *ngFor="let blood of bloods" [value]="blood.value">{{blood.type}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Organ Donor</ion-label>\n          <ion-select [(ngModel)]="person.donor" class="edit-select">\n            <ion-option *ngFor="let donor of donors" [value]="donor.value">{{donor.title}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Address Line 1</ion-label>\n          <ion-input type="text" [(ngModel)]="address.line1"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Address Line 2</ion-label>\n          <ion-input type="text" [(ngModel)]="address.line2"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>City</ion-label>\n          <ion-input type="text" [(ngModel)]="address.city"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>State/Province</ion-label>\n          <ion-input type="text" [(ngModel)]="address.state"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Zip</ion-label>\n          <ion-input type="text" [(ngModel)]="address.zip"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Country</ion-label>\n          <ion-input style="text-transform:uppercase" type="text" [(ngModel)]="address.country"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/personal-info/personal-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_action_sheet__["a" /* ActionSheet */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__["a" /* Crop */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_9__providers_base_service__["a" /* BaseService */],
        __WEBPACK_IMPORTED_MODULE_10__providers_country_service__["a" /* CountryService */]])
], PersonalInfoPage);

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        console.log('Hello BaseService Provider');
        this.countries = [{ name: "United States", dial_code: "+1", code: "US" }, { name: "Afghanistan", dial_code: "+93", code: "AF" },
            { name: "Albania", dial_code: "+355", code: "AL" },
            { name: "Algeria", dial_code: "+213", code: "DZ" },
            { name: "AmericanSamoa", dial_code: "+1 684", code: "AS" },
            { name: "Andorra", dial_code: "+376", code: "AD" },
            { name: "Angola", dial_code: "+244", code: "AO" },
            { name: "Anguilla", dial_code: "+1 264", code: "AI" },
            { name: "Antigua and Barbuda", dial_code: "+1268", code: "AG" },
            { name: "Argentina", dial_code: "+54", code: "AR" },
            { name: "Armenia", dial_code: "+374", code: "AM" },
            { name: "Aruba", dial_code: "+297", code: "AW" },
            { name: "Australia", dial_code: "+61", code: "AU" },
            { name: "Austria", dial_code: "+43", code: "AT" },
            { name: "Azerbaijan", dial_code: "+994", code: "AZ" },
            { name: "Bahamas", dial_code: "+1 242", code: "BS" },
            { name: "Bahrain", dial_code: "+973", code: "BH" },
            { name: "Bangladesh", dial_code: "+880", code: "BD" },
            { name: "Barbados", dial_code: "+1 246", code: "BB" },
            { name: "Belarus", dial_code: "+375", code: "BY" },
            { name: "Belgium", dial_code: "+32", code: "BE" },
            { name: "Belize", dial_code: "+501", code: "BZ" },
            { name: "Benin", dial_code: "+229", code: "BJ" },
            { name: "Bermuda", dial_code: "+1 441", code: "BM" },
            { name: "Bhutan", dial_code: "+975", code: "BT" },
            { name: "Bosnia and Herzegovina", dial_code: "+387", code: "BA" },
            { name: "Botswana", dial_code: "+267", code: "BW" },
            { name: "Brazil", dial_code: "+55", code: "BR" },
            { name: "British Indian Ocean Territory", dial_code: "+246", code: "IO" },
            { name: "Bulgaria", dial_code: "+359", code: "BG" },
            { name: "Burkina Faso", dial_code: "+226", code: "BF" },
            { name: "Burundi", dial_code: "+257", code: "BI" },
            { name: "Cambodia", dial_code: "+855", code: "KH" },
            { name: "Cameroon", dial_code: "+237", code: "CM" },
            { name: "Canada", dial_code: "+1", code: "CA" },
            { name: "Cape Verde", dial_code: "+238", code: "CV" },
            { name: "Cayman Islands", dial_code: "+ 345", code: "KY" },
            { name: "Central African Republic", dial_code: "+236", code: "CF" },
            { name: "Chad", dial_code: "+235", code: "TD" },
            { name: "Chile", dial_code: "+56", code: "CL" },
            { name: "China", dial_code: "+86", code: "CN" },
            { name: "Christmas Island", dial_code: "+61", code: "CX" },
            { name: "Colombia", dial_code: "+57", code: "CO" },
            { name: "Comoros", dial_code: "+269", code: "KM" },
            { name: "Congo", dial_code: "+242", code: "CG" },
            { name: "Cook Islands", dial_code: "+682", code: "CK" },
            { name: "Costa Rica", dial_code: "+506", code: "CR" },
            { name: "Croatia", dial_code: "+385", code: "HR" },
            { name: "Cuba", dial_code: "+53", code: "CU" },
            { name: "Cyprus", dial_code: "+537", code: "CY" },
            { name: "Czech Republic", dial_code: "+420", code: "CZ" },
            { name: "Denmark", dial_code: "+45", code: "DK" },
            { name: "Djibouti", dial_code: "+253", code: "DJ" },
            { name: "Dominica", dial_code: "+1 767", code: "DM" },
            { name: "Dominican Republic", dial_code: "+1 849", code: "DO" },
            { name: "Ecuador", dial_code: "+593", code: "EC" },
            { name: "Egypt", dial_code: "+20", code: "EG" },
            { name: "El Salvador", dial_code: "+503", code: "SV" },
            { name: "Equatorial Guinea", dial_code: "+240", code: "GQ" },
            { name: "Eritrea", dial_code: "+291", code: "ER" },
            { name: "Estonia", dial_code: "+372", code: "EE" },
            { name: "Ethiopia", dial_code: "+251", code: "ET" },
            { name: "Faroe Islands", dial_code: "+298", code: "FO" },
            { name: "Fiji", dial_code: "+679", code: "FJ" },
            { name: "Finland", dial_code: "+358", code: "FI" },
            { name: "France", dial_code: "+33", code: "FR" },
            { name: "French Guiana", dial_code: "+594", code: "GF" },
            { name: "French Polynesia", dial_code: "+689", code: "PF" },
            { name: "Gabon", dial_code: "+241", code: "GA" },
            { name: "Gambia", dial_code: "+220", code: "GM" },
            { name: "Georgia", dial_code: "+995", code: "GE" },
            { name: "Germany", dial_code: "+49", code: "DE" },
            { name: "Ghana", dial_code: "+233", code: "GH" },
            { name: "Gibraltar", dial_code: "+350", code: "GI" },
            { name: "Greece", dial_code: "+30", code: "GR" },
            { name: "Greenland", dial_code: "+299", code: "GR" },
            { name: "Grenada", dial_code: "+1 473", code: "GD" },
            { name: "Guadeloupe", dial_code: "+590", code: "GP" },
            { name: "Guam", dial_code: "+1 671", code: "GU" },
            { name: "Guatemala", dial_code: "+502", code: "GT" },
            { name: "Guinea", dial_code: "+224", code: "GN" },
            { name: "Guinea-Bissau", dial_code: "+245", code: "GW" },
            { name: "Guyana", dial_code: "+595", code: "GY" },
            { name: "Haiti", dial_code: "+509", code: "HT" },
            { name: "Honduras", dial_code: "+504", code: "HN" },
            {
                name: "Hungary",
                dial_code: "+36",
                code: "HU"
            }, {
                name: "Iceland",
                dial_code: "+354",
                code: "IS"
            }, {
                name: "India",
                dial_code: "+91",
                code: "IN"
            }, {
                name: "Indonesia",
                dial_code: "+62",
                code: "ID"
            }, {
                name: "Iraq",
                dial_code: "+964",
                code: "IQ"
            }, {
                name: "Ireland",
                dial_code: "+353",
                code: "IE"
            }, {
                name: "Israel",
                dial_code: "+972",
                code: "IL"
            }, {
                name: "Italy",
                dial_code: "+39",
                code: "IT"
            }, {
                name: "Jamaica",
                dial_code: "+1 876",
                code: "JM"
            }, {
                name: "Japan",
                dial_code: "+81",
                code: "JP"
            }, {
                name: "Jordan",
                dial_code: "+962",
                code: "JO"
            }, {
                name: "Kazakhstan",
                dial_code: "+7 7",
                code: "KZ"
            }, {
                name: "Kenya",
                dial_code: "+254",
                code: "KE"
            }, {
                name: "Kiribati",
                dial_code: "+686",
                code: "KI"
            }, {
                name: "Kuwait",
                dial_code: "+965",
                code: "KW"
            }, {
                name: "Kyrgyzstan",
                dial_code: "+996",
                code: "KG"
            }, {
                name: "Latvia",
                dial_code: "+371",
                code: "LV"
            }, {
                name: "Lebanon",
                dial_code: "+961",
                code: "LB"
            }, {
                name: "Lesotho",
                dial_code: "+266",
                code: "LS"
            }, {
                name: "Liberia",
                dial_code: "+231",
                code: "LR"
            }, {
                name: "Liechtenstein",
                dial_code: "+423",
                code: "LI"
            }, {
                name: "Lithuania",
                dial_code: "+370",
                code: "LT"
            }, {
                name: "Luxembourg",
                dial_code: "+352",
                code: "LU"
            }, {
                name: "Madagascar",
                dial_code: "+261",
                code: "MG"
            }, {
                name: "Malawi",
                dial_code: "+265",
                code: "MW"
            }, {
                name: "Malaysia",
                dial_code: "+60",
                code: "MY"
            }, {
                name: "Maldives",
                dial_code: "+960",
                code: "MV"
            }, {
                name: "Mali",
                dial_code: "+223",
                code: "ML"
            }, {
                name: "Malta",
                dial_code: "+356",
                code: "MT"
            }, {
                name: "Marshall Islands",
                dial_code: "+692",
                code: "MH"
            }, {
                name: "Martinique",
                dial_code: "+596",
                code: "MQ"
            }, {
                name: "Mauritania",
                dial_code: "+222",
                code: "MR"
            }, {
                name: "Mauritius",
                dial_code: "+230",
                code: "MU"
            }, {
                name: "Mayotte",
                dial_code: "+262",
                code: "YT"
            }, {
                name: "Mexico",
                dial_code: "+52",
                code: "MX"
            }, {
                name: "Monaco",
                dial_code: "+377",
                code: "MC"
            }, {
                name: "Mongolia",
                dial_code: "+976",
                code: "MN"
            }, {
                name: "Montenegro",
                dial_code: "+382",
                code: "ME"
            }, {
                name: "Montserrat",
                dial_code: "+1664",
                code: "MS"
            }, {
                name: "Morocco",
                dial_code: "+212",
                code: "MA"
            }, {
                name: "Myanmar",
                dial_code: "+95",
                code: "MM"
            }, {
                name: "Namibia",
                dial_code: "+264",
                code: "NA"
            }, {
                name: "Nauru",
                dial_code: "+674",
                code: "NR"
            }, {
                name: "Nepal",
                dial_code: "+977",
                code: "NP"
            }, {
                name: "Netherlands",
                dial_code: "+31",
                code: "NL"
            }, {
                name: "Netherlands Antilles",
                dial_code: "+599",
                code: "AN"
            }, {
                name: "New Caledonia",
                dial_code: "+687",
                code: "NC"
            }, {
                name: "New Zealand",
                dial_code: "+64",
                code: "NZ"
            }, {
                name: "Nicaragua",
                dial_code: "+505",
                code: "NI"
            }, {
                name: "Niger",
                dial_code: "+227",
                code: "NE"
            }, {
                name: "Nigeria",
                dial_code: "+234",
                code: "NG"
            }, {
                name: "Niue",
                dial_code: "+683",
                code: "NU"
            }, {
                name: "Norfolk Island",
                dial_code: "+672",
                code: "NF"
            }, {
                name: "Northern Mariana Islands",
                dial_code: "+1 670",
                code: "MP"
            }, {
                name: "Norway",
                dial_code: "+47",
                code: "NO"
            }, {
                name: "Oman",
                dial_code: "+968",
                code: "OM"
            }, {
                name: "Pakistan",
                dial_code: "+92",
                code: "PK"
            }, {
                name: "Palau",
                dial_code: "+680",
                code: "PW"
            }, {
                name: "Panama",
                dial_code: "+507",
                code: "PA"
            }, {
                name: "Papua New Guinea",
                dial_code: "+675",
                code: "PG"
            }, {
                name: "Paraguay",
                dial_code: "+595",
                code: "PY"
            }, {
                name: "Peru",
                dial_code: "+51",
                code: "PE"
            }, {
                name: "Philippines",
                dial_code: "+63",
                code: "PH"
            }, {
                name: "Poland",
                dial_code: "+48",
                code: "PL"
            }, {
                name: "Portugal",
                dial_code: "+351",
                code: "PT"
            }, {
                name: "Puerto Rico",
                dial_code: "+1 939",
                code: "PR"
            }, {
                name: "Qatar",
                dial_code: "+974",
                code: "QA"
            }, {
                name: "Romania",
                dial_code: "+40",
                code: "RO"
            }, {
                name: "Rwanda",
                dial_code: "+250",
                code: "RW"
            }, {
                name: "Samoa",
                dial_code: "+685",
                code: "WS"
            }, {
                name: "San Marino",
                dial_code: "+378",
                code: "SM"
            }, {
                name: "Saudi Arabia",
                dial_code: "+966",
                code: "SA"
            }, {
                name: "Senegal",
                dial_code: "+221",
                code: "SN"
            }, {
                name: "Serbia",
                dial_code: "+381",
                code: "RS"
            }, {
                name: "Seychelles",
                dial_code: "+248",
                code: "SC"
            }, {
                name: "Sierra Leone",
                dial_code: "+232",
                code: "SL"
            }, {
                name: "Singapore",
                dial_code: "+65",
                code: "SG"
            }, {
                name: "Slovakia",
                dial_code: "+421",
                code: "SK"
            }, {
                name: "Slovenia",
                dial_code: "+386",
                code: "SI"
            }, {
                name: "Solomon Islands",
                dial_code: "+677",
                code: "SB"
            }, {
                name: "South Africa",
                dial_code: "+27",
                code: "ZA"
            }, {
                name: "South Georgia and the South Sandwich Islands",
                dial_code: "+500",
                code: "GS"
            }, {
                name: "Spain",
                dial_code: "+34",
                code: "ES"
            }, {
                name: "Sri Lanka",
                dial_code: "+94",
                code: "LK"
            }, {
                name: "Sudan",
                dial_code: "+249",
                code: "SD"
            }, {
                name: "Suriname",
                dial_code: "+597",
                code: "SR"
            }, {
                name: "Swaziland",
                dial_code: "+268",
                code: "SZ"
            }, {
                name: "Sweden",
                dial_code: "+46",
                code: "SE"
            }, {
                name: "Switzerland",
                dial_code: "+41",
                code: "CH"
            }, {
                name: "Tajikistan",
                dial_code: "+992",
                code: "TJ"
            }, {
                name: "Thailand",
                dial_code: "+66",
                code: "TH"
            }, {
                name: "Togo",
                dial_code: "+228",
                code: "TG"
            }, {
                name: "Tokelau",
                dial_code: "+690",
                code: "TK"
            }, {
                name: "Tonga",
                dial_code: "+676",
                code: "TO"
            }, {
                name: "Trinidad and Tobago",
                dial_code: "+1 868",
                code: "TT"
            }, {
                name: "Tunisia",
                dial_code: "+216",
                code: "TN"
            }, {
                name: "Turkey",
                dial_code: "+90",
                code: "TR"
            }, {
                name: "Turkmenistan",
                dial_code: "+993",
                code: "TM"
            }, {
                name: "Turks and Caicos Islands",
                dial_code: "+1 649",
                code: "TC"
            }, {
                name: "Tuvalu",
                dial_code: "+688",
                code: "TV"
            }, {
                name: "Uganda",
                dial_code: "+256",
                code: "UG"
            }, {
                name: "Ukraine",
                dial_code: "+380",
                code: "UA"
            }, {
                name: "United Arab Emirates",
                dial_code: "+971",
                code: "AE"
            }, {
                name: "United Kingdom",
                dial_code: "+44",
                code: "GB"
            }, {
                name: "Uruguay",
                dial_code: "+598",
                code: "UY"
            }, {
                name: "Uzbekistan",
                dial_code: "+998",
                code: "UZ"
            }, {
                name: "Vanuatu",
                dial_code: "+678",
                code: "VU"
            }, {
                name: "Wallis and Futuna",
                dial_code: "+681",
                code: "WF"
            }, {
                name: "Yemen",
                dial_code: "+967",
                code: "YE"
            }, {
                name: "Zambia",
                dial_code: "+260",
                code: "ZM"
            }, {
                name: "Zimbabwe",
                dial_code: "+263",
                code: "ZW"
            }, {
                name: "land Islands",
                dial_code: "",
                code: "AX"
            }, {
                name: "Antarctica",
                dial_code: null,
                code: "AQ"
            }, {
                name: "Bolivia, Plurinational State of",
                dial_code: "+591",
                code: "BO"
            }, {
                name: "Brunei Darussalam",
                dial_code: "+673",
                code: "BN"
            }, {
                name: "Cocos (Keeling) Islands",
                dial_code: "+61",
                code: "CC"
            }, {
                name: "Congo, The Democratic Republic of the",
                dial_code: "+243",
                code: "CD"
            }, {
                name: "Cote d'Ivoire",
                dial_code: "+225",
                code: "CI"
            }, {
                name: "Falkland Islands (Malvinas)",
                dial_code: "+500",
                code: "FK"
            }, {
                name: "Guernsey",
                dial_code: "+44",
                code: "GG"
            }, {
                name: "Holy See (Vatican City State)",
                dial_code: "+379",
                code: "VA"
            }, {
                name: "Hong Kong",
                dial_code: "+852",
                code: "HK"
            }, {
                name: "Iran, Islamic Republic of",
                dial_code: "+98",
                code: "IR"
            }, {
                name: "Isle of Man",
                dial_code: "+44",
                code: "IM"
            }, {
                name: "Jersey",
                dial_code: "+44",
                code: "JE"
            }, {
                name: "Korea, Democratic People's Republic of",
                dial_code: "+850",
                code: "KP"
            }, {
                name: "Korea, Republic of",
                dial_code: "+82",
                code: "KR"
            }, {
                name: "Lao People's Democratic Republic",
                dial_code: "+856",
                code: "LA"
            }, {
                name: "Libyan Arab Jamahiriya",
                dial_code: "+218",
                code: "LY"
            }, {
                name: "Macao",
                dial_code: "+853",
                code: "MO"
            }, {
                name: "Macedonia, The Former Yugoslav Republic of",
                dial_code: "+389",
                code: "MK"
            }, {
                name: "Micronesia, Federated States of",
                dial_code: "+691",
                code: "FM"
            }, {
                name: "Moldova, Republic of",
                dial_code: "+373",
                code: "MD"
            }, {
                name: "Mozambique",
                dial_code: "+258",
                code: "MZ"
            }, {
                name: "Palestinian Territory, Occupied",
                dial_code: "+970",
                code: "PS"
            }, {
                name: "Pitcairn",
                dial_code: "+872",
                code: "PN"
            }, {
                name: "Réunion",
                dial_code: "+262",
                code: "RE"
            }, {
                name: "Russia",
                dial_code: "+7",
                code: "RU"
            }, {
                name: "Saint Barthélemy",
                dial_code: "+590",
                code: "BL"
            }, {
                name: "Saint Helena, Ascension and Tristan Da Cunha",
                dial_code: "+290",
                code: "SH"
            }, {
                name: "Saint Kitts and Nevis",
                dial_code: "+1 869",
                code: "KN"
            }, {
                name: "Saint Lucia",
                dial_code: "+1 758",
                code: "LC"
            }, {
                name: "Saint Martin",
                dial_code: "+590",
                code: "MF"
            }, {
                name: "Saint Pierre and Miquelon",
                dial_code: "+508",
                code: "PM"
            }, {
                name: "Saint Vincent and the Grenadines",
                dial_code: "+1 784",
                code: "VC"
            }, {
                name: "Sao Tome and Principe",
                dial_code: "+239",
                code: "ST"
            }, {
                name: "Somalia",
                dial_code: "+252",
                code: "SO"
            }, {
                name: "Svalbard and Jan Mayen",
                dial_code: "+47",
                code: "SJ"
            }, {
                name: "Syrian Arab Republic",
                dial_code: "+963",
                code: "SY"
            }, {
                name: "Taiwan, Province of China",
                dial_code: "+886",
                code: "TW"
            }, {
                name: "Tanzania, United Republic of",
                dial_code: "+255",
                code: "TZ"
            }, {
                name: "Timor-Leste",
                dial_code: "+670",
                code: "TL"
            }, {
                name: "Venezuela, Bolivarian Republic of",
                dial_code: "+58",
                code: "VE"
            }, {
                name: "Viet Nam",
                dial_code: "+84",
                code: "VN"
            }, {
                name: "Virgin Islands, British",
                dial_code: "+1 284",
                code: "VG"
            }, {
                name: "Virgin Islands, U.S.",
                dial_code: "+1 340",
                code: "VI"
            }];
    }
    return CountryService;
}());
CountryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CountryService);

//# sourceMappingURL=country-service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitalMedicalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vital_edit_vital_edit__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VitalMedicalPage = (function () {
    function VitalMedicalPage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
        this.email = "";
        this.auth_token = "";
    }
    VitalMedicalPage.prototype.ngOnInit = function () {
        this.flagService.setChangedFlag(false);
        this.gettingdata();
    };
    VitalMedicalPage.prototype.ionViewDidEnter = function () {
        if (this.flagService.getChangedFlag()) {
            this.gettingdata();
        }
    };
    VitalMedicalPage.prototype.gettingdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/vital_medical_conditions";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        console.log("Vital Data", data);
                        _this.vitalData = data.vital_medical_conditions;
                        //  this.updated = data.last_updated_at;
                        //  console.log(this.updated);
                    }
                });
            });
        });
    };
    VitalMedicalPage.prototype.createVitalData = function () {
        console.log('go VitalCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__vital_edit_vital_edit__["a" /* VitalEditPage */], { save: 'save', profile_id: this.profile_id });
        profileModal.present();
    };
    VitalMedicalPage.prototype.editVitalData = function (event, vitalData) {
        console.log('go VitalEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vital_edit_vital_edit__["a" /* VitalEditPage */], { edit: 'edit', vitalData: vitalData, profile_id: this.profile_id });
    };
    VitalMedicalPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return VitalMedicalPage;
}());
VitalMedicalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-vital-medical',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/vital-medical/vital-medical.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createVitalData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Vital Medital Conditions</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="">\n    <ion-card class="data-list" *ngFor="let item of vitalData">\n      <ion-item (click)="editVitalData($event, item)" >\n          <ion-row>\n              <ion-col col-12 style="color: gray;">Name</ion-col>\n              <ion-col col-12 class="data-des">{{item.name}}</ion-col>\n          </ion-row>\n\n      </ion-item>\n      <button ion-button clear item-end class="sheet-btn"><ion-icon name="md-more"></ion-icon></button>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/vital-medical/vital-medical.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_flag__["a" /* Flags */]])
], VitalMedicalPage);

//# sourceMappingURL=vital-medical.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitalEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VitalEditPage = (function () {
    function VitalEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.vitalData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        console.log(this.save);
        if (navParams.get("vitalData") != null) {
            this.vitalData = navParams.get("vitalData");
        }
        console.log(this.vitalData);
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    VitalEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteVitalData();
                    }
                }
            ]
        });
        alert.present();
    };
    VitalEditPage.prototype.deleteVitalData = function () {
        var _this = this;
        console.log('deleteVitalData');
        var loading = this.loadingCtrl.create();
        var endValue = "/vital_medical_conditions/" + this.vitalData.id;
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataDelete(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Delete Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_2 = _this.alertCtrl.create({
                            title: "Deleted", subTitle: "Delete Success", buttons: ['OK']
                        });
                        alert_2.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    VitalEditPage.prototype.updateVitalData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/vital_medical_conditions/" + this.vitalData.id;
        console.log(this.vitalData.is_private.toString());
        var body = { "id": this.vitalData.id, "vital_medical_condition": { "name": this.vitalData.name, "notes": this.vitalData.notes, "is_private": this.vitalData.is_private.toString() } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_4 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    VitalEditPage.prototype.createVitalData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/vital_medical_conditions";
        console.log(this.vitalData.is_private);
        var body = { "vital_medical_condition": { "name": this.vitalData.name, "notes": this.vitalData.notes, "is_private": this.vitalData.is_private } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataCreate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_5 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Create Error", buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_6 = _this.alertCtrl.create({
                            title: "Created", subTitle: "Create Success", buttons: ['OK']
                        });
                        alert_6.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    VitalEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return VitalEditPage;
}());
VitalEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-vital-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/vital-edit/vital-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Vital Condition\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createVitalData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateVitalData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/warning.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Name of condition" [(ngModel)]="vitalData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="vitalData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-input type="text" placeholder="Enter Notes" [(ngModel)]="vitalData.notes"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <button  *ngIf="!save" ion-button class="pdf" outline full>\n      <img src="assets/icon/gray/document-lines.png" alt="" class="">\n      <p>medical_document.pdg</p>\n      <ion-icon name="arrow-dropdown" item-end></ion-icon>\n    </button>\n\n    <button ion-button color="light" outline full large style="color: #00d59c;"><ion-icon name="attach" style="margin-right: 10px;"></ion-icon>Attach Document</button>\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Vital Condition</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/vital-edit/vital-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], VitalEditPage);

//# sourceMappingURL=vital-edit.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emergency_edit_emergency_edit__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmergencyPage = (function () {
    function EmergencyPage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
        this.email = "";
        this.auth_token = "";
    }
    EmergencyPage.prototype.ngOnInit = function () {
        this.flagService.setChangedFlag(false);
        this.gettingdata();
    };
    EmergencyPage.prototype.ionViewDidEnter = function () {
        if (this.flagService.getChangedFlag()) {
            this.gettingdata();
        }
    };
    EmergencyPage.prototype.gettingdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/emergency_contacts ";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Emergency Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.emergencyData = data.emergency_contacts;
                    }
                });
            });
        });
    };
    EmergencyPage.prototype.createEmergencyData = function () {
        console.log('go EmergencyCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__emergency_edit_emergency_edit__["a" /* EmergencyEditPage */], { save: 'save', profile_id: this.profile_id });
        profileModal.present();
    };
    EmergencyPage.prototype.editEmergencyData = function (event, emergencyData) {
        console.log('go EmergencyEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__emergency_edit_emergency_edit__["a" /* EmergencyEditPage */], { edit: 'edit', emergencyData: emergencyData, profile_id: this.profile_id });
    };
    EmergencyPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return EmergencyPage;
}());
EmergencyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-emergency',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/emergency/emergency.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createEmergencyData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Emergency Contacts</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="">\n    <ion-card class="data-list" *ngFor="let item of emergencyData">\n      <ion-item (click)="editEmergencyData($event, item)">\n          <ion-row>\n              <ion-col col-12 style="color: gray;">Name</ion-col>\n              <ion-col col-12 class="data-des">{{item.name}}</ion-col>\n          </ion-row>\n\n      </ion-item>\n    <button ion-button clear item-end class="sheet-btn"><ion-icon name="md-more"></ion-icon></button>\n  </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/emergency/emergency.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_flag__["a" /* Flags */]])
], EmergencyPage);

//# sourceMappingURL=emergency.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmergencyEditPage = (function () {
    function EmergencyEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.emergencyData = { name: '', relationship: '', phone_number: '', alt_phone_number: '', email: '' };
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        console.log(this.save);
        if (navParams.get("emergencyData") != null) {
            this.emergencyData = navParams.get("emergencyData");
            console.log(this.emergencyData);
        }
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
    }
    EmergencyEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteEmergencyData();
                    }
                }
            ]
        });
        alert.present();
    };
    EmergencyEditPage.prototype.deleteEmergencyData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/emergency_contacts/" + this.emergencyData.id;
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataDelete(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("EmergencyData: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Delete Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_2 = _this.alertCtrl.create({
                            title: "Deleted", subTitle: "Delete Success", buttons: ['OK']
                        });
                        alert_2.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    EmergencyEditPage.prototype.emergencyDataUpdate = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/emergency_contacts/" + this.emergencyData.id;
        var body = { "id": this.emergencyData.id, "emergency_contact": { "name": this.emergencyData.name, "relationship": this.emergencyData.relationship,
                "phone_number": this.emergencyData.phone_number, "alt_phone_number": this.emergencyData.alt_phone_number,
                "email": this.emergencyData.email }
        };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Emergency Data: ", data);
                    if (data.success == false) {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_4 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    EmergencyEditPage.prototype.emergencyDataCreate = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/emergency_contacts";
        var body = { "emergency_contact": { "name": this.emergencyData.name, "relationship": this.emergencyData.relationship,
                "phone_number": this.emergencyData.phone_number, "alt_phone_number": this.emergencyData.alt_phone_number,
                "email": this.emergencyData.email }
        };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataCreate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_5 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Create Error", buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_6 = _this.alertCtrl.create({
                            title: "Created", subTitle: "Create Success", buttons: ['OK']
                        });
                        alert_6.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    EmergencyEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return EmergencyEditPage;
}());
EmergencyEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-emergency-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/emergency-edit/emergency-edit.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">Emergency Contact</ion-title>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="emergencyDataUpdate()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="emergencyDataCreate()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/contacts-book.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-clr">\n\n  <div class="portfolio">\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Full Name" [(ngModel)]="emergencyData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Relationship</ion-label>\n        <ion-input type="text" placeholder="-"  [(ngModel)]="emergencyData.relationship"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mobile Phone</ion-label>\n        <ion-input type="text" placeholder="Enter Notes" [(ngModel)]="emergencyData.phone_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Alt Phone</ion-label>\n        <ion-input type="text" placeholder="Alternative Phone" [(ngModel)]="emergencyData.alt_phone_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="email" placeholder="samaple@email.com" [(ngModel)]="emergencyData.email"></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n    <button *ngIf="!save" ion-button color="light" outline full large (click)="deleteAlert()">Delete Emergency Contact</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/emergency-edit/emergency-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], EmergencyEditPage);

//# sourceMappingURL=emergency-edit.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allergies_edit_allergies_edit__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllergiesPage = (function () {
    function AllergiesPage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
        this.email = "";
        this.auth_token = "";
    }
    AllergiesPage.prototype.ngOnInit = function () {
        this.flagService.setChangedFlag(false);
        this.gettingdata();
    };
    AllergiesPage.prototype.ionViewDidEnter = function () {
        if (this.flagService.getChangedFlag()) {
            this.gettingdata();
        }
    };
    AllergiesPage.prototype.gettingdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/allergies";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.allergiesData = data.allergies;
                    }
                });
            });
        });
    };
    AllergiesPage.prototype.createAllergiesData = function () {
        console.log('go AllergiesCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__allergies_edit_allergies_edit__["a" /* AllergiesEditPage */], { save: 'save', profile_id: this.profile_id });
        profileModal.present();
    };
    AllergiesPage.prototype.editAllergiesData = function (event, allergiesData) {
        console.log('go AllergiesEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__allergies_edit_allergies_edit__["a" /* AllergiesEditPage */], { edit: 'edit', allergiesData: allergiesData, profile_id: this.profile_id });
    };
    AllergiesPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return AllergiesPage;
}());
AllergiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-allergies',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/allergies/allergies.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createAllergiesData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Allergies</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="">\n    <ion-card class="data-list" *ngFor="let item of allergiesData">\n      <ion-item (click)="editAllergiesData($event, item)" >\n          <ion-row>\n              <ion-col col-12 style="color: gray;">Name</ion-col>\n              <ion-col col-12 class="data-des">{{item.name}}</ion-col>\n          </ion-row>\n\n      </ion-item>\n      <button ion-button clear item-end class="sheet-btn"><ion-icon name="md-more"></ion-icon></button>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/allergies/allergies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_flag__["a" /* Flags */]])
], AllergiesPage);

//# sourceMappingURL=allergies.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergiesEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllergiesEditPage = (function () {
    function AllergiesEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.allergiesData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        console.log(this.save);
        if (navParams.get("allergiesData") != null) {
            this.allergiesData = navParams.get("allergiesData");
        }
        console.log(this.allergiesData);
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    AllergiesEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteAllergiesData();
                    }
                }
            ]
        });
        alert.present();
    };
    AllergiesEditPage.prototype.deleteAllergiesData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/allergies/" + this.allergiesData.id;
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataDelete(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("allergiesData: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Delete Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_2 = _this.alertCtrl.create({
                            title: "Deleted", subTitle: "Delete Success", buttons: ['OK']
                        });
                        alert_2.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    AllergiesEditPage.prototype.updateAllergiesData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/allergies/" + this.allergiesData.id;
        console.log(this.allergiesData.is_private.toString());
        var body = { "id": this.allergiesData.id, "allergy": { "name": this.allergiesData.name, "notes": this.allergiesData.notes, "is_private": this.allergiesData } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_4 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    AllergiesEditPage.prototype.createAllergiesData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/allergies";
        var body = { "allergy": { "name": this.allergiesData.name, "notes": this.allergiesData.notes, "is_private": this.allergiesData.is_private } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataCreate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Allergy Data: ", data);
                    if (data.success == false) {
                        var alert_5 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Create Error", buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_6 = _this.alertCtrl.create({
                            title: "Created", subTitle: "Create Success", buttons: ['OK']
                        });
                        alert_6.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    AllergiesEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AllergiesEditPage;
}());
AllergiesEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-allergies-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/allergies-edit/allergies-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Allergies\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createAllergiesData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateAllergiesData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/eye.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Name of condition" [(ngModel)]="allergiesData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="allergiesData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="allergiesData.notes"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/allergies-edit/allergies-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], AllergiesEditPage);

//# sourceMappingURL=allergies-edit.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_medication_add_medication__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_medication_edit_medication__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dependent_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reminders_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_base_medicine_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MedicationsPage = (function () {
    function MedicationsPage(navCtrl, modalCtrl, navParams, dependentService, baseMedicineService, remindersService, userService, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.dependentService = dependentService;
        this.baseMedicineService = baseMedicineService;
        this.remindersService = remindersService;
        this.userService = userService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.person = [];
        this.profile_id = navParams.get("profile_id");
        console.log('person_id', this.profile_id);
        this.loaded = false;
    }
    MedicationsPage.prototype.ionViewWillEnter = function () {
        console.log('* Here is Select Medication Page *');
        // this.persons = this.dependentService.getAll();
        this.getDatas();
    };
    MedicationsPage.prototype.getDatas = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.remindersService.getForDependent(this.profile_id)
            .then(function (res) {
            loading.dismiss();
            _this.reminderData = res;
            console.log(_this.reminderData);
            _this.loaded = true;
            _this.reminderData.forEach(function (item) {
                _this.baseMedicineService.getForm(item.form_Id)
                    .then(function (res) {
                    item.form = res;
                    console.log('reminderForm', res);
                }, function (err) {
                    console.log(err);
                    loading.dismiss();
                });
                _this.baseMedicineService.getColor(item.color1_Id)
                    .then(function (res) {
                    item.color1 = res;
                    console.log('reminderColor1', res);
                }, function (err) {
                    console.log(err);
                    loading.dismiss();
                });
                _this.baseMedicineService.getColor(item.color2_Id)
                    .then(function (res) {
                    item.color2 = res;
                    console.log('reminderColor2', res);
                }, function (err) {
                    console.log(err);
                    loading.dismiss();
                });
            });
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    MedicationsPage.prototype.createMedicationsData = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_medication_add_medication__["a" /* AddMedicationPage */], { id: this.profile_id });
        profileModal.onDidDismiss(function () {
            _this.getDatas();
        });
        profileModal.present();
    };
    MedicationsPage.prototype.editMedicationsData = function (event, reminderData) {
        var _this = this;
        var editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_medication_edit_medication__["a" /* EditMedicationPage */], { id: reminderData.id });
        editModal.onDidDismiss(function () {
            _this.getDatas();
        });
        editModal.present();
    };
    MedicationsPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return MedicationsPage;
}());
MedicationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-medications',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/medications/medications.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createMedicationsData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img src="assets/image/1.png" alt="">\n        <p class="name">Michael</p>\n      </div>\n      <p class="view_title">Medications</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list *ngIf="loaded">\n\n    <ion-item class="reminder-item" *ngFor="let item of reminderData" (click)="editMedicationsData($event, item)">\n      <ion-avatar item-start>\n\n        <div class="m-icon m-icon-pill" *ngIf="item.form.name == \'Pill\'">\n          <div class="icon-left" [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + item.form.file + \')\', \'background-color\': item.color1.color}"></div>\n          <div class="icon-right" [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + item.form.file + \')\', \'background-color\': item.color2.color}"></div>\n        </div>\n        <div class="m-icon" *ngIf="item.form.name !== \'Pill\'">\n          <div class="m-icon-normal" [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + item.form.file + \')\', \'background-color\': item.color1.color}"></div>\n        </div>\n\n      </ion-avatar>\n      <p class="tablet-name">{{item.name}}</p>\n      <p class="tablet-remain">{{item.quantity}} Remanining</p>\n      <div item-end="" class="tablet-note">\n        <div class="note-button">\n          <img src="assets/icon/continued-circles-vertical.png">\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/medications/medications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_5__providers_dependent_service__["a" /* DependentService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_base_medicine_service__["a" /* BaseMedicineService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_reminders_service__["a" /* RemindersService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], MedicationsPage);

//# sourceMappingURL=medications.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_medicine_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reminders_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditMedicationPage = (function () {
    function EditMedicationPage(navCtrl, navParams, viewCtrl, loadingCtrl, baseMedicineService, remindersService, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.baseMedicineService = baseMedicineService;
        this.remindersService = remindersService;
        this.alertController = alertController;
        this.medicationData = {};
        this.loaded = false;
        this.medicationData.id = this.navParams.get("id");
        console.log(this.medicationData.id);
        this.loading = this.loadingCtrl.create();
        this.frequencyColumns = [
            {
                name: 'times',
                parentCol: 'schedule',
                options: [
                    { text: '1', value: '1', parentVal: '1' },
                    { text: '2', value: '2', parentVal: '1' },
                    { text: '3', value: '3', parentVal: '1' },
                    { text: '4', value: '4', parentVal: '1' },
                    { text: '5', value: '5', parentVal: '1' },
                    { text: '6', value: '6', parentVal: '1' },
                    { text: '1', value: '1', parentVal: '2' },
                    { text: '2', value: '2', parentVal: '2' },
                    { text: '3', value: '3', parentVal: '2' },
                    { text: '4', value: '4', parentVal: '2' },
                    { text: '5', value: '5', parentVal: '2' },
                    { text: '6', value: '6', parentVal: '2' },
                    { text: '7', value: '7', parentVal: '2' },
                    { text: '8', value: '8', parentVal: '2' },
                    { text: '9', value: '9', parentVal: '2' },
                    { text: '10', value: '10', parentVal: '2' },
                    { text: '11', value: '11', parentVal: '2' },
                    { text: '12', value: '12', parentVal: '2' },
                    { text: '13', value: '13', parentVal: '2' },
                    { text: '14', value: '14', parentVal: '2' }
                ]
            }, {
                name: 'schedule',
                options: [
                    { text: 'Daily', value: '1' },
                    { text: 'Weekly', value: '2' },
                ]
            }
        ];
        this.tablet_image = "assets/tablet-icon/icon-pill.png";
        // demo icons
        this.icons = [
            { type: "pill", color1: "#ff0000", color2: "#00ff00" },
            { type: "bubbles", color1: "#ffff00" },
            { type: "shape", color1: "#ff00ff" },
            { type: "tube", color1: "#0000ff" }
        ];
        this.default_forms = this.baseMedicineService.getForms();
        this.default_colors = this.baseMedicineService.getColors();
        this.selecting = {
            color1: false,
            color2: false,
            form: false,
            note: false
        };
    }
    EditMedicationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.viewCtrl.showBackButton(false);
        this.loading.present();
        this.remindersService.get(this.medicationData.id)
            .then(function (res) {
            _this.medicationData = res;
            _this.medicationData.visible = true;
            console.log(_this.medicationData);
            _this.initReminders();
            var stringToSpilt = _this.medicationData.frequency;
            var x = stringToSpilt.split(" ");
            var times = +x[0];
            _this.schedule = +x[2];
            _this.baseMedicineService.getForm(_this.medicationData.form_Id)
                .then(function (res) {
                _this.medicationData.form = res;
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
            });
            _this.baseMedicineService.getColor(_this.medicationData.color1_Id)
                .then(function (res) {
                _this.medicationData.color1 = res;
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
            });
            _this.baseMedicineService.getColor(_this.medicationData.color2_Id)
                .then(function (res) {
                _this.medicationData.color2 = res;
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
            });
            _this.loaded = true;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    EditMedicationPage.prototype.initReminders = function () {
        var stringToSpilt = this.medicationData.frequency;
        var x = stringToSpilt.split(" ");
        var times = +x[0];
        this.schedule = +x[2];
        console.log(this.medicationData.reminders.length);
        if (!this.medicationData.reminders.length) {
            this.medicationData.reminders = [];
            var weeknum = 1;
            switch (this.schedule) {
                case 1:
                    console.warn('initate reminder columns for Daily schedule');
                    for (var i = 1; i <= times; i++) {
                        this.medicationData.reminders.push({ value: i + " 0 1" });
                    }
                    break;
                case 2:
                    console.warn('initate reminder columns for Weekly schedule');
                    for (var i = 1; i <= times; i++) {
                        if (weeknum > 7)
                            weeknum = 1;
                        this.medicationData.reminders.push({ value: weeknum + " 8 0 1" });
                        weeknum++;
                    }
                    break;
                default:
                    break;
            }
        }
    };
    EditMedicationPage.prototype.selectForm = function () {
        this.selecting.form = !this.selecting.form;
    };
    EditMedicationPage.prototype.selectColor1 = function () {
        this.selecting.color1 = !this.selecting.color1;
    };
    EditMedicationPage.prototype.selectColor2 = function () {
        this.selecting.color2 = !this.selecting.color2;
    };
    EditMedicationPage.prototype.enterNote = function () {
        this.selecting.note = !this.selecting.note;
        this.note_template = this.medicationData.note;
    };
    EditMedicationPage.prototype.setForm = function (val) {
        this.medicationData.form = val;
        this.medicationData.form_Id = val.id;
        this.selecting.form = false;
    };
    EditMedicationPage.prototype.setColor1 = function (val) {
        this.medicationData.color1 = val;
        this.medicationData.color1_Id = val.id;
        this.selecting.color1 = false;
    };
    EditMedicationPage.prototype.setColor2 = function (val) {
        this.medicationData.color2 = val;
        this.medicationData.color2_Id = val.id;
        this.selecting.color2 = false;
    };
    EditMedicationPage.prototype.noteCancel = function () {
        this.selecting.note = false;
    };
    EditMedicationPage.prototype.noteSave = function () {
        if (!this.note_template) {
            this.note_template = '';
        }
        this.selecting.note = false;
        this.medicationData.note = this.note_template;
    };
    EditMedicationPage.prototype.checkValidate = function () {
        var retVal = true;
        if (!this.medicationData.name || !this.medicationData.dose) {
            return false;
        }
        return retVal;
    };
    EditMedicationPage.prototype.onCancel = function () {
        this.viewCtrl.dismiss();
    };
    EditMedicationPage.prototype.onSave = function () {
        var _this = this;
        console.log(this.medicationData);
        if (this.checkValidate()) {
            this.remindersService.update(this.medicationData)
                .then(function (res) {
                console.log(res);
                _this.viewCtrl.dismiss();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            var alert_1 = this.alertController.create({
                title: 'Warning',
                subTitle: 'Please fill in the fields required in red.',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    return EditMedicationPage;
}());
EditMedicationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-medication',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/edit-medication/edit-medication.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start class="cancel">\n      <button (click)="onCancel()">Cancel</button>\n    </ion-buttons>\n    <p class="spec-title">Medication</p>\n\n    <div class="tablet-cover" *ngIf="loaded">\n      <div class="m-icon m-icon-pill" *ngIf="medicationData.form.name == \'Pill\'">\n        <div class="icon-left"\n        [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + medicationData.form.file + \')\', \'background-color\': medicationData.color1.color}"\n        ></div>\n        <div class="icon-right"\n        [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + medicationData.form.file + \')\', \'background-color\': medicationData.color2.color}"\n        ></div>\n      </div>\n      <div class="m-icon" *ngIf="medicationData.form.name !== \'Pill\'">\n        <div class="m-icon-normal"\n        [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + medicationData.form.file + \')\', \'background-color\': medicationData.color1.color}"\n        ></div>\n      </div>\n    </div>\n\n    <ion-buttons end class="save">\n      <button (click)="onSave()"><ion-icon name="md-checkmark"></ion-icon>&nbsp;Save</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="loaded">\n  <ion-item [ngClass]="{invalid: !medicationData.name}">\n    <ion-label>Name</ion-label>\n    <ion-input type="text" placeholder="Name of Medicine" [(ngModel)]="medicationData.name"></ion-input>\n  </ion-item>\n\n  <ion-item (click)="selectForm()">\n    <div class="" item-start>Form</div>\n    <div class="option-val" item-end>{{medicationData.form.name}}</div>\n  </ion-item>\n\n  <!-- Form selection region -->\n\n  <div class="form-rgn" *ngIf="selecting.form">\n    <div class="form-item" *ngFor="let form of default_forms" (click)="setForm(form)">\n      <div class="form-img"\n      [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + form.file + \')\'}">\n      </div>\n      <div class="form-name">{{form.name}}</div>\n    </div>\n  </div>\n\n  <!------------------------->\n\n  <ion-item (click)="selectColor1()">\n    <div class="" item-start>\n      <span *ngIf="medicationData.form.name !== \'Pill\'">Color</span>\n      <span *ngIf="medicationData.form.name == \'Pill\'">Left Color</span>\n    </div>\n    <div class="option-val" item-end>{{medicationData.color1.name}}</div>\n  </ion-item>\n\n  <!-- Color1 selection region -->\n\n  <div class="color-rgn" *ngIf="selecting.color1">\n    <div class="color-item" *ngFor="let color of default_colors" (click)="setColor1(color)">\n      <div class="color-img"\n        [ngStyle]="{\'background-color\': color.color }">\n      </div>\n      <div class="color-name">{{color.name}}</div>\n    </div>\n  </div>\n\n  <!------------------------->\n\n  <ion-item (click)="selectColor2()" *ngIf="medicationData.form.name == \'Pill\'">\n    <div class="" item-start>Right Color</div>\n    <div class="option-val" item-end>{{medicationData.color2.name}}</div>\n  </ion-item>\n\n  <!-- Color1 selection region -->\n\n  <div class="color-rgn" *ngIf="selecting.color2 && medicationData.form.name == \'Pill\'">\n    <div class="color-item" *ngFor="let color of default_colors" (click)="setColor2(color)">\n      <div class="color-img"\n        [ngStyle]="{\'background-color\': color.color }">\n      </div>\n      <div class="color-name">{{color.name}}</div>\n    </div>\n  </div>\n\n  <!------------------------->\n\n  <ion-item [ngClass]="{invalid: !medicationData.dose}">\n    <ion-label>Dose</ion-label>\n    <ion-input type="tel" placeholder="Enter Dose" [(ngModel)]="medicationData.dose"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Frequency</ion-label>\n      <ion-multi-picker [(ngModel)] = "medicationData.frequency" placeholder="1 times Daily" separator=" times " item-content [multiPickerColumns]="frequencyColumns"></ion-multi-picker>\n  </ion-item>\n\n  <ion-item (click)="enterNote()">\n    <div class="" item-start>Notes</div>\n    <div class="option-val" item-end>\n      <p *ngIf="medicationData.note == \'\'">Add additional notes</p>\n      <p *ngIf="medicationData.note !== \'\'">{{medicationData.note}}</p>\n    </div>\n  </ion-item>\n\n  <div class="note-rgn" *ngIf="selecting.note">\n    <textarea name="name" rows="4" placeholder="Please type here ..." [(ngModel)]="note_template"></textarea>\n    <div class="note-buttons">\n      <button ion-button outline small color="light" (click)="noteCancel()">Cancel</button>\n      <button ion-button outline small color="light" (click)="noteSave()">OK</button>\n    </div>\n  </div>\n\n  <div class="space">\n  </div>\n\n  <ion-item>\n    <ion-label>Visible on public profile?</ion-label>\n    <ion-toggle [(ngModel)]="medicationData.visible"></ion-toggle>\n  </ion-item>\n\n  <div class="space">\n    Your Public Profile is what is displayed when a first Responder access your profile.\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/edit-medication/edit-medication.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_base_medicine_service__["a" /* BaseMedicineService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_reminders_service__["a" /* RemindersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], EditMedicationPage);

//# sourceMappingURL=edit-medication.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysiciansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__physicians_edit_physicians_edit__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhysiciansPage = (function () {
    function PhysiciansPage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
        this.email = "";
        this.auth_token = "";
    }
    PhysiciansPage.prototype.ngOnInit = function () {
        this.flagService.setChangedFlag(false);
        this.gettingdata();
    };
    PhysiciansPage.prototype.ionViewDidEnter = function () {
        if (this.flagService.getChangedFlag()) {
            this.gettingdata();
        }
    };
    PhysiciansPage.prototype.gettingdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/physicians";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Physicians Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        console.log("Physicians Data", data);
                        _this.physicianData = data.physicians;
                    }
                });
            });
        });
    };
    PhysiciansPage.prototype.createPhysicianData = function () {
        console.log('go PhysiciansCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__physicians_edit_physicians_edit__["a" /* PhysiciansEditPage */], { save: 'save', profile_id: this.profile_id });
        profileModal.present();
    };
    PhysiciansPage.prototype.editPhysicianData = function (event, physicianData) {
        console.log('go PhysiciansEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__physicians_edit_physicians_edit__["a" /* PhysiciansEditPage */], { edit: 'edit', physicianData: physicianData, profile_id: this.profile_id });
    };
    PhysiciansPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return PhysiciansPage;
}());
PhysiciansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-physicians',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/physicians/physicians.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createPhysicianData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Physicians</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="">\n    <ion-card class="data-list" *ngFor="let item of physicianData">\n      <ion-item (click)="editPhysicianData($event, item)" >\n          <ion-row>\n              <ion-col col-12 style="color: gray;">Name</ion-col>\n              <ion-col col-12 class="data-des">{{item.name}}</ion-col>\n          </ion-row>\n\n      </ion-item>\n      <button ion-button clear item-end class="sheet-btn"><ion-icon name="md-more"></ion-icon></button>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/physicians/physicians.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_flag__["a" /* Flags */]])
], PhysiciansPage);

//# sourceMappingURL=physicians.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysiciansEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhysiciansEditPage = (function () {
    function PhysiciansEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.physicianData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        console.log(this.save);
        if (navParams.get("physicianData") != null) {
            this.physicianData = navParams.get("physicianData");
        }
        console.log(this.physicianData);
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    PhysiciansEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deletePhysiciansData();
                    }
                }
            ]
        });
        alert.present();
    };
    PhysiciansEditPage.prototype.deletePhysiciansData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/physicians/" + this.physicianData.id;
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataDelete(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("PhysiciansData: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Delete Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_2 = _this.alertCtrl.create({
                            title: "Deleted", subTitle: "Delete Success", buttons: ['OK']
                        });
                        alert_2.present();
                        console.log(data);
                        _this.navCtrl.pop();
                    }
                });
            });
        });
    };
    PhysiciansEditPage.prototype.updatePhysiciansData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/physicians/" + this.physicianData.id;
        console.log(this.physicianData.is_private.toString());
        var body = { "id": this.physicianData.id, "physician": {
                "name": this.physicianData.name, "business_name": this.physicianData.business_name,
                "title": this.physicianData.title, "address": this.physicianData.address,
                "city": this.physicianData.city, "state": this.physicianData.state,
                "country": this.physicianData.country, "phone_number": this.physicianData.phone_number,
                "zip_code": this.physicianData.zip_code, "is_private": this.physicianData.is_private
            } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_4 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    PhysiciansEditPage.prototype.createPhysiciansData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/physicians";
        var body = { "physician": {
                "name": this.physicianData.name, "business_name": this.physicianData.business_name,
                "title": this.physicianData.title, "address": this.physicianData.address,
                "city": this.physicianData.city, "state": this.physicianData.state,
                "country": this.physicianData.country, "phone_number": this.physicianData.phone_number,
                "zip_code": this.physicianData.zip_code, "is_private": this.physicianData.is_private
            } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataCreate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Physicians Data: ", data);
                    if (data.success == false) {
                        var alert_5 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Create Error", buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_6 = _this.alertCtrl.create({
                            title: "Created", subTitle: "Create Success", buttons: ['OK']
                        });
                        alert_6.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    PhysiciansEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PhysiciansEditPage;
}());
PhysiciansEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-physicians-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/physicians-edit/physicians-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Physicians\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createPhysiciansData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updatePhysiciansData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/doctor.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Name of Physician" [(ngModel)]="physicianData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Business</ion-label>\n        <ion-input type="text" placeholder="Enter Business" [(ngModel)]="physicianData.business_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Title</ion-label>\n        <ion-input type="text" placeholder="Enter Title" [(ngModel)]="physicianData.title"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address</ion-label>\n        <ion-input type="text" placeholder="Enter Address" [(ngModel)]="physicianData.address"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" placeholder="Enter City" [(ngModel)]="physicianData.city"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-input type="text" placeholder="Enter State" [(ngModel)]="physicianData.state"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-input type="text" placeholder="Enter Country" [(ngModel)]="physicianData.country"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-input type="tel" placeholder="Enter Phone number" [(ngModel)]="physicianData.phone_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>ZipCode</ion-label>\n        <ion-input type="number" placeholder="Enter ZipCode" [(ngModel)]="physicianData.zip_code"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="physicianData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Physician</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/physicians-edit/physicians-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], PhysiciansEditPage);

//# sourceMappingURL=physicians-edit.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__insurance_edit_insurance_edit__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InsuranceInfoPage = (function () {
    function InsuranceInfoPage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
        this.email = "";
        this.auth_token = "";
    }
    InsuranceInfoPage.prototype.ngOnInit = function () {
        this.flagService.setChangedFlag(false);
        this.gettingdata();
    };
    InsuranceInfoPage.prototype.ionViewDidEnter = function () {
        if (this.flagService.getChangedFlag()) {
            this.gettingdata();
        }
    };
    InsuranceInfoPage.prototype.gettingdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/insurance_informations";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Insurance Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        console.log(data);
                        _this.insuranceData = data.insurance_informations;
                    }
                });
            });
        });
    };
    InsuranceInfoPage.prototype.createInsuranceData = function () {
        console.log('go InsuranceCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__insurance_edit_insurance_edit__["a" /* InsuranceEditPage */], { save: 'save', profile_id: this.profile_id });
        profileModal.present();
    };
    InsuranceInfoPage.prototype.editInsuranceData = function (event, insuranceData) {
        console.log('go InssuranceEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__insurance_edit_insurance_edit__["a" /* InsuranceEditPage */], { edit: 'edit', insuranceData: insuranceData, profile_id: this.profile_id });
    };
    InsuranceInfoPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return InsuranceInfoPage;
}());
InsuranceInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-insurance-info',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/insurance-info/insurance-info.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createInsuranceData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Insurance Information</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="">\n    <ion-card class="data-list" *ngFor="let item of insuranceData">\n      <ion-item (click)="editInsuranceData($event, item)" >\n          <ion-row>\n              <ion-col col-12 style="color: gray;">Provider</ion-col>\n              <ion-col col-12 class="data-des">{{item.insurance_provider}}</ion-col>\n          </ion-row>\n\n      </ion-item>\n      <button ion-button clear item-end class="sheet-btn"><ion-icon name="md-more"></ion-icon></button>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/insurance-info/insurance-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_flag__["a" /* Flags */]])
], InsuranceInfoPage);

//# sourceMappingURL=insurance-info.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InsuranceEditPage = (function () {
    function InsuranceEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.insuranceData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        console.log(this.save);
        if (navParams.get("insuranceData") != null) {
            this.insuranceData = navParams.get("insuranceData");
        }
        console.log(this.insuranceData);
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    InsuranceEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteInsuranceData();
                    }
                }
            ]
        });
        alert.present();
    };
    InsuranceEditPage.prototype.deleteInsuranceData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/insurance_informations/" + this.insuranceData.id;
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataDelete(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("insuranceinfoData: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Delete Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_2 = _this.alertCtrl.create({
                            title: "Deleted", subTitle: "Delete Success", buttons: ['OK']
                        });
                        alert_2.present();
                        console.log(data);
                        _this.navCtrl.pop();
                    }
                });
            });
        });
    };
    InsuranceEditPage.prototype.updateInsuranceData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/insurance_informations/" + this.insuranceData.id;
        console.log(this.insuranceData.is_private);
        var body = { "id": this.insuranceData.id, "insurance_information": {
                "insurance_provider": this.insuranceData.insurance_provider, "id_number": this.insuranceData.id_number,
                "group_number": this.insuranceData.group_number, "bin_number": this.insuranceData.bin_number,
                "deductible": this.insuranceData.deductible, "customer_service_phone_number": this.insuranceData.customer_service_phone_number,
                "notes": this.insuranceData.notes, "is_private": this.insuranceData.is_private
            } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Insurance Data: ", data);
                    if (data.success == false) {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_4 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    InsuranceEditPage.prototype.createInsuranceData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/insurance_informations";
        console.log(this.insuranceData.is_private);
        var body = { "insurance_information": {
                "insurance_provider": this.insuranceData.insurance_provider, "id_number": this.insuranceData.id_number,
                "group_number": this.insuranceData.group_number, "bin_number": this.insuranceData.bin_number,
                "deductible": this.insuranceData.deductible, "customer_service_phone_number": this.insuranceData.customer_service_phone_number,
                "notes": this.insuranceData.notes, "is_private": this.insuranceData.is_private
            } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataCreate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Insurance Data: ", data);
                    if (data.success == false) {
                        var alert_5 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Create Error", buttons: ['OK']
                        });
                        alert_5.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_6 = _this.alertCtrl.create({
                            title: "Created", subTitle: "Created Success", buttons: ['OK']
                        });
                        alert_6.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    InsuranceEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return InsuranceEditPage;
}());
InsuranceEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-insurance-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/insurance-edit/insurance-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Insurance Information\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createInsuranceData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateInsuranceData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/umbrella.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Provider</ion-label>\n        <ion-input type="text" placeholder="Enter Provider" [(ngModel)]="insuranceData.insurance_provider"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>ID #</ion-label>\n        <ion-input type="text" placeholder="Endter Id #" [(ngModel)]="insuranceData.id_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Group #</ion-label>\n        <ion-input type="text" placeholder="Enter Group #" [(ngModel)]="insuranceData.group_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Bin #</ion-label>\n        <ion-input type="text" placeholder="Enter Deductible" [(ngModel)]="insuranceData.bin_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Deductible</ion-label>\n        <ion-input type="text" placeholder="Enter Phone" [(ngModel)]="insuranceData.deductible"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-input type="text" placeholder="Enter Notes" [(ngModel)]="insuranceData.customer_service_phone_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Note</ion-label>\n        <ion-input type="text" placeholder="" [(ngModel)]="insuranceData.notes"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="insuranceData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-list>\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Insurance</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/insurance-edit/insurance-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], InsuranceEditPage);

//# sourceMappingURL=insurance-edit.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherInfoEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtherInfoEditPage = (function () {
    function OtherInfoEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.otherInfoData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        console.log(this.save);
        if (navParams.get("otherInfoData") != null) {
            this.otherInfoData = navParams.get("otherInfoData");
        }
        console.log(this.otherInfoData);
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    OtherInfoEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteOtherInfoData();
                    }
                }
            ]
        });
        alert.present();
    };
    OtherInfoEditPage.prototype.deleteOtherInfoData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/other_informations/" + this.otherInfoData.id;
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataDelete(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("otherInfoData Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Delete Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_2 = _this.alertCtrl.create({
                            title: "Deleted", subTitle: "Delete Success", buttons: ['OK']
                        });
                        alert_2.present();
                        console.log(data);
                        _this.navCtrl.pop();
                    }
                });
            });
        });
    };
    OtherInfoEditPage.prototype.updateOtherInfoData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/other_informations/" + this.otherInfoData.id;
        console.log(this.otherInfoData.is_private.toString());
        var body = { "id": this.otherInfoData.id, "allergy": { "name": this.otherInfoData.name, "notes": this.otherInfoData.notes, "is_private": this.otherInfoData } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataUpdate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("OtherInfo Data: ", data);
                    if (data.success == false) {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error", buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_4 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    OtherInfoEditPage.prototype.createOtherInfoData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/other_informations";
        var body = { "other_information": { "label": this.otherInfoData.label,
                "notes": this.otherInfoData.notes, "is_private": this.otherInfoData.is_private } };
        console.log(body);
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataCreate(_this.email, _this.auth_token, _this.profile_id, endValue, body)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("OtherInformation Data: ", data);
                    if (data.success == false) {
                        var alert_5 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Create Error", buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        _this.flagService.setChangedFlag(true);
                        var alert_6 = _this.alertCtrl.create({
                            title: "Created", subTitle: "Create Success", buttons: ['OK']
                        });
                        alert_6.present();
                        _this.navCtrl.pop();
                        console.log(data);
                    }
                });
            });
        });
    };
    OtherInfoEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return OtherInfoEditPage;
}());
OtherInfoEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-other-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/other-edit/other-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Other Information\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createOtherInfoData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateOtherInfoData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/info.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Enter Label" [(ngModel)]="otherInfoData.label"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="otherInfoData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="otherInfoData.notes"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Other Information</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/other-edit/other-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], OtherInfoEditPage);

//# sourceMappingURL=other-edit.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__link_edit_link_edit__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linked_product_edit_linked_product_edit__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LinkedProductPage = (function () {
    function LinkedProductPage(navCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        console.log('personData', this.personData);
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        this.email = "";
        this.auth_token = "";
    }
    LinkedProductPage.prototype.ngOnInit = function () {
        this.flagService.setChangedFlag(false);
        this.gettingData();
    };
    LinkedProductPage.prototype.ionViewDidEnter = function () {
        if (this.flagService.getChangedFlag()) {
            this.gettingData();
        }
    };
    LinkedProductPage.prototype.gettingData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/id_bands";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log("Vital Data: ", data);
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.LinkedData = data.id_bands;
                        console.log(data);
                    }
                });
            });
        });
    };
    LinkedProductPage.prototype.createLinkedData = function () {
        console.log('go AddCategory Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__link_edit_link_edit__["a" /* LinkEditPage */], { profile_id: this.profile_id });
        profileModal.present();
    };
    LinkedProductPage.prototype.editLinkedData = function (event, LinkedData) {
        console.log('go editLiked Page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__linked_product_edit_linked_product_edit__["a" /* LinkedProductEditPage */], { profile_id: this.profile_id, LinkedData: LinkedData });
    };
    LinkedProductPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return LinkedProductPage;
}());
LinkedProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-linked-product',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/linked-product/linked-product.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createLinkedData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Manage Linked Products</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="">\n    <ion-card class="data-list" *ngFor="let item of LinkedData">\n      <ion-item (click)="editLinkedData($event, item)" >\n          <ion-row>\n              <ion-col col-12 style="color: gray;">Name</ion-col>\n              <ion-col col-12 class="data-des">{{item.name}}</ion-col>\n          </ion-row>\n\n      </ion-item>\n      <button ion-button clear item-end class="sheet-btn"><ion-icon name="md-more"></ion-icon></button>\n    </ion-card>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/linked-product/linked-product.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_flag__["a" /* Flags */]])
], LinkedProductPage);

//# sourceMappingURL=linked-product.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedProductEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_flag__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LinkedProductEditPage = (function () {
    function LinkedProductEditPage(navCtrl, viewCtrl, navParams, loadingCtrl, userService, storage, flagService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.alertCtrl = alertCtrl;
        this.linkedData = navParams.get('LinkedData');
        this.profile_id = navParams.get('profile_id');
        console.log(JSON.stringify(this.linkedData));
    }
    LinkedProductEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
        this.storage.get('auth_token').then(function (val) {
            _this.auth_token = val;
        });
    };
    LinkedProductEditPage.prototype.updateLikedData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.updateIdBands(this.email, this.auth_token, this.profile_id, this.linkedData.name, this.linkedData.id)
            .subscribe(function (data) {
            loading.dismiss();
            if (data.success == false) {
                _this.navCtrl.pop();
            }
            else {
                console.log("Link To Profile:" + JSON.stringify(data));
                _this.flagService.setChangedFlag(true);
                _this.navCtrl.pop();
            }
        }, function (data) {
            console.log("Link To Profile:" + JSON.stringify(data));
            loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    LinkedProductEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.LinkedDataDelete();
                    }
                }
            ]
        });
        alert.present();
    };
    LinkedProductEditPage.prototype.LinkedDataDelete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.deleteIdBands(this.email, this.auth_token, this.profile_id, this.linkedData.id)
            .subscribe(function (data) {
            loading.dismiss();
            if (data.success == false) {
                _this.navCtrl.pop();
            }
            else {
                console.log("Link To Profile:" + JSON.stringify(data));
                _this.flagService.setChangedFlag(true);
                _this.navCtrl.pop();
            }
        }, function (data) {
            console.log("Link To Profile:" + JSON.stringify(data));
            loading.dismiss();
            _this.navCtrl.pop();
        });
    };
    LinkedProductEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LinkedProductEditPage;
}());
LinkedProductEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-linked-product-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/linked-product-edit/linked-product-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" >\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Vital Condition\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateLikedData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/link.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n  <ion-list class="data">\n\n    <ion-item>\n      <ion-label>Label</ion-label>\n      <ion-input type="text" placeholder="Name of condition" [(ngModel)]="linkedData.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>PIN # </ion-label>\n      <ion-input type="text" [(ngModel)]="linkedData.id" disabled="true"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>ID #</ion-label>\n      <ion-input type="text" [(ngModel)]="linkedData.pin" disabled="true"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Linked Product</button>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/linked-product-edit/linked-product-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_flag__["a" /* Flags */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], LinkedProductEditPage);

//# sourceMappingURL=linked-product-edit.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PopoverContentPage = (function () {
    // static get parameters() {
    //   return [[ViewController],[AlertController],[LoadingController],[Storage], [UserService], [NavParams]];
    // }
    function PopoverContentPage(viewCtrl, navParams, alertCtrl, loadingCtrl, storage, userService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.userService = userService;
        this.profile_id = navParams.get('profile_id');
        this.parent_id = navParams.get('parent_id');
        this.sort_flag = navParams.get('sort_flag');
    }
    PopoverContentPage.prototype.sort = function (sort_by) {
        this.viewCtrl.dismiss(sort_by);
    };
    PopoverContentPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverContentPage.prototype.select = function () {
        this.viewCtrl.dismiss('1');
    };
    PopoverContentPage.prototype.createFolderName = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Create Folder',
            message: "",
            inputs: [
                {
                    name: 'folder_name',
                    placeholder: 'Enter the new folder name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.folder_name = data.folder_name;
                        _this.createFolder();
                    }
                }
            ]
        });
        prompt.present();
    };
    PopoverContentPage.prototype.createFolder = function () {
        var _this = this;
        console.log('parent_id:' + this.parent_id + " name:" + this.folder_name);
        var loading = this.loadingCtrl.create();
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.createFolder(_this.email, _this.auth_token, _this.profile_id, _this.folder_name, _this.parent_id)
                    .subscribe(function (data) {
                    loading.dismiss();
                    _this.viewCtrl.dismiss();
                    if (data.success == false) {
                        console.log("get Documents:" + JSON.stringify(data));
                    }
                    else {
                        console.log("get Documents:" + JSON.stringify(data));
                    }
                }, function (data) {
                    loading.dismiss();
                    _this.viewCtrl.dismiss();
                });
            });
        });
    };
    PopoverContentPage.prototype.fileEvent = function (event) {
        var files = event.target.files;
        var file = files[0];
        this.file = file;
        this.filename = this.file.name;
        console.log("this.file:" + JSON.stringify(this.filename));
        __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__["config"].accessKeyId = 'AKIAJQMPAKMTXVPW2ZPA';
        __WEBPACK_IMPORTED_MODULE_4_aws_sdk_global__["config"].secretAccessKey = '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';
        var s3 = new __WEBPACK_IMPORTED_MODULE_5_aws_sdk_clients_s3___default.a({
            region: 'us-west-2',
            apiVersion: '2006-03-01',
            params: { Bucket: 'myidband-images' }
        });
        // let bucket = new S3({params: {Bucket: 'YOUR-BUCKET-NAME'}});
        // let params = {BucketName: 'YOUR-BUCKET-NAME', Key: this.file.name, Body: this.file};
        var params = { Bucket: 'myidband-images', Key: 'production/tmp_files/' + this.file.name, Body: this.file, ContentType: this.file.type, ACL: 'public-read' };
        var that = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        s3.upload(params, function (err, data) {
            loading.dismiss();
            console.log("data: " + JSON.stringify(data) + "err: " + JSON.stringify(err));
            that.uploadFile1(that.filename, data.Location, that.parent_id);
        });
    };
    PopoverContentPage.prototype.uploadFile1 = function (filename, url, folder_id) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.uploadFile(_this.email, _this.auth_token, _this.profile_id, filename, url, folder_id)
                    .subscribe(function (data) {
                    loading.dismiss();
                    _this.viewCtrl.dismiss();
                    if (data.success == false) {
                        console.log("get Documents:" + JSON.stringify(data));
                    }
                    else {
                        console.log("get Documents:" + JSON.stringify(data));
                    }
                }, function (data) {
                    _this.viewCtrl.dismiss();
                    loading.dismiss();
                });
            });
        });
    };
    return PopoverContentPage;
}());
PopoverContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-popover',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/popover/popover.html"*/'\n\n<input type="file" name="file" id="file" class="inputfile" (change)="fileEvent($event)"/>\n<ion-list>\n      <!-- <ion-list-header class="header">Options</ion-list-header> -->\n      <label for="file" ion-item>Upload File</label>\n      <!-- <button for="file" ion-item (click)="uploadFile()">Upload File...</button> -->\n      <button ion-item (click)="createFolderName()">Create Folder</button>\n      <button ion-item (click)="select()">Select</button>\n      <button ion-item (click)="sort(\'date\')" *ngIf="sort_flag == \'name\'">Sort by Date</button>\n      <button ion-item (click)="sort(\'name\')" *ngIf="sort_flag == \'date\'">Sort by Name</button>\n</ion-list>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/popover/popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]])
], PopoverContentPage);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surgeries_surgeries__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__labs_labs__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__living_will_living_will__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dnr_dnr__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__family_history_family_history__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__immunizations_immunizations__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pharmacies_pharmacies__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__surecell_surecell__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__other_info_other_info__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pregnancy_pregnancy__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddCategoryPage = (function () {
    function AddCategoryPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.addedCategories = this.navParams.get("ids");
        this.categories = [
            { id: 8, name: 'Surgeries', page: __WEBPACK_IMPORTED_MODULE_2__surgeries_surgeries__["a" /* SurgeriesPage */], icon: 'surgeon', show: true, sup: '' },
            { id: 9, name: 'Labs', page: __WEBPACK_IMPORTED_MODULE_3__labs_labs__["a" /* LabsPage */], icon: 'test-tube', show: true, sup: '' },
            { id: 10, name: 'Living Will', page: __WEBPACK_IMPORTED_MODULE_4__living_will_living_will__["a" /* LivingWillPage */], icon: 'document-scroll-2', show: true, sup: '' },
            { id: 11, name: 'DNR', page: __WEBPACK_IMPORTED_MODULE_5__dnr_dnr__["a" /* DNRPage */], icon: 'document-lines', show: true, sup: '' },
            { id: 12, name: 'Family History', page: __WEBPACK_IMPORTED_MODULE_6__family_history_family_history__["a" /* FamilyHistoryPage */], icon: 'family', show: true, sup: '' },
            { id: 13, name: 'Immunizations', page: __WEBPACK_IMPORTED_MODULE_7__immunizations_immunizations__["a" /* ImmunizationsPage */], icon: 'syringe', show: true, sup: '' },
            { id: 14, name: 'Parmacies', page: __WEBPACK_IMPORTED_MODULE_8__pharmacies_pharmacies__["a" /* PharmaciesPage */], icon: 'medical-kit', show: true, sup: '' },
            { id: 15, name: 'SureCell', page: __WEBPACK_IMPORTED_MODULE_9__surecell_surecell__["a" /* SureCellPage */], icon: 'atom', show: true, sup: 'TM' },
            { id: 17, name: 'Other Info', page: __WEBPACK_IMPORTED_MODULE_10__other_info_other_info__["a" /* OtherInfoPage */], icon: 'info', show: false, sup: '' },
            { id: 16, name: 'Pregnancy', page: __WEBPACK_IMPORTED_MODULE_11__pregnancy_pregnancy__["a" /* PregnancyPage */], icon: 'baby-stroller', show: true, sup: '' }
        ];
        var that = this;
        this.categories.map(function (category) {
            if (that.addedCategories.indexOf(category.id) > -1 || category.id == 17) {
                category.show = false;
            }
            else {
                category.show = true;
            }
        });
    }
    AddCategoryPage.prototype.onClickCategory = function (category) {
        if (category.show) {
            category.show = false;
            this.viewCtrl.dismiss({ category: category });
        }
    };
    AddCategoryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddCategoryPage;
}());
AddCategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-category',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/add-category/add-category.html"*/'\n\n\n\n<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <div class="title">Select category to add</div>\n    <ion-list>\n      <ion-item class="category" *ngFor="let item of categories" (click)="onClickCategory(item)" [ngClass]="{\'item-disable\':!item.show}">\n        <img src="assets/icon/gray/{{item.icon}}.png" alt="">\n        <p>{{item.name}}<sup>{{item.sup}}</sup></p>\n      </ion-item>\n    </ion-list>\n    <button ion-button full clear class="cancel" (click)="dismiss()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/add-category/add-category.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], AddCategoryPage);

//# sourceMappingURL=add-category.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surgeries_edit_surgeries_edit__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurgeriesPage = (function () {
    function SurgeriesPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
    }
    SurgeriesPage.prototype.createSurgeriesData = function () {
        console.log('go SurgeriesCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__surgeries_edit_surgeries_edit__["a" /* SurgeriesEditPage */], { save: 'save' });
        profileModal.present();
    };
    SurgeriesPage.prototype.editSurgeriesData = function () {
        console.log('go SurgeriesEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__surgeries_edit_surgeries_edit__["a" /* SurgeriesEditPage */], { edit: 'edit' });
    };
    SurgeriesPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return SurgeriesPage;
}());
SurgeriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-surgeries',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/surgeries/Surgeries.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createSurgeriesData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Surgeries</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/surgeries/Surgeries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], SurgeriesPage);

//# sourceMappingURL=surgeries.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgeriesEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurgeriesEditPage = (function () {
    function SurgeriesEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.surgeriesData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        this.state = [
            { name: 'Resolved', value_string: 'true' },
            { name: 'Ongoing', value_string: 'false' }
        ];
        this.type = [
            { name: 'Torn ACL', value: 0 },
            { name: 'Appendectomy', value: 1 },
            { name: 'other', value: 2 }
        ];
    }
    SurgeriesEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteSurgeriesData();
                    }
                }
            ]
        });
        alert.present();
    };
    SurgeriesEditPage.prototype.deleteSurgeriesData = function () {
    };
    SurgeriesEditPage.prototype.updateSurgeriesData = function () {
    };
    SurgeriesEditPage.prototype.createSurgeriesData = function () {
    };
    SurgeriesEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SurgeriesEditPage;
}());
SurgeriesEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-surgeries-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/surgeries-edit/surgeries-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Surgeries\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createSurgeriesData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateSurgeriesData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/surgeon.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Type of Surgery</ion-label>\n        <ion-select [(ngModel)]="surgeriesData.type">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of type" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Surgeon Name</ion-label>\n        <ion-input type="text" placeholder="Surgeon Name" [(ngModel)]="surgeriesData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Surgeon Phone</ion-label>\n        <ion-input type="number" placeholder="Surgeon Phone" [(ngModel)]="surgeriesData.phone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date of Operation</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY"  pickerFormat="MM/DD/YYYY" [(ngModel)]="surgeriesData.operation_date"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Status</ion-label>\n        <ion-select [(ngModel)]="surgeriesData.value">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="surgeriesData.notes"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/surgeries-edit/surgeries-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], SurgeriesEditPage);

//# sourceMappingURL=surgeries-edit.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labs_edit_labs_edit__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabsPage = (function () {
    function LabsPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
    }
    LabsPage.prototype.createLabsData = function () {
        console.log('go SurgeriesCreatePage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__labs_edit_labs_edit__["a" /* LabsEditPage */], { save: 'save' });
        profileModal.present();
    };
    LabsPage.prototype.editLabsData = function () {
        console.log('go SurgeriesEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__labs_edit_labs_edit__["a" /* LabsEditPage */], { edit: 'edit' });
    };
    LabsPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return LabsPage;
}());
LabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-labs',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/labs/labs.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createLabsData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Labs</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/labs/labs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], LabsPage);

//# sourceMappingURL=labs.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabsEditPage = (function () {
    function LabsEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.labsData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        this.type = [
            { name: 'CBC', value: 0 },
            { name: 'BMP', value: 1 },
            { name: 'CMP', value: 2 },
            { name: 'Other', value: 3 }
        ];
    }
    LabsEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteLabsData();
                    }
                }
            ]
        });
        alert.present();
    };
    LabsEditPage.prototype.deleteLabsData = function () {
    };
    LabsEditPage.prototype.updateLabsData = function () {
    };
    LabsEditPage.prototype.createLabsData = function () {
    };
    LabsEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LabsEditPage;
}());
LabsEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-labs-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/labs-edit/labs-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Labs\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createLabsData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateLabsData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/test-tube.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n      <ion-item>\n\n        <ion-label>Lab Test Type</ion-label>\n        <ion-select [(ngModel)]="labsData.value">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of type" [value]="item.value">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Open field</ion-label>\n        <ion-input type="text" placeholder="Open field" [(ngModel)]="labsData.field"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date of Procedure</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MMM/DD/YYYY" [(ngModel)]="labsData.procedure_date"></ion-datetime>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Results</ion-label>\n        <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="labsData.results"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/labs-edit/labs-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], LabsEditPage);

//# sourceMappingURL=labs-edit.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingWillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LivingWillPage = (function () {
    function LivingWillPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LivingWillPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return LivingWillPage;
}());
LivingWillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-living-will',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/living-will/living-will.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Living Will\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/living-will/living-will.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], LivingWillPage);

//# sourceMappingURL=living-will.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DNRPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DNRPage = (function () {
    function DNRPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DNRPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return DNRPage;
}());
DNRPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dnr',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/dnr/dnr.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      DNR\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/dnr/dnr.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], DNRPage);

//# sourceMappingURL=dnr.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__family_history_edit_family_history_edit__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamilyHistoryPage = (function () {
    function FamilyHistoryPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
    }
    FamilyHistoryPage.prototype.createFamilyHistoryData = function () {
        console.log('go FamilyHistoryDataPg');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__family_history_edit_family_history_edit__["a" /* FamilyHistoryEditPage */], { save: 'save' });
        profileModal.present();
    };
    FamilyHistoryPage.prototype.editFamilyHistoryData = function () {
        console.log('go FamilyHistoryDataPg');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__family_history_edit_family_history_edit__["a" /* FamilyHistoryEditPage */], { edit: 'edit' });
    };
    FamilyHistoryPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return FamilyHistoryPage;
}());
FamilyHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-family-history',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/family-history/family-history.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createFamilyHistoryData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Family History</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/family-history/family-history.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], FamilyHistoryPage);

//# sourceMappingURL=family-history.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FamilyHistoryEditPage = (function () {
    function FamilyHistoryEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.familyHistoryData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        this.state = [
            { name: 'Deceased', value_string: true },
            { name: 'Living', value_string: false }
        ];
        this.relationship = [
            { name: 'Brother', value: 0 },
            { name: 'Sister', value: 1 },
            { name: 'Mother', value: 2 },
            { name: 'Father', value: 3 },
            { name: 'Aunt', value: 4 },
            { name: 'Uncle', value: 5 },
            { name: 'Grandfather', value: 6 },
            { name: 'Grandmother', value: 7 },
            { name: 'Other', value: 8 }
        ];
    }
    FamilyHistoryEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteFamilyHistoryData();
                    }
                }
            ]
        });
        alert.present();
    };
    FamilyHistoryEditPage.prototype.deleteFamilyHistoryData = function () {
    };
    FamilyHistoryEditPage.prototype.updateFamilyHistoryData = function () {
    };
    FamilyHistoryEditPage.prototype.createFamilyHistoryData = function () {
    };
    FamilyHistoryEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FamilyHistoryEditPage;
}());
FamilyHistoryEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-family-history-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/family-history-edit/family-history-edit.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Family History\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createFamilyHistoryData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateFamilyHistoryData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/family.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Name" [(ngModel)]="familyHistoryData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Relationship</ion-label>\n        <ion-select [(ngModel)]="familyHistoryData.value">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of relationship" [value]="item.value">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Birthdate</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MMM/DD/YYYY" [(ngModel)]="familyHistoryData.birth_date"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Deceased or Living</ion-label>\n        <ion-select [(ngModel)]="familyHistoryData.value">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item ng-show="familyHistoryData.value">\n        <ion-label>Year of Death</ion-label>\n        <ion-datetime displayFormat="YYYY" pickerFormat="YYYY" [(ngModel)]="familyHistoryData.Death_date"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> Medical Condition</ion-label>\n        <ion-textarea type="text" placeholder="Medical Condition" [(ngModel)]="familyHistoryData.condition"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="familyHistoryData.notes"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/family-history-edit/family-history-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], FamilyHistoryEditPage);

//# sourceMappingURL=family-history-edit.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__immunizations_edit_immunizations_edit__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImmunizationsPage = (function () {
    function ImmunizationsPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.personData = {};
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
    }
    ImmunizationsPage.prototype.createImmunizationsData = function () {
        console.log('go createImmunizationsData');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__immunizations_edit_immunizations_edit__["a" /* ImmunizationsEditPage */], { save: 'save', profile_id: this.profile_id });
        profileModal.present();
    };
    ImmunizationsPage.prototype.editImmunizationsData = function () {
        console.log('go editImmunizationsData');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__immunizations_edit_immunizations_edit__["a" /* ImmunizationsEditPage */], { edit: 'edit' });
    };
    ImmunizationsPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return ImmunizationsPage;
}());
ImmunizationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-immunizations',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/immunizations/immunizations.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createImmunizationsData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Immunizations</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/immunizations/immunizations.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ImmunizationsPage);

//# sourceMappingURL=immunizations.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImmunizationsEditPage = (function () {
    function ImmunizationsEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, userService, storage) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.immunizationsData = {};
        this.doseData = { title: 'Dose', dose_name: '', holder: 'Dose Name' };
        this.array_item = [{ title: 'Dose', dose_name: '' }];
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
        this.vaccineList = [
            { name: 'Hepatitis B1 (HepB)', value: 0 },
            { name: 'Rotavirus (RV1)', value: 1 },
            { name: 'Rotavirus (RV5)', value: 2 },
            { name: 'Diphtheria, tetanus, & acellular pertussis (DTaP)', value: 3 },
            { name: 'Haemophilus influenzae type b (Hib)', value: 4 },
            { name: 'Pneumococcal conjugate (PCV13)', value: 5 },
            { name: 'Inactivated poliovirus', value: 6 },
            { name: 'Influenza (IIV)', value: 7 },
            { name: 'Measles, mumps, rubella8 (MMR)', value: 8 },
            { name: 'Varicella (VAR)', value: 9 },
            { name: 'Hepatitis A (HepA)', value: 10 },
            { name: 'Meningococcal', value: 11 },
            { name: 'Tetanus, diphtheria, & acellular pertussis', value: 12 },
            { name: 'Human papillomavirus (HPV)', value: 13 },
            { name: 'Meningococcal B', value: 13 },
            { name: 'Pneumococcal polysaccharide (PPSV23)', value: 14 },
            { name: 'Other', value: 15 },
        ];
    }
    ImmunizationsEditPage.prototype.ionViewDidEnter = function () {
        this.gettingdata();
    };
    ImmunizationsEditPage.prototype.gettingdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        var endValue = "/physicians";
        loading.present();
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.dataGet(_this.email, _this.auth_token, _this.profile_id, endValue)
                    .subscribe(function (data) {
                    loading.dismiss();
                    if (data.success == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.physicianData = data.physicians;
                        console.log("Physicians Data", _this.physicianData);
                    }
                });
            });
        });
    };
    ImmunizationsEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteImmunizationsData();
                    }
                }
            ]
        });
        alert.present();
    };
    ImmunizationsEditPage.prototype.addDose = function () {
        this.array_item.push(this.doseData);
    };
    ImmunizationsEditPage.prototype.deleteImmunizationsData = function () {
    };
    ImmunizationsEditPage.prototype.updateImmunizationsData = function () {
    };
    ImmunizationsEditPage.prototype.createImmunizationsData = function () {
    };
    ImmunizationsEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ImmunizationsEditPage;
}());
ImmunizationsEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-immunizations-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/immunizations-edit/immunizations-edit.html"*/'\n  Immunizations - Edit\n\n  <ion-header>\n    <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n      <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n      <ion-title class="title">\n        Immunizations\n      </ion-title>\n      <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createImmunizationsData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n      <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateImmunizationsData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n      <div class="header-title">\n          <img src="assets/icon/white/syringe.png" alt="">\n      </div>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="portfolio">\n\n      <ion-list class="data">\n\n        <ion-item>\n          <ion-label>Vaccine</ion-label>\n          <ion-select [(ngModel)]="immunizationsData.value">\n            <ion-option value="" selected>Select</ion-option>\n            <ion-option *ngFor="let item of vaccineList" [value]="item.value">{{item.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Notes</ion-label>\n          <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="immunizationsData.notes"></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n        <button ion-button icon-right clear class="add-dose" (click)="addDose()">\n          Add Dose\n          <ion-icon name="ios-add-circle-outline"></ion-icon>\n        </button>\n\n        <ion-list class="data" >\n          <ion-item *ngFor="let item of array_item">\n            <ion-label>{{item.title}}</ion-label>\n            <ion-input type="text" placeholder="{{item.does_name}}" [(ngModel)]="item.dose_name"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <ion-list class="data">\n          <ion-item>\n            <ion-label>Doctor</ion-label>\n            <ion-select [(ngModel)]="immunizationsData.id">\n              <ion-option value="" selected>Select</ion-option>\n              <ion-option *ngFor="let item of physicianData" [value]="item.id">{{item.business_name}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n      </ion-list>\n\n      <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/immunizations-edit/immunizations-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], ImmunizationsEditPage);

//# sourceMappingURL=immunizations-edit.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmaciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pharmacies_edit_pharmacies_edit__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PharmaciesPage = (function () {
    function PharmaciesPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
    }
    PharmaciesPage.prototype.createPharmaciesData = function () {
        console.log('go PharmaciesEditPage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pharmacies_edit_pharmacies_edit__["a" /* PharmaciesEditPage */], { save: 'save' });
        profileModal.present();
    };
    PharmaciesPage.prototype.editPharmaciesData = function () {
        console.log('go PharmaciesEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pharmacies_edit_pharmacies_edit__["a" /* PharmaciesEditPage */], { edit: 'edit' });
    };
    PharmaciesPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return PharmaciesPage;
}());
PharmaciesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pharmacies',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/pharmacies/pharmacies.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createPharmaciesData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Pharmacies</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/pharmacies/pharmacies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], PharmaciesPage);

//# sourceMappingURL=pharmacies.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmaciesEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PharmaciesEditPage = (function () {
    function PharmaciesEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pharmaciesData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    PharmaciesEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deletePharmaciesData();
                    }
                }
            ]
        });
        alert.present();
    };
    PharmaciesEditPage.prototype.deletePharmaciesData = function () {
    };
    PharmaciesEditPage.prototype.updatePharmaciesData = function () {
    };
    PharmaciesEditPage.prototype.createPharmaciesData = function () {
    };
    PharmaciesEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PharmaciesEditPage;
}());
PharmaciesEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pharmacies-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/pharmacies-edit/pharmacies-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Pharmacies\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createPharmaciesData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updatePharmaciesData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/medical-kit.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Name" [(ngModel)]="pharmaciesData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="phone" placeholder="Phone" [(ngModel)]="pharmaciesData.phone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address Line 1</ion-label>\n        <ion-input type="text" placeholder="Address Line 1" [(ngModel)]="pharmaciesData.address1"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address Line 2</ion-label>\n        <ion-input type="text" placeholder="Address Line 2" [(ngModel)]="pharmaciesData.address2"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" placeholder="City" [(ngModel)]="pharmaciesData.city"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-input type="text" placeholder="State" [(ngModel)]="pharmaciesData.state"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>ZIP</ion-label>\n        <ion-input type="number" placeholder="ZIP" [(ngModel)]="pharmaciesData.zip"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="pharmaciesData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/pharmacies-edit/pharmacies-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], PharmaciesEditPage);

//# sourceMappingURL=pharmacies-edit.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SureCellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surecell_edit_surecell_edit__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SureCellPage = (function () {
    function SureCellPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
    }
    SureCellPage.prototype.createSureCellData = function () {
        console.log('go AddSureCellPage');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__surecell_edit_surecell_edit__["a" /* SureCellEditPage */], { save: 'save' });
        profileModal.present();
    };
    SureCellPage.prototype.editSureCellData = function () {
        console.log('go SureCellEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__surecell_edit_surecell_edit__["a" /* SureCellEditPage */], { edit: 'edit' });
    };
    SureCellPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return SureCellPage;
}());
SureCellPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-surecell',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/surecell/surecell.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createSureCellData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">SureCell</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/surecell/surecell.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], SureCellPage);

//# sourceMappingURL=surecell.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SureCellEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SureCellEditPage = (function () {
    function SureCellEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.surecellData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    SureCellEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteSureCellData();
                    }
                }
            ]
        });
        alert.present();
    };
    SureCellEditPage.prototype.deleteSureCellData = function () {
    };
    SureCellEditPage.prototype.updateSureCellData = function () {
    };
    SureCellEditPage.prototype.createSureCellData = function () {
    };
    SureCellEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SureCellEditPage;
}());
SureCellEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-surecell-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/surecell-edit/surecell-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      SureCell\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createSureCellData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updateSureCellData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/atom.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Provider Name</ion-label>\n        <ion-input type="text" placeholder="Provider Name" [(ngModel)]="surecellData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Provider Phone Number</ion-label>\n        <ion-input type="number" placeholder="Provider Phone Number" [(ngModel)]="surecellData.phonenumber"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Policy Number</ion-label>\n        <ion-input type="number" placeholder="Policy Number" [(ngModel)]="surecellData.pllicy_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="surecellData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="surecellData.notes"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/surecell-edit/surecell-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], SureCellEditPage);

//# sourceMappingURL=surecell-edit.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PregnancyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pregnancy_edit_pregnancy_edit__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PregnancyPage = (function () {
    function PregnancyPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.profile_id = navParams.get("profile_id");
        this.personData = navParams.get("personData");
        this.imagePath = this.personData.image_url.thumb;
        this.personName = this.personData.last_name;
        console.log('personData', this.personData);
    }
    PregnancyPage.prototype.createPregnancyData = function () {
        console.log('go createPregnancyData');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pregnancy_edit_pregnancy_edit__["a" /* PregnancyEditPage */], { save: 'save' });
        profileModal.present();
    };
    PregnancyPage.prototype.editPregnancyData = function () {
        console.log('go editPregnancyData');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pregnancy_edit_pregnancy_edit__["a" /* PregnancyEditPage */], { edit: 'edit' });
    };
    PregnancyPage.prototype.closePage = function () {
        this.navCtrl.pop();
    };
    return PregnancyPage;
}());
PregnancyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pregnancy',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/pregnancy/pregnancy.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button clear item-end class="back_btn" left (click)="closePage()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createPregnancyData()"><ion-icon name="md-add"></ion-icon></button>\n    <div class="header-title">\n      <div class="profile_img">\n        <img *ngIf="!imagePath" src="assets/icon/gray/user-circle1.png" alt="">\n        <img *ngIf="imagePath" [src]="imagePath" alt="">\n        <p class="name">{{personName}}</p>\n      </div>\n      <p class="view_title">Pregnancy</p>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/pregnancy/pregnancy.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], PregnancyPage);

//# sourceMappingURL=pregnancy.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PregnancyEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PregnancyEditPage = (function () {
    function PregnancyEditPage(navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pregnancyData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        this.state = [
            { name: 'Private', value_string: 'true' },
            { name: 'Public', value_string: 'false' }
        ];
    }
    PregnancyEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deletePregnancyData();
                    }
                }
            ]
        });
        alert.present();
    };
    PregnancyEditPage.prototype.deletePregnancyData = function () {
    };
    PregnancyEditPage.prototype.updatePregnancyData = function () {
    };
    PregnancyEditPage.prototype.createPregnancyData = function () {
    };
    PregnancyEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PregnancyEditPage;
}());
PregnancyEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pregnancy-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/pregnancy-edit/pregnancy-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      Pregnancy\n    </ion-title>\n    <button *ngIf="save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="createPregnancyData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <button *ngIf="!save" ion-button clear item-end class="back_btn create" style="right: 0px;" (click)="updatePregnancyData()"><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <img src="assets/icon/white/baby-stroller.png" alt="">\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="portfolio">\n\n    <ion-list class="data">\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Name of condition" [(ngModel)]="pregnancyData.name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Duedate</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MMM/DD/YYYY" [(ngModel)]="pregnancyData.due_date"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Treating Physician</ion-label>\n        <ion-select [(ngModel)]="pregnancyData.is_private">\n          <ion-option value="" selected>Select</ion-option>\n          <ion-option *ngFor="let item of state" [value]="item.value_string">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-textarea type="text" placeholder="Enter Notes" [(ngModel)]="pregnancyData.notes"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button *ngIf="!save" ion-button color="light" outline full large style="color: red" (click)="deleteAlert()">Delete Allergy</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/pregnancy-edit/pregnancy-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], PregnancyEditPage);

//# sourceMappingURL=pregnancy-edit.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplainSlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_success_product_success__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExplainSlidePage = (function () {
    function ExplainSlidePage(navCtrl, viewCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.sliders = [{ image: 'image1', title: 'Pill Reminders', description: 'Receive pill reminders to make sure you stay on top of your health.' },
            { image: 'image2', title: 'Document Storage', description: 'Attach important documents to your profile for quick access any time, anywhere.' },
            { image: 'image3', title: 'Sharing', description: 'Share your health imformant with your Doctor or caregiver safely and securely.' },
            { image: 'image4', title: 'Quick Notify ICE Contacts', description: 'Display a red button on your profile to automatically send a text & email to your emergency contacts.' },
        ];
        var personData = navParams.get("personData");
        console.log('profile_img', personData);
        this.profile_img = personData.image_url.thumb;
        this.name = personData.first_name + ' ' + personData.last_name;
    }
    ExplainSlidePage.prototype.productSuccess = function () {
        console.log('go ProductSuccess Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__product_success_product_success__["a" /* ProductSuccessPage */], { page: 'document' });
        profileModal.present();
    };
    ExplainSlidePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ExplainSlidePage;
}());
ExplainSlidePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-explain-slide',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/explain-slide/explain-slide.html"*/'\n<ion-content>\n  <button ion-button icon-only clear large (click)="dismiss()" class="close"><ion-icon name="close"></ion-icon></button>\n\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let item of sliders">\n        <div class="slide-box">\n          <img src="assets/image/{{item.image}}.png" alt="">\n          <h2>{{item.title}}</h2>\n          <p>{{item.description}}</p>\n        </div>\n      </ion-slide>\n\n      <ion-slide >\n        <div class="profile">\n          <img [src]="profile_img" alt="">\n          <p>{{name}}</p>\n          <h3>MyID Plus Subscription</h3>\n          <button ion-button color="secondary" full large (click)="productSuccess()">$29.99 / Year</button>\n          <p style="margin: 5px;">or</p>\n          <button ion-button color="secondary" full large (click)="productSuccess()">$4.99 / Month</button>\n        </div>\n        <p class="description">your plus subscription unlocks features previously displayed. Payment will be changed to iTunes Account at confirmation of purchase.\n          The subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.\n          The Plus subscription auto-renewal may be managed and edited by the user under iTunes "Account Settings" after purchase.\n          Read Terms of Use and Privacy Statement before buying.\n        </p>\n      </ion-slide>\n\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/explain-slide/explain-slide.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ExplainSlidePage);

//# sourceMappingURL=explain-slide.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewProfilePage = (function () {
    function PreviewProfilePage(navCtrl, viewCtrl, loadingCtrl, storage, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.userService = userService;
        this.categories = [
            { id: '1', name: 'Mickael' },
            { id: '2', name: 'Johnny' },
        ];
        this.storage.get('profileData').then(function (val) {
            _this.profileData = val;
            console.log(_this.profileData);
        });
    }
    PreviewProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PreviewProfilePage;
}());
PreviewProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-preview-profile',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/preview-profile/preview-profile.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <div class="title">Which profile would you like to preview?</div>\n    <ion-list>\n      <ion-item class="category" *ngFor="let item of profileData">\n        <img [src]="item.person.image_url.thumb" alt="">\n        <p>{{item.person.last_name}}</p>\n      </ion-item>\n    </ion-list>\n    <button ion-button full clear class="cancel" (click)="dismiss()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/preview-profile/preview-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]])
], PreviewProfilePage);

//# sourceMappingURL=preview-profile.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_medication_select_medication__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_edit_reminder_edit_reminder__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dependent_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reminders_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_local_notification_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_medicine_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RemindersPage = (function () {
    function RemindersPage(navCtrl, modalCtrl, dependentService, remindersService, localNotificationService, storage, userService, loadingCtrl, baseMedicineService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dependentService = dependentService;
        this.remindersService = remindersService;
        this.localNotificationService = localNotificationService;
        this.storage = storage;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.baseMedicineService = baseMedicineService;
        this.taken = {
            used: 0,
            needed: 0
        };
        this.segmentValue = "reminders";
        this.histories = [
            { id: 1, date: 'July 10, 2017', used: 3, needed: 5 },
            { id: 2, date: 'July 9, 2017', used: 3, needed: 5 },
            { id: 3, date: 'July 8, 2017', used: 3, needed: 5 },
            { id: 4, date: 'July 7, 2017', used: 3, needed: 5 },
            { id: 5, date: 'July 6, 2017', used: 3, needed: 3 },
            { id: 6, date: 'July 5, 2017', used: 1, needed: 3 },
            { id: 7, date: 'July 4, 2017', used: 5, needed: 5 }
        ];
        this.taken.needed = 90;
        this.taken.used = 24;
    }
    RemindersPage.prototype.ionViewWillEnter = function () {
        this.getDatas();
    };
    RemindersPage.prototype.getDatas = function () {
        var _this = this;
        this.remindersService.getAll()
            .then(function (res) {
            _this.items = res;
            _this.items.forEach(function (item) {
                _this.storage.get('email').then(function (val) {
                    var email = val;
                    _this.storage.get('auth_token').then(function (val) {
                        var auth_token = val;
                        console.log('dependent_id', item.dependent_id);
                        _this.userService.getPersonalProfiles(auth_token, email, item.dependent_id)
                            .subscribe(function (data) {
                            if (data.success == false) {
                                _this.navCtrl.pop();
                            }
                            else {
                                item.profile = data;
                                console.log('item', item);
                            }
                        }, function (data) {
                            console.log('internet Fails');
                        });
                    });
                });
                _this.baseMedicineService.getForm(item.form_Id)
                    .then(function (res) {
                    item.form = res;
                }, function (err) {
                    console.log(err);
                });
                _this.baseMedicineService.getColor(item.color1_Id)
                    .then(function (res) {
                    item.color1 = res;
                }, function (err) {
                    console.log(err);
                });
                _this.baseMedicineService.getColor(item.color2_Id)
                    .then(function (res) {
                    item.color2 = res;
                }, function (err) {
                    console.log(err);
                });
            });
        }, function (err) {
            console.log(err);
        });
    };
    RemindersPage.prototype.addReminder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_medication_select_medication__["a" /* SelectMedicationPage */]);
    };
    RemindersPage.prototype.showDetail = function (item) {
        var _this = this;
        var editReminderModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_edit_reminder_edit_reminder__["a" /* EditReminderModal */], { reminder: item });
        editReminderModal.onDidDismiss(function () {
            _this.getDatas();
        });
        editReminderModal.present();
    };
    return RemindersPage;
}());
RemindersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reminders',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/reminders/reminders.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-fab class="title-add-button">\n        <button ion-fab (click)="addReminder()"><ion-icon name="md-add"></ion-icon></button>\n      </ion-fab>\n      <img class="header-icon" src="assets/icon/clock.png">\n      <span class="header-name">Reminders</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-segment [(ngModel)]="segmentValue" color="primary">\n  <ion-segment-button value="reminders">\n    Active\n  </ion-segment-button>\n  <ion-segment-button value="history">\n    History\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content>\n\n  <!-- REMINDERS -->\n\n  <div padding class="segment-content" *ngIf="segmentValue==\'reminders\'">\n    <ion-list>\n      <ion-item class="reminder-item" *ngFor="let item of items;" (click)="showDetail(item)">\n        <ion-avatar item-start>\n          <div class="" *ngIf="item.form && item.color1 && item.color2">\n            <div class="m-icon m-icon-pill" *ngIf="item.form.name == \'Pill\'">\n              <div class="icon-left"\n              [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + item.form.file + \')\', \'background-color\': item.color1.color}"\n              ></div>\n              <div class="icon-right"\n              [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + item.form.file + \')\', \'background-color\': item.color2.color}"\n              ></div>\n            </div>\n            <div class="m-icon" *ngIf="item.form.name !== \'Pill\'">\n              <div class="m-icon-normal"\n              [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + item.form.file + \')\', \'background-color\': item.color1.color}"\n              ></div>\n            </div>\n          </div>\n        </ion-avatar>\n        <p class="tablet-name">{{item.name}}</p>\n        <p class="tablet-remain">{{item.quantity}} Remanining</p>\n        <div item-end="" class="tablet-note">\n          <div class="note-button">\n            <img src="assets/icon/continued-circles-vertical.png">\n          </div>\n          <p *ngIf="item.profile">{{item.profile.profile.first_name}}</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- HISTORY -->\n\n  <div class="segment-content" *ngIf="segmentValue==\'history\'">\n    <ion-item>\n      <div item-start>\n        Range:\n      </div>\n      <div item-end>\n        This Week\n      </div>\n    </ion-item>\n    <ion-item>\n      <div item-start>\n        Medication:\n      </div>\n      <div item-end>\n        All Meds\n      </div>\n    </ion-item>\n    <ion-item-divider color="light" class="history-divider">\n      <span>Taken {{taken.used}}/{{taken.needed}}</span>\n    </ion-item-divider>\n    <ion-list>\n      <ion-item class="history-item" *ngFor="let item_history of histories;">\n        <div item-start>\n          {{item_history.date}}\n        </div>\n        <div class="item-taken" item-end>\n          <span>{{item_history.used}}/{{item_history.needed}}</span>\n          <div class="item-taken-icon">\n            <ion-icon name="arrow-down"></ion-icon>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/reminders/reminders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_6__providers_dependent_service__["a" /* DependentService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_reminders_service__["a" /* RemindersService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_local_notification_service__["a" /* LocalNotificationService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_9__providers_base_medicine_service__["a" /* BaseMedicineService */]])
], RemindersPage);

//# sourceMappingURL=reminders.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectMedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_medication_add_medication__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_reminder_new_reminder__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dependent_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reminders_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_base_medicine_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SelectMedicationPage = (function () {
    function SelectMedicationPage(navCtrl, modalCtrl, dependentService, baseMedicineService, remindersService, userService, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dependentService = dependentService;
        this.baseMedicineService = baseMedicineService;
        this.remindersService = remindersService;
        this.userService = userService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.persons = [];
    }
    SelectMedicationPage.prototype.ionViewWillEnter = function () {
        console.log('* Here is Select Medication Page *');
        // this.persons = this.dependentService.getAll();
        this.getDatas();
    };
    SelectMedicationPage.prototype.getDatas = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.storage.get('email').then(function (val) {
            var email = val;
            _this.storage.get('auth_token').then(function (val) {
                var auth_token = val;
                _this.userService.getProfiles(email, auth_token)
                    .subscribe(function (data) {
                    if (data.success == false) {
                        loading.dismiss();
                    }
                    else {
                        _this.persons = data.profiles;
                        console.log(_this.persons);
                        loading.dismiss();
                        _this.persons.forEach(function (person) {
                            _this.remindersService.getForDependent(person.id)
                                .then(function (res) {
                                var items = res;
                                person.reminders = items;
                                person.reminders.forEach(function (reminder) {
                                    _this.baseMedicineService.getForm(reminder.form_Id)
                                        .then(function (res) {
                                        reminder.form = res;
                                    }, function (err) {
                                        console.log(err);
                                        loading.dismiss();
                                    });
                                    _this.baseMedicineService.getColor(reminder.color1_Id)
                                        .then(function (res) {
                                        reminder.color1 = res;
                                    }, function (err) {
                                        console.log(err);
                                        loading.dismiss();
                                    });
                                    _this.baseMedicineService.getColor(reminder.color2_Id)
                                        .then(function (res) {
                                        reminder.color2 = res;
                                    }, function (err) {
                                        console.log(err);
                                        loading.dismiss();
                                    });
                                });
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                            });
                        });
                    }
                }, function (data) {
                    loading.dismiss();
                });
            });
        });
    };
    SelectMedicationPage.prototype.addMedication = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_medication_add_medication__["a" /* AddMedicationPage */], { id: id });
    };
    SelectMedicationPage.prototype.newReminder = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_reminder_new_reminder__["a" /* NewReminderPage */], { id: id });
    };
    return SelectMedicationPage;
}());
SelectMedicationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'select-medication',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/select-medication/select-medication.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Select Medication\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor="let person of persons;">\n      <div class="divider">\n        <img src="{{person.person.image_url.thumb}}" alt="">\n        <span>{{person.first_name}} {{person.last_name}}</span>\n      </div>\n      <ion-list class="medication-list">\n        <ion-item *ngFor="let reminder of person.reminders;" class="medication-item" (click)="newReminder(reminder.id)">\n          <ion-avatar item-start>\n            <!-- <img src="assets/{{reminder.form.file}}" alt=""> -->\n            <div class="tablet-preview">\n              <div class="m-icon m-icon-pill" *ngIf="reminder.form.name == \'Pill\'">\n                <div class="icon-left"\n                [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminder.form.file + \')\', \'background-color\': reminder.color1.color}"\n                ></div>\n                <div class="icon-right"\n                [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminder.form.file + \')\', \'background-color\': reminder.color2.color}"\n                ></div>\n              </div>\n              <div class="m-icon" *ngIf="reminder.form.name !== \'Pill\'">\n                <div class="m-icon-normal"\n                [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + reminder.form.file + \')\', \'background-color\': reminder.color1.color}"\n                ></div>\n              </div>\n            </div>\n          </ion-avatar>\n          <h2>{{reminder.name}}</h2>\n          <div item-end>\n            <ion-icon name="arrow-forward"></ion-icon>\n          </div>\n        </ion-item>\n        <ion-item class="medication-item-add" (click)="addMedication(person.id)">\n          <div class="icon" item-start>\n            <ion-icon name="md-add"></ion-icon>\n          </div>\n          <h2>Add New Medication</h2>\n          <div item-end>\n            <ion-icon name="arrow-forward"></ion-icon>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/select-medication/select-medication.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_5__providers_dependent_service__["a" /* DependentService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_base_medicine_service__["a" /* BaseMedicineService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_reminders_service__["a" /* RemindersService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], SelectMedicationPage);

//# sourceMappingURL=select-medication.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewReminderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reminders_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_medicine_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewReminderPage = (function () {
    function NewReminderPage(navCtrl, navParams, viewCtrl, loadingCtrl, remindersService, baseMedicineService, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.remindersService = remindersService;
        this.baseMedicineService = baseMedicineService;
        this.alertController = alertController;
        this.loaded = false;
        this.reminderData = {};
        this.tablet_image = "assets/icon/clock.png";
        this.reminderData.id = this.navParams.get("id");
        this.reminderData.take_as_needed = true;
        this.loading = this.loadingCtrl.create();
        this.dailyReminderColumns = [
            {
                name: 'time',
                options: [
                    { text: '01:', value: '1' },
                    { text: '02:', value: '2' },
                    { text: '03:', value: '3' },
                    { text: '04:', value: '4' },
                    { text: '05:', value: '5' },
                    { text: '06:', value: '6' },
                    { text: '07:', value: '7' },
                    { text: '08:', value: '8' },
                    { text: '09:', value: '9' },
                    { text: '10:', value: '10' },
                    { text: '11:', value: '11' },
                    { text: '12:', value: '12' }
                ]
            }, {
                name: 'minute',
                options: [
                    { text: '00', value: '0' },
                    { text: '05', value: '5' },
                    { text: '10', value: '10' },
                    { text: '15', value: '15' },
                    { text: '20', value: '20' },
                    { text: '25', value: '25' },
                    { text: '30', value: '30' },
                    { text: '35', value: '35' },
                    { text: '40', value: '40' },
                    { text: '45', value: '45' },
                    { text: '50', value: '50' },
                    { text: '55', value: '55' }
                ]
            }, {
                name: 'ap',
                options: [
                    { text: 'AM', value: '1' },
                    { text: 'PM', value: '2' }
                ]
            }
        ];
        this.weeklyReminderColumns = [
            {
                name: 'day',
                options: [
                    { text: 'Sun', value: '1' },
                    { text: 'Mon', value: '2' },
                    { text: 'Tue', value: '3' },
                    { text: 'Wed', value: '4' },
                    { text: 'Thu', value: '5' },
                    { text: 'Fri', value: '6' },
                    { text: 'Sat', value: '7' }
                ]
            }, {
                name: 'time',
                options: [
                    { text: '01:', value: '1' },
                    { text: '02:', value: '2' },
                    { text: '03:', value: '3' },
                    { text: '04:', value: '4' },
                    { text: '05:', value: '5' },
                    { text: '06:', value: '6' },
                    { text: '07:', value: '7' },
                    { text: '08:', value: '8' },
                    { text: '09:', value: '9' },
                    { text: '10:', value: '10' },
                    { text: '11:', value: '11' },
                    { text: '12:', value: '12' }
                ]
            }, {
                name: 'minute',
                options: [
                    { text: '00', value: '0' },
                    { text: '05', value: '5' },
                    { text: '10', value: '10' },
                    { text: '15', value: '15' },
                    { text: '20', value: '20' },
                    { text: '25', value: '25' },
                    { text: '30', value: '30' },
                    { text: '35', value: '35' },
                    { text: '40', value: '40' },
                    { text: '45', value: '45' },
                    { text: '50', value: '50' },
                    { text: '55', value: '55' }
                ]
            }, {
                name: 'ap',
                options: [
                    { text: 'AM', value: '1' },
                    { text: 'PM', value: '2' }
                ]
            }
        ];
        this.frequencyColumns = [
            {
                name: 'times',
                parentCol: 'schedule',
                options: [
                    { text: '1', value: '1', parentVal: '1' },
                    { text: '2', value: '2', parentVal: '1' },
                    { text: '3', value: '3', parentVal: '1' },
                    { text: '4', value: '4', parentVal: '1' },
                    { text: '5', value: '5', parentVal: '1' },
                    { text: '6', value: '6', parentVal: '1' },
                    { text: '1', value: '1', parentVal: '2' },
                    { text: '2', value: '2', parentVal: '2' },
                    { text: '3', value: '3', parentVal: '2' },
                    { text: '4', value: '4', parentVal: '2' },
                    { text: '5', value: '5', parentVal: '2' },
                    { text: '6', value: '6', parentVal: '2' },
                    { text: '7', value: '7', parentVal: '2' },
                    { text: '8', value: '8', parentVal: '2' },
                    { text: '9', value: '9', parentVal: '2' },
                    { text: '10', value: '10', parentVal: '2' },
                    { text: '11', value: '11', parentVal: '2' },
                    { text: '12', value: '12', parentVal: '2' },
                    { text: '13', value: '13', parentVal: '2' },
                    { text: '14', value: '14', parentVal: '2' }
                ]
            }, {
                name: 'schedule',
                options: [
                    { text: 'Daily', value: '1' },
                    { text: 'Weekly', value: '2' },
                ]
            }
        ];
    }
    NewReminderPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.viewCtrl.showBackButton(false);
        this.loading.present();
        this.remindersService.get(this.reminderData.id)
            .then(function (res) {
            _this.reminderData = res;
            console.log(_this.reminderData);
            _this.initReminders();
            var stringToSpilt = _this.reminderData.frequency;
            var x = stringToSpilt.split(" ");
            var times = +x[0];
            _this.schedule = +x[2];
            _this.baseMedicineService.getForm(_this.reminderData.form_Id)
                .then(function (res) {
                _this.reminderData.form = res;
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
            });
            _this.baseMedicineService.getColor(_this.reminderData.color1_Id)
                .then(function (res) {
                _this.reminderData.color1 = res;
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
            });
            _this.baseMedicineService.getColor(_this.reminderData.color2_Id)
                .then(function (res) {
                _this.reminderData.color2 = res;
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
            });
            _this.loaded = true;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    NewReminderPage.prototype.initReminders = function () {
        var stringToSpilt = this.reminderData.frequency;
        var x = stringToSpilt.split(" ");
        var times = +x[0];
        this.schedule = +x[2];
        console.log(this.reminderData.reminders.length);
        if (!this.reminderData.reminders.length) {
            this.reminderData.reminders = [];
            var weeknum = 1;
            switch (this.schedule) {
                case 1:
                    console.warn('initate reminder columns for Daily schedule');
                    for (var i = 1; i <= times; i++) {
                        this.reminderData.reminders.push({ value: i + " 0 1" });
                    }
                    break;
                case 2:
                    console.warn('initate reminder columns for Weekly schedule');
                    for (var i = 1; i <= times; i++) {
                        if (weeknum > 7)
                            weeknum = 1;
                        this.reminderData.reminders.push({ value: weeknum + " 8 0 1" });
                        weeknum++;
                    }
                    break;
                default:
                    break;
            }
        }
    };
    NewReminderPage.prototype.onChangeFrequency = function (e) {
        this.initReminders();
    };
    NewReminderPage.prototype.onChangeTake = function (e) {
        this.reminderData.scheduled = !this.reminderData.take_as_needed;
    };
    NewReminderPage.prototype.onChangeSchedule = function (e) {
        this.reminderData.take_as_needed = !this.reminderData.scheduled;
    };
    NewReminderPage.prototype.checkValidate = function () {
        var retVal = true;
        if (!this.reminderData.quantity) {
            return false;
        }
        return retVal;
    };
    NewReminderPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    NewReminderPage.prototype.onSave = function () {
        var _this = this;
        if (this.checkValidate()) {
            this.remindersService.update(this.reminderData)
                .then(function (res) {
                console.log(res);
                _this.navCtrl.pop();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            var alert_1 = this.alertController.create({
                title: 'Warning',
                subTitle: 'Please fill in the fields required in red.',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    return NewReminderPage;
}());
NewReminderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-reminder',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/new-reminder/new-reminder.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start class="cancel">\n      <button (click)="onCancel()">Cancel</button>\n    </ion-buttons>\n    <p class="spec-title">New Reminder</p>\n\n    <div class="tablet-cover">\n      <img src="{{tablet_image}}" class="tablet">\n    </div>\n\n    <ion-buttons end class="save">\n      <button (click)="onSave()"><ion-icon name="md-checkmark"></ion-icon>&nbsp;Save</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="tablet-preview" *ngIf="loaded">\n    <div class="m-icon m-icon-pill" *ngIf="reminderData.form.name == \'Pill\'">\n      <div class="icon-left"\n      [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color1.color}"\n      ></div>\n      <div class="icon-right"\n      [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color2.color}"\n      ></div>\n    </div>\n    <div class="m-icon" *ngIf="reminderData.form.name !== \'Pill\'">\n      <div class="m-icon-normal"\n      [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color1.color}"\n      ></div>\n    </div>\n\n    <h3>{{reminderData.name}}</h3>\n  </div>\n\n  <ion-item class="reminder-item" [ngClass]="{invalid: !reminderData.quantity}">\n    <ion-label>Current quantity</ion-label>\n    <ion-input type="tel" placeholder="Amount remaining" [(ngModel)]="reminderData.quantity"></ion-input>\n  </ion-item>\n\n  <div class="space"></div>\n\n  <ion-item class="reminder-item">\n    <ion-label>Take as needed</ion-label>\n    <ion-toggle [(ngModel)]="reminderData.take_as_needed" (ngModelChange)="onChangeTake($event)"></ion-toggle>\n  </ion-item>\n\n  <ion-item class="reminder-item">\n    <ion-label>Interval Schedule</ion-label>\n    <ion-toggle [(ngModel)]="reminderData.scheduled" (ngModelChange)="onChangeSchedule($event)"></ion-toggle>\n  </ion-item>\n\n  <ion-item  class="reminder-item">\n      <ion-label [ngClass]="{disabled: !reminderData.scheduled}">Frequency</ion-label>\n      <ion-multi-picker [(ngModel)] = "reminderData.frequency"\n                        separator=" times " item-content [multiPickerColumns]="frequencyColumns" (ngModelChange)="onChangeFrequency($event)"\n                        [ngClass]="{disabled: !reminderData.scheduled}"\n                        [disabled]="!reminderData.scheduled"></ion-multi-picker>\n  </ion-item>\n\n  <ion-list>\n    <ion-item class="" *ngFor="let reminder of reminderData.reminders; let i = index">\n      <ion-label [ngClass]="{disabled: !reminderData.scheduled}">Reminder</ion-label>\n      <ion-multi-picker *ngIf="schedule==1" [(ngModel)] = "reminderData.reminders[i].value" item-content [multiPickerColumns]="dailyReminderColumns"\n                        [ngClass]="{disabled: !reminderData.scheduled}"\n                        [disabled]="!reminderData.scheduled"></ion-multi-picker>\n      <ion-multi-picker *ngIf="schedule==2" [(ngModel)] = "reminderData.reminders[i].value" item-content [multiPickerColumns]="weeklyReminderColumns"\n                        [ngClass]="{disabled: !reminderData.scheduled}"\n                        [disabled]="!reminderData.scheduled"></ion-multi-picker>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/new-reminder/new-reminder.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_reminders_service__["a" /* RemindersService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_base_medicine_service__["a" /* BaseMedicineService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], NewReminderPage);

//# sourceMappingURL=new-reminder.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_dependent_add_dependent__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_sharing_manage_sharing__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__link_new_link_new__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MorePage = (function () {
    function MorePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    MorePage.prototype.goAddDependentPage = function () {
        console.log('go AddDependent Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_dependent_add_dependent__["a" /* AddDependentPage */]);
        profileModal.present();
    };
    MorePage.prototype.goManageSharingPage = function () {
        console.log('go ManageSharing Page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__manage_sharing_manage_sharing__["a" /* ManageSharingPage */]);
    };
    MorePage.prototype.goLinkNewPage = function () {
        console.log('go LinkNew Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__link_new_link_new__["a" /* LinkNewPage */]);
        profileModal.present();
    };
    MorePage.prototype.goSettingsPage = function () {
        console.log('go SettingsPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-more',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/more/more.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      More\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-clr">\n\n  <ion-list style="margin-top: 30px;">\n\n    <ion-item class="list-item" (click)="goAddDependentPage()">\n      <img src="assets/icon/gray/person.png" item-start class="start_icon">\n        Add Dependent Page\n    </ion-item>\n\n    <ion-item class="list-item" (click)="goManageSharingPage()">\n      <img src="assets/icon/gray/share-2.png" item-start class="start_icon">\n        Manage Sharing\n    </ion-item>\n\n    <ion-item class="list-item" (click)="goLinkNewPage()">\n      <img src="assets/icon/gray/add-link.png" item-start class="start_icon">\n        Link New Product\n    </ion-item>\n\n  </ion-list>\n\n  <!-- <button ion-button outline large full class="setting" (click)="goSettingsPage()">\n    <ion-icon name="ios-settings-outline" class="left"></ion-icon>\n    <p>Settings</p>\n    <ion-icon name="ios-arrow-forward-outline" class="right"></ion-icon>\n  </button> -->\n\n  <ion-list style="margin-top: 30px;">\n    <ion-item class="list-item" (click)="goSettingsPage()">\n\n\n      <!-- <img src="assets/icon/gray/atom.png" item-start class="start_icon"> -->\n        <ion-icon name="ios-settings-outline" item-start></ion-icon>\n        Settings\n      <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/more/more.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_touch_id__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_email_update_email__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__group_code_group_code__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__passcode_passcode__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__passcode_setting_passcode_setting__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SettingsPage = (function () {
    function SettingsPage(navCtrl, modalCtrl, touchId, storage, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.touchId = touchId;
        this.storage = storage;
        this.app = app;
        this.touch = true;
        this.settings = [{ id: 0, name: 'Change Password', page: __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */], icon: 'ios-key-outline' },
            { id: 1, name: 'Update Email Address', page: __WEBPACK_IMPORTED_MODULE_5__update_email_update_email__["a" /* UpdateEamilPage */], icon: 'ios-at-outline' },
            { id: 2, name: 'Notifications', page: __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__["a" /* NotificationsPage */], icon: 'ios-notifications-outline' },
            { id: 3, name: 'Group Code', page: __WEBPACK_IMPORTED_MODULE_7__group_code_group_code__["a" /* GroupCodePage */], icon: 'ios-people-outline' },
        ];
        this.storage.get('passcode').then(function (val) {
            _this.passValue = val;
        });
        this.passTrue = false;
    }
    SettingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('passcode').then(function (val) {
            _this.passValue = val;
            if (_this.passValue) {
                _this.passTrue = true;
            }
            else {
                _this.passTrue = false;
            }
            console.log('passValue', _this.passValue);
        });
    };
    SettingsPage.prototype.onCategoryClick = function (event, page) {
        console.log(page);
        this.navCtrl.push(page);
    };
    SettingsPage.prototype.touchChange = function () {
        console.log('true');
        this.goPasscodePage();
    };
    SettingsPage.prototype.goPasscodePage = function () {
        var _this = this;
        console.log(this.passValue);
        this.storage.get('passcode').then(function (val) {
            console.log("ResumeSubscription");
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__passcode_setting_passcode_setting__["a" /* PasscodeSettingPage */], {
                val: 'background'
            });
            _this.storage.get('passcode').then(function (val) {
                if (val == null) {
                    console.log("go Passcode");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__passcode_passcode__["a" /* PasscodePage */]);
                }
                else {
                    console.log("run passcode page");
                    profileModal.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__passcode_passcode__["a" /* PasscodePage */]);
                }
            });
        });
    };
    SettingsPage.prototype.logOut = function () {
        this.storage.set('data', null);
        this.storage.set('email', "");
        this.storage.set('auth_token', "");
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
        // this.navCtrl.setRoot(MainPage);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-clr">\n  <ion-list style="margin-top: 30px;">\n\n    <!-- <ion-item class="list-item" *ngFor="let item of settings" (click)="onCategoryClick($event, item.page)">\n      <img src="assets/icon/gray/{{item.icon}}.png" item-start class="start_icon">\n        {{item.name}}\n      <ion-icon name="ios-arrow-forward-outline" item-end style="color: #569ef7;"></ion-icon>\n    </ion-item> -->\n\n    <ion-item class="list-item" *ngFor="let item of settings" (click)="onCategoryClick($event, item.page)">\n      <ion-icon name="{{item.icon}}" item-start style="font-size: 35px;"></ion-icon>\n        {{item.name}}\n      <ion-icon name="ios-arrow-forward-outline" item-end style="color: #569ef7;"></ion-icon>\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-item class="toggle-button" (click)="goPasscodePage()">\n    <ion-icon name="ios-finger-print" item-start></ion-icon>\n    <ion-label>Set Passcode</ion-label>\n    <ion-toggle [(ngModel)]="passTrue" (ionChange)="touchChange()"></ion-toggle>\n  </ion-item>\n\n  <p class="explain">Allow your fingerprint to unlock the MyID app</p>\n\n  <button ion-button outline large full class="sign-out" (click)="logOut()">\n    Sign Out from MyID\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_touch_id__["a" /* TouchID */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
    }
    ChangePasswordPage.prototype.updatePassword = function () {
        var _this = this;
        if (this.current_pass == '' || this.current_pass == null) {
            var alert_1 = this.alertCtrl.create({
                title: "Error", subTitle: "Please Enter Current Password", buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.new_pass == '' || this.new_pass == null) {
            var alert_2 = this.alertCtrl.create({
                title: "Error", subTitle: "Please Enter New Password", buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.confirm_pass == '' || this.confirm_pass == null) {
            var alert_3 = this.alertCtrl.create({
                title: "Error", subTitle: "Please Enter Confirm Password", buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.new_pass != this.confirm_pass) {
            var alert_4 = this.alertCtrl.create({
                title: "Error", subTitle: "Please change confirm password", buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: "Success", subTitle: "Success", buttons: ['OK']
            });
            alert_5.present();
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            var body_1 = { "current_password": this.current_pass, "user": { "password": this.new_pass, "password_confirmation": this.confirm_pass } };
            console.log(body_1);
            this.storage.get('email').then(function (val) {
                _this.email = val;
                _this.storage.get('auth_token').then(function (val) {
                    _this.auth_token = val;
                    _this.userService.updateInfo(_this.email, _this.auth_token, body_1)
                        .subscribe(function (data) {
                        loading_1.dismiss();
                        console.log("Profile Data: ", data);
                        if (data.success == false && data.error_code == "0102") {
                            var alert_6 = _this.alertCtrl.create({
                                title: "Error", subTitle: "Email has already been taken", buttons: ['OK']
                            });
                            alert_6.present();
                        }
                        else if (data.success == false) {
                            var alert_7 = _this.alertCtrl.create({
                                title: "Error", subTitle: "Updated Error ", buttons: ['OK']
                            });
                            alert_7.present();
                        }
                        else {
                            // this.flagService.setChangedFlag(true);
                            var alert_8 = _this.alertCtrl.create({
                                title: "Updated", subTitle: "Update Success", buttons: ['OK']
                            });
                            alert_8.present();
                            console.log(data);
                            _this.storage.set('email', data.user.email);
                            _this.storage.set('auth_token', data.user.authentication_token);
                            _this.navCtrl.pop();
                        }
                    });
                });
            });
        }
    };
    ChangePasswordPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-change-password',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/change-password/change-password.html"*/'<div class="nav-bar">\n  <div class="dd">\n    <p>Change Password</p>\n  </div>\n  <div class="feature">\n    <button ion-button clear style="left: 0;" (click)="dismiss()"><ion-icon name="ios-arrow-back"></ion-icon>Back</button>\n  </div>\n</div>\n<ion-content class="content-box">\n  <ion-list class="data">\n\n    <ion-item>\n      <ion-label>Current Password</ion-label>\n      <ion-input type="password" placeholder="Current Password" [(ngModel)]="current_pass"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list class="data">\n    <ion-item>\n      <ion-label>New Password</ion-label>\n      <ion-input type="password" placeholder="New Password" [(ngModel)]="new_pass"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Comfirm Password</ion-label>\n      <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="confirm_pass"></ion-input>\n    </ion-item>\n\n  </ion-list>\n<button ion-button outline round full large (click)="updatePassword()" class="update">Update Password</button>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/change-password/change-password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateEamilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateEamilPage = (function () {
    function UpdateEamilPage(navCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.storage.get('email').then(function (val) {
            _this.email = val;
        });
        this.new_email = '';
        this.auth_token = "";
    }
    UpdateEamilPage.prototype.updateEmail = function () {
        var _this = this;
        if (this.current_pass == '' || this.current_pass == null) {
            var alert_1 = this.alertCtrl.create({
                title: "Error", subTitle: "Please Enter Current Password", buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Success", subTitle: "Success", buttons: ['OK']
            });
            alert_2.present();
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            var body_1 = { "current_password": this.current_pass, "user": { "email": this.new_email } };
            console.log(body_1);
            this.storage.get('auth_token').then(function (val) {
                _this.auth_token = val;
                _this.userService.updateInfo(_this.email, _this.auth_token, body_1)
                    .subscribe(function (data) {
                    loading_1.dismiss();
                    console.log("Profile Data: ", data);
                    if (data.success == false && data.error_code == "0102") {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Email has already been taken", buttons: ['OK']
                        });
                        alert_3.present();
                    }
                    else if (data.success == false) {
                        var alert_4 = _this.alertCtrl.create({
                            title: "Error", subTitle: "Updated Error ", buttons: ['OK']
                        });
                        alert_4.present();
                    }
                    else {
                        // this.flagService.setChangedFlag(true);
                        var alert_5 = _this.alertCtrl.create({
                            title: "Updated", subTitle: "Update Success", buttons: ['OK']
                        });
                        alert_5.present();
                        console.log(data);
                        _this.storage.set('email', data.user.email);
                        _this.storage.set('auth_token', data.user.authentication_token);
                        _this.navCtrl.pop();
                    }
                });
            });
        }
    };
    UpdateEamilPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    return UpdateEamilPage;
}());
UpdateEamilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-update-email',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/update-email/update-email.html"*/'<div class="nav-bar">\n  <div class="dd">\n    <p>Update Email Address</p>\n  </div>\n  <div class="feature">\n    <button ion-button clear style="left: 0;" (click)="dismiss()"><ion-icon name="ios-arrow-back"></ion-icon>Back</button>\n  </div>\n</div>\n<ion-content class="content-box">\n  <ion-list class="data">\n\n    <ion-item>\n      <ion-label>Current Eamil</ion-label>\n      <ion-input type="Email" placeholder="Current Email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Current Password</ion-label>\n      <ion-input type="password" placeholder="Current Email" [(ngModel)]="current_pass"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list class="data">\n    <ion-item>\n      <ion-label>Update Email</ion-label>\n      <ion-input type="Email" placeholder="Update Email" [(ngModel)]="new_email"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n  <button ion-button outline round full large (click)="updateEmail()" class="update">Update Email Address</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/update-email/update-email.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_flag__["a" /* Flags */]])
], UpdateEamilPage);

//# sourceMappingURL=update-email.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupCodePage = (function () {
    function GroupCodePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return GroupCodePage;
}());
GroupCodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-group-code',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/group-code/group-code.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Group Code\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/group-code/group-code.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], GroupCodePage);

//# sourceMappingURL=group-code.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasscodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__passcode_setting_passcode_setting__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasscodePage = (function () {
    function PasscodePage(navCtrl, modalCtrl, navParams, storage, userService, loadingCtrl) {
        // private flagService: Flags,
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.isDisable = false;
        console.log("ionViewDidEnter");
        this.storage.get('passcode').then(function (val) {
            _this.passValue = val;
            console.log(_this.passValue);
            if (!_this.passValue) {
                _this.isDisable = true;
            }
            else {
                _this.isDisable = false;
            }
        });
    }
    PasscodePage.prototype.setPasscode = function (val) {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__passcode_setting_passcode_setting__["a" /* PasscodeSettingPage */], {
            val: val
        });
        profileModal.onDidDismiss(function (data) {
            _this.storage.get('passcode').then(function (val) {
                _this.passValue = val;
                console.log(_this.passValue);
                if (!_this.passValue) {
                    _this.isDisable = true;
                }
                else {
                    _this.isDisable = false;
                }
            });
        });
        profileModal.present();
    };
    PasscodePage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    return PasscodePage;
}());
PasscodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-passcode',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/passcode/passcode.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon style="color:white;" name="menu"></ion-icon>\n    </button>\n\n    <ion-title class="response-android"><img src="assets/image/sidemenu_logo.png" style="height:30px;"/></ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<div class="nav-bar">\n  <div class="dd">\n    <p>Passcode Setting</p>\n  </div>\n  <div class="feature">\n    <button ion-button clear style="left: 0;" (click)="dismiss()"><ion-icon name="ios-arrow-back"></ion-icon>Back</button>\n  </div>\n</div>\n\n<ion-content class="content-box">\n  <div style="margin-top: 15vh;">\n    <button ion-button full  color="light" class="setting_btn" (click)="setPasscode(\'set\')">\n      <p *ngIf="!passValue" class="title">Turn Passcode On</p>\n      <p *ngIf="passValue" class="title">Turn Passcode Off</p>\n      <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n    </button>\n    <button [disabled]="isDisable" ion-button full  color="light" class="setting_btn" (click)="setPasscode(\'change\')">\n      <p class="title">Change Passcode</p>\n      <ion-icon name="ios-arrow-forward-outline" style="margin-right: -5px;"></ion-icon>\n    </button>\n</div>\n\n  <p class="details">Your phone will be signed out from MyID after 10 failed passcode atempts</p>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/passcode/passcode.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], PasscodePage);

//# sourceMappingURL=passcode.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, viewCtrl, alertCtrl, loadingCtrl, userService, storage) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.validEmail = false;
        this.user = { email: '', password: '', confirm_pw: '' };
    }
    SignupPage.prototype.validEmailAddress = function () {
        this.validEmail = this.ValidationEmail(this.user.email);
    };
    SignupPage.prototype.ValidationEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignupPage.prototype.doSignup = function () {
        var val_email = this.ValidationEmail(this.user.email);
        console.log(val_email);
        if (this.user.email == '' || !this.user.email) {
            var alert_1 = this.alertCtrl.create({
                title: "Alert", subTitle: "Please enter Email", buttons: ['OK']
            });
            alert_1.present();
        }
        else if (val_email == false) {
            var alert_2 = this.alertCtrl.create({
                title: "Email Validation Failed", subTitle: "Email is invalid", buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.user.password == '' || !this.user.password || this.user.confirm_pw == '' || !this.user.confirm_pw) {
            var alert_3 = this.alertCtrl.create({
                title: "Alert", subTitle: "Please enter Password", buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.user.password != this.user.confirm_pw) {
            var alert_4 = this.alertCtrl.create({
                title: "Alert", subTitle: "Password doesn't match confirmation", buttons: ['OK']
            });
            alert_4.present();
        }
        else if (this.user.password.length < 6) {
            var alert_5 = this.alertCtrl.create({
                title: "Alert", subTitle: "Password is to short (minimum of 6 characters)", buttons: ['OK']
            });
            alert_5.present();
        }
        else {
            this.registerUser(this.user.email, this.user.password, this.user.confirm_pw);
        }
    };
    SignupPage.prototype.registerUser = function (email, password, confirm_pw) {
        var _this = this;
        console.log('Email ' + email + 'Password ' + password);
        console.log("go MainPage");
        var loading = this.loadingCtrl.create();
        loading.present();
        this.userService.signup(email, password, confirm_pw)
            .subscribe(function (data) {
            loading.dismiss();
            console.log("Signup Data:", data);
            if (data.success == false && data.error_code == "0102") {
                var alert_6 = _this.alertCtrl.create({
                    title: "Error", subTitle: "Email has already been taken", buttons: ['OK']
                });
                alert_6.present();
            }
            else if (data.success == false) {
                var alert_7 = _this.alertCtrl.create({
                    title: "Error", subTitle: "Signup Error", buttons: ['OK']
                });
                alert_7.present();
                _this.navCtrl.pop();
            }
            else {
                _this.storage.set('data', data);
                _this.storage.set('email', data.user.email);
                _this.storage.set('auth_token', data.user.authentication_token);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
        }, function (data) {
            loading.dismiss();
            console.log("SignupError");
            var alert = _this.alertCtrl.create({
                title: "Error", subTitle: "Signup Error", buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.pop();
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/signup/signup.html"*/'<ion-header hideBackButton>\n  <ion-navbar>\n    <ion-title>\n      Sign Up\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="signup">\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Email</ion-label>\n      <ion-input type="text" class="mail" placeholder="Email Address" [(ngModel)]="user.email" (ionChange)="validEmailAddress()"></ion-input>\n      <ion-label *ngIf="validEmail" class="check"> <ion-icon name="md-checkmark"></ion-icon></ion-label>\n    </ion-item>\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Password</ion-label>\n      <ion-input type="password" class="mail" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Confirm Password</ion-label>\n      <ion-input type="password" class="mail" placeholder="Confirm Password" [(ngModel)]="user.confirm_pw"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full large color="secondary" (click)="doSignup()">Sign Up</button>\n  <p class="nav">My tapping Sign Up . I agree to MyID\'s Terms of Service and Privacy Statement.</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(432);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_notification_service__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemindersService = (function () {
    function RemindersService(sqlite, baseService, localNotificationService) {
        this.sqlite = sqlite;
        this.baseService = baseService;
        this.localNotificationService = localNotificationService;
        this.reminders = [
            {
                color1_Id: 2,
                color2_Id: 3,
                dependent_id: 1,
                dose: 1,
                form_Id: 2,
                frequency: "3 times 1",
                id: 1,
                name: 1,
                note: "",
                visible: true,
                refil_date: "",
                start_date: ""
            }
        ];
        this.maxId = 1;
    }
    RemindersService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                })
                    .then(function (db) {
                    db.executeSql("SELECT * FROM reminders", [])
                        .then(function (data) {
                        var retVal = [];
                        if (data.rows.length > 0) {
                            for (var i = 0; i < data.rows.length; i++) {
                                var retValItem = {
                                    reminders: ''
                                };
                                retValItem = data.rows.item(i);
                                if (retValItem.reminders) {
                                    retValItem.reminders = JSON.parse(retValItem.reminders);
                                }
                                retVal.push(retValItem);
                            }
                        }
                        resolve(retVal);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    RemindersService.prototype.getForDependent = function (id) {
        var _this = this;
        console.log(id);
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                })
                    .then(function (db) {
                    db.executeSql("SELECT * FROM reminders WHERE dependent_id = " + id, [])
                        .then(function (data) {
                        var retVal = [];
                        if (data.rows.length > 0) {
                            for (var i = 0; i < data.rows.length; i++) {
                                var retValItem = {
                                    reminders: ''
                                };
                                retValItem = data.rows.item(i);
                                if (retValItem.reminders) {
                                    retValItem.reminders = JSON.parse(retValItem.reminders);
                                }
                                retVal.push(retValItem);
                            }
                        }
                        resolve(retVal);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    RemindersService.prototype.getForToday = function () {
        var _this = this;
        var today = new Date();
        var dayCode = today.getDay() + 1;
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                })
                    .then(function (db) {
                    db.executeSql("SELECT * FROM reminders WHERE scheduled = " + 1, [])
                        .then(function (data) {
                        var retVal = [];
                        if (data.rows.length > 0) {
                            for (var i = 0; i < data.rows.length; i++) {
                                var itemTem = data.rows.item(i);
                                var freq = itemTem.frequency;
                                var x = freq.split(" ");
                                var schedule = +x[2];
                                if (schedule == 1) {
                                    if (itemTem.reminders) {
                                        var remindersTem = JSON.parse(itemTem.reminders);
                                        for (var k = 0; k < remindersTem.length; k++) {
                                            var kkk = remindersTem[k].value.split(" ");
                                            retVal.push({
                                                id: itemTem.id,
                                                name: itemTem.name,
                                                reminder: {
                                                    time: kkk[0],
                                                    minute: kkk[1],
                                                    ap: kkk[2] == 1 ? "AM" : "PM"
                                                }
                                            });
                                        }
                                    }
                                }
                                else if (schedule == 2) {
                                    if (itemTem.reminders) {
                                        var remindersTem = JSON.parse(itemTem.reminders);
                                        console.log(remindersTem);
                                        if (remindersTem.length) {
                                            for (var j = 0; j < remindersTem.length; j++) {
                                                var reminder = remindersTem[j].value.split(" ");
                                                var myDay = reminder[0];
                                                if (myDay == dayCode) {
                                                    retVal.push({
                                                        id: itemTem.id,
                                                        name: itemTem.name,
                                                        reminder: {
                                                            time: reminder[1],
                                                            minute: reminder[2],
                                                            ap: reminder[3] == 1 ? "AM" : "PM"
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    }
                                    console.log(data.rows.item(i));
                                }
                            }
                        }
                        resolve(retVal);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    RemindersService.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                })
                    .then(function (db) {
                    db.executeSql("SELECT * FROM reminders WHERE id = " + id, [])
                        .then(function (data) {
                        var retVal = {
                            reminders: ''
                        };
                        if (data.rows.length > 0) {
                            retVal = data.rows.item(0);
                            if (retVal.reminders) {
                                retVal.reminders = JSON.parse(retVal.reminders);
                            }
                        }
                        resolve(retVal);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    RemindersService.prototype.add = function (data) {
        var _this = this;
        var value = {
            color1_Id: +data.color1_Id,
            color2_Id: +data.color2_Id,
            form_Id: +data.form_Id,
            dependent_id: +data.dependent_id,
            dose: +data.dose,
            frequency: data.frequency,
            name: data.name,
            note: data.note,
            reminders: data.reminders ? JSON.stringify(data.reminders) : "",
            quantity: data.quantity ? data.quantity : 0,
            take_as_needed: data.take_as_needed ? 1 : 0,
            scheduled: data.scheduled ? 1 : 0
        };
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                })
                    .then(function (db) {
                    db.executeSql("SELECT * FROM reminders WHERE name = (?) AND dependent_id = (?)", [value.name, value.dependent_id])
                        .then(function (data) {
                        if (data.rows.length > 0) {
                            resolve('exist');
                        }
                        else {
                            db.executeSql("\
                            INSERT INTO\
                            reminders (\
                              color1_Id,\
                              color2_Id,\
                              form_Id,\
                              dependent_id,\
                              dose,\
                              frequency,\
                              name,\
                              note,\
                              reminders,\
                              quantity,\
                              take_as_needed,\
                              scheduled)\
                            VALUES (\
                              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\
                            ", [value.color1_Id, value.color2_Id, value.form_Id, value.dependent_id, value.dose, value.frequency, value.name, value.note, value.reminders, value.quantity, value.take_as_needed, value.scheduled])
                                .then(function (data) {
                                console.log(JSON.stringify(data.rows.item(0)));
                                resolve(data.rows.item(0));
                            })
                                .catch(function (err) {
                                console.log(err);
                                reject(err);
                            });
                        }
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    RemindersService.prototype.update = function (data) {
        var _this = this;
        this.localNotificationService.addNotification(data);
        var value = {
            color1_Id: +data.color1_Id,
            color2_Id: +data.color2_Id,
            form_Id: +data.form_Id,
            dependent_id: +data.dependent_id,
            dose: +data.dose,
            frequency: data.frequency,
            name: data.name,
            note: data.note,
            reminders: data.reminders ? JSON.stringify(data.reminders) : "",
            quantity: data.quantity ? data.quantity : 0,
            take_as_needed: data.take_as_needed ? 1 : 0,
            scheduled: data.scheduled ? 1 : 0
        };
        var that = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                })
                    .then(function (db) {
                    db.executeSql("UPDATE reminders SET color1_Id=(?), color2_Id=(?), form_Id=(?), dependent_id=(?), dose=(?), frequency=(?), name=(?), note=(?), reminders=(?), quantity=(?), take_as_needed=(?), scheduled=(?) WHERE id=" + data.id, [value.color1_Id, value.color2_Id, value.form_Id, value.dependent_id, value.dose, value.frequency, value.name, value.note, value.reminders, value.quantity, value.take_as_needed, value.scheduled])
                        .then(function (data) {
                        resolve('ok');
                    })
                        .catch(function (err) {
                        console.log(err);
                        reject(err);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    RemindersService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                })
                    .then(function (db) {
                    db.executeSql("DELETE FROM reminders WHERE id = (?)", [id])
                        .then(function (data) {
                        resolve('ok');
                    })
                        .catch(function (err) {
                        console.log(err);
                        reject(err);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return RemindersService;
}());
RemindersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_2__providers_base_service__["a" /* BaseService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_local_notification_service__["a" /* LocalNotificationService */]])
], RemindersService);

//# sourceMappingURL=reminders-service.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion_multi_picker__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_action_sheet__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_crop__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_touch_id__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ionic2_alpha_scroll__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_main_main__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_home__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_inbox_inbox__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_more_more__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_personal_info_personal_info__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_vital_medical_vital_medical__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_vital_edit_vital_edit__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_emergency_emergency__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_emergency_edit_emergency_edit__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_allergies_allergies__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_allergies_edit_allergies_edit__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_medications_medications__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_medications_edit_medications_edit__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_physicians_physicians__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_physicians_edit_physicians_edit__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_insurance_info_insurance_info__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_insurance_edit_insurance_edit__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_surgeries_surgeries__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_surgeries_edit_surgeries_edit__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_labs_labs__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_labs_edit_labs_edit__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_living_will_living_will__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_dnr_dnr__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_family_history_family_history__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_family_history_edit_family_history_edit__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_immunizations_immunizations__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_immunizations_edit_immunizations_edit__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_pharmacies_pharmacies__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_pharmacies_edit_pharmacies_edit__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_surecell_surecell__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_surecell_edit_surecell_edit__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_other_info_other_info__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_other_edit_other_edit__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_linked_product_linked_product__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_linked_product_edit_linked_product_edit__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_pregnancy_pregnancy__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_pregnancy_edit_pregnancy_edit__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_popover_popover__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_settings_settings__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_passcode_passcode__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_passcode_setting_passcode_setting__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_ion_passcode__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_add_category_add_category__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_reminders_reminders__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_select_medication_select_medication__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_add_medication_add_medication__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_edit_medication_edit_medication__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_new_reminder_new_reminder__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_explain_slide_explain_slide__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_add_dependent_add_dependent__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_manage_sharing_manage_sharing__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_link_new_link_new__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_link_edit_link_edit__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_change_password_change_password__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_update_email_update_email__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_notifications_notifications__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_group_code_group_code__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_inbox_details_inbox_details__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_preview_profile_preview_profile__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_schedule_schedule__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_product_success_product_success__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86_angular2_useful_swiper__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_86_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_modals_tablet_detail_tablet_detail__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_modals_edit_reminder_edit_reminder__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__providers_flag__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__providers_country_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__providers_base_medicine_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__providers_base_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__providers_dependent_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__providers_reminders_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__providers_local_notification_service__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































































// swiper components

/* modal componets */


// Services








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_inbox_inbox__["a" /* InboxPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_vital_medical_vital_medical__["a" /* VitalMedicalPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_vital_edit_vital_edit__["a" /* VitalEditPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_emergency_emergency__["a" /* EmergencyPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_emergency_edit_emergency_edit__["a" /* EmergencyEditPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_allergies_allergies__["a" /* AllergiesPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_allergies_edit_allergies_edit__["a" /* AllergiesEditPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_medications_medications__["a" /* MedicationsPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_medications_edit_medications_edit__["a" /* MedicationsEditPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_physicians_physicians__["a" /* PhysiciansPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_physicians_edit_physicians_edit__["a" /* PhysiciansEditPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_insurance_info_insurance_info__["a" /* InsuranceInfoPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_insurance_edit_insurance_edit__["a" /* InsuranceEditPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_surgeries_surgeries__["a" /* SurgeriesPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_surgeries_edit_surgeries_edit__["a" /* SurgeriesEditPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_labs_labs__["a" /* LabsPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_labs_edit_labs_edit__["a" /* LabsEditPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_living_will_living_will__["a" /* LivingWillPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_dnr_dnr__["a" /* DNRPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_family_history_edit_family_history_edit__["a" /* FamilyHistoryEditPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_immunizations_immunizations__["a" /* ImmunizationsPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_immunizations_edit_immunizations_edit__["a" /* ImmunizationsEditPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_pharmacies_edit_pharmacies_edit__["a" /* PharmaciesEditPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_surecell_surecell__["a" /* SureCellPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_surecell_edit_surecell_edit__["a" /* SureCellEditPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_other_info_other_info__["a" /* OtherInfoPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_other_edit_other_edit__["a" /* OtherInfoEditPage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_linked_product_linked_product__["a" /* LinkedProductPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_linked_product_edit_linked_product_edit__["a" /* LinkedProductEditPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_pregnancy_pregnancy__["a" /* PregnancyPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_pregnancy_edit_pregnancy_edit__["a" /* PregnancyEditPage */],
            __WEBPACK_IMPORTED_MODULE_62__pages_popover_popover__["a" /* PopoverContentPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_add_dependent_add_dependent__["a" /* AddDependentPage */],
            __WEBPACK_IMPORTED_MODULE_75__pages_manage_sharing_manage_sharing__["a" /* ManageSharingPage */],
            __WEBPACK_IMPORTED_MODULE_76__pages_link_new_link_new__["a" /* LinkNewPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_passcode_passcode__["a" /* PasscodePage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_passcode_setting_passcode_setting__["a" /* PasscodeSettingPage */],
            __WEBPACK_IMPORTED_MODULE_66__components_ion_passcode__["a" /* IonPasscode */],
            __WEBPACK_IMPORTED_MODULE_78__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_79__pages_update_email_update_email__["a" /* UpdateEamilPage */],
            __WEBPACK_IMPORTED_MODULE_80__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_81__pages_group_code_group_code__["a" /* GroupCodePage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_add_category_add_category__["a" /* AddCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_reminders_reminders__["a" /* RemindersPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_select_medication_select_medication__["a" /* SelectMedicationPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_add_medication_add_medication__["a" /* AddMedicationPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_edit_medication_edit_medication__["a" /* EditMedicationPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_new_reminder_new_reminder__["a" /* NewReminderPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_explain_slide_explain_slide__["a" /* ExplainSlidePage */],
            __WEBPACK_IMPORTED_MODULE_82__pages_inbox_details_inbox_details__["a" /* InboxDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_83__pages_preview_profile_preview_profile__["a" /* PreviewProfilePage */],
            __WEBPACK_IMPORTED_MODULE_84__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_77__pages_link_edit_link_edit__["a" /* LinkEditPage */],
            __WEBPACK_IMPORTED_MODULE_85__pages_product_success_product_success__["a" /* ProductSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_87__pages_modals_tablet_detail_tablet_detail__["a" /* TabletDetailModal */],
            __WEBPACK_IMPORTED_MODULE_88__pages_modals_edit_reminder_edit_reminder__["a" /* EditReminderModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_86_angular2_useful_swiper__["SwiperModule"],
            __WEBPACK_IMPORTED_MODULE_15__components_ionic2_alpha_scroll__["a" /* IonAlphaScrollModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {
                backButtonText: 'Back',
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition'
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ion_multi_picker__["MultiPickerModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_inbox_inbox__["a" /* InboxPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_vital_medical_vital_medical__["a" /* VitalMedicalPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_vital_edit_vital_edit__["a" /* VitalEditPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_emergency_emergency__["a" /* EmergencyPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_emergency_edit_emergency_edit__["a" /* EmergencyEditPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_allergies_allergies__["a" /* AllergiesPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_allergies_edit_allergies_edit__["a" /* AllergiesEditPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_medications_medications__["a" /* MedicationsPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_medications_edit_medications_edit__["a" /* MedicationsEditPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_physicians_physicians__["a" /* PhysiciansPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_physicians_edit_physicians_edit__["a" /* PhysiciansEditPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_insurance_info_insurance_info__["a" /* InsuranceInfoPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_insurance_edit_insurance_edit__["a" /* InsuranceEditPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_surgeries_surgeries__["a" /* SurgeriesPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_surgeries_edit_surgeries_edit__["a" /* SurgeriesEditPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_labs_labs__["a" /* LabsPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_labs_edit_labs_edit__["a" /* LabsEditPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_living_will_living_will__["a" /* LivingWillPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_dnr_dnr__["a" /* DNRPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_family_history_edit_family_history_edit__["a" /* FamilyHistoryEditPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_immunizations_immunizations__["a" /* ImmunizationsPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_immunizations_edit_immunizations_edit__["a" /* ImmunizationsEditPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_pharmacies_edit_pharmacies_edit__["a" /* PharmaciesEditPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_surecell_surecell__["a" /* SureCellPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_surecell_edit_surecell_edit__["a" /* SureCellEditPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_other_info_other_info__["a" /* OtherInfoPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_other_edit_other_edit__["a" /* OtherInfoEditPage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_linked_product_linked_product__["a" /* LinkedProductPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_linked_product_edit_linked_product_edit__["a" /* LinkedProductEditPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_pregnancy_pregnancy__["a" /* PregnancyPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_pregnancy_edit_pregnancy_edit__["a" /* PregnancyEditPage */],
            __WEBPACK_IMPORTED_MODULE_62__pages_popover_popover__["a" /* PopoverContentPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_add_dependent_add_dependent__["a" /* AddDependentPage */],
            __WEBPACK_IMPORTED_MODULE_75__pages_manage_sharing_manage_sharing__["a" /* ManageSharingPage */],
            __WEBPACK_IMPORTED_MODULE_76__pages_link_new_link_new__["a" /* LinkNewPage */],
            __WEBPACK_IMPORTED_MODULE_63__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_passcode_passcode__["a" /* PasscodePage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_passcode_setting_passcode_setting__["a" /* PasscodeSettingPage */],
            __WEBPACK_IMPORTED_MODULE_66__components_ion_passcode__["a" /* IonPasscode */],
            __WEBPACK_IMPORTED_MODULE_78__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_79__pages_update_email_update_email__["a" /* UpdateEamilPage */],
            __WEBPACK_IMPORTED_MODULE_80__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_81__pages_group_code_group_code__["a" /* GroupCodePage */],
            __WEBPACK_IMPORTED_MODULE_67__pages_add_category_add_category__["a" /* AddCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_reminders_reminders__["a" /* RemindersPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_select_medication_select_medication__["a" /* SelectMedicationPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_add_medication_add_medication__["a" /* AddMedicationPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_edit_medication_edit_medication__["a" /* EditMedicationPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_new_reminder_new_reminder__["a" /* NewReminderPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_explain_slide_explain_slide__["a" /* ExplainSlidePage */],
            __WEBPACK_IMPORTED_MODULE_82__pages_inbox_details_inbox_details__["a" /* InboxDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_83__pages_preview_profile_preview_profile__["a" /* PreviewProfilePage */],
            __WEBPACK_IMPORTED_MODULE_84__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_77__pages_link_edit_link_edit__["a" /* LinkEditPage */],
            __WEBPACK_IMPORTED_MODULE_85__pages_product_success_product_success__["a" /* ProductSuccessPage */],
            __WEBPACK_IMPORTED_MODULE_87__pages_modals_tablet_detail_tablet_detail__["a" /* TabletDetailModal */],
            __WEBPACK_IMPORTED_MODULE_88__pages_modals_edit_reminder_edit_reminder__["a" /* EditReminderModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_action_sheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_touch_id__["a" /* TouchID */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_90__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_92__providers_base_medicine_service__["a" /* BaseMedicineService */],
            __WEBPACK_IMPORTED_MODULE_93__providers_base_service__["a" /* BaseService */],
            __WEBPACK_IMPORTED_MODULE_91__providers_country_service__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_89__providers_flag__["a" /* Flags */],
            __WEBPACK_IMPORTED_MODULE_94__providers_dependent_service__["a" /* DependentService */],
            __WEBPACK_IMPORTED_MODULE_95__providers_reminders_service__["a" /* RemindersService */],
            __WEBPACK_IMPORTED_MODULE_96__providers_local_notification_service__["a" /* LocalNotificationService */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAlphaScrollModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ion_alpha_scroll__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_module__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_dynamic__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var IonAlphaScrollModule = (function () {
    function IonAlphaScrollModule() {
    }
    return IonAlphaScrollModule;
}());
IonAlphaScrollModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng_dynamic__["a" /* DynamicComponentModule */].forRoot({
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"], __WEBPACK_IMPORTED_MODULE_4__util_module__["a" /* UtilModule */]],
                declarations: []
            })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__ion_alpha_scroll__["a" /* IonAlphaScroll */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__ion_alpha_scroll__["a" /* IonAlphaScroll */]]
    })
], IonAlphaScrollModule);

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAlphaScroll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_classes__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var IonAlphaScroll = (function () {
    function IonAlphaScroll(_content, _elementRef, vcRef) {
        this._content = _content;
        this._elementRef = _elementRef;
        this.vcRef = vcRef;
        this.sortedItems = {};
        this.alphabet = [];
        this.ionAlphaScrollRef = this;
    }
    IonAlphaScroll.prototype.ngOnInit = function () {
        var _this = this;
        this.alphaScrollTemplate = "\n      <style>\n        .ion-alpha-sidebar {\n          position: fixed;\n          right: 0;\n          display: flex;\n          flex-flow: column;\n          z-index: 50000;\n        }\n\n        .ion-alpha-sidebar li {\n          flex: 1 1 auto;\n          list-style: none;\n          width: 15px;\n          text-align: center;\n        }\n      </style>\n\n      <ion-scroll class=\"ion-alpha-scroll\" [ngStyle]=\"ionAlphaScrollRef.calculateScrollDimensions()\" scrollX=\"false\" scrollY=\"true\">\n        <ion-item-group class=\"ion-alpha-list-outer\">\n          <div *ngFor=\"let items of ionAlphaScrollRef.sortedItems | mapToIterable; trackBy:ionAlphaScrollRef.trackBySortedItems\">\n            <ion-item-divider id=\"scroll-letter-{{items.key}}\">{{items.key}}</ion-item-divider>\n            <div *ngFor=\"let item of items.value\">\n              " + this.itemTemplate + "\n            </div>\n          </div>\n        </ion-item-group>\n      </ion-scroll>\n      <ul class=\"ion-alpha-sidebar\" [ngStyle]=\"ionAlphaScrollRef.calculateDimensionsForSidebar()\">\n        <li *ngFor=\"let letter of ionAlphaScrollRef.alphabet\" tappable (click)=\"ionAlphaScrollRef.alphaScrollGoToList(letter)\">\n        <a>{{letter}}</a>\n        </li>\n      </ul>\n   ";
        setTimeout(function () {
            _this._scrollEle = _this._elementRef.nativeElement.querySelector('.scroll-content');
            _this.setupHammerHandlers();
        });
    };
    IonAlphaScroll.prototype.ngOnChanges = function (changes) {
        var tmp = {};
        for (var i = 0; i < this.listData.length; i++) {
            var listValue = __WEBPACK_IMPORTED_MODULE_3_lodash__["get"](this.listData[i], this.key);
            var letter = listValue.toUpperCase().charAt(0);
            if (typeof tmp[letter] === 'undefined') {
                tmp[letter] = [];
            }
            tmp[letter].push(this.listData[i]);
        }
        this.alphabet = this.iterateAlphabet(tmp);
        this.sortedItems = tmp;
    };
    IonAlphaScroll.prototype.calculateScrollDimensions = function () {
        var dimensions = this._content.getContentDimensions();
        return {
            height: dimensions.contentHeight + 'px',
            width: (dimensions.contentWidth - 20) + 'px'
        };
    };
    IonAlphaScroll.prototype.calculateDimensionsForSidebar = function () {
        return {
            top: this._content.contentTop + 'px',
            height: (this._content.getContentDimensions().contentHeight - this._content.contentTop - 70) + 'px'
        };
    };
    IonAlphaScroll.prototype.alphaScrollGoToList = function (letter) {
        var selector = '#scroll-letter-' + __WEBPACK_IMPORTED_MODULE_1__util_classes__["a" /* CSSEscape */].escape(letter);
        var ele = this._elementRef.nativeElement.querySelector(selector);
        var offsetY = ele.offsetTop;
        this._scrollEle.scrollTop = offsetY;
    };
    // create alphabet object
    IonAlphaScroll.prototype.iterateAlphabet = function (alphabet) {
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var numbers = [];
        if (Object.keys(alphabet).length > 0) {
            str = '';
            for (var i = 0; i < Object.keys(alphabet).length; i++) {
                str += Object.keys(alphabet)[i];
            }
        }
        for (var i = 0; i < str.length; i++) {
            var nextChar = str.charAt(i);
            numbers.push(nextChar);
        }
        return numbers;
    };
    IonAlphaScroll.prototype.setupHammerHandlers = function () {
        var _this = this;
        var sidebarEle = this._elementRef.nativeElement.querySelector('.ion-alpha-sidebar');
        if (!sidebarEle)
            return;
        var mcHammer = new Hammer(sidebarEle, {
            recognizers: [
                // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
                [Hammer.Pan, { direction: Hammer.DIRECTION_VERTICAL }],
            ]
        });
        mcHammer.on('panup pandown', __WEBPACK_IMPORTED_MODULE_3_lodash__["throttle"](function (e) {
            var closestEle = document.elementFromPoint(e.center.x, e.center.y);
            if (closestEle && ['LI', 'A'].indexOf(closestEle.tagName) > -1) {
                var letter = closestEle.innerText;
                var selector = '#scroll-letter-' + __WEBPACK_IMPORTED_MODULE_1__util_classes__["a" /* CSSEscape */].escape(letter);
                var letterDivider = _this._elementRef.nativeElement.querySelector(selector);
                if (letterDivider) {
                    _this._scrollEle.scrollTop = letterDivider.offsetTop;
                }
            }
        }, 50));
    };
    IonAlphaScroll.prototype.trackBySortedItems = function (index, item) {
        return index;
    };
    return IonAlphaScroll;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IonAlphaScroll.prototype, "listData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IonAlphaScroll.prototype, "key", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IonAlphaScroll.prototype, "itemTemplate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IonAlphaScroll.prototype, "currentPageClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IonAlphaScroll.prototype, "triggerChange", void 0);
IonAlphaScroll = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ion-alpha-scroll',
        template: "\n    <div *dynamicComponent=\"alphaScrollTemplate; context: ionAlphaScrollRef;\"></div>\n  "
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], IonAlphaScroll);

//# sourceMappingURL=ion-alpha-scroll.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_classes__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UtilModule = (function () {
    function UtilModule() {
    }
    return UtilModule;
}());
UtilModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__util_classes__["b" /* MapToIterable */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__util_classes__["b" /* MapToIterable */]]
    })
], UtilModule);

//# sourceMappingURL=util-module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_passcode_setting_passcode_setting__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_touch_id__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, modalCtrl, statusBar, splashScreen, storage, sqlite, touchId) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.sqlite = sqlite;
        this.touchId = touchId;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.touchId.isAvailable()
                .then(function (res) {
                console.log('TouchID is available!');
                console.log(res);
            }, function (err) {
                console.error('TouchID is not available', err);
                console.log(err);
            });
            var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_passcode_setting_passcode_setting__["a" /* PasscodeSettingPage */], {
                val: 'background'
            });
            storage.get('passcode').then(function (val) {
                if (val == null) {
                    console.log("go on");
                }
                else {
                    console.log("run passcode page");
                    profileModal.present();
                }
            });
            platform.resume.subscribe(function () {
                storage.get('passcode').then(function (val) {
                    if (val == null) {
                        console.log("go on");
                    }
                    else {
                        console.log("run passcode page");
                        profileModal.present();
                    }
                });
            });
            // var notificationOpenedCallback = function(jsonData) {
            //  console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            // };
            //
            // window["plugins"].OneSignal
            //  .startInit("ec246da9-a218-4444-8510-4d4db110a89b", "")
            //  .handleNotificationOpened(notificationOpenedCallback)
            //  .endInit();
            _this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY AUTOINCREMENT, color1_Id INTEGER, color2_Id INTEGER, form_Id INTEGER, dependent_id INTEGER, dose INTEGER, frequency TEXT, name TEXT, note TEXT, reminders TEXT, quantity INTEGER, take_as_needed INTEGER, scheduled INTEGER)", {})
                    .then(function () { return console.log('reminder table was created!'); })
                    .catch(function (e) { return console.log(e); });
            })
                .catch(function (e) { return console.log(e); });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_touch_id__["a" /* TouchID */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseMedicineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseMedicineService = (function () {
    function BaseMedicineService() {
        this.forms = [
            { id: 1, name: "Pill", file: "tablet-icon/icon-pill.png" },
            { id: 2, name: "Bubbles", file: "tablet-icon/icon-bubbles.png" },
            { id: 3, name: "Shape", file: "tablet-icon/icon-shape.png" },
            { id: 4, name: "Tube", file: "tablet-icon/icon-tube.png" }
        ];
        this.colors = [
            { id: 1, name: "White", color: "white" },
            { id: 2, name: "Tan", color: "tan" },
            { id: 3, name: "Brown", color: "brown" },
            { id: 4, name: "Red", color: "red" },
            { id: 5, name: "Pink", color: "pink" },
            { id: 6, name: "Peach", color: "peachpuff" },
            { id: 7, name: "Orange", color: "orange" },
            { id: 8, name: "Yellow", color: "yellow" },
            { id: 9, name: "Green", color: "green" },
            { id: 10, name: "Turquoise", color: "turquoise" },
            { id: 11, name: "Blue", color: "blue" },
            { id: 12, name: "Purple", color: "purple" },
        ];
    }
    BaseMedicineService.prototype.getForms = function () {
        return this.forms;
    };
    BaseMedicineService.prototype.getColors = function () {
        return this.colors;
    };
    BaseMedicineService.prototype.getColor = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var items = _this.colors.filter(function (item) { return item.id === id; });
                resolve(items[0]);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    BaseMedicineService.prototype.getForm = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var items = _this.forms.filter(function (item) { return item.id === id; });
                resolve(items[0]);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return BaseMedicineService;
}());
BaseMedicineService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BaseMedicineService);

//# sourceMappingURL=base-medicine-service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
        //public baseUrl = "http://beta.myidband.com/api/v5/";
        this.baseUrl = "https://www.getmyid.com/api/v5/";
        this.loginUrl = this.baseUrl + "auth/sign_in";
        this.signupUrl = this.baseUrl + "auth/sign_up";
        this.forgotUrl = this.baseUrl + "auth/forgot_password";
        this.updateUrl = this.baseUrl + "auth/update_info";
        this.cancelUrl = this.baseUrl + "auth/cancel_account";
        this.getProfilesUrl = this.baseUrl + "profiles";
        this.createProfileUrl = this.baseUrl + "profiles";
        this.getDataUrl = this.baseUrl + "profiles/";
        this.getSharesUrl = this.baseUrl + "shares";
        this.checkIdUrl = this.baseUrl + "main/check_id_pin";
        console.log('Hello BaseService Provider');
    }
    return BaseService;
}());
BaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BaseService);

//# sourceMappingURL=base-service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reminders_reminders__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__reminders_reminders__["a" /* RemindersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__["a" /* InboxPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Reminders" tabIcon="alarm"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Inbox" tabIcon="filing"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="More" tabIcon="more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_edit_reminder_edit_reminder__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flag__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MedicationsEditPage = (function () {
    function MedicationsEditPage(navCtrl, viewCtrl, modalCtrl, navParams, alertCtrl, loadingCtrl, userService, storage, flagService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.storage = storage;
        this.flagService = flagService;
        this.reminderData = {};
        this.save = navParams.get("save");
        this.edit = navParams.get("edit");
        console.log(this.save);
        if (navParams.get("reminderData") != null) {
            this.reminderData = navParams.get("reminderData");
            console.log(this.reminderData);
        }
        this.profile_id = navParams.get("profile_id");
        this.email = "";
        this.auth_token = "";
    }
    MedicationsEditPage.prototype.deleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'Do you really want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.deleteEmergencyData();
                    }
                }
            ]
        });
        alert.present();
    };
    MedicationsEditPage.prototype.deleteEmergencyData = function () {
    };
    MedicationsEditPage.prototype.goEditReminderPage = function () {
        console.log('go EditReminderPage');
        var editReminderModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_edit_reminder_edit_reminder__["a" /* EditReminderModal */]);
        editReminderModal.present();
    };
    MedicationsEditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return MedicationsEditPage;
}());
MedicationsEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-medications-edit',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/medications-edit/medications-edit.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" [ngClass]="{\'toolbar1\':edit, \'toolbar2\': save}">\n    <button ion-button clear item-end class="back_btn" left (click)="dismiss()">Cancel</button>\n    <ion-title class="title">\n      <img src="assets/image/main_logo.png" alt="" class="logo">\n    </ion-title>\n    <button ion-button clear item-end class="back_btn create" style="right: 0px;" ><ion-icon name="md-checkmark"></ion-icon>Save</button>\n    <div class="header-title">\n        <!-- <img src="assets/icon/white/pill.png" alt=""> -->\n        <div class="tablet-preview" *ngIf="loaded">\n          <div class="m-icon m-icon-pill" *ngIf="reminderData.form.name == \'Pill\'">\n            <div class="icon-left"\n            [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color1.color}"\n            ></div>\n            <div class="icon-right"\n            [ngStyle]="{\'-webkit-mask-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color2.color}"\n            ></div>\n          </div>\n          <div class="m-icon" *ngIf="reminderData.form.name !== \'Pill\'">\n            <div class="m-icon-normal"\n            [ngStyle]="{\'-webkit-mask-box-image\': \'url(assets/\' + reminderData.form.file + \')\', \'background-color\': reminderData.color1.color}"\n            ></div>\n          </div>\n\n          <h3>{{reminderData.name}}</h3>\n        </div>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-clr">\n  <ion-list class="data">\n\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input type="text" placeholder="Name of Medicine"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Form</ion-label>\n      <ion-input type="text" placeholder="Select Form"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Color</ion-label>\n      <ion-input type="text" placeholder="Select Appearance"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Dose</ion-label>\n      <ion-input type="text" placeholder="Enter Dose"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Frequency</ion-label>\n      <ion-input type="text" placeholder="Enter Frequency"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Notes</ion-label>\n      <ion-input type="text" placeholder="Add additional notes"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class="feature">\n\n    <ion-item style="height: 55px;">\n      <ion-label>Visible on plublic profile?</ion-label>\n      <ion-toggle [(ngModel)]="visible" checked="true"></ion-toggle>\n    </ion-item>\n\n    <p class="explain">Your Public Profile is what is displayed when a First Responder access your profile.</p>\n\n    <button *ngIf="!save" ion-button outline item-end icon-left full color="secondary" class="edit" (click)="goEditReminderPage()">\n      <i class="fa fa-pencil" style="margin-right: 10px;" aria-hidden="true"></i>Edit Reminder\n    </button>\n\n\n    <p *ngIf="!save">Reminders make it easy to make sure you are taking your medications on time.\n      Manage all reminders in the Reminders tab.</p>\n\n    <button *ngIf="!save" ion-button color="light" outline full large class="delete">Delete Medication</button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/medications-edit/medications-edit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_flag__["a" /* Flags */]])
], MedicationsEditPage);

//# sourceMappingURL=medications-edit.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonPasscode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonPasscode = (function () {
    function IonPasscode() {
        this.passcode = '';
        this.defaultMaxLength = 4;
        this.hasError = false;
    }
    IonPasscode.prototype.ngOnInit = function () {
        if (this.options === undefined || this.options === null) {
            console.error('[IonPasscode] options are not defined.');
            return;
        }
    };
    IonPasscode.prototype.onDeleteKeyClick = function () {
        this.passcode = this.passcode.substr(0, this.passcode.length - 1);
    };
    IonPasscode.prototype.onKeyClick = function (key) {
        var _this = this;
        if (this.passcode.length < this.getPassCodeMaxLength() && !this.hasError) {
            this.passcode += key;
        }
        if (this.passcode.length == this.getPassCodeMaxLength() && this.options.onComplete) {
            setTimeout(function () {
                var promise = _this.options.onComplete(_this.passcode);
                if (promise) {
                    promise.then(function () {
                        _this.passcode = '';
                    }, function () {
                        _this.passcode = '';
                        _this.hasError = true;
                        setTimeout(function () { _this.hasError = false; }, 1000);
                    });
                }
            }, 250);
        }
    };
    IonPasscode.prototype.getDeleteKeyValue = function () {
        return this.options.deleteKeyValue ? this.options.deleteKeyValue : 'DELETE';
    };
    IonPasscode.prototype.getDeleteKeyType = function () {
        return this.options.deleteKeyType === 'icon' ? 'icon' : 'text';
    };
    IonPasscode.prototype.getPassCodeMaxLength = function () {
        return this.options.length > 0 ? this.options.length : this.defaultMaxLength;
    };
    IonPasscode.prototype.getIndicatorArray = function () {
        var i = 0;
        return Array(this.getPassCodeMaxLength()).fill(1).map(function (x) { i = i + 1; return i; });
    };
    return IonPasscode;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IonPasscode.prototype, "options", void 0);
IonPasscode = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ion-passcode',
        template: "\n    <div class=\"ion-passcode-container\">\n      <ion-grid class=\"header\">\n        <ion-row>\n          <ion-col class=\"text\" [innerHTML]=\"options.title\"></ion-col>\n        </ion-row>\n        <ion-row class=\"passcode-indicator\" [class.error]=\"hasError\">\n          <ion-col *ngFor=\"let i of getIndicatorArray();\">\n            <div class=\"circle\" [class.selected]=\"passcode.length >= i\"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"keys-grid\">\n        <ion-row>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(1)\">1</button>\n          </ion-col>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(2)\">2</button>\n          </ion-col>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(3)\">3</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(4)\">4</button>\n          </ion-col>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(5)\">5</button>\n          </ion-col>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(6)\">6</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(7)\">7</button>\n          </ion-col>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(8)\">8</button>\n          </ion-col>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(9)\">9</button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"row\">\n          <ion-col></ion-col>\n          <ion-col class=\"key\">\n            <button ion-button outline (click)=\"onKeyClick(0)\">0</button>\n          </ion-col>\n          <ion-col class=\"key col delete-key delete-key-{{getDeleteKeyType()}}\">\n            <button ion-button outline *ngIf=\"getDeleteKeyType() === 'text'\" (click)=\"onDeleteKeyClick()\" [innerHTML]=\"getDeleteKeyValue()\"></button>\n            <button ion-button outline *ngIf=\"getDeleteKeyType() === 'icon'\" (click)=\"onDeleteKeyClick()\"><ion-icon name=\"{{getDeleteKeyValue()}}\"></ion-icon></button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  ",
        styles: ["\n    .ion-passcode-container {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      height: 100%;\n      background: linear-gradient(to bottom right, #0287f9 0%, #038fc3 85%);\n      color: white;\n      text-align: center;\n    }\n    .header {\n      margin: 8rem auto 0 auto;\n    }\n    .header .text {\n      font-size: 1.2em;\n      font-weight: 500;\n      text-shadow: 0px 0px 1px #333;\n    }\n    .header .passcode-indicator {\n      width: 150px;\n      margin: 3rem auto;\n    }\n    .header .passcode-indicator.error {\n      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n      transform: translate3d(0, 0, 0);\n      backface-visibility: hidden;\n    }\n    .header .passcode-indicator .circle {\n      height: 12px;\n      width: 12px;\n      border-radius: 50%;\n      background-color: rgba(0,0,0,.4);\n      margin: auto;\n      transition: all 150ms ease-in-out;\n    }\n    .header .passcode-indicator .circle.selected {\n      background-color: #fff;\n      box-shadow: 0px 0px 8px 2px #fff;\n    }\n    .keys-grid {\n      max-width: 300px;\n      margin: auto;\n    }\n    .keys-grid .key button {\n      border-radius: 50%;\n      padding: 3rem 2.8rem;\n      color: white;\n      border-color: rgba(204, 204, 204, .6);\n    }\n    .keys-grid .key button.button-outline-ios.activated {\n      background-color: rgba(204, 204, 204, .6);\n    }\n    :host >>> .keys-grid .key button div.button-effect {\n      background-color: #ccc;\n    }\n    .keys-grid .key.delete-key button {\n      text-transform: uppercase;\n      color: rgba(255, 255, 255, .5);\n      border-color: transparent;\n      font-size: 90%;\n      padding: 0;\n      line-height: 62px;\n      height: 62px;\n      width: 66px;\n    }\n    .keys-grid .key.delete-key.delete-key-icon button {\n      font-size: 200%;\n    }\n    @media (max-height: 480px) {\n      .header {\n        margin-top: 5rem;\n      }\n      .header .passcode-indicator {\n        width: 150px;\n        margin: 1.5rem auto;\n      }\n    }\n    @media (min-height: 481px) and (max-height: 568px) {\n      .header {\n        margin-top: 6rem;\n      }\n    }\n    @media (min-height: 569px) and (max-height: 667px) {\n      .header {\n        margin-top: 8rem;\n      }\n    }\n    @media (min-height: 700px) {\n      .header {\n        margin-top: 12rem;\n      }\n    }\n\n    @keyframes shake {\n      10%, 90% {\n        transform: translate3d(-1px, 0, 0);\n      }\n\n      20%, 80% {\n        transform: translate3d(3px, 0, 0);\n      }\n\n      30%, 50%, 70% {\n        transform: translate3d(-6px, 0, 0);\n      }\n\n      40%, 60% {\n        transform: translate3d(6px, 0, 0);\n      }\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], IonPasscode);

//# sourceMappingURL=ion-passcode.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabletDetailModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabletDetailModal = (function () {
    function TabletDetailModal(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.tabletData = params.get('tabletData');
        console.log(this.tabletData);
    }
    TabletDetailModal.prototype.onSkip = function () {
        var reply = false;
        this.viewCtrl.dismiss(reply);
    };
    TabletDetailModal.prototype.onEdit = function () {
        var reply = true;
        this.viewCtrl.dismiss(reply);
    };
    return TabletDetailModal;
}());
TabletDetailModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tablet-detail',template:/*ion-inline-start:"/Users/developer/MyID-ionic-4/src/pages/modals/tablet-detail/tablet-detail.html"*/'<ion-content class="main-view" padding>\n  <div class="data-cover">\n    <img src="{{tabletData.icon}}">\n    <p class="name">{{tabletData.name}}</p>\n    <p class="remain">{{tabletData.remain}} Remaining</p>\n  </div>\n  <div class="modal-buttons">\n    <button ion-button color="secondary" full class="take" (click)="dismiss()">Take</button>\n    <div class="confirm-buttons">\n      <button ion-button full clear class="skip" (click)="onSkip()">Skip</button>\n      <button ion-button full clear class="edit" (click)="onEdit()">Edit</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/developer/MyID-ionic-4/src/pages/modals/tablet-detail/tablet-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], TabletDetailModal);

//# sourceMappingURL=tablet-detail.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map