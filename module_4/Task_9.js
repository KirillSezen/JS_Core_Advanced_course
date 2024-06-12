async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

(async () => {
    try {
        const userData = await fetchUserData(123);
        console.log(userData);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
})();