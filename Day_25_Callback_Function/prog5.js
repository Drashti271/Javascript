let promise = new Promise((rej) => {
    setTimeout(() => {
        console.log("Hello 1");
        rej("Rejected");
    },1000);
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});