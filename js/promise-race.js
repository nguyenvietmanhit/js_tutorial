const DATA_LOAD_TIME = 5000;

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = 'Promise.race() Demo';
            resolve(message);
        }, DATA_LOAD_TIME);
    })
}

function showContent(message) {
    document.querySelector('#message').textContent = message;
}

const TIMEOUT = 500;
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(), TIMEOUT)
    });
}

function showLoadingIndicator() {
    document.querySelector('#loader').className = 'loader';
}

function hideLoadingIndicator() {
    document.querySelector('#loader').className = '';
}

const btn = document.querySelector('#btnGet');
btn.addEventListener('click', () => {
    reset();

    Promise.race([
        getData()
            .then(showContent)
            .then(hideLoadingIndicator), timeout()
    ])
    .catch(showLoadingIndicator)
})

function reset() {
    hideLoadingIndicator();
    showContent('');
}
