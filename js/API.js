const baseURL = 'http://localhost:3000';

class API {
    static fetchCars = (success, failure) => {
        fetch(`${baseURL}/cars`)
            .then(res => res.json())
            .then(success)
            .catch(failure)
    }

    static deleteCar = (id, success, failure) => {
        fetch(`${baseURL}/cars/${id}`, {method: 'DELETE'})
            .then(res => res.status === 200 ? success() : failure(res.statusText))
            .catch(failure)
    }
}

// API.fetchCars(
//     console.log,
//     console.error
// )

// API.deleteCar(
//     "2",
//     () => console.log('good'),
//     console.error
// )