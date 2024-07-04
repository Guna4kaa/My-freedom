async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return null;
    }
}
fetchUsers()


async function displayUsers() {
    const userListElement = document.getElementById('user-list');
    const users = await fetchUsers();
    if (users) {
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `User ID: ${user.id} - Name: ${user.name}`;
            userListElement.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Failed to fetch users.';
        userListElement.appendChild(li);
    }
}

displayUsers();