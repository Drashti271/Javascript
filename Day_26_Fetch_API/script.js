let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });