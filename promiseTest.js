import axios from "axios";

// ============= Slide version of fetch

/*const promise = new Promise((resolve, reject) => { fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => resolve(res.json()))
    .catch((error) => reject(error));
});

promise.then((data) => {
    console.log("Fetch resolved with: " + data);
}).catch((error) => {
    console.log("Something went wrong: " + error);
})*/


// We don't have to wrap the "fetch" in a Promise as javascript already does this.
// fetch returns a promise which will contain the resonse (res)
// res.json() returns a promise which will contain the body of res parsed as json (data)


/*fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        console.log("Fetch resolved with: " + data);
    })
    .catch((error) => {
        console.log("Something went wrong: " + error);
    });*/

/*
// ================= chain two promises
const asyncPromise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const asyncPromise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");

asyncPromise1
    .then((dataPromise1) => {
        console.log("The first fetch has completed: " + dataPromise1);
        return asyncPromise2;
    }).then((dataPromise2) => {
        console.log("The second fetch has completed: " + dataPromise2);
    }).catch((error) => {
        console.log("Something went wrong: " + error);
    })
*/


// ============= async / await

async function fetchPosts() {
    try {
        const post1 = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        const post2 = await axios.get("https://jsonplaceholder.typicode.com/posts/2");

        console.log(post1.data, post2.data);

    } catch (error) {
        // Uhoh, something went wrong!
        console.log(error)
    }
}

fetchPosts();