function search() {
    var searchTerm = document.getElementById('searchInput').value;
    var outputDiv = document.getElementById('output');
    var downloadLink = document.getElementById('downloadLink');

    // AJAX isteği yaparak sunucudan veri almak için kullanabilirsiniz.
    // Bu kısımda sunucu tarafı dili kullanarak log.txt dosyasını aramanız gerekiyor.
    // Ardından, bulunan sonuçları outputDiv içine yerleştirin.

    // Şu an için, sadece örnek bir metin kullanıyoruz:
    var sampleText = "Örnek satır 1\nÖrnek satır 2\nÖrnek satır 3\nÖrnek satır 4\nÖrnek satır 5";

    var lines = sampleText.split('\n');
    var results = [];

    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf(searchTerm) !== -1) {
            results.push(lines[i]);
        }
    }

    outputDiv.innerHTML = results.length > 0 ? results.slice(0, 50).join('<br>') : 'Sonuç bulunamadı.';

    if (results.length > 0) {
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(results.join('\n')));
        downloadLink.style.display = 'inline';
    } else {
        downloadLink.style.display = 'none';
    }
}
