const toggleSwitch = document.getElementById('checkbox');

function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Set the initial theme based on user's preference (if available)
if (localStorage.getItem('theme') === 'dark') {
    toggleSwitch.checked = true;
    switchTheme();
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Save user's preference to local storage
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});