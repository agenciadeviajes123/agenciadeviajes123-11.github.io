document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var matricula = document.getElementById('matricula').value;
    var nombre = document.getElementById('nombre').value;
    var ingles = parseFloat(document.getElementById('ingles').value);
    var matematicas = parseFloat(document.getElementById('matematicas').value);
    var espanol = parseFloat(document.getElementById('espanol').value);
    var artes = parseFloat(document.getElementById('artes').value);
    var geografia = parseFloat(document.getElementById('geografia').value);

    var promedio = (ingles + matematicas + espanol + artes + geografia) / 5;

    var row = `<tr>
        <td>${matricula}</td>
        <td>${nombre}</td>
        <td>${ingles}</td>
        <td>${matematicas}</td>
        <td>${espanol}</td>
        <td>${artes}</td>
        <td>${geografia}</td>
        <td>${promedio.toFixed(2)}</td>
    </tr>`;

    document.getElementById('resultsTable').innerHTML += row;
});
