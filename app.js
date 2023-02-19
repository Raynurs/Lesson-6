// arrow function - стрелочная функция

const getMax = (num1, num2) => console.log(num1 > num2 ? num1: num2);
getMax(6, 10)

// function getMax(num1, num2){
//     console.log(num1 > num2 ? num1: num2);
// }

// getMax(10, 20)

// const groups = ['21-3', '23-3', '22-3']
// const allGroups = groups.map(function(group){
//     return `группа ${group}`
// })
// console.log(allGroups);  //['группа 21-3', 'группа 23-3', 'группа 22-3']

const groups = ['21-3', '23-3', '22-3']
const allGroups = groups.map((group) => `группа ${group}`)
console.log(allGroups);


//-------------------------------------------------------------
// callback функция

// const first = () => {
//     console.log(1);
// }

// const second = () => {
//     console.log(2);
// }

// first()
// second()

// const first = () => {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000)
// }

// const second = () => {
//     console.log(2);
// }

// first()
// second()

//-------------------------------------------------------
// Написать функцию возведения в квадрат

// function setSquareNum(array){
//     const newArray = []
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i] ** 2)
//     }
//     return newArray
// }

// let arr = [7, 1, 4, 7, 9]
// setSquareNum(arr)
// console.log(setSquareNum(arr)); //[49, 1, 16, 49, 81]

// ------------------------------------------------



function doMathSome(arr, todo){
    const newArray = []
    for(let i = 0; i < arr.length; i++)
    newArray.push(todo(arr[i]))
    return newArray
}

function getSquare(num){
    return num * 10
}

function getDivide(num){
    return num / 2
}

console.log(doMathSome([4, 5, 6, 2, 8], getSquare)); //[40, 50, 60, 20, 80]
console.log(doMathSome([4, 5, 6, 2, 8], getDivide)); //[2, 2.5, 3, 1, 4]

// doMathSome - это функция высшего парядка

// getDivide,
// getSquare - это callback функции. 
// Callback это когда функция передается как аргумент
//----------------------------------------------------------------------------

// function getFullName(firstName){
//     return function(secondName){
//         return `Hello ${firstName} ${secondName}`
//     }
// }

// const fullName = getFullName('Айдана')
// console.log(fullName('Бекова')); //Hello Айдана Бекова
//-----------------------------------------------------------------------

function getFullName(firstName){
    return function(secondName){
        return function(thirdName){
            return `Hello ${firstName} ${secondName} ${thirdName}`
        }
    }
}


console.log(getFullName('Айдана')('sssss')('maugli')); //Hello Айдана sssss maugli

//---------------------------------------------------------------

// верстка с помощю кода
const div = document.createElement('div')
console.log(div);
div.classList.add('wrapper')
const body = document.body
body.appendChild(div)
console.log(body)
const header = document.createElement('h1')
header.textContent = 'frontend 23-3'
body.appendChild(header)
const ul = 
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>

div.innerHTML = ul