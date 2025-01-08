function mergeDetails(...user)
{
    const mergedData={};
    for(const v of user){
        Object.assign(mergedData,v);
    }
    return mergedData;
}

const userDetails = {name: 'CVR', age: 25};
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'};
const userPreferences = {theme: 'Engineering Edu', language: 'EN'};
const mix=mergeDetails(userDetails,userAddress,userPreferences);
console.log(mix);