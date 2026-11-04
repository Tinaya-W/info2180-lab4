document.addEventListener('DOMContentLoaded', function () {

    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('search');
    const resultDiv = document.getElementById('result');

    searchForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const query = searchInput.value.trim();

        fetch('superheroes.php?query=' + encodeURIComponent(query))
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.textContent = 'An error occurred while retrieving the superhero.';
            });

    });

});
