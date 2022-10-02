let users = ["Hussain123", "Sakina123", "Saifuddin123", "Taha123", "admin",];

const new_users = ["ahsan123", "Sakina123", "amir ali"];

new_users.map((new_user) => {
    if (users.includes(new_user)) {
        return console.log(`${new_user} username is already taken please try again!`)
    }
    console.log("Username is available")
});
