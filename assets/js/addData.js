const addBtn = document.querySelector('#add-btn');
const table = document.querySelector('table');
const error = document.querySelector('.applications__error');

addBtn.addEventListener('click', (e) => {
    const name = document.querySelector('#name')
    const position = document.querySelector('#position')
    const age = document.querySelector('#age')
    const competencies = document.querySelector('#competencies')
    error.textContent = '';
    const data = [name, position, age, competencies]
    const row = document.createElement('tr')
    for (let els of data) {
      const isValid = checkValidation(els.value, els.id)
      if (isValid) {
        const column = document.createElement('td');
        column.classList.add(els.id);
        column.textContent = els.value;
        row.appendChild(column)
      } else {
        break
      }
    }
    if (row.childNodes?.length === 4) {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('applications__btn__delete');
        deleteButton.textContent = '✖';
        row.appendChild(deleteButton);
        row.classList.add('worker')
        table.appendChild(row);
        clearValue(data);
        error.textContent = '';
    } else {
        error.textContent = 'Пожалуйста, корректно заполните все поля'
    }
})

