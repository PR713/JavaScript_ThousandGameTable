const table = document.getElementById('table');
const btnAddRows = document.getElementById('add-rows');
const inputEl = document.getElementById('input-num-of-players');
const sumDisplay = document.getElementById('sum-display');
const sumsText = document.getElementById('sums-text');


btnAddRows.addEventListener('click', () => {
    const numOfPlayers = inputEl.value;
    console.log(numOfPlayers);
    let row = document.createElement('tr')

    for (let i = 0; i < numOfPlayers; i++) {
        let cell = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'text';

        if (table.rows.length === 0) {
            input.placeholder = `Player ${i + 1}`;
        } else {
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
    sumsText.style.display = 'block';
    sumDisplay.style.display = 'table';


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

    displaySums(sums);
}

function displaySums(sums) {
    const numOfPlayers = Number(inputEl.value);
    let html = '<tr>';

    for (let i = 0; i < numOfPlayers; i++) {
        html += `<td>${sums[i]}</td>`;
    }

    html += '</tr>';

    sumDisplay.innerHTML = html;
}