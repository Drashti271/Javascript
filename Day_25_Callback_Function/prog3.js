const printMsg = (msg) => {
    msg();
};

const message = () => {
    console.log("Hello JS Developer...");
};

printMsg(message);