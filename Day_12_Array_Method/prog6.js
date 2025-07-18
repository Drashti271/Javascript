// Filter Method 

let users = ["Drashti", "Venisha", "Sejal", "Yatri", "Isha"];

let newData = users.filter((user) => {
    return user !== "Venisha";
})

console.log(newData);