(async () => {
    const showNotification = () => {
        const notification = new Notification('Javascript Notification API', {
            body: 'This is a Javascript Notification API demo',
            icon: 'img/js.png',
        })

        setTimeout(() => {
            notification.close();
        }, 10 * 1000)

        notification.addEventListener('click', () => {
            window.open('https://localhost');
        })
    }


    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'You blocked the notifications'
    }

    let granted = false;
    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    granted ? showNotification() : showError();
})();
