import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, FlatList, Alert } from 'react-native'
import { growStyles } from '../css/grow';
import DropdownMenu from './Reusables/dropdown';

const GrowWise = ({ navigation }) => {

  // Implemented
  const [soilType, setSoilType] = useState('Select');
  const [nutritionValue, setNutritionValue] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');

  // Pending
  const [crop, setCrop] = useState('Select Crop Type');

  // Data
  const soilTypes = ['Clay', 'Loam', 'Silt', 'Sand', 'Pit', 'Chalk'];

  function handlePredict() {
    if (!soilType || !crop || !nutritionValue || !temperature || !humidity) {
      alert('Please fill in all fields');
      return;
    };
  };

  const inputData = {
    Soil_Type: soilType,
    Nutrition_Value: parseInt(nutritionValue),
    Temperature: parseInt(temperature),
    Humidity: parseInt(humidity),
  };

  const onClickPredict = async () => {
    console.log(inputData);
    let resp = await fetch('http://16.16.187.212:5000/pred/suggest', {
      method: 'POST',
      body: JSON.stringify(inputData),
      headers: {
        'Content-type': 'application/json',
      },
    })
    let data = await resp.json()
    console.log(data);
    Alert.alert('Suggested Corp', String(data['content']['crop']), [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);
  }

  return (
    <View style={growStyles.container}>
      <Image style={growStyles.bg} source={require('../assets/SignUpBG.png')} />

      {/*SoilType feature */}
      <Text style={growStyles.label}>Select Soil Type:</Text>
      <DropdownMenu options={soilTypes} selectedValue={soilType} onSelect={setSoilType} />
      {/* SoilType feature */}

      {/* Nutrition Value */}
      <Text style={growStyles.label}>Enter Nutrition Value (1-50):</Text>
      <TextInput
        style={growStyles.input}
        keyboardType="numeric"
        value={nutritionValue}
        onChangeText={text => setNutritionValue(text)}
      />
      {/* Nutrition Value */}

      {/* Temperature Value */}
      <Text style={growStyles.label}>Enter Temperature (1-50):</Text>
      <TextInput
        style={growStyles.input}
        keyboardType="numeric"
        value={temperature}
        onChangeText={text => setTemperature(text)}
      />
      {/* Temperature Value */}

      {/* Humidity Value */}
      <Text style={growStyles.label}>Enter Humidity (10-100):</Text>
      <TextInput
        style={growStyles.input}
        keyboardType="numeric"
        value={humidity}
        onChangeText={text => setHumidity(text)}
      />
      {/* Humidity Value */}

      {/* Submit Button */}
      <TouchableOpacity style={growStyles.predictButton} onPress={onClickPredict}>
        <Text>Predict</Text>
      </TouchableOpacity>
      {/* Submit Button */}
    </View>
  );
};

export default GrowWise;