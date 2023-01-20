function clearValue([...elements]) {
    elements.forEach((el) => {
        el.value = ((el.id === 'position') ? 'Аналитик' : '')
        
    })
}