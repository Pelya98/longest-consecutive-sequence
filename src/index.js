module.exports =function longestConsecutiveLength(array) {
    let cout = 1;
    let result = [];
    array = array.sort(function (a, b) {
        return a - b;
    });

if(array.length==0)
    return 0;
if(array.length==1)
    return 1;


    for (let j = 0; j < array.length-1; j++) {
        if(array[j]==array[j+1]){
            continue;}
        else if(array[j] == array[j + 1] - 1) {
            cout++;

        }
        else {
            result.push(cout);
            cout = 1;
        }
    }
    if(result.length==1){
            return result[0];}

result.sort(function (a,b) {return a-b;

})
return result[result.length-1];
};
// console.log(longestConsecutiveLength([1,2,3,4,5,10,5,6,8,4,53,2,3,12,6,4,5,7,8]))