// Sample Posts (Temporary Data for Testing)
const samplePosts = [
    {
        id: 1,
        displayName: 'Jane Doe 🐶',
        username: '@janedoe',
        content: 'Loving the outdoors! #Nature',
        video: '/assets/videos/sample.mp4',
        likes: 150,
        comments: 5,
        reposts: 2
    },
    {
        id: 2,
        displayName: 'Alex Smith 😄',
        username: '@alexsmith',
        content: 'New project update! #Tech',
        video: '/assets/videos/sample.mp4',
        likes: 300,
        comments: 10,
        reposts: 4
    }
];

// Load Initial Posts
function loadPosts() {
    const feed = document.querySelector('.feed');
    samplePosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <img src="/assets/images/default-profile.png" alt="${post.displayName}'s profile" class="post-profile-pic">
                <div>
                    <span class="post-display-name">${post.displayName}</span>
                    <span class="post-username">${post.username}</span>
                </div>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
                <video controls poster="/assets/images/placeholder-video.jpg">
                    <source src="${post.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="post-actions">
                <button aria-label="Like (${post.likes})">❤️ ${post.likes}</button>
                <button aria-label="Comment (${post.comments})">💬 ${post.comments}</button>
                <button aria-label="Repost (${post.reposts})">🔄 ${post.reposts}</button>
                <button aria-label="Save">🔖</button>
                <button aria-label="Share">↗️</button>
            </div>
        `;
        feed.insertBefore(postElement, feed.querySelector('.loading-indicator'));
    });
}

document.addEventListener('DOMContentLoaded', loadPosts);

// Infinite Scroll Simulation
let page = 1;
function loadMorePosts() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.textContent = 'Loading more posts...';
        setTimeout(() => {
            // Simulate more posts (replace with API call)
            if (page < 3) {
                loadPosts();
                page++;
            } else {
                loadingIndicator.textContent = 'No more posts.';
            }
        }, 1000);
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMorePosts();
    }
});

// Post Creation Button
document.querySelector('.create-post-btn').addEventListener('click', () => {
    console.log('Create post clicked'); // Replace with modal or form
});
