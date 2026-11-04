document.addEventListener('DOMContentLoaded', function () {

    const searchButton = document.getElementById('search');

    searchButton.addEventListener('click', function () {

        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while retrieving the superheroes.');
            });

    });

});