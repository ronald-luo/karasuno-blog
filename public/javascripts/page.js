const trashcan = document.getElementById('delete');

document.getElementById('delete').addEventListener('click', (e) => {
    const endpoint = `/pages/${trashcan.dataset.doc}`
    fetch(endpoint, {
        method: 'delete'
    })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err))
})