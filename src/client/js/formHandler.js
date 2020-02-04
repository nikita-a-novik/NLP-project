function formatResponse(response) {
    let result = '<ul>'
    for (let index = 0; index < response.length; index++) {
        const r = response[index];
        result += `<li>${r}</li>`
    }
    console.warn(result);
    return result + '</ul>';
}

function handleSubmit(event) {
    event.stopPropagation()
    event.preventDefault()
    
    // check what text was put into the form field
    let URLclean = document.getElementById('name').value
    let URL = encodeURIComponent(URLclean);

    // checkForName(URL)

    console.log("::: Form Submitted :::")
    alert('test')
    fetch(`/summary?url=${URL}`)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = formatResponse(res)
    })
    .catch((reason) => {
        alert('Could not fetch')
    })
}

export { handleSubmit, formatResponse }
