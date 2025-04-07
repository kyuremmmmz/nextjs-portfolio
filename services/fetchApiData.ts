let hasLogged = false;

export default async function fetchApiData() {
    try {
        const fetchData = await fetch('http://localhost:3001/api/getResponses', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });

        if (!fetchData.ok) {
            throw new Error(`HTTP error! Status: ${fetchData.status}`);
        }

        const jsonData = await fetchData.json();

        if (!hasLogged) {
            console.log(jsonData);
            hasLogged = true;
        }

        return jsonData;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
