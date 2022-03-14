let p1 = Promise.resolve(4);
let p2 = Promise.resolve(8);

Promise.all([p1, p2])
    .then (function(result)
{
    console.log(result[0] + result[1]);
})
