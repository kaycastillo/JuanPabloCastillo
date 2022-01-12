function miiterador(arr:any[],callback:(arg:any,index?:number)=> void) {
    for (let i=0; i<=arr.length; i++) {
        callback(arr[i],i);
        
    }
}
miiterador([1,2,3],(a) => console.log(a));
miiterador([1,2,3],(a,i) => console.log(a,i));

function miiterador2(arr:any[],callback:(arg:any,index?:number)=> void) {
    for (let i=0; i<=arr.length; i++) {
        callback(arr[i]);
        
    }
}