const table = document.getElementById('table');
const btnAddRows = document.getElementById('add-rows');
const inputEl = document.getElementById('input-num-of-players');


btnAddRows.addEventListener('click', () => {
    const numOfPlayers = inputEl.value;
    console.log(numOfPlayers);
    let row = document.createElement('tr')

    for (let i = 0; i < numOfPlayers; i++) {
        let cell = document.createElement('td');
        let input = document.createElement('input');

        if (table.rows.length === 0) {
            input.type = 'text';
            input.placeholder = `Player ${i + 1}`;
        } else {
            input.type = 'text';
            input.addEventListener('input', updateSums);
        }

        cell.appendChild(input);
        row.appendChild(cell);
    }

    table.appendChild(row);
})


function updateSums() {
    const rows = table.getElementsByTagName('tr');
    sums = new Array(Number(inputEl.value)).fill(0);

    for (let i = 1; i < rows.length; i++){
        const cells = rows[i].getElementsByTagName('td');
        for (let j = 0; j < cells.length; j++){
            const input = cells[j].getElementsByTagName('input')[0];
            let inputVal = input.value.trim();

            if (inputVal === '') continue;

            const parsedValue = Number(inputVal);

            if (!isNaN(parsedValue)) {
                sums[j] += parsedValue;
            } else {
                sums[j] += 0;
            }
        }
    }

    console.log(sums);
}