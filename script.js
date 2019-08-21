let num1= 13
let num2= .5
let str1= "hello"
let str2="bye"
let bool1=true
let bool26=false
const arr= ['cat', 'dog', 'cow']
const arr2= [1, 2 ,3]


const obj={
    name:'sai',
    age:30,
    city:'chicago',
    country:'US',
    carModel: 'bmw'
};

// ___________________________________________
// create an immediately invoked function expression to do the following:

(()=>{
    const newArray=[]
    let sumArray = []
    let numOfSplits; 
    // pushed the number and string variable into a new array 
    arr2.push(num1,num2,str1.length)
    // created a formula here to get the number of split (3) and the conditional here is stating if the 
    // number array is divisible by three  
    if(arr2.length % 3 ===0){
        numOfSplits = 3; 
    }
    // the for loop here is itierating through the array with i being 0 and  i is greater than or equal to the the number of splits +1
    // and the plus i represents the incremented iteration
    for(i=0; i <= numOfSplits + 1; i += arr2.length/numOfSplits){
        newArray.push(arr2.slice(i, arr2.length/numOfSplits + i));
    }
     // in this for each loop passing in arr to the newArray means that i am accessing 
    // the array within the newArray
    newArray.forEach((arr)=>{
        // here i am accessing the indices of arr and adding them together 
       arr[0] + arr[1]
        sumArray.push([arr[0] + arr[1], arr])
    });
        console.log(sumArray);
        
})();



// __________________________________________
// create a function literal to do the following:
// return the innermost object key/value from array with objects variable as tuples inside of a new array. 

// first i need to create an empty array for the tuple/objects
// i need to get access to the object's key/value pair and put them into an array


const objArr = [
    {
        car: [
            {
                brand: 'bmw'
            }
        ]
    },
    {
        car: [
            {
                brand: 'blue'
            }
        ]
    }, {
        car:
            [
                {
                    brand: 4
                }
            ]
    }
];



function returnInnermost(arr){
    // create a function that returns the objects innermost key and value pair
    let newArr = []
    // variable to store values in a new array
    
    arr.forEach((obj)=>{
        // for each loop is created to iterate through all the objects
        // and obj is passed into the parameter to get the objects from the array holding the objects
       for(const [key , value] of Object.entries(obj.car[0])){
        // the for of loop iterates through the loop and grabs the key and values from the object
        // object.entries returns an array of the key and value pair from the obj: car[0'first index']
           newArr.push([key , value])
        //    pushing the key/value into the new array(newArr)

       }  

    }) 
        return newArr
        // returning the values after pushing key/values into newArr

    
};

console.log(returnInnermost(objArr))

