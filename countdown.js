function countDown() {
    for (var i = 3; i >= 0; i--) {
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}
countDown();




/*function countDown() {
    for (let i = 3; i >= 0; i--) {
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}
countDown();*/



/*
function countDown() {
    for (var i = 3; i >= 0; i--) {
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}
countDown();*/
