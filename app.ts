function add(num1:number,num2: number,boolflag:boolean){
    if(boolflag){
        console.log(num1+num2);
    }else{
        return num1+num2;
    }
}

const number1=5;
const number2=2.7;
const boolflag=true;
const result=add(number1,number2,boolflag);
console.log(result)