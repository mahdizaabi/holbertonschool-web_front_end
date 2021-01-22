
const { hash } = window.location;

const decMessage = atob(hash.replace('#', ''))
if(decMessage) {
    document.querySelector('#msginput').classList.add('hide');
    document.querySelector('#msg__show').classList.remove('hide');
    document.querySelector('h1').innerHTML = decMessage;
}
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    console.log(event.target);
    const input = document.querySelector('#message-input');
    const msginput = document.querySelector('#msginput')
    const message = document.getElementById('link-input')
    const encrypted = btoa(input.value)
    const responseMessage = document.getElementById('reponse__card')
    input.value=''
    const filterUrl =(`${window.location}`).split('#')[0]
    message.value = `${filterUrl}#${encrypted}`;
    msginput.classList.add('hide');
    responseMessage.classList.remove('hide');
    message.select()
})