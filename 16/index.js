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

