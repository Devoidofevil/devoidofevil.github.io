const scriptURL = 'https://script.google.com/macros/s/AKfycbw9toMthqhajClycizceyg2Fax8b1vAik-h5Ot5leHmWAeA4b0/exec';
const form = document.forms['submit-to-google-sheet']
const loading = document.querySelector('.js-loading')

form.addEventListener('submit', e => {
    e.preventDefault()
    showLoadingIndicator()
    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error))
})

function showLoadingIndicator() {
    form.classList.add('is-hidden')
    loading.classList.remove('is-hidden')
}

function showSuccessMessage(response) {
    // console.log('response');
    // console.log(response);
    loading.classList.add('is-hidden');
    alert('Form submitted successfully!');
    form.classList.remove('is-hidden');
    form.reset();
}

function showErrorMessage(error) {
    loading.classList.add('is-hidden');
    alert('Error!', error.message);
    form.classList.remove('is-hidden');
}
