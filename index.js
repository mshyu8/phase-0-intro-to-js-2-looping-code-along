// Code your solutions in this file\

function writeCards(arr, event) {
    const newArray = [];
    let newString;
    for (let i = 0; i < arr.length; i++) {
        newString = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        newArray.push(newString);
    }

    return newArray;
}

function countDown(pos) {
    while(pos >= 0) {
        console.log(pos);
        pos--;
    }
}
