const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const msg1 = document.querySelector('#m-1')
const msg2 = document.querySelector('#m-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error

            } else {
                msg1.textContent = "Temp: " + data.temp + " wether id: " + data.w_id + " Location: " + data.location
            }
        })
    })
})