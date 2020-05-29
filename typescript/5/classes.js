"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]:Typescript version is " + this.version;
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheel = 4;
        this.model = theModel;
    }
    return Car;
}());
// ~
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numberOfWheel = 4;
    }
    return Car2;
}());
//===== Модификаторы
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // for class Animal and extends classes
        this.color = 'color';
    }
    Animal.prototype.go = function () {
        console.log('go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
        // this.go Error - private
    };
    return Cat;
}(Animal));
var cat = new Cat();
// cat.voice - error PROTECTED 
cat.setVoice('Hello'); // public
console.log(cat.color); // public
//===== Абстрактные классы. Не во что не компилируются
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));
