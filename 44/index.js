const order_details = (value) => {
    console.log("\nI'll make you a great sandwich:")
    value.forEach(value => {
        console.log(`...adding ${value} to your sandwich.`)
    })
    console.log("Your sandwich is ready!")
}

order_details(['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'])
order_details(['turkey', 'apple slices', 'honey mustard'])
order_details(['peanut butter', 'strawberry jam'])
