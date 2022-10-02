let users = ["Hussain123", "Sakina123", "Saifuddin123", "Taha123", "admin",];

users.map((user) => {
    if (user === "admin") {
        return console.log("Hello admin, how can I help you today?");
    }
    console.log(`Welcome ${user}`);
});
