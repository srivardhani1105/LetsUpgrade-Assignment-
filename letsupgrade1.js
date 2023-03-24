 function divisibilityByThree(numbers)
 {
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]%3==0)
        console.log(numbers[i]);
    }
 }
 const numbers=[1,3,5,6,18,10,54]
 divisibilityByThree(numbers)
