const todoText = document.getElementById('todo-text');
const todoUl = document.getElementById('todo-ul');


function addTask() {

    if (todoText.value.trim() === '') {
        alert('Enter some text')
    } else {
        console.log(todoText.value.trim());
        const litag = document.createElement('li');
        const spanText = document.createElement('span');
        const textNode = document.createTextNode(todoText.value.trim());
        spanText.appendChild(textNode);
        spanText.addEventListener('click', (e) => {
            console.log(e.target);
            e.target.classList.toggle('done');
        });
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML = 'Clear';
        spanClose.addEventListener('click', (e) => {
            console.log(e.target.parentElement);
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });
        litag.appendChild(spanText);
        litag.appendChild(spanClose);
        todoUl.appendChild(litag);
        todoText.value = '';

    }
}