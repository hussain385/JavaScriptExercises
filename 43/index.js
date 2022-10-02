const magician = ['David Copperfield', 'Doug Henning', 'Siegfried and Roy', 'Lance Burton', 'Ricky Jay']
const great_magician = magician.map(name => `Great ${name}`)
const show_magicians = (names) => {
    names.forEach(name => console.log(name))
}

show_magicians(magician)
show_magicians(great_magician)
