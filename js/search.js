document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', function () {
        const searchText = searchBar.value.trim().toLowerCase();

        if (searchText !== '') {
            const allElements = document.querySelectorAll('*');

            allElements.forEach(function (element) {
                if (element.innerText.toLowerCase().includes(searchText)) {
                    element.classList.add('highlight');
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    element.classList.remove('highlight');
                }
            });
        }
    });
});