function updateProductInfo(product, discount, inStock) {
    const { id, name } = product; 
    return {
        ...{ id, name }, 
        discount: discount, 
        inStock: inStock    
    };
}

const product = { id: 101, name: 'Laptop', price: 1000, category: 'Electronics' };
const updatedProduct = updateProductInfo(product, 10, true);

console.log(updatedProduct);
// expected Output: { id: 101, name: 'Laptop', discount: 10, inStock: true }
