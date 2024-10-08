// NOTE: convert obj to arr
const person = {
    fname : "M3hTi",
    lname : "Khademi",
    age: 25,
}

const arr = Object.entries(person)
console.log(arr);


// NOTE: loop on the above array
for (const [element, value] of arr) {
    console.log(element,value);
}



// NOTE: convert  array to obj
const brands = ['Apple', 'Samsung', 'LG', 'Samsung', 'Samsung', 'asus', 'HP', 'Apple']

const objBrands = brands.reduce((accumulator, currentValue) => {
    // console.log(accumulator);
    if(accumulator[currentValue]){
        accumulator[currentValue] += 1
    }else{
        accumulator[currentValue] = 1
    }
    return accumulator; // Don't forget to return the accumulator
},{})

console.log(objBrands);



const persons = [{
        name : 'john',
        age : 64
    },{
        name : 'david',
        age : 20
    },{
        name : 'ashly',
        age: 34
    }
]


// NOTE : convert to array
const information = []
persons.forEach(person => {
    const info = Object.entries(person)
    // console.log(info);
    information.push(info)
})
console.log(information);
