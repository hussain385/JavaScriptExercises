const make_car = (manufacturer, model, options) => {
    const car_info = {
        'manufacturer': manufacturer,
        'model': model,
        ...options
    }
    return car_info
}

console.log(make_car('Toyota', 'Vitz', {color: 'blue', low_car: true}))

console.log(make_car('Suzuki', 'Wagon R', {
    year: 2021,
    color: 'white',
    headlights: 'bright'
}))
