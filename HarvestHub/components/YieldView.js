import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import {growStyles, pickerSelectStyles}  from '../css/yield';
import { StatusBar } from 'expo-status-bar';
import {Picker} from '@react-native-picker/picker';

const YieldView = ({ navigation }) => {

    const [soilType, setSoilType] = useState('');
    const [nutritionValue, setNutritionValue] = useState('');
    const [phLevel, setphLevel] = useState('');
    const [cropMgmt, SetcropMgmt] = useState('');
    const [cropVar, setcropVar] = useState('');
    const [farmSize, setFarmSize] = useState('');
    const [pest, setPest] = useState('');
    const [fertilizers, setfertilizers] = useState('');
    const [pestTimes, setpestTimes] = useState('');
    const [fertilizers_t, setFertilizers_t] = useState('');
    

    function handlePredict(){
        if (!soilType || !nutritionValue || !phLevel || !cropMgmt || !cropVar || !farmSize || !pest || !fertilizers || !pestTimes || !fertilizers_t) {
            alert('Please fill in all fields');
            return;
        };
    };

    const inputData = {
        soil_type: soilType,
        nutrition_value: parseInt(nutritionValue),
        phlevel: parseFloat(phLevel),
        farmsize: parseInt(farmSize),
        cropVariety: cropVar,
        cropmgmt: cropMgmt,
        pestdiseases: pest,
        fertilizers_local: fertilizers,
        pest_times: pestTimes,
        fertilizers_time: fertilizers_t,
      };


    return(
    <View style={growStyles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
        />
        <Image 
            style={growStyles.bg}
            source={require('../assets/SignUpBG.png')}
        />
        {/* Section 1 */}
        <View style={growStyles.boxContainer}>
          {/* First row container */}
          <View style={{ flex: 1 }}>
            <Text style={growStyles.label}>Soil Type</Text>
            <View style={{...growStyles.pickerContainer, marginRight: 10}}>
              <RNPickerSelect
                placeholder={{ label: 'Select', value: null }}
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
          </View>

          <View style={{ flex: 1 }}>
            <Text style={growStyles.label}>Crop Variety</Text>
            <View style={growStyles.pickerContainer}>
              <RNPickerSelect
                placeholder={{ label: 'Select', value: null }}
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
          </View>
        </View>
        
        
        <View style={{ flex: 1 }}>
          <Text style={growStyles.label}>Crop Management Practices</Text>
          <View style={growStyles.pickerContainer}>
            <RNPickerSelect
                placeholder={{ label: 'Select', value: null }}
                onValueChange={(value) => SetcropMgmt(value)}
                  items={[
                    { label: 'Organic', value: 'O' },
                    { label: 'Conventional', value: 'C' },
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

          <Text style={growStyles.label}>Enter pH Level:</Text>
          <TextInput
            style={growStyles.input}
            keyboardType="numeric"
            value={phLevel}
            onChangeText={text => setphLevel(text)}
          />

          <Text style={growStyles.label}>Farm Size (acres):</Text>
          <TextInput
            style={growStyles.input}
            keyboardType="numeric"
            value={farmSize}
            onChangeText={text => setFarmSize(text)}
          />




          <View style={growStyles.boxContainer}>
            {/* Second row container */}
            <View style={{ flex: 1 }}>
              <Text style={growStyles.label}>Pesticides Used</Text>
              <View style={{...growStyles.pickerContainer, marginRight: 10}}>
                <RNPickerSelect
                  placeholder={{ label: 'Select', value: null }}
                  onValueChange={(value) => setPest(value)}
                    items={[
                      { label: 'Yes', value: '1' },
                      { label: 'No', value: '0' },
                    ]}
                  style={pickerSelectStyles}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={growStyles.label}>Number of Times</Text>
                <TextInput
                style={growStyles.input}
                />
            </View>
          </View>
      </View>

        {/*

        <Text style={growStyles.label}>Pest and Diseases (Yes/No):</Text>
        <TextInput
          style={growStyles.input}
          keyboardType="numeric"
          value={pest}
          onChangeText={text => setPest(text)}
        />

        <Text style={growStyles.label}>Fertilizers (Yes/No):</Text>
        <TextInput
          style={growStyles.input}
          keyboardType="numeric"
          value={fertilizers}
          onChangeText={text => setfertilizers(text)}
        />

        <Text style={growStyles.label}>Number of times pest and disease occurred:</Text>
        <TextInput
          style={growStyles.input}
          keyboardType="numeric"
          value={pestTimes}
          onChangeText={text => setpestTimes(text)}
        />

        <Text style={growStyles.label}>Number of times fertilizers applied:</Text>
        <TextInput
          style={growStyles.input}
          keyboardType="numeric"
          value={fertilizers_t}
          onChangeText={text => setFertilizers_t(text)}
        />

        <TouchableOpacity style={growStyles.predictButton}>
            <Text>Predict</Text>
        </TouchableOpacity> */}
    </View>
    );
};

export default YieldView;