import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform, StatusBar, Image, Dimensions, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import yieldStyles from '../css/yield';
import DropdownMenu from './Reusables/dropdown';

async function predict(soilType, cropVariety, cropManagement, nutritionLevel, phLevel, farmSize, pesticide, pesticideFrequency, fertilizer, fertilizerFreq) {
  const req_body = {
    Soil_Characteristics: soilType,
    Nutrition_Value: nutritionLevel,
    Crop_Variety: cropVariety,
    Pest_and_Diseases: pesticide,
    Fertilizers: fertilizer,
    Fertilizer_Usage: fertilizerFreq,
    farm_size_acres: farmSize,
    ph_level: phLevel
  }
  let resp = await fetch('http://16.16.187.212:5000/pred/predict', {
        method: 'POST',
        body: JSON.stringify(req_body),
        headers: {
            'Content-type': 'application/json',
        },
    })
  let data = await resp.json()
  Alert.alert('Predicted Yeild', String(data['content']['predicted_yield'])+ " tons", [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}
const YieldView = ({ navigation }) => {
  const [soilType, setSoilType] = useState('Select');
  const [cropVariety, setCropVariety] = useState('Select');
  const [cropManagement, setCropManagement] = useState('Select');
  const [nutritionLevel, setNutritionLevel] = useState('');
  const [phLevel, setPhLevel] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [pesticide, setPesticide] = useState('Select');
  const [pesticideFrequency, setPesticideFrequency] = useState('');
  const [fertilizer, setFertilizer] = useState('Select');
  const [fertilizerFreq, setfertilizerFreq] = useState('');

  const soilTypes = ['Clay', 'Loam', 'Silt', 'Sand', 'Pit', 'Chalk'];
  const cropTypes = ["A", "B"];
  const pestTypes = ["Yes", "No"];
  const cropManagementTypes = ['Conventional', 'Organic'];
  const fertilizerTypes = ['Yes', 'No'];


  return (
    <View style={yieldStyles.container}>
      <Image
        style={yieldStyles.bg}
        source={require('../assets/SignUpBG.png')}
      />

      <View style={yieldStyles.row}>
        <View style={yieldStyles.pickerContainer}>
          <Text style={yieldStyles.label}>Soil Type</Text>
          <DropdownMenu options={soilTypes} selectedValue={soilType} onSelect={setSoilType} />
        </View>
        <View style={yieldStyles.pickerContainer}>
          <Text style={yieldStyles.label}>Crop Variety</Text>
          <DropdownMenu options={cropTypes} selectedValue={cropVariety} onSelect={setCropVariety} />
        </View>
      </View>

      <View style={yieldStyles.inputContainer}>
        <Text style={yieldStyles.label}>Crop Management Practices</Text>
        <DropdownMenu options={cropManagementTypes} selectedValue={cropManagement} onSelect={setCropManagement} />
      </View>

      <View style={yieldStyles.inputContainer}>
        <Text style={yieldStyles.label}>Enter Nutrition Level</Text>
        <TextInput
          value={nutritionLevel}
          onChangeText={setNutritionLevel}
          style={yieldStyles.input}
          placeholder="Enter nutrition level"
        />
      </View>

      <View style={yieldStyles.inputContainer}>
        <Text style={yieldStyles.label}>Enter pH Level</Text>
        <TextInput
          value={phLevel}
          onChangeText={setPhLevel}
          style={yieldStyles.input}
          placeholder="Enter pH level"
        />
      </View>

      <View style={yieldStyles.inputContainer}>
        <Text style={yieldStyles.label}>Farm Size (acres)</Text>
        <TextInput
          value={farmSize}
          onChangeText={setFarmSize}
          style={yieldStyles.input}
          placeholder="Enter farm size"
        />
      </View>

      <View style={yieldStyles.row}>
        <View style={yieldStyles.pickerContainer}>
          <Text style={yieldStyles.label}>Pesticide used</Text>
          <DropdownMenu options={pestTypes} selectedValue={pesticide} onSelect={setPesticide} />
        </View>

        <View style={yieldStyles.pickerContainer}>
          <Text style={yieldStyles.label}>Number of times</Text>
          <TextInput
            value={pesticideFrequency}
            onChangeText={setPesticideFrequency}
            style={yieldStyles.input}
            placeholder="Enter frequency"
          />
        </View>
      </View>

      <View style={yieldStyles.row}>
        <View style={yieldStyles.pickerContainer}>
          <Text style={yieldStyles.label}>Fertilizer Used</Text>
          <DropdownMenu options={fertilizerTypes} selectedValue={fertilizer} onSelect={setFertilizer} />
        </View>

        <View style={yieldStyles.pickerContainer}>
          <Text style={yieldStyles.label}>Number of times</Text>
          <TextInput
            value={fertilizerFreq}
            onChangeText={setfertilizerFreq}
            style={yieldStyles.input}
            placeholder="Enter frequency"
          />
        </View>
      </View>

      <TouchableOpacity style={yieldStyles.submitButton} onPress={() => { predict(soilType, cropVariety, cropManagement, nutritionLevel, phLevel, farmSize, pesticide, pesticideFrequency, fertilizer, fertilizerFreq) }}>
        <Text style={yieldStyles.submitText}>Submit</Text>
      </TouchableOpacity>

    </View>

    // Completed
    // <View style={yieldStyles.container}>
    //   <Image 
    //     style={yieldStyles.bg}
    //       source={require('../assets/SignUpBG.png')}
    //   />
    //   <View style={yieldStyles.row}>
    //     <View style={yieldStyles.pickerContainer}>
    //       <Text style={yieldStyles.label}>Soil Type</Text>
    //       <RNPickerSelect
    //         onValueChange={(value) => setSoilType(value)}
    //         items={[
    //           { label: 'Clay', value: 'clay' },
    //           { label: 'Loam', value: 'loam' },
    //           { label: 'Silt', value: 'silt' },
    //           { label: 'Sand', value: 'sand' },
    //           { label: 'Pit', value: 'pit' },
    //           { label: 'Chalk', value: 'chalk' },
    //         ]}
    //       />
    //     </View>
    //     <View style={yieldStyles.pickerContainer}>
    //       <Text style={yieldStyles.label}>Crop Variety</Text>
    //       <RNPickerSelect
    //         onValueChange={(value) => setCropVariety(value)}
    //         items={[
    //           { label: 'Option 1', value: 'option1' },
    //           { label: 'Option 2', value: 'option2' },
    //           { label: 'Option 3', value: 'option3' },
    //         ]}
    //       />
    //     </View>
    //   </View>

    //   <View style={yieldStyles.inputContainer}>
    //     <Text style={yieldStyles.label}>Crop Management Practices</Text>
    //     <RNPickerSelect
    //       onValueChange={(value) => setCropManagement(value)}
    //       items={[
    //         { label: 'Conventional', value: 'conventional' },
    //         { label: 'Organic', value: 'organic' },
    //       ]}
    //     />
    //   </View>

    //   <View style={yieldStyles.inputContainer}>
    //     <Text style={yieldStyles.label}>Enter Nutrition Level</Text>
    //     <TextInput
    //       value={nutritionLevel}
    //       onChangeText={setNutritionLevel}
    //       style={yieldStyles.input}
    //       placeholder="Enter nutrition level"
    //     />
    //   </View>

    //   <View style={yieldStyles.inputContainer}>
    //     <Text style={yieldStyles.label}>Enter pH Level</Text>
    //     <TextInput
    //       value={phLevel}
    //       onChangeText={setPhLevel}
    //       style={yieldStyles.input}
    //       placeholder="Enter pH level"
    //     />
    //   </View>

    //   <View style={yieldStyles.inputContainer}>
    //     <Text style={yieldStyles.label}>Farm Size (acres)</Text>
    //     <TextInput
    //       value={farmSize}
    //       onChangeText={setFarmSize}
    //       style={yieldStyles.input}
    //       placeholder="Enter farm size"
    //     />
    //   </View>

    //   <View style={yieldStyles.row}>
    //     <View style={yieldStyles.pickerContainer}>
    //       <Text style={yieldStyles.label}>Pesticide used</Text>
    //       <RNPickerSelect
    //         onValueChange={(value) => setPesticide(value)}
    //         items={[
    //           { label: 'Option 1', value: 'option1' },
    //           { label: 'Option 2', value: 'option2' },
    //           { label: 'Option 3', value: 'option3' },
    //         ]}
    //       />
    //     </View>
    //     <View style={yieldStyles.pickerContainer}>
    //       <Text style={yieldStyles.label}>Number of times</Text>
    //       <TextInput
    //         value={pesticideFrequency}
    //         onChangeText={setPesticideFrequency}
    //         style={yieldStyles.input}
    //         placeholder="Enter frequency"
    //       />
    //     </View>
    //   </View>

    //   <View style={yieldStyles.row}>
    //     <View style={yieldStyles.pickerContainer}>
    //       <Text style={yieldStyles.label}>Fertilizer Used</Text>
    //       <RNPickerSelect
    //         onValueChange={(value) => setOtherOption(value)}
    //         items={[
    //           { label: 'Yes', value: '1' },
    //           { label: 'No', value: '0' },
    //         ]}
    //       />
    //     </View>

    //     <View style={yieldStyles.pickerContainer}>
    //       <Text style={yieldStyles.label}>Number of times</Text>
    //       <TextInput
    //         value={otherOption}
    //         onChangeText={setOtherOption}
    //         style={yieldStyles.input}
    //         placeholder="Enter frequency"
    //       />
    //     </View>
    //   </View>
    // </View>
  );
};

export default YieldView;