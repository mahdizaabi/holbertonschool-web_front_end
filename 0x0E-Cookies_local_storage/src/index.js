const showWelcomeMessageOrForm = () => {
    if(!getCookie('firstname') && !getCookie('email')){
        showForm();
    }

    else {
        let newelement = document.createElement('h1');
        newelement.innerHTML = `Welcome ${getCookie('firstname')} <a class="logout" href="#">(logout)</a>`


        let toreplace = document.querySelector('body > div')
        document.querySelector("body").replaceChild(newelement, toreplace)
        document.querySelector('a').addEventListener('click', () => {
            console.log('ok')
            deleteCookiesAndShowForm()
        })
    }
}