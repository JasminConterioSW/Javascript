let p1 = new Promise(function(resolve, reject) {
    //This will just reject half the time. Runs after 500ms.
    setTimeout(function() {
        if(Math.random() < 0.5) {
            resolve("p1 success");
        } else {
            reject(new Error("p1 timeout promise rejected"));
        }
    }, 500);
});

let p2 = new Promise(function(resolve, reject) {
    //This will resolve after 1000ms. Then throw an error half the time
    setTimeout(function() {
        resolve();
    }, 1000);
    })
    .then(function() {
        if(Math.random() < 0.5) {
            //console.log("p2 success");
            return "p2 success";
        } else {
            throw new Error("p2 error thrown after timeout");
        }
});


/*
p1.then(function(result) {
    console.log(result);
    return p2;
});*/

/*
Promise.all([p1, p2])
    .then(function(results) {console.log(results)})
    .catch(function(err) {
        console.log(err);
    })
*/

Promise.allSettled([p1, p2])
    .then(function(results) {console.log(results)})
    .catch(function(err) {
        console.log(err);
    })


