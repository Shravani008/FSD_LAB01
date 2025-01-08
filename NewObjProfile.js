function createProfile({ name, email }) {
    return { name, email };
}

const userInput = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA"
};

const profile = createProfile(userInput);
console.log(profile); 
// expected Output: { name: 'John Doe', email: 'john.doe@example.com' }
