
export const request = async (endpoint = '', method = 'GET', data = {}) => {
    if (method === 'GET') {
        const response = await fetch(`'https://maleteando-por-mexico.herokuapp.com/api'${endpoint}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
        });
        return response.json();
    }
    const response = await fetch(`'https://maleteando-por-mexico.herokuapp.com/api'${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const _getPlacesByType = async (typePlace = {}) => {
	return await request('/get-places-by-type', 'POST', typePlace);
};