let data = [1, [2, 3, [12, 3]], 3, [1, 4]];

function flattenArray(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
     
            result = result.concat(flattenArray(arr[i]));
        } else {
        
            result.push(arr[i]);
        }
    }
    
    return result;
}

console.log(flattenArray(data)); 
