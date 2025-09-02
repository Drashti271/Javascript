let promise = new Promise((res) => {
    setTimeout(() => {
        console.log("Hello 1");
        res("Success");
    },1000);
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});


