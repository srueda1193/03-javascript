let myNumber = Math.random();

console.log(myNumber);

myNumber = myNumber * 10;

console.log(myNumber);

myNumber = Math.floor(myNumber)

console.log(myNumber);

const changeColor = () => {
    let newNumber = Math.floor(Math.random() * 100);
    console.log(myNumber);
    if(newNumber > 50){
        document.body.style.backgroundColor = "purple";
    }else{
        document.body.style.backgroundColor = "blue";
    }

}