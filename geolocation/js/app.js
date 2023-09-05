(() => {
    const message = document.querySelector('#message');

    if (!navigator.geolocation) {
        message.textContent = `Your browser doesn't support Geolocation`;
        message.classList.add('error');
        return
    }

    const btn = document.querySelector('#show');
    btn.addEventListener('click', function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    })

    function onSuccess(position) {
        const {
            latitude,
            longitude,
        } = position.coords;

        message.classList.add('success');
        message.textContent = `Your location: (${latitude}, ${longitude})`;
    }

    function onError() {
        message.classList.add('error');
        message.textContent = `Failed to get your location!`
    }
})();
