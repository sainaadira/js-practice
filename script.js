let num1= 13
let num2= .5
let str1= "hello"
let str2="bye"
let var5=true
let var6=false
const arr= ['cat', 'dog', 'cow']
const arr2= [1, 2 ,3]
const newArr=[
    {
        car:[{brand: 'bmw'}]
    },
    {
        truck:[{color: 'blue'}]
    }, {
        van:[{wheels:17}]
    }
];

const obj={
    name:'sai',
    age:30,
    city:'boston',
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
    // and the plus one represents 
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



