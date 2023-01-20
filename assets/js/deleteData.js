table.addEventListener('click', (e) => {
    if (e.target.classList.contains('applications__btn__delete')) {
        e.target.closest('tr').remove()
    }
})
