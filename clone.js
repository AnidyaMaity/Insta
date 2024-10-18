// Show or hide containers based on login status
function toggleContainers(isLoggedIn) {
    document.getElementById('loginContainer').style.display = isLoggedIn ? 'none' : 'block';
    document.getElementById('homeContainer').style.display = isLoggedIn ? 'block' : 'none';
}

// Check if user is already logged in
if (localStorage.getItem('email')) {
    toggleContainers(true);
    document.getElementById('userEmail').textContent = localStorage.getItem('email');
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store email in localStorage (for demo purposes only)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password); // Never store passwords in production

    // Show home container and hide login container
    toggleContainers(true);
    document.getElementById('userEmail').textContent = email;
});

// Logout button functionality
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    toggleContainers(false); // Show login container
});
