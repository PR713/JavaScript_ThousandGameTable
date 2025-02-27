const table = document.getElementById('table');
const btnAddRows = document.getElementById('add-rows');
const inputEl = document.getElementById('input-players');

btnAddRows.addEventListener('click', () => {
    const numOfPlayers = inputEl.value;

    let row = document.createElement('tr')

    for (let i = 0; i < numOfPlayers; i++) {
        let cell = document.createElement('td');
        let input = document.createElement('input');
        cell.appendChild(input);
        row.appendChild(cell);
    }

    table.appendChild(row);
})
