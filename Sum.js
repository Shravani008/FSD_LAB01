function sum(...num)
{
    return num.reduce((prev, curr)=> prev+curr,0)
}

const res=sum(10,20,30,40)
console.log(res);


// return 100 as sum , it takes two inputs at a time