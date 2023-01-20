const sendBtn = document.querySelector('#send-btn');

sendBtn.addEventListener('click', () => {
    const workers = table.querySelectorAll('.worker')
    const workersData = {};
    workers.forEach((el, index) => {
        const data = [...el.cells]
        const worker = {}
        data.forEach(el => worker[el.classList.value] = el.innerText )
        workersData[index + 1] = worker
        el.remove();
    })
    const json = (JSON.stringify(workersData))
    console.log(json);
    // fetchData(json)
})
