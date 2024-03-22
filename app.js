// app.js

async function searchLog() {
    // Get the search input value
    const searchInput = document.getElementById('search');
    const searchText = searchInput.value.trim();
    const maxLines = 30;

    if (searchText.length > 0) {
        // Fetch the log.txt file
        const response = await fetch('log.txt');
        const text = await response.text();
        const lines = text.split('\n');

        // Filter the lines based on the search input
        const searchResults = lines.filter(line => line.includes(searchText));

        // Display the maximum number of lines
        const resultOutput = document.getElementById('output');
        resultOutput.innerHTML = '';
        if (searchResults.length > 0) {
            const resultCount = Math.min(searchResults.length, maxLines);
            for (let i = 0; i < resultCount; i++) {
                resultOutput.innerHTML += `<p>${searchResults[i]}</p>`;
            }
        } else {
            resultOutput.innerHTML += '<p>No results found.</p>';
        }
    }
}

document.getElementById('search').addEventListener('input', () => {
    const searchInput = document.getElementById('search');
    if (searchInput.value.trim().length > 0) {
        searchInput.nextElementSibling.removeAttribute('disabled');
    } else {
        searchInput.nextElementSibling.setAttribute('disabled', 'true');
    }
});

document.getElementById('search').addEventListener('focus', () => {
    document.getElementById('search').select();
});
