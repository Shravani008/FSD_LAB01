function UpdateEmp(emp,newrole)
{
    return{
         ...emp,
         role:newrole
    };
}

const employee = {name : 'Shravani', role : 'Developer' , age : 21 , location : 'IN'}
const update = UpdateEmp(employee,'Senior Developer');
console.log(update);