function searchLog() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    fetch('log.txt')
        .then(response => response.text())
        .then(data => {
            var lines = data.split('\n');
            var matches = lines.filter(line => line.toLowerCase().includes(searchTerm));
            document.getElementById("output").innerHTML = matches.join('<br>');
        })
        .catch(error => console.error('Error:', error));
}

function showLines() {
    var lineCount = document.getElementById("lineCount").value;
    fetch('log.txt')
        .then(response => response.text())
        .then(data => {
            var lines = data.split('\n').slice(0, lineCount);
            document.getElementById("output").innerHTML = lines.join('<br>');
        })
        .catch(error => console.error('Error:', error));
}
