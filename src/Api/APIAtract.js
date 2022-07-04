import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

 const APIAtract = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Atrac = async (typePlace = 'atractivo_turistico') => {
    const API = 'https://maleteando-por-mexico.herokuapp.com/api/v1'
    const type = '/get-places-by-type'
  
    const data = { typePlace }
     try {
      const response = await fetch(`${API}/${type}`, 
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        },
      });
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    Atrac();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.nombre}, {item.domicilio}</Text>
          )}
        />
      )}
    </View>
  );
};

export default APIAtract;