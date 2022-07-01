const getPlaceAtrac = async (typePlace = 'atractivo_turistico') =>{
    const API = 'https://maleteando-por-mexico.herokuapp.com/api/v1'
    const ENDPOINT_PLACES_BY_TYPE = '/get-places-by-type'
  
    const data = { typePlace }
  
    const response = await fetch(`${API}/${ENDPOINT_PLACES_BY_TYPE}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
      'Content-Type': 'application/json'
      },
    });
  
    const cleanRes = await response.json()
  
    return cleanRes;
  
  }
  
  getPlaceAtrac('atractivo_turistico')
  .then(console.log)