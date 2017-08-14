webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/main/main.html"*/'\n\n<ion-content padding class="bg_img">\n  <div class="logo">\n    <img src="assets/icon/logo.png" alt="">\n    <p>Welcome to MyID</p>\n  </div>\n  <div class="sign">\n    <button ion-button full large class="signup" (click)="goSignupPage()">Sign Up</button>\n    <button ion-button full large class="login" color="white" clear (click)="goLoginPage()">Log In</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/main/main.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Log In\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="signup">\n\n    <ion-item>\n      <ion-label stacked class="title">Email</ion-label>\n      <ion-input type="text" class="mail" placeholder="Email" [(ngModel)]="user.email" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked class="title">Password</ion-label>\n      <ion-input type="password" class="mail" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full large color="secondary" (click)="doLogin()">Log In</button>\n  <button ion-button clear item-end icon-right class="forgot_btn" (click)="goForgotPage()">Forgot Password<ion-icon style="color: #0093ca;" name="arrow-forward"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(72);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/forgot-password/forgot-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Password?\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p style="font-size: 17px;">Enter your email address that was used to sign up for MyID and we\'ll send you a reset password link.</p>\n  <ion-list class="signup">\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Email</ion-label>\n      <ion-input type="text" class="mail" placeholder="Email Address" [(ngModel)]="email" (ionChange)="validEmailAddress()"></ion-input>\n      <ion-label *ngIf="validEmail" class="check"> <ion-icon name="md-checkmark"></ion-icon></ion-label>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full large color="secondary" (click)="doSubmit()">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/forgot-password/forgot-password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]])
], ForgotpasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BaseService);

//# sourceMappingURL=base-service.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.medications = [{ time: '7:30 AM', value: 'Lortab 3/235' },
            { time: '12:30 PM', value: 'Cymbalta' }];
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/home/home.html"*/'\n\n<ion-content padding class="bg-clr">\n  <img src="assets/icon/main_logo.png" alt="" class="logo">\n\n  <div class="inbox box">\n    <img src="assets/icon/inbox.png" alt="" class="icon">\n    <img src="assets/icon/noti_icon.png" alt="" class="icon noti">\n    <h2>My Inbox</h2>\n    <p>You\'ve got <b>3</b> unread messages.</p>\n    <div class="section"></div>\n    <button ion-button color="secondary" clear small full>Read Messages</button>\n  </div>\n\n  <div class="schedule box">\n    <img src="assets/icon/document-lines.png" alt="" class="icon">\n    <h2>My Schedule</h2>\n    <ion-item class="timing" *ngFor="let item of medications">\n        <ion-row class="title">\n            <ion-col col-6><div class="row1">Today</div></ion-col>\n            <ion-col col-6><div class="row1">Medication</div></ion-col>\n        </ion-row>\n        <ion-row class="des">\n            <ion-col col-6><div class="row2">{{item.time}}</div></ion-col>\n            <ion-col col-6><div class="row2">{{item.value}}</div></ion-col>\n        </ion-row>\n    </ion-item>\n    <button ion-button color="secondary" clear small full>View More</button>\n  </div>\n\n  <div class="inbox box">\n    <img src="assets/icon/document-scroll-2.png" alt="" class="icon">\n    <h2>Communities</h2>\n    <div class="com">\n      <img src="assets/icon/communication.png" alt="">\n      <div class="notification">\n        <img src="assets/icon/noti_icon.png" alt="">\n        <p>3</p>\n      </div>\n      <p>T1 Diabeties</p>\n    </div>\n    <div class="com">\n      <img src="assets/icon/communication.png" alt="">\n      <p>Ehios Danios</p>\n    </div>\n    <button ion-button color="secondary" clear small full>See Communities</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_info_personal_info__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vital_medical_vital_medical__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emergency_emergency__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__allergies_allergies__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medications_medications__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__physicians_physicians__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__insurance_info_insurance_info__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__surgeries_surgeries__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__labs_labs__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__living_will_living_will__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dnr_dnr__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__family_history_family_history__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__immunizations_immunizations__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pharmacies_pharmacies__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__surecell_surecell__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__other_info_other_info__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pregnancy_pregnancy__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_category_add_category__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_jquery__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_slick_carousel_slick_slick__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_slick_carousel_slick_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_slick_carousel_slick_slick__);
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
    function ProfilePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [{ id: 0, name: 'Personal Information', page: __WEBPACK_IMPORTED_MODULE_2__personal_info_personal_info__["a" /* PersonalInfoPage */], icon: 'person', show: true },
            { id: 1, name: 'Vital Medical Conditions', page: __WEBPACK_IMPORTED_MODULE_3__vital_medical_vital_medical__["a" /* VitalMedicalPage */], icon: 'warning', show: true },
            { id: 2, name: 'Emergency Contacts', page: __WEBPACK_IMPORTED_MODULE_4__emergency_emergency__["a" /* EmergencyPage */], icon: 'contacts-book', show: true },
            { id: 3, name: 'Allergies', page: __WEBPACK_IMPORTED_MODULE_5__allergies_allergies__["a" /* AllergiesPage */], icon: 'eye', show: true },
            { id: 4, name: 'Medications', page: __WEBPACK_IMPORTED_MODULE_6__medications_medications__["a" /* MedicationsPage */], icon: 'pill', show: true },
            { id: 5, name: 'Physicians', page: __WEBPACK_IMPORTED_MODULE_7__physicians_physicians__["a" /* PhysiciansPage */], icon: 'doctor', show: true },
            { id: 6, name: 'Insurance Information', page: __WEBPACK_IMPORTED_MODULE_8__insurance_info_insurance_info__["a" /* InsuranceInfoPage */], icon: 'umbrella', show: true },
            { id: 7, name: 'Surgries', page: __WEBPACK_IMPORTED_MODULE_9__surgeries_surgeries__["a" /* SurgeriesPage */], icon: 'surgeon', show: false },
            { id: 8, name: 'Labs', page: __WEBPACK_IMPORTED_MODULE_10__labs_labs__["a" /* LabsPage */], icon: 'test-tube', show: false },
            { id: 9, name: 'Living Will', page: __WEBPACK_IMPORTED_MODULE_11__living_will_living_will__["a" /* LivingWillPage */], icon: 'document-scroll-2', show: false },
            { id: 10, name: 'DNR', page: __WEBPACK_IMPORTED_MODULE_12__dnr_dnr__["a" /* DNRPage */], icon: 'document-lines', show: false },
            { id: 11, name: 'Family History', page: __WEBPACK_IMPORTED_MODULE_13__family_history_family_history__["a" /* FamilyHistoryPage */], icon: 'family', show: false },
            { id: 12, name: 'Immunizations', page: __WEBPACK_IMPORTED_MODULE_14__immunizations_immunizations__["a" /* ImmunizationsPage */], icon: 'immunizations', show: false },
            { id: 13, name: 'Pharmacies', page: __WEBPACK_IMPORTED_MODULE_15__pharmacies_pharmacies__["a" /* PharmaciesPage */], icon: 'medical-kit', show: false },
            { id: 14, name: 'SureCell', page: __WEBPACK_IMPORTED_MODULE_16__surecell_surecell__["a" /* SureCellPage */], icon: 'react', show: false },
            { id: 15, name: 'Other Info', page: __WEBPACK_IMPORTED_MODULE_17__other_info_other_info__["a" /* OtherInfoPage */], icon: 'info', show: false },
            { id: 16, name: 'Pregnancy', page: __WEBPACK_IMPORTED_MODULE_18__pregnancy_pregnancy__["a" /* PregnancyPage */], icon: 'baby-stroller', show: false },
        ];
        this.relationship = 'edit';
    }
    ProfilePage.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_20_jquery__('.myCarousel').slick({
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                }
            ]
        });
    };
    ProfilePage.prototype.addCategoryPage = function () {
        console.log('go UserProfile Page');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_19__add_category_add_category__["a" /* AddCategoryPage */]);
        profileModal.present();
    };
    ProfilePage.prototype.onItemClick = function (event, page) {
        console.log(page);
        this.navCtrl.push(page);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/profile/profile.html"*/'\n\n<ion-content class="carousel">\n  <div class="navigation">\n    <img src="assets/image/main_logo.png" alt="" class="logo">\n\n    <div style="background-color: white ; height: 100%" >\n    	<div class="myCarousel">\n    	    <div style="background-color :crimson">\n    			<div>\n    			    <img style="width: 50vw ; height: auto ; display: block; margin: auto; " src="assets/image/1.png">\n    			</div>\n    			<div style="text-align: center ">Step 1</div>\n    		</div>\n    		<div style="background-color :crimson">\n    			<div>\n    			    <img style="width: 50vw ; height: auto ; display: block; margin: auto; " src="assets/image/2.png">\n    			</div>\n    			<div style="text-align: center ">Step 2</div>\n    		</div>\n    		<div style="background-color :crimson">\n    			<div>\n    			    <img style="width: 50vw ; height: auto ; display: block; margin: auto; " src="assets/image/3.png">\n    			</div>\n    			<div style="text-align: center ">Step 3</div>\n    		</div>\n    		<div style="background-color :crimson">\n    			<div>\n    			    <img style="width: 50vw ; height: auto ; display: block; margin: auto; " src="assets/image/4.png">\n    			</div>\n    			<div style="text-align: center ">Step 4</div>\n    		</div>\n    	</div>\n    </div>\n  </div>\n\n  <ion-segment [(ngModel)]="relationship" color="primary">\n    <ion-segment-button value="edit">\n      Edit\n    </ion-segment-button>\n    <ion-segment-button value="document">\n      Document\n    </ion-segment-button>\n    <ion-segment-button value="share">\n      Share\n    </ion-segment-button>\n  </ion-segment>\n\n  <div padding *ngIf="relationship==\'edit\'">\n    <button ion-button full outline color="secondary" class="add-category" (click)="addCategoryPage()"><ion-icon name="add"></ion-icon>Add a new category</button>\n    <ion-list style="margin-top: 20px;">\n        <ion-item class="list-item" *ngFor="let item of items;" (click)="onItemClick($event, item.page)">\n          <img src="assets/icon/{{item.icon}}.png" item-start class="start_icon">\n            {{item.name}}\n          <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n        </ion-item>\n    </ion-list>\n\n    <ion-list style="margin-top: 30px;">\n      <ion-item class="list-item">\n        <img src="assets/icon/settings_icon.png" item-start class="start_icon">\n          Manage Linked Products\n        <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div class="" *ngIf="relationship==\'document\'">\n\n  </div>\n\n  <div class="share" *ngIf="relationship==\'share\'">\n    <ion-list class="input_box">\n\n      <ion-item class="item_block">\n        <ion-label stacked class="title">Email your profile to:</ion-label>\n        <ion-input type="email" placeholder="sample@example.com"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>Message (optional):</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>Set Password (optional):</ion-label>\n        <ion-input type="text" placeholder="optional"></ion-input>\n      </ion-item>\n\n      <ion-item >\n        <ion-label stacked>Saet Expiration</ion-label>\n        <ion-input type="text" placeholder="Never"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button block large color="secondary" class="send"><img src="assets/icon/send.png">Send</button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list style="margin-top: 30px;">\n\n      <ion-item class="list-item">\n        <img src="assets/icon/share-2.png" item-start class="start_icon" style="margin-left: 16px;">\n          Manage Sharing\n        <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function PersonalInfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PersonalInfoPage;
}());
PersonalInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal-info',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/personal-info/personal-info.html"*/'<ion-content>\n  <div class="header">\n    <div class="navigation">\n      <button ion-button clear item-end icon-left class="back_btn"><ion-icon name="star"></ion-icon>Back\n      </button>\n    </div>\n    <p>Personal Information</p>\n    <button ion-button clear item-end icon-right class="back_btn"><ion-icon name="star"></ion-icon>Back\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/personal-info/personal-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PersonalInfoPage);

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitalMedicalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function VitalMedicalPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return VitalMedicalPage;
}());
VitalMedicalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vital-medical',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/vital-medical/vital-medical.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vital Medical Conditions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/vital-medical/vital-medical.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], VitalMedicalPage);

//# sourceMappingURL=vital-medical.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function EmergencyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return EmergencyPage;
}());
EmergencyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-emergency',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/emergency/emergency.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Emergency Contacts\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/emergency/emergency.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], EmergencyPage);

//# sourceMappingURL=emergency.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function AllergiesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AllergiesPage;
}());
AllergiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-allergies',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/allergies/allergies.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Allergies\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/allergies/allergies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AllergiesPage);

//# sourceMappingURL=allergies.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function MedicationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MedicationsPage;
}());
MedicationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-medications',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/medications/medications.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Medications\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/medications/medications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MedicationsPage);

//# sourceMappingURL=medications.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysiciansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function PhysiciansPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PhysiciansPage;
}());
PhysiciansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-physicians',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/physicians/physicians.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Physicians\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/physicians/physicians.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PhysiciansPage);

//# sourceMappingURL=physicians.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function InsuranceInfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return InsuranceInfoPage;
}());
InsuranceInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-insurance-info',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/insurance-info/insurance-info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Insurance Information\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/insurance-info/insurance-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], InsuranceInfoPage);

//# sourceMappingURL=insurance-info.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function SurgeriesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SurgeriesPage;
}());
SurgeriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-surgeries',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/surgeries/Surgeries.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Surgeries\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/surgeries/Surgeries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SurgeriesPage);

//# sourceMappingURL=surgeries.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function LabsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return LabsPage;
}());
LabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-labs',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/labs/labs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Labs\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/labs/labs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], LabsPage);

//# sourceMappingURL=labs.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingWillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    return LivingWillPage;
}());
LivingWillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-living-will',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/living-will/living-will.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Living Will\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/living-will/living-will.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], LivingWillPage);

//# sourceMappingURL=living-will.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DNRPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    return DNRPage;
}());
DNRPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dnr',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/dnr/dnr.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      DNR\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/dnr/dnr.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], DNRPage);

//# sourceMappingURL=dnr.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function FamilyHistoryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return FamilyHistoryPage;
}());
FamilyHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-family-history',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/family-history/family-history.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Family History\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/family-history/family-history.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], FamilyHistoryPage);

//# sourceMappingURL=family-history.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunizationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function ImmunizationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ImmunizationsPage;
}());
ImmunizationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-immunizations',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/immunizations/immunizations.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Immunizations\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/immunizations/immunizations.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ImmunizationsPage);

//# sourceMappingURL=immunizations.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmaciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function PharmaciesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PharmaciesPage;
}());
PharmaciesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pharmacies',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/pharmacies/pharmacies.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pharmacies\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/pharmacies/pharmacies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PharmaciesPage);

//# sourceMappingURL=pharmacies.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SureCellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function SureCellPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SureCellPage;
}());
SureCellPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-surecell',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/surecell/surecell.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SureCell\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/surecell/surecell.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SureCellPage);

//# sourceMappingURL=surecell.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function OtherInfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return OtherInfoPage;
}());
OtherInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-other-info',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/other-info/other-info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Other Infomation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/other-info/other-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], OtherInfoPage);

//# sourceMappingURL=other-info.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PregnancyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function PregnancyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PregnancyPage;
}());
PregnancyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pregnancy',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/pregnancy/pregnancy.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pregnancy\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/pregnancy/pregnancy.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PregnancyPage);

//# sourceMappingURL=pregnancy.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function AddCategoryPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.categories = [
            { id: 0, name: 'Surgeries', icon: 'surgeon', show: true },
            { id: 1, name: 'Labs', icon: 'test-tube', show: true },
            { id: 2, name: 'Living Will', icon: 'document-scroll-2', show: true },
            { id: 3, name: 'DNR', icon: 'document-lines', show: true },
            { id: 4, name: 'Family History', icon: 'family', show: true },
            { id: 5, name: 'Immunizations', icon: 'cloud', show: true },
            { id: 6, name: 'Parmacies', icon: 'medical-lit', show: true },
            { id: 7, name: 'SureCell', icon: 'pill', show: true },
            { id: 8, name: 'Other Info', icon: 'info', show: true },
            { id: 9, name: 'Pregnancy', icon: 'baby-stroller', show: true }
        ];
    }
    AddCategoryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddCategoryPage;
}());
AddCategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-category',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/add-category/add-category.html"*/'\n\n\n\n<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <div class="title">Select category to add</div>\n    <ion-list>\n      <ion-item class="category" *ngFor="let item of categories">\n        <img src="assets/icon/{{item.icon}}.png" alt="">\n        <p>{{item.name}}</p>\n      </ion-item>\n    </ion-list>\n    <button ion-button full clear class="cancel" (click)="dismiss()">Cancel</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/add-category/add-category.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], AddCategoryPage);

//# sourceMappingURL=add-category.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function RemindersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return RemindersPage;
}());
RemindersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reminders',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/reminders/reminders.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Reminders\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/reminders/reminders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], RemindersPage);

//# sourceMappingURL=reminders.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function InboxPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [{ name: 'From MyID', title: 'Type 1 Diabetes Cure!', description: 'Multi-line lists are identical to regular lists, except items have multiple lines of text.' },
            { name: 'Name', title: 'Sliding items can be swiped to the left or right to reveal a hidden set of buttons', description: 'Below is an example with three lines of text.' },
            { name: 'From MyID', title: 'Skylar is crazy!', description: 'Type 1 Diabetes Cure' }
        ];
    }
    return InboxPage;
}());
InboxPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inbox',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/inbox/inbox.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Inbox\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let item of items" class="item_list">\n    <ion-item>\n      <img src="assets/icon/ground.png" item-end class="bg-img">\n      <h2>{{item.name}}</h2>\n      <h3>{{item.title}}</h3>\n      <p>{{item.description}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/inbox/inbox.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], InboxPage);

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_setting__ = __webpack_require__(282);
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
    function MorePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [{ name: 'Communication', icon: 'sharing' }, { name: 'Manage Sharing', icon: 'sharing' },
            { name: 'Link a Product', icon: 'sharing' }];
    }
    MorePage.prototype.goSettingPage = function () {
        console.log('go SettingPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__setting_setting__["a" /* SettingPage */]);
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/more/more.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      More\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list style="margin-top: 30px;">\n    <ion-item class="list-item" *ngFor="let item of items">\n      <img src="assets/icon/{{item.icon}}.png" item-start class="start_icon">\n        {{item.name}}\n      <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-list style="margin-top: 30px;">\n    <ion-item class="list-item" (click)="goSettingPage()">\n      <img src="assets/icon/settings_icon.png" item-start class="start_icon">\n        Account Settings\n      <ion-icon name="arrow-forward" item-end class="second_icon"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/more/more.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingPage = (function () {
    function SettingPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    SettingPage.prototype.logOut = function () {
        this.storage.set('data', null);
        this.storage.set('email', "");
        this.storage.set('auth_token', "");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */]);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/setting/setting.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Account Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="logOut()"><ion-icon name="log-out"></ion-icon>Log Out</button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/setting/setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/signup/signup.html"*/'<ion-header hideBackButton>\n  <ion-navbar>\n    <ion-title>\n      Sign Up\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="signup">\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Email</ion-label>\n      <ion-input type="text" class="mail" placeholder="Email Address" [(ngModel)]="user.email" (ionChange)="validEmailAddress()"></ion-input>\n      <ion-label *ngIf="validEmail" class="check"> <ion-icon name="md-checkmark"></ion-icon></ion-label>\n    </ion-item>\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Password</ion-label>\n      <ion-input type="password" class="mail" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <ion-item class="form">\n      <ion-label stacked class="title">Confirm Password</ion-label>\n      <ion-input type="password" class="mail" placeholder="Confirm Password" [(ngModel)]="user.confirm_pw"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full large color="secondary" (click)="doSignup()">Sign Up</button>\n  <p class="nav">My tapping Sign Up . I agree to MyID\'s Terms of Service and Privacy Statement.</p>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(289);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main_main__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_forgot_password_forgot_password__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reminders_reminders__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_inbox_inbox__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_more_more__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_personal_info_personal_info__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_vital_medical_vital_medical__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_emergency_emergency__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_allergies_allergies__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_medications_medications__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_physicians_physicians__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_insurance_info_insurance_info__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_surgeries_surgeries__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_labs_labs__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_living_will_living_will__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dnr_dnr__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_family_history_family_history__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_immunizations_immunizations__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_pharmacies_pharmacies__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_surecell_surecell__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_other_info_other_info__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_pregnancy_pregnancy__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_setting_setting__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_add_category_add_category__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_flag__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_base_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_slick_carousel_slick_slick__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_slick_carousel_slick_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_slick_carousel_slick_slick__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_forgot_password_forgot_password__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_reminders_reminders__["a" /* RemindersPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_inbox_inbox__["a" /* InboxPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_vital_medical_vital_medical__["a" /* VitalMedicalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_emergency_emergency__["a" /* EmergencyPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_allergies_allergies__["a" /* AllergiesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_medications_medications__["a" /* MedicationsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_physicians_physicians__["a" /* PhysiciansPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_insurance_info_insurance_info__["a" /* InsuranceInfoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_surgeries_surgeries__["a" /* SurgeriesPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_labs_labs__["a" /* LabsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_living_will_living_will__["a" /* LivingWillPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_dnr_dnr__["a" /* DNRPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_immunizations_immunizations__["a" /* ImmunizationsPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_surecell_surecell__["a" /* SureCellPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_other_info_other_info__["a" /* OtherInfoPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_pregnancy_pregnancy__["a" /* PregnancyPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_add_category_add_category__["a" /* AddCategoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                backButtonText: '',
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition'
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_forgot_password_forgot_password__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_reminders_reminders__["a" /* RemindersPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_inbox_inbox__["a" /* InboxPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_personal_info_personal_info__["a" /* PersonalInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_vital_medical_vital_medical__["a" /* VitalMedicalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_emergency_emergency__["a" /* EmergencyPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_allergies_allergies__["a" /* AllergiesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_medications_medications__["a" /* MedicationsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_physicians_physicians__["a" /* PhysiciansPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_insurance_info_insurance_info__["a" /* InsuranceInfoPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_surgeries_surgeries__["a" /* SurgeriesPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_labs_labs__["a" /* LabsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_living_will_living_will__["a" /* LivingWillPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_dnr_dnr__["a" /* DNRPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_family_history_family_history__["a" /* FamilyHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_immunizations_immunizations__["a" /* ImmunizationsPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_surecell_surecell__["a" /* SureCellPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_other_info_other_info__["a" /* OtherInfoPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_pregnancy_pregnancy__["a" /* PregnancyPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_add_category_add_category__["a" /* AddCategoryPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_36__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_37__providers_base_service__["a" /* BaseService */],
            __WEBPACK_IMPORTED_MODULE_35__providers_flag__["a" /* Flags */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(127);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(73);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Flags);

//# sourceMappingURL=flag.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(336);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]])
], UserService);

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reminders_reminders__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(281);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/DATA/work/MyID-New-/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Reminders" tabIcon="alarm"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Inbox" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="More" tabIcon="more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/DATA/work/MyID-New-/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map