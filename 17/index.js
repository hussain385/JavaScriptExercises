let names = ["Ahsan", "Mustafa", "Sakina"];

names.forEach((name) =>
    console.log(`${name}, let's have dinner some time!?`)
);
console.log(`${names[2]} wont able to make it!`);

names[2] = "Saifuddin";

names.forEach((name) =>
    console.log(`${name}, let's have dinner some time!?`)
);

console.log("We have bigger dinner table now.");

names.unshift("Asher");

names.splice(2, 1, "Noor");

names.push("Ali");

names.forEach((name) =>
    console.log(`${name}, let's have dinner some time!?`)
);

console.log("Looks like i can only have space for two guests");

names.forEach(() => {
    if (names.length > 2) {
        const guest = names.pop();
        console.log(`I am terribly sorry ${guest}, i cant invite you to dinner.`);
    }
})

names.forEach((name) =>
    console.log(
        `Hey there ${name}, i would like to tell you that you're still invited!`
    )
);
