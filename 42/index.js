const magician = ['David Copperfield', 'Doug Henning', 'Siegfried and Roy', 'Lance Burton', 'Ricky Jay']

const show_magicians = (names) => {
    names.forEach(name => console.log(name))
}

show_magicians(magician)

const make_great = (names) => {
    names.forEach(name => console.log(`Great ${name}`))
}

make_great(magician)
