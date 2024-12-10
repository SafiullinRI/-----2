var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var calculateAverageArray = function (arr) {
    var summa = 0;
    for (var i = 0; i < arr.length; i++)
        summa += arr[i];
    return summa / arr.length;
};
function countValuesInRange(matrix, a, b) {
    var count = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < b && matrix[i][j] > a)
                count++;
        }
    }
    return count;
}
var formatTuple = function (tuple) { return "".concat(tuple[0], " \u2013 ").concat(tuple[2], " \u2013 ").concat(tuple[1]); };
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printType(pet) {
    console.log("\u0418\u043C\u044F: ".concat(pet.name));
    console.log("\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(pet.age));
    console.log("\u0417\u0432\u0443\u043A: ".concat(pet.speak()));
}
//          1 задание
var nums = [5, 10, 15];
var average = calculateAverageArray(nums);
console.log("\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435: ".concat(average));
console.log();
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var minRange = 3;
var maxRange = 7;
var count = countValuesInRange(matrix, minRange, maxRange);
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439: ".concat(count));
console.log();
//          2 Задание
var tuple = ["AA", "BBB", 1];
var str = formatTuple(tuple);
console.log(str);
console.log();
//          3 Задание
var VegetableOil;
(function (VegetableOil) {
    VegetableOil["Rapeseed"] = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435";
    VegetableOil["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
    VegetableOil["Olive"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435";
    VegetableOil["Apricot"] = "\u0410\u0431\u0440\u0438\u043A\u043E\u0441\u043E\u0432\u043E\u0435";
    VegetableOil["Palm"] = "\u041F\u0430\u043B\u044C\u043C\u043E\u0432\u043E\u0435";
})(VegetableOil || (VegetableOil = {}));
console.log(VegetableOil.Palm);
console.log();
//          4 Задание
var cat = new Cat();
printType(cat);
console.log();
var dog = new Dog();
printType(dog);
console.log();
var oliveOil = {
    name: "Оливковое масло высшего качества",
    type: VegetableOil.Olive,
    volume: 500,
    price: 639
};
var jsonData = JSON.stringify(oliveOil, null, 1);
console.log(jsonData);
