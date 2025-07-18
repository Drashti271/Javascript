// Map Method 

let users = ["Drashti", "Venisha", "Sejal", "Yatri", "Isha"];

let newData = users.map((user) => {
    return user == "Sejal" ? "Riya" : user;
})

console.log(users);
console.log(newData);