// Sidebar Menu Toggle
document.querySelector('.profile-menu-trigger').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar-menu');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    sidebar.setAttribute('aria-hidden', sidebar.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
    overlay.setAttribute('aria-hidden', sidebar.getAttribute('aria-hidden'));

    overlay.addEventListener('click', () => {
        sidebar.setAttribute('aria-hidden', 'true');
        overlay.remove();
    });
});

// Feed Toggle (Switch between For You and Following)
document.getElementById('feed-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const options = document.querySelector('.feed-toggle-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.feed-toggle-options button').forEach(button => {
    button.addEventListener('click', () => {
        const feedType = button.getAttribute('data-feed');
        console.log(`Switched to ${feedType} feed`); // Replace with API call to update feed
        document.querySelector('.feed-toggle-options').style.display = 'none';
    });
});

// Logout and Delete Account (Placeholder)
document.getElementById('logout').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Logout clicked'); // Replace with API call to log out
});

document.getElementById('delete-account').addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Are you sure? We don’t store any data after deletion.')) {
        console.log('Account deletion requested'); // Replace with API call
    }
});

// Accessibility: Trap focus in sidebar when open
document.addEventListener('keydown', (e) => {
    const sidebar = document.querySelector('.sidebar-menu');
    if (sidebar.getAttribute('aria-hidden') === 'false' && e.key === 'Escape') {
        sidebar.setAttribute('aria-hidden', 'true');
        document.querySelector('.sidebar-overlay').remove();
    }
});
