document.getElementById('button').addEventListener('onclick', function(event) {
    event.preventDefault()
    fetch('http://numbersapi.com/random/trivia')
        .then(response => {
            // Check if response was successful
            if (!response.ok) throw new Error('Not found');
            return response.json();
            })
        .then(data => {
            console.log(data)
        })
})