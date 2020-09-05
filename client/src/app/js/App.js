const navActionBtn = () => {
    if (document.body.classList.contains('main')) {
        document.body.classList.add('settings');
        document.body.classList.remove('main');
    } else {
        document.body.classList.add('main');
        document.body.classList.remove('settings');
    }
}