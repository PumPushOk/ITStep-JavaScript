data = [
    {
        owner: 'Owner1',
        params: [5, 10],
    },
    {
        owner: 'Owner2',
        params: [32, 4],
    },
    {
        owner: 'Owner2',
        params: [6, 8],
    },
]


console.log(myFind(data, (data)=>{ return data.owner === 'Owner2'}));
console.log(myFilter(data, (data)=>{ return data.owner === 'Owner2'}));
myForEach(data, (data)=>{ console.log(`${data.owner}: ${data.params[0]*data.params[1]} m2`)});

function myFind(arr, callback){
    for(i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return arr[i];
        }
    }
}
function myFilter(arr, callback){
    let filtered = [];
    for(i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            filtered.push(arr[i]);
        }
    }
    return filtered;
}
function myForEach(arr, callback){
    for(i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}