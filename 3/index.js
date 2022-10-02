const name = "Hussain saifuddin"
const str = "hussain-saifuddin"
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(str.replace(
    /([^\W_]+[^\s-]*) */g,
    function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
)
