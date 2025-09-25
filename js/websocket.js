// WebSocket Connection (Replace with your backend WebSocket URL)
const socket = new WebSocket('wss://your-backend-url.com');

socket.onopen = () => {
    console.log('WebSocket connected');
    socket.send(JSON.stringify({ type: 'subscribe', userId: 'currentUserId' })); // Placeholder
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'newPost') {
        console.log('New post received:', data.post); // Add to feed via feed.js
    }
};

socket.onclose = () => {
    console.log('WebSocket disconnected');
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};
