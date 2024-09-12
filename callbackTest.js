/*
function callBackQueue() {
    console.log('Start');

    setTimeout(function cb() {
        console.log('Callback 1');
    }, 1);

    console.log('Middle');

    setTimeout(function cb1() {
        console.log('Callback 2');
    }, 0);

    console.log('End');
}

callBackQueue();*/

function callBackQueue() {
    console.log('Start');

    setTimeout(() => {
        console.log('Callback 1');
    }, 1); //Note this is 1ms, so may not really delay it. Set to something higher to make this return second

    console.log('Middle');

    setTimeout(() => {
        console.log('Callback 2');
    }, 0);

    console.log('End');
}

callBackQueue();