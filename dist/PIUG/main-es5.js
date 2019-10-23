(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    (click)=\"toggleNavbar()\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\" [ngClass]=\"{ 'hidden': navbarOpen }\"></span>\n    <i class=\"fas fa-times\" [ngClass]=\"{ 'hidden': !navbarOpen }\"></i>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"\" (click)=\"toggleNavbar()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Acasă <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"about\" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">Informații</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"technologies\" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">Tehnologi folosite</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"contact\" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">Contact și referințe</a>\n      </li>\n    </ul>\n  </div>\n\n  <a class=\"navbar-brand\" routerLink=\"\">\n    <img src=\"../assets/logo.png\" alt=\"Bogdana Zadic\"/>\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"page-footer font-small blue\">\n  <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n    <a href=\"https://www.linkedin.com/in/bogdanamonicazadic/\" target=\"_blank\" class=\"footer-link\"> Bogdana Monica Zadic</a>\n  </div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parallax\">\n  <div class=\"row justify-content-end align-items-center height-full  content-headline\">\n    <div class=\"col-sm-12 col-md-9 col-lg-6 text-white\">\n      <h2 class=\"headline-2\">Procesul proiectarii interfeţelor</h2>\n    </div>\n  </div>\n</div>\n<div class=\"content about-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card card-content\">\n          <img\n            class=\"card-img-top\"\n            src=\"https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/ux-research-basics/define_your_research_plan/images/baeb57d4127cb04529e06628c11ddeeb_define-your-research-plan-1.png\"\n            alt=\"Card image cap\">\n          <h5 class=\"card-title\">Cercetarea utilizatorilor</h5>\n          <div class=\"card-body\">\n            <p class=\"card-text\">\n              Scopul este de a defini cine sunt clienții produsului și modul în care îl vor folosi. Trebuie explorat:\n            </p>\n            <ul>\n              <li>Nevoile, provocările și problemele utilizatorului</li>\n              <li>Tipuri de utilizatori, experiența lor, nivelul de cunoștințe și abilități;</li>\n              <li>Ce activități pot face folosind sistemul produsul</li>\n              <li>Contexte de utilizare pentru ceea ce proiectați.</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card card-content\">\n          <img\n            class=\"card-img-top\"\n            src=\"https://miro.medium.com/max/2960/1*oBDMtanZ-TZl12cuR6CfFg.png\"\n            alt=\"Card image cap\">\n          <h5 class=\"card-title\">Proiectare</h5>\n          <div class=\"card-body\">\n            <p class=\"card-text\">\n              O modalitate bună este să pornești de la schițele simple, wireframes și mockups, să documentezi fiecare pas și\n              să continui cu machetele și prototipurile cât mai aproape de versiunea finală.\n              <br/>\n              Amplasarea corectă a elementelor de interfață crește capacitatea de utilizare a acestora,\n              face ca resursa să fie mai atractivă pentru utilizatori. În unele cazuri, cu ajutorul unui aspect competent al site-ului,\n              puteți convinge vizitatorii la anumite acțiuni.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card card-content\">\n          <img\n            class=\"card-img-top\"\n            src=\"https://i1.wp.com/vocalprocess.co.uk/wp-content/uploads/2019/04/Fotolia_145026759_Subscription_Monthly_M.jpg?fit=1688%2C1125&ssl=1\"\n            alt=\"Card image cap\">\n          <h5 class=\"card-title\">Evaluare</h5>\n          <div class=\"card-body\">\n            <p class=\"card-text\">După cum vedem, evaluarea ar trebui inclusă în toate etapele procesului de proiectare. Scopul principal\n              al etapei de evaluare este de a evalua calitatea unui design, nu în abstract, ci de modul în care acesta se potrivește\n              utilizatorilor, satisface nevoile lor și afișează toate caracteristicile produsului. De asemenea, ar trebui să identificăm\n              zonele care pot fi îmbunătățite și realizarea câtorva dintre ele.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr/>\n  </div>\n</div>\n<div class=\"parallax parallax-bg\">\n  <div class=\"row justify-content-end align-items-center height-full  content-headline\">\n    <div class=\"col-sm-12 col-md-10 col-lg-8 text-white\">\n      <h2 class=\"headline-2\">Tendințele de proiectare web</h2>\n    </div>\n  </div>\n</div>\n<div class=\"content about-content\">\n  <div class=\"container\">\n    <app-accordion-basic></app-accordion-basic>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion-basic/accordion-basic.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion-basic/accordion-basic.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n  <ngb-panel title=\"Mobile-First\">\n    <ng-template ngbPanelContent>\n      Abordarea mobil-first este exact așa cum sună: dezvoltarea pentru cel mai mic ecran și crearea\n      drumului pană la cel mai mare.\n      Este una dintre cele mai bune strategii pentru a crea un design responsive sau adaptiv.<br/>\n      Este un aspect al îmbunătățirii progresive. Ideologia că proiectarea mobilă, cea mai grea, să\n      fie făcută mai întâi.\n      Odată ce se poate răspunde la toate întrebările de mobile design, proiectarea pentru alte\n      dispozitive va fi mai ușoară.\n      Aplicația mobile va avea doar caracteristicile esențiale, de aceea designul inca de la inceput\n      trebuie sa fie extraordinar.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Optimizarea brandigului\">\n    <ng-template ngbPanelContent>\n      Ce este un brand? Un brand conectează elemente verbale și vizuale pentru a crea recunoaștere,\n      a ajunge la un public țintit și a construi o experiență.<br/>\n      Atunci ce este optimizarea brandingului? Este o brand îngustă, poziționată cu atenție, creată\n      pentru a se conecta cu anumite categorii\n      de public, care caută ceea ce oferiți.<br/>\n      O brand optimizat prezintă mesaje cheie și imagini vii în momentul precis și în care ținta\n      dumneavoastra alege să răspundă/să întrebe,\n      să vă refere, să folosească sau să cumpere folosind produsul dumneavoastra - punctul critic al\n      alegerii.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Minimalist - mai putin este mai bine\">\n    <ng-template ngbPanelContent>\n      Sinonim cu simplitatea, minimalismul îndepărtează dezordinea care distrage vizitatorii și îi\n      menține concentrați pe pașii pe care doriți să îi facă în continuare<br/>\n      Sfaturi despre designul minimalismului:<br/>\n      <ul>\n        <li><b>Folosiți mai puține elemente.</b> Un design bun permite utilizatorilor să digere\n          informațiile într-un timp cât mai scurt posibil. Cu cât sunt mai puține elemente de\n          proiectare a interfeței, cu atât mai bine.\n        </li>\n        <li><b>Folosiți mai puține fonturi.</b> Un stil minim trebuie să prezinte o tipografie\n          curată și\n          lizibilă. Dezvoltați o paletă de fonturi cu una sau două familii de tip.\n        </li>\n        <li><b>Simplificați culoarea palatului.</b> Alături de alb-negru (sau alte neutrale), alege\n          o\n          culoare pentru a conduce designul. Poate fi luminos sau ușor și poate servi ca orice, de\n          la o textură de fundal la accent.\n        </li>\n        <li><b>Facilități navigarea.</b> Un site web bine conceput oferă conținutul esențial necesar\n          și\n          facilitează navigarea, contribuind la experiența pozitivă a utilizatorului și la conversii\n          mai mari de pagini.\n        </li>\n      </ul>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Psihologia culorilor in optimizarea aplicaților web\">\n    <ng-template ngbPanelContent>\n      Culoarea este dovedită a fi un determinant semnificativ atât pentru încrederea site-ului, cât\n      și pentru satisfacția site-ului. Culoarea are potențialul de a comunica semnificația\n      utilizatorului și de a influența percepția vizitatorilor prin efectul primar.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Tipografia aplicatiei\">\n    <ng-template ngbPanelContent>\n      Cercetările arată că peste 95% din informațiile de pe o pagină web sunt text. În ceea\n      ce privește influența asupra utilizatorilor, textul este al doilea după potrivirea\n      culorilor web și a imaginilor.<br/>\n      Fonturile selectate cu atenție pot transmite emoțiile de care aveți nevoie să construiți o\n      ierarhie vizuală puternică si un branding the succes.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>contact works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hobbies/hobbies.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hobbies/hobbies.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Tehnologii works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-ngbd-carousel-pause></app-ngbd-carousel-pause>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carousel-container\">\n  <ngb-carousel #carousel interval=\"10000\" [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\n    <ng-template ngbSlide *ngFor=\"let img of images; index as i\">\n        <div class=\"picsum-img-wrapper\">\n          <img class=\"full-height\" [src]=\"img\" alt=\"My image {{i + 1}} description\">\n        </div>\n    </ng-template>\n  </ngb-carousel>\n  <div class=\"carousel-shadow\">\n    <div class=\"container height-full\">\n      <div class=\"row justify-content-end align-items-center height-full\">\n        <div class=\"col-sm-12 col-md-9 col-lg-6 text-white\">\n          <h3>Proiectarea interfeţelor utilizator</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-height not-found-container\">\n\n  <svg\n    viewBox=\"0 0 541.17206 328.45184\"\n    height=\"328.45184\"\n    width=\"541.17206\"\n    id=\"svg2\"\n    version=\"1.1\">\n    <metadata\n      id=\"metadata8\">\n    </metadata>\n    <defs\n      id=\"defs6\">\n      <pattern\n        patternUnits=\"userSpaceOnUse\"\n        width=\"1.5\"\n        height=\"1\"\n        patternTransform=\"translate(0,0) scale(10,10)\"\n        id=\"Strips2_1\">\n        <rect\n          style=\"fill:black;stroke:none\"\n          x=\"0\"\n          y=\"-0.5\"\n          width=\"1\"\n          height=\"2\"\n          id=\"rect5419\"/>\n      </pattern>\n      <linearGradient\n        osb:paint=\"solid\"\n        id=\"linearGradient6096\">\n        <stop\n          id=\"stop6094\"\n          offset=\"0\"\n          style=\"stop-color:#000000;stop-opacity:1;\"/>\n      </linearGradient>\n    </defs>\n    <g\n      transform=\"translate(170.14515,0.038164)\"\n      id=\"layer1\">\n      <g id=\"g6219\">\n        <path\n          transform=\"matrix(1.0150687,0,0,11.193923,-1.3895945,-2685.7441)\"\n          style=\"display:inline;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"\n          d=\"m 145.0586,263.51309 c -90.20375,-0.0994 -119.20375,-0.0994 -119.20375,-0.0994\"\n          id=\"path6180\"/>\n        <g id=\"g6174\">\n          <ellipse\n            ry=\"9.161705\"\n            rx=\"9.3055239\"\n            cy=\"91.32917\"\n            cx=\"84.963676\"\n            id=\"path4488\"\n            style=\"display:inline;opacity:1;fill:none;fill-opacity:0.4627451;fill-rule:nonzero;stroke:#000000;stroke-width:1.08691013;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;\"/>\n          <path\n            id=\"path4490\"\n            d=\"m 84.984382,-0.03816399 c 0.911733,-5.0186e-4 1.661858,18.47051499 1.674386,41.22988399 0.0069,12.610431 -0.214009,23.904598 -0.56753,31.469836 -0.282878,6.088471 -0.652275,9.761785 -1.058838,9.762119 -0.406564,3.33e-4 -0.78198,-3.672386 -1.074838,-9.760657 -0.36185,-7.564779 -0.595233,-18.858715 -0.602175,-31.469228 -0.01253,-22.759565 0.717262,-41.23145213 1.628995,-41.23195399 z\"\n            style=\"display:inline;fill:#000000;stroke:none;stroke-width:0.23743393px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4496\"\n            d=\"m 85.115421,100.5729 c -0.0036,3.37532 -0.0071,6.75165 -0.0107,10.12897 m 0.512159,0.18258 c -1.914603,-0.23621 -3.505591,1.17801 -4.861444,2.68113 -1.355853,1.50312 -2.473764,3.09173 -3.387866,4.59538 -0.914103,1.50365 -1.620209,2.91586 -2.416229,4.41952 -0.79602,1.50365 -1.67928,3.09352 -0.808656,3.24054 0.870624,0.14702 3.490408,-1.14815 5.700074,-1.91396 2.209666,-0.76581 4.001473,-1.00079 5.922125,-0.86765 1.920652,0.13314 3.947462,0.6325 6.245357,1.6195 2.297896,0.98701 4.861161,2.46015 4.9051,0.91309 0.04394,-1.54706 -2.430929,-6.11379 -4.787811,-9.33976 -2.356882,-3.22597 -4.596047,-5.11158 -6.51065,-5.34779 z\"\n            style=\"display:inline;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <rect\n            ry=\"5\"\n            y=\"314.84082\"\n            x=\"35.355339\"\n            height=\"9.8994951\"\n            width=\"100.76272\"\n            id=\"rect4553\"\n            style=\"display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.00157475;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;\"/>\n          <path\n            id=\"path4513\"\n            d=\"m 74.6875,125.03748 c -8.394789,7.68654 -16.790624,15.37405 -23.988969,22.38484 -7.198345,7.0108 -13.197555,13.3433 -18.781379,20.01048 -5.583823,6.66719 -10.749655,13.66605 -13.916608,18.7496 -3.166952,5.08355 -4.333432,8.24971 -4.750315,11.08369 -0.416883,2.83399 -0.08368,5.33304 1.809372,16.25302 1.893048,10.91998 5.343489,30.24673 9.760132,48.66349 4.416642,18.41676 9.798356,35.91675 15.180267,53.41738\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4517\"\n            d=\"m 76.9375,124.66248 c -4.548745,6.50695 -9.29087,13.29053 -13.530749,18.69724 -4.239879,5.4067 -8.072459,9.57255 -11.572943,13.98975 -3.500484,4.41719 -6.66636,9.08269 -9.333429,13.99996 -2.66707,4.91727 -4.833205,10.08267 -6.333458,15.08327 -1.500252,5.0006 -2.33339,9.8328 -2.500149,14.33343 -0.166759,4.50062 0.333124,8.66631 1.249922,15.50064 0.916798,6.83434 2.249854,16.33237 3.499902,24.91604 1.250047,8.58368 2.416611,16.24967 4.583438,28.58394 2.166827,12.33427 5.333153,29.33244 8.499966,46.33323\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4521\"\n            d=\"m 96.8125,126.22498 c 6.89586,6.45836 13.7917,12.9167 19.98957,19.14581 6.19786,6.22912 11.69789,12.22914 17.11456,18.39581 5.41666,6.16667 10.74996,12.49995 14.74993,17.91655 3.99997,5.41659 6.66659,9.91653 7.16671,17.83316 0.50012,7.91664 -1.16644,19.24921 -3.3502,31.24619 -2.18376,11.99698 -4.81616,24.33632 -8.42063,38.99809 -3.60448,14.66177 -8.06212,31.17154 -12.56244,47.83939\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4525\"\n            d=\"m 91.9375,124.09998 c 5.854072,7.16655 11.70824,14.33322 16.21863,20.16651 4.51039,5.83328 7.67706,10.33329 11.92718,16.33346 4.25012,6.00017 9.58322,13.49984 12.66653,18.58299 3.08332,5.08314 3.91663,7.74974 4.68205,10.91384 0.76542,3.1641 1.40129,6.50242 1.69781,8.02406 0.29651,1.52165 0.22299,1.06579 0.14933,0.60912\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4533\"\n            d=\"m 89,123.66248 c 6.159885,11.51771 12.31996,23.03577 16.83724,31.78904 4.51728,8.75327 7.29964,14.54985 9.24424,18.32123 1.9446,3.77138 3.00519,5.42118 4.1838,9.19262 1.17861,3.77144 2.47477,9.6631 1.94443,23.80647 -0.53034,14.14338 -2.88706,36.53226 -5.4209,56.44951 -2.53383,19.91725 -5.24428,37.35836 -7.95503,54.80146\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4537\"\n            d=\"m 87.0625,123.03748 c 2.916637,10.42937 5.833458,20.8594 7.291964,26.66356 1.458505,5.80416 1.458505,6.98257 2.402021,11.11052 0.943517,4.12795 2.827535,11.19302 4.065005,16.02501 1.23748,4.832 1.82668,7.42447 2.12139,10.84263 0.29471,3.41815 0.29471,7.65958 -0.11785,20.44893 -0.41255,12.78934 -1.23731,34.11536 -2.18014,53.62015 -0.94282,19.50478 -2.003429,37.18159 -3.064154,54.86032\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4541\"\n            d=\"m 85.206367,122.98266 c 0.117841,11.74369 0.235693,23.48835 0.235693,36.55072 -10e-7,13.06238 -0.117833,27.43796 -0.05891,45.3521 0.05892,17.91413 0.29461,39.36153 0.707091,58.80738 0.412482,19.44585 1.001711,36.88701 1.590999,54.32995\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4545\"\n            d=\"m 83.12978,122.92016 c -2.601311,10.56131 -5.214983,21.17282 -7.40283,31.41665 -2.187847,10.24384 -3.955407,20.14218 -5.074975,26.03483 -1.119568,5.89264 -1.59092,7.77805 -1.885708,10.07706 -0.294789,2.29901 -0.412567,5.0079 5.1e-5,17.56339 0.412617,12.55548 1.355064,34.93859 2.474996,54.74239 1.119932,19.80379 2.415574,37.00049 3.712005,54.20767\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4549\"\n            d=\"m 79.25478,124.23266 c -5.440192,11.56251 -10.880951,23.12622 -15.899657,33.56368 -5.018706,10.43747 -9.614414,19.74672 -11.912808,26.70033 -2.298394,6.95362 -2.298394,11.54922 -1.355419,24.57415 0.942974,13.02493 2.828182,34.46917 5.066095,53.84746 2.237913,19.37829 4.833109,36.71892 7.425959,54.04387\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4556\"\n            d=\"m 42.426407,155.38825 c 3.4184,0.82513 6.836082,1.65009 10.606997,2.18034 3.770916,0.53024 7.89657,0.76599 11.608535,0.88382 3.711965,0.11782 7.012548,0.11782 10.429711,0.0589 3.417163,-0.0589 6.953769,-0.17681 10.606588,-0.23572 3.652818,-0.0589 7.425155,-0.0589 11.137027,-0.23569 3.711875,-0.17679 7.366225,-0.53043 10.724475,-0.70716 3.35826,-0.17672 6.4233,-0.17672 9.48702,-0.58922 3.06372,-0.41251 6.12885,-1.23774 9.1918,-2.06238\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4560\"\n            d=\"m 13.113199,198.16821 c 47.547038,0.40361 95.093071,0.80721 142.638101,1.2108\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1.00614154px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4529\"\n            d=\"m 132.6875,263.34998 c -4.2289,18.4155 -8.45806,36.83216 -12.6875,55.25\"\n            style=\"display:inline;fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <ellipse\n            ry=\"4.6715717\"\n            rx=\"2.5\"\n            cy=\"238.08525\"\n            cx=\"119.12262\"\n            id=\"path4614\"\n            style=\"display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.00157475;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;\"/>\n          <ellipse\n            ry=\"4.3158579\"\n            rx=\"4.9001703\"\n            cy=\"4.3948641\"\n            cx=\"85.016434\"\n            id=\"path4616\"\n            style=\"display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.82170224;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;\"/>\n          <ellipse\n            transform=\"translate(-170.14515,-0.038164)\"\n            ry=\"3.880542\"\n            rx=\"3.5777507\"\n            cy=\"164.5713\"\n            cx=\"321.42224\"\n            id=\"path4565\"\n            style=\"opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.00157475;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;\"/>\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4567\"\n            d=\"m 321.74355,168.0687 c -1e-5,3.3913 -3.42414,11.26702 -8.73834,11.26702 -5.3142,0 -18.59463,27.24606 -8.38477,3.759 1.35199,-3.11016 5.69513,-12.89881 10.50609,-15.15612 8.05545,-3.77965 6.61702,-3.26121 6.61702,0.1301 z\"\n            style=\"opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.00157475;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;\"/>\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4570\"\n            d=\"m 325,163.45184 c 1.66722,0.62594 3.33388,1.25167 3.33438,1.56444 5e-4,0.31276 -1.66671,0.31276 -3.33438,0.31276\"\n            style=\"fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4578\"\n            d=\"m 314.72098,177.37003 c -0.21488,1.64138 -0.42965,3.28197 0.28484,3.96351 0.71449,0.68155 2.35396,0.39999 3.99418,0.1183\"\n            style=\"fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4578-1\"\n            d=\"m 316,176.45184 c -0.29612,1.41007 -0.59214,2.81967 -0.25801,3.48764 0.33413,0.66798 1.29605,0.59017 2.25801,0.51236\"\n            style=\"fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4610\"\n            d=\"m 318,180.45184 c 0.66667,0 1.33434,0 1.501,0.16616 0.16667,0.16617 -0.16667,0.49951 0.001,0.66667 0.16767,0.16717 0.68771,0.16717 0.89053,0.36949 0.20282,0.20233 -0.0582,0.46335 -0.39253,0.79768\"\n            style=\"fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;\"/>\n          <path\n            id=\"path4573\"\n            d=\"m 155,199.59998 34.15106,6.52318 v 11.49049 l -1.06066,13.43503 -3.88908,19.44543 -3.00521,10.42983 -4.06586,12.19759 -17.14734,-4.94975 -14.92431,-4.65869 v 0 L 155,199.59998\"\n            style=\"fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/>\n          <path\n            id=\"path4575\"\n            d=\"m 172.53405,202.94118 -2.65165,33.23402 -3.53553,16.97056 -5.12652,15.73313\"\n            style=\"fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/>\n          <path\n            id=\"path4579\"\n            d=\"m 187.2662,239.00256 c 0.76634,-0.82482 2.12163,-2.00333 3.50552,-2.26818 1.38389,-0.26485 2.79921,0.38383 3.2412,1.53192 0.442,1.14808 -0.0885,2.79852 -1.5624,3.24089 -1.4739,0.44236 -3.88809,-0.32312 -3.7995,0.001 0.0886,0.32427 2.68064,1.73812 4.00626,3.12221 1.32563,1.38408 1.38456,2.73956 0.79537,3.38822 -0.5892,0.64866 -1.82576,0.58977 -2.53349,0.11762 -0.70773,-0.47215 -0.88437,-1.35536 -1.59092,-2.65068 -0.70656,-1.29532 -1.94507,-3.00565 -2.47512,-4.09626 -0.53005,-1.09062 -0.35326,-1.56206 0.41308,-2.38689 z\"\n            style=\"fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/>\n        </g>\n      </g>\n    </g>\n  </svg>\n\n  <p id=\"errorText\">O-o-oh! Pagină inexistentă </p>\n  <a routerLink=\"\" class=\"orange-link\" >Inapoi </a>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            /* harmony import */ var _components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hobbies/hobbies.component */ "./src/app/components/hobbies/hobbies.component.ts");
            /* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
            var routes = [
                {
                    path: '',
                    pathMatch: 'full',
                    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                },
                {
                    path: 'about',
                    pathMatch: 'full',
                    component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
                },
                {
                    path: 'contact',
                    pathMatch: 'full',
                    component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
                },
                {
                    path: 'technologies',
                    pathMatch: 'full',
                    component: _components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__["HobbiesComponent"]
                },
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: '**',
                    component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 991.98px) {\n  .navbar-light .navbar-collapse {\n    position: absolute;\n    top: 55px;\n    background: #fff;\n    left: 0;\n    z-index: 5;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 10px;\n  }\n}\n.navbar-light .navbar-toggler {\n  width: 56px;\n  height: 40px;\n}\n.navbar-light .navbar-toggler .fas {\n  font-size: 33px;\n  position: relative;\n  top: -2px;\n}\n.navbar-light .navbar-nav .nav-link {\n  display: inline-block;\n  position: relative;\n  margin-right: 5px;\n}\n.navbar-light .navbar-nav .nav-link::after {\n  content: \" \";\n  display: block;\n  height: 1px;\n  width: 0;\n  position: absolute;\n  left: 0;\n  bottom: 3px;\n  background: #F7941D;\n  transition: width 0.5s;\n}\n.navbar-light .navbar-nav .nav-link:hover::after, .navbar-light .navbar-nav .nav-link.active::after {\n  width: 100%;\n}\n.navbar-light .navbar-brand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 11;\n}\n.page-footer {\n  width: 100%;\n  background: #fff;\n}\n.page-footer .footer-link {\n  color: #F7941D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxib2dkYW5hLnphZGljXFxEZXNrdG9wXFxmYWN1bHRhdGVcXFBJVUcvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLE9BQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtFQ0FKO0FBQ0Y7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUo7QURDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDTjtBREdJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRE47QURFTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0FSO0FES1E7RUFDRSxXQUFBO0FDSFY7QURRRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDTko7QURXQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1JGO0FEVUU7RUFDRSxjQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWxpZ2h0IHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIC5uYXZiYXItY29sbGFwc2V7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1NXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLmZhcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0ycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2IHtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y3OTQxRDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5wYWdlLWZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgLmZvb3Rlci1saW5re1xyXG4gICAgY29sb3I6ICNGNzk0MUQ7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLm5hdmJhci1saWdodCAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIgLmZhcyB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiAjRjc5NDFEO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xufVxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXI6OmFmdGVyLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDExO1xufVxuXG4ucGFnZS1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5wYWdlLWZvb3RlciAuZm9vdGVyLWxpbmsge1xuICBjb2xvcjogI0Y3OTQxRDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'PIUG';
                    this.navbarOpen = false;
                }
                AppComponent.prototype.toggleNavbar = function () {
                    this.navbarOpen = !this.navbarOpen;
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
            /* harmony import */ var _components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hobbies/hobbies.component */ "./src/app/components/hobbies/hobbies.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _components_ngbd_carousel_pause_ngbd_carousel_pause_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ngbd-carousel-pause/ngbd-carousel-pause.component */ "./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.ts");
            /* harmony import */ var _components_accordion_basic_accordion_basic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/accordion-basic/accordion-basic.component */ "./src/app/components/accordion-basic/accordion-basic.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                        _components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__["HobbiesComponent"],
                        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                        _components_ngbd_carousel_pause_ngbd_carousel_pause_component__WEBPACK_IMPORTED_MODULE_12__["NgbdCarouselPauseComponent"],
                        _components_accordion_basic_accordion_basic_component__WEBPACK_IMPORTED_MODULE_13__["AccordionBasicComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/components/about/about.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".headline-2 {\n  margin: 50px 0;\n}\n\n.card-content {\n  padding: 0;\n  margin-bottom: 15px;\n}\n\n.card-title {\n  background-color: #F7941D;\n  color: #fff;\n  padding: 11px 1.25rem;\n  margin-bottom: 0;\n}\n\n.card-img-top {\n  width: auto;\n  height: 198px;\n  max-width: 100%;\n}\n\n.parallax {\n  background-image: url(\"https://miro.medium.com/max/1000/1*P1iupOxk19t4v130e9ikhQ.png\");\n  min-height: 40vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.parallax-bg {\n  background-image: url(\"https://www.fashiontrendsetter.com/v2/wp-content/uploads/2019/01/ISPO-Satellite-Color-Trends-FW-2020-21-CORE-Colors.jpg\");\n}\n\n.content-headline {\n  min-height: 40vh;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.about-content {\n  padding-top: 45px;\n}\n\n@media (max-width: 767px) {\n  .headline-2 {\n    text-align: center;\n  }\n\n  .card-img-top {\n    width: 100%;\n    height: auto;\n  }\n}\n\n@media (min-width: 991.97px) and (max-width: 1199.98px) {\n  .card-body {\n    min-height: 448px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGJvZ2RhbmEuemFkaWNcXERlc2t0b3BcXGZhY3VsdGF0ZVxcUElVRy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHNGQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0pBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURFQTtFQUNFO0lBQ0Usa0JBQUE7RUNDRjs7RURDQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFO0lBQ0UsaUJBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkbGluZS0yIHtcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTQxRDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMXB4IDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxOThweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wYXJhbGxheCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzEwMDAvMSpQMWl1cE94azE5dDR2MTMwZTlpa2hRLnBuZ1wiKTtcclxuICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ucGFyYWxsYXgtYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmZhc2hpb250cmVuZHNldHRlci5jb20vdjIvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDEvSVNQTy1TYXRlbGxpdGUtQ29sb3ItVHJlbmRzLUZXLTIwMjAtMjEtQ09SRS1Db2xvcnMuanBnXCIpO1xyXG59XHJcblxyXG4uY29udGVudC1oZWFkbGluZSB7XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnR7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaGVhZGxpbmUtMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOTdweCkgIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ0OHB4O1xyXG4gIH1cclxufVxyXG4iLCIuaGVhZGxpbmUtMiB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5NDFEO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTFweCAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTk4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnBhcmFsbGF4IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzEwMDAvMSpQMWl1cE94azE5dDR2MTMwZTlpa2hRLnBuZ1wiKTtcbiAgbWluLWhlaWdodDogNDB2aDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFyYWxsYXgtYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5mYXNoaW9udHJlbmRzZXR0ZXIuY29tL3YyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAxL0lTUE8tU2F0ZWxsaXRlLUNvbG9yLVRyZW5kcy1GVy0yMDIwLTIxLUNPUkUtQ29sb3JzLmpwZ1wiKTtcbn1cblxuLmNvbnRlbnQtaGVhZGxpbmUge1xuICBtaW4taGVpZ2h0OiA0MHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGxpbmUtMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNhcmQtaW1nLXRvcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk3cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmNhcmQtYm9keSB7XG4gICAgbWluLWhlaWdodDogNDQ4cHg7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/about/about.component.ts ***!
          \*****************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/accordion-basic/accordion-basic.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/accordion-basic/accordion-basic.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".accordion {\n  display: block;\n  margin-bottom: 50px;\n}\n.accordion ::ng-deep .card .card-header {\n  padding: 0;\n}\n.accordion ::ng-deep .card .card-header .btn {\n  padding: 0.75rem 1.25rem;\n  width: 100%;\n  text-align: left;\n  color: #F7941D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24tYmFzaWMvQzpcXFVzZXJzXFxib2dkYW5hLnphZGljXFxEZXNrdG9wXFxmYWN1bHRhdGVcXFBJVUcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFjY29yZGlvbi1iYXNpY1xcYWNjb3JkaW9uLWJhc2ljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi1iYXNpYy9hY2NvcmRpb24tYmFzaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRElNO0VBQ0UsVUFBQTtBQ0ZSO0FESVE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uLWJhc2ljL2FjY29yZGlvbi1iYXNpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgLy9iYWNrZ3JvdW5kOiByZWQ7XHJcblxyXG4gICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogI0Y3OTQxRDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFjY29yZGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmFjY29yZGlvbiA6Om5nLWRlZXAgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hY2NvcmRpb24gOjpuZy1kZWVwIC5jYXJkIC5jYXJkLWhlYWRlciAuYnRuIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNGNzk0MUQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/accordion-basic/accordion-basic.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/accordion-basic/accordion-basic.component.ts ***!
          \*************************************************************************/
        /*! exports provided: AccordionBasicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionBasicComponent", function () { return AccordionBasicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AccordionBasicComponent = /** @class */ (function () {
                function AccordionBasicComponent() {
                }
                AccordionBasicComponent.prototype.ngOnInit = function () {
                };
                return AccordionBasicComponent;
            }());
            AccordionBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-accordion-basic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordion-basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion-basic/accordion-basic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accordion-basic.component.scss */ "./src/app/components/accordion-basic/accordion-basic.component.scss")).default]
                })
            ], AccordionBasicComponent);
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/components/contact/contact.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/contact/contact.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/contact/contact.component.ts ***!
          \*********************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/components/hobbies/hobbies.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/components/hobbies/hobbies.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9iYmllcy9ob2JiaWVzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/hobbies/hobbies.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/hobbies/hobbies.component.ts ***!
          \*********************************************************/
        /*! exports provided: HobbiesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function () { return HobbiesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HobbiesComponent = /** @class */ (function () {
                function HobbiesComponent() {
                }
                HobbiesComponent.prototype.ngOnInit = function () {
                };
                return HobbiesComponent;
            }());
            HobbiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hobbies',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hobbies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hobbies/hobbies.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hobbies.component.scss */ "./src/app/components/hobbies/hobbies.component.scss")).default]
                })
            ], HobbiesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/components/home/home.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".carousel-container {\n  position: relative;\n}\n.carousel-container .carousel-shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n}\n.carousel-container .carousel-caption {\n  bottom: 90px;\n}\n.carousel-container ::ng-deep .carousel-control-prev,\n.carousel-container ::ng-deep .carousel-control-next {\n  display: none;\n}\n.carousel-container .height-full {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZ2JkLWNhcm91c2VsLXBhdXNlL0M6XFxVc2Vyc1xcYm9nZGFuYS56YWRpY1xcRGVza3RvcFxcZmFjdWx0YXRlXFxQSVVHL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuZ2JkLWNhcm91c2VsLXBhdXNlXFxuZ2JkLWNhcm91c2VsLXBhdXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25nYmQtY2Fyb3VzZWwtcGF1c2UvbmdiZC1jYXJvdXNlbC1wYXVzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDSEo7QURLRTtFQUNFLFlBQUE7QUNISjtBRFVJOztFQUVFLGFBQUE7QUNSTjtBRFdFO0VBQ0UsWUFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZ2JkLWNhcm91c2VsLXBhdXNlL25nYmQtY2Fyb3VzZWwtcGF1c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8ucGljc3VtLWltZy13cmFwcGVyIHtcclxuICAvLyAgaW1nIHtcclxuICAvL1xyXG4gIC8vICB9XHJcbiAgLy99XHJcbiAgLmNhcm91c2VsLXNoYWRvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIGJvdHRvbTogOTBweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwe1xyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAvL2JvdHRvbTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG4gICAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWlnaHQtZnVsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi5jYXJvdXNlbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC1zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNhcm91c2VsLWNvbnRhaW5lciAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGJvdHRvbTogOTBweDtcbn1cbi5jYXJvdXNlbC1jb250YWluZXIgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY2Fyb3VzZWwtY29udGFpbmVyIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJvdXNlbC1jb250YWluZXIgLmhlaWdodC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: NgbdCarouselPauseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselPauseComponent", function () { return NgbdCarouselPauseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var NgbdCarouselPauseComponent = /** @class */ (function () {
                function NgbdCarouselPauseComponent() {
                    this.images = [1, 2, 3, 4, 5, 6, 7].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
                    this.paused = true;
                    this.unpauseOnArrow = false;
                    this.pauseOnIndicator = true;
                    this.pauseOnHover = true;
                }
                NgbdCarouselPauseComponent.prototype.togglePaused = function () {
                    if (this.paused) {
                        this.carousel.cycle();
                    }
                    else {
                        this.carousel.pause();
                    }
                    this.paused = !this.paused;
                };
                NgbdCarouselPauseComponent.prototype.onSlide = function (slideEvent) {
                    if (this.unpauseOnArrow && slideEvent.paused &&
                        (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
                        this.togglePaused();
                    }
                    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
                        this.togglePaused();
                    }
                };
                return NgbdCarouselPauseComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
            ], NgbdCarouselPauseComponent.prototype, "carousel", void 0);
            NgbdCarouselPauseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ngbd-carousel-pause',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngbd-carousel-pause.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngbd-carousel-pause.component.scss */ "./src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component.scss")).default]
                })
            ], NgbdCarouselPauseComponent);
            /***/ 
        }),
        /***/ "./src/app/components/page-not-found/page-not-found.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".not-found-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.not-found-container #errorText {\n  font-size: 22px;\n  margin: 14px 0;\n}\n.not-found-container #errorLink {\n  font-size: 20px;\n  padding: 12px;\n  border: 1px solid;\n  color: #000;\n  background-color: transparent;\n  text-decoration: none;\n  transition: all 0.5s ease-in-out;\n}\n.not-found-container #errorLink:hover, .not-found-container #errorLink:active {\n  color: #fff;\n  background: #000;\n}\n.not-found-container #g6219 {\n  transform-origin: 85px 4px;\n  -webkit-animation: an1 12s 0.5s infinite ease-out;\n          animation: an1 12s 0.5s infinite ease-out;\n}\n@-webkit-keyframes an1 {\n  0% {\n    transform: rotate(0);\n  }\n  5% {\n    transform: rotate(3deg);\n  }\n  15% {\n    transform: rotate(-2.5 deg);\n  }\n  25% {\n    transform: rotate(2deg);\n  }\n  35% {\n    transform: rotate(-1.5deg);\n  }\n  45% {\n    transform: rotate(1deg);\n  }\n  55% {\n    transform: rotate(-1.5deg);\n  }\n  65% {\n    transform: rotate(2deg);\n  }\n  75% {\n    transform: rotate(-2deg);\n  }\n  85% {\n    transform: rotate(2.5deg);\n  }\n  95% {\n    transform: rotate(-3deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes an1 {\n  0% {\n    transform: rotate(0);\n  }\n  5% {\n    transform: rotate(3deg);\n  }\n  15% {\n    transform: rotate(-2.5 deg);\n  }\n  25% {\n    transform: rotate(2deg);\n  }\n  35% {\n    transform: rotate(-1.5deg);\n  }\n  45% {\n    transform: rotate(1deg);\n  }\n  55% {\n    transform: rotate(-1.5deg);\n  }\n  65% {\n    transform: rotate(2deg);\n  }\n  75% {\n    transform: rotate(-2deg);\n  }\n  85% {\n    transform: rotate(2.5deg);\n  }\n  95% {\n    transform: rotate(-3deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9DOlxcVXNlcnNcXGJvZ2RhbmEuemFkaWNcXERlc2t0b3BcXGZhY3VsdGF0ZVxcUElVRy9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZS1ub3QtZm91bmRcXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBREVFO0VBQ0UsMEJBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDQUo7QURDSTtFQUNFO0lBQ0Usb0JBQUE7RUNDTjtFRENJO0lBQ0UsdUJBQUE7RUNDTjtFRENJO0lBQ0UsMkJBQUE7RUNDTjtFRENJO0lBQ0UsdUJBQUE7RUNDTjtFRENJO0lBQ0UsMEJBQUE7RUNDTjtFRENJO0lBQ0UsdUJBQUE7RUNDTjtFRENJO0lBQ0UsMEJBQUE7RUNDTjtFRENJO0lBQ0UsdUJBQUE7RUNDTjtFRENJO0lBQ0Usd0JBQUE7RUNDTjtFRENJO0lBQ0UseUJBQUE7RUNDTjtFRENJO0lBQ0Usd0JBQUE7RUNDTjtFRENJO0lBQ0Usb0JBQUE7RUNDTjtBQUNGO0FEckNJO0VBQ0U7SUFDRSxvQkFBQTtFQ0NOO0VEQ0k7SUFDRSx1QkFBQTtFQ0NOO0VEQ0k7SUFDRSwyQkFBQTtFQ0NOO0VEQ0k7SUFDRSx1QkFBQTtFQ0NOO0VEQ0k7SUFDRSwwQkFBQTtFQ0NOO0VEQ0k7SUFDRSx1QkFBQTtFQ0NOO0VEQ0k7SUFDRSwwQkFBQTtFQ0NOO0VEQ0k7SUFDRSx1QkFBQTtFQ0NOO0VEQ0k7SUFDRSx3QkFBQTtFQ0NOO0VEQ0k7SUFDRSx5QkFBQTtFQ0NOO0VEQ0k7SUFDRSx3QkFBQTtFQ0NOO0VEQ0k7SUFDRSxvQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICNlcnJvclRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAxNHB4IDA7XHJcbiAgfVxyXG5cclxuICAjZXJyb3JMaW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICY6aG92ZXIsICY6YWN0aXZle1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNnNjIxOSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA4NXB4IDRweDtcclxuICAgIGFuaW1hdGlvbjogYW4xIDEycyAuNXMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgICBAa2V5ZnJhbWVzIGFuMSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIDUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDNkZWcpIDtcclxuICAgICAgfVxyXG4gICAgICAxNSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLSAyLjUgZGVnKVxyXG4gICAgICB9XHJcbiAgICAgIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgyZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAzNSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLSAxLjVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDQ1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA1NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLSAxLjVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDY1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgyZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLSAyZGVnKTtcclxuICAgICAgfVxyXG4gICAgICA4NSV7XHJcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgyLjVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDk1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtIDNkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm5vdC1mb3VuZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub3QtZm91bmQtY29udGFpbmVyICNlcnJvclRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMTRweCAwO1xufVxuLm5vdC1mb3VuZC1jb250YWluZXIgI2Vycm9yTGluayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5ub3QtZm91bmQtY29udGFpbmVyICNlcnJvckxpbms6aG92ZXIsIC5ub3QtZm91bmQtY29udGFpbmVyICNlcnJvckxpbms6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG4ubm90LWZvdW5kLWNvbnRhaW5lciAjZzYyMTkge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA4NXB4IDRweDtcbiAgYW5pbWF0aW9uOiBhbjEgMTJzIDAuNXMgaW5maW5pdGUgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGFuMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIH1cbiAgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMi41IGRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgfVxuICAzNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xLjVkZWcpO1xuICB9XG4gIDQ1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XG4gIH1cbiAgNTUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMS41ZGVnKTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDg1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMi41ZGVnKTtcbiAgfVxuICA5NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/page-not-found/page-not-found.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
          \***********************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\bogdana.zadic\Desktop\facultate\PIUG\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map