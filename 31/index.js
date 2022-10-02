// scenario #1
let users = [];

if (users === []) {
    console.log("No users found!");
} else {
    users.map((user) => {
        if (user === "admin") {
            return console.log("Hello admin, how can I help you today??");
        }
        console.log(`Welcome ${user}`);
    });
}

// scenario #2

let users1 = ["Hussain123", "Sakina123", "Saifuddin123", "Taha123", "admin",];

if (users1 === []) {
    console.log("No users found!");
} else {
    users1.map((user) => {
        if (user === "admin") {
            return console.log("Hello admin, how can I help you today??");
        }
        console.log(`Welcome ${user}`);
    });
}
