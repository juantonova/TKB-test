async function fetchData(data) {
    const response = await fetch('/', {
        method: 'POST', 
        headers: {
            'Content-type': 'Application/json'
        },
        body: data
    });
    const answer = await response.json();
    if (answer) {
      arrOfWorkers = Object.values(answer);
      return Array.isArray(arrOfWorkers);
    };
    return false;
}