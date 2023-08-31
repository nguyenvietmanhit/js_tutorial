const item = document.querySelector('.item');
item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    // console.log('drag starts')
    e.dataTransfer.setData('text/plain', e.target.id)
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)

}


const boxes = document.querySelectorAll('.box');
// console.log(boxes)
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
})


function dragEnter(e) {
    // console.log('drag enter')
    e.preventDefault(); // phai co de lam cho element co the drop vao dc
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    // console.log('drag over')
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    // console.log('drag leave')
    e.target.classList.remove('drag-over');
}

function drop(e) {
    // console.log('drop')
    e.target.classList.remove('drag-over');

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    draggable.classList.remove('hide')
}
