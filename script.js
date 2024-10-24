
// Function to save data to localStorage
function saveProfile() {
    // Get values from the form
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const usia = document.getElementById('usia').value;
    const lokasi = document.getElementById('lokasi').value;
    const yoe = document.getElementById('yoe').value;
    const email = document.getElementById('email').value;

    // Update profile section with new values
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayRole").innerText = role;
    document.getElementById("displayAvailability").innerText = availability;
    document.getElementById("displayUsia").innerText = usia;
    document.getElementById("displayLokasi").innerText = lokasi;
    document.getElementById("displayYoe").innerText = yoe;
    document.getElementById("displayEmail").innerText = email;

    // Save data to localStorage (optional)
    localStorage.setItem('name', name);
    localStorage.setItem('role', role);
    localStorage.setItem('availability', availability);
    localStorage.setItem('usia', usia);
    localStorage.setItem('lokasi', lokasi);
    localStorage.setItem('yoe', yoe);
    localStorage.setItem('email', email);

    // Hide form and show updated profile
    displayProfile();
}
// Function to display data from localStorage
function displayProfile() {
    // Hide form and show profile section
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';

    // Get data from localStorage
    document.getElementById('displayName').innerText = localStorage.getItem('name');
    document.getElementById('displayRole').innerText = localStorage.getItem('role');
    document.getElementById('displayAvailability').innerText = localStorage.getItem('availability');
    document.getElementById('displayUsia').innerText = localStorage.getItem('usia');
    document.getElementById('displayLokasi').innerText = localStorage.getItem('lokasi');
    document.getElementById('displayYoe').innerText = localStorage.getItem('yoe');
    document.getElementById('displayEmail').innerText = localStorage.getItem('email');
}

// Function to show form for editing profile
function editProfile() {
    // Show form and hide profile section
    document.getElementById('form-section').style.display = 'block';

    // Populate form with current data
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('role').value = localStorage.getItem('role');
    document.getElementById('availability').value = localStorage.getItem('availability');
    document.getElementById('usia').value = localStorage.getItem('usia');
    document.getElementById('lokasi').value = localStorage.getItem('lokasi');
    document.getElementById('yoe').value = localStorage.getItem('yoe');
    document.getElementById('email').value = localStorage.getItem('email');
}

// Load profile if data exists in localStorage
window.onload = function () {
    if (localStorage.getItem('name')) {
        displayProfile();
    }
};