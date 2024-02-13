import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import {growStyles, pickerSelectStyles}  from '../css/grow';

const GrowWise = ({ navigation }) => {

    const [soilType, setSoilType] = useState('');
    const [crop, setCrop] = useState('');
    const [nutritionValue, setNutritionValue] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');

    function handlePredict(){
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
        Crop: crop,
      };  

    const onClickPredict = () => {
      alert("Saavule Setha Payale!!")
    }

    return(
    <View style={growStyles.container}>
        <Image 
          style={growStyles.bg}
          source={require('../assets/SignUpBG.png')}
        />
        <Text style={growStyles.label}>Select Soil Type:</Text>
        <View style={{borderRadius: 10,borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden', height: 55, marginBottom: 20}}>
        <RNPickerSelect
          onValueChange={(value) => setSoilType(value)}
          items={[
            { label: 'Clay', value: 'Clay' },
            { label: 'Loam', value: 'Loam' },
            { label: 'Silt', value: 'Silt' },
            { label: 'Sand', value: 'Sand' },
            { label: 'Pit', value: 'Pit' },
            { label: 'Chalk', value: 'Chalk' },

          ]}
          style={pickerSelectStyles}
        />
        </View>
    
        <Text style={growStyles.label}>Enter Nutrition Value (1-50):</Text>
        <TextInput
          style={growStyles.input}
          keyboardType="numeric"
          value={nutritionValue}
          onChangeText={text => setNutritionValue(text)}
        />
    
        <Text style={growStyles.label}>Enter Temperature (1-50):</Text>
        <TextInput
          style={growStyles.input}
          keyboardType="numeric"
          value={temperature}
          onChangeText={text => setTemperature(text)}
        />
    
        <Text style={growStyles.label}>Enter Humidity (10-100):</Text>
        <TextInput
          style={growStyles.input}
          keyboardType="numeric"
          value={humidity}
          onChangeText={text => setHumidity(text)}
        />
    
        <TouchableOpacity style={growStyles.predictButton} onPress={onClickPredict}>
            <Text>Predict</Text>
        </TouchableOpacity>
    </View>
    );
};

export default GrowWise;