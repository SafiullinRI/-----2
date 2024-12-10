const calculateAverageArray = (arr: number[]): number => {
    let summa: number = 0;
    for (let i: number = 0; i < arr.length; i++)
        summa += arr[i];
    return summa / arr.length;
}


function countValuesInRange(matrix: number[][], a: number, b: number): number
{
    let count: number = 0;
    for (let i: number = 0; i < matrix.length; i++)
    {
        for (let j: number = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] < b && matrix[i][j] > a)
                count++;
        }
    }
    return count;
}


const formatTuple = (tuple: [string, string, number]): string => `${tuple[0]} – ${tuple[2]} – ${tuple[1]}`;


class Pet
{ 
    name: string = 'Some pet';
    age: number = -1;
    speak()
    { 
        return "No speak. I am fish!"; 
    } 
}


class Dog extends Pet
{ 
    label: string = "AngryHunter"; 
    age: number = 8; 
    speak()
    { 
        return "Yaw-Gaw!"; 
    } 
}


class Cat extends Pet
{ 
    name: string = 'Barsik'; 
    age: number = 2; 
    speak()
    { 
        return "Miyau!"; 
    }
}


function printType<T extends Pet>(pet: T): void
{
    console.log(`Имя: ${pet.name}`);
    console.log(`Возраст: ${pet.age}`);
    console.log(`Звук: ${pet.speak()}`);
}


//          1 задание
let nums: number[] = [5, 10, 15];
let average: number = calculateAverageArray(nums);
console.log(`Среднее арифметическое: ${average}`);
console.log();


let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let minRange: number = 3;
let maxRange: number = 7;

let count: number = countValuesInRange(matrix, minRange, maxRange);
console.log(`Количество значений: ${count}`);
console.log();


//          2 Задание
let tuple: [string, string, number] = ["AA", "BBB", 1];
let str: string = formatTuple(tuple);
console.log(str);
console.log();


//          3 Задание
enum VegetableOil
{
    Rapeseed = "Рапсовое",
    Sunflower = "Подсолнечное",
    Olive = "Оливковое",
    Apricot = "Абрикосовое",
    Palm = "Пальмовое"
}
console.log(VegetableOil.Palm);
console.log();


//          4 Задание
let cat: Cat = new Cat();
printType(cat);
console.log();

let dog: Dog = new Dog();
printType(dog);
console.log();


//          5 Задание
interface OilProduct
{
    name: string;
    type: VegetableOil;
    volume: number;
    price: number;
}

let oliveOil: OilProduct = {
    name: "Оливковое масло высшего качества",
    type: VegetableOil.Olive,
    volume: 500,
    price: 639
};

let jsonData: string = JSON.stringify(oliveOil, null, 1);
console.log(jsonData);