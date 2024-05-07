import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import ddStyles from './dropdownStyles';

const DropdownMenu = ({ options, selectedValue, onSelect }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const searchRef = useRef();
  const imgs = {
    dropup: require('../../assets/dropup.png'),
    dropdown: require('../../assets/dropdown.png'),
  }

  const onSearch = (txt) => {
    if (txt !== "") {
      let temp = options.filter((item) => {
        return item.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setFilteredOptions(temp);
    } else {
      setFilteredOptions(options);
    }
  };

  return (
    <View style={ddStyles.container}>
        <TouchableOpacity onPress={() => {setIsClicked(!isClicked)} }>
            <View style={ddStyles.textContainer}>
                <Text style={ddStyles.label}>{selectedValue}</Text>
                {isClicked ? <Image style={ddStyles.dropdown_img} source={imgs.dropup}/> : <Image style={ddStyles.dropdown_img} source={imgs.dropdown}/>}
            </View>
        </TouchableOpacity>

        {isClicked ? (
        <View style={ddStyles.dropdownContainer}>
            <TextInput ref={searchRef} placeholder='Search' style={ddStyles.searchBar} onChangeText={(txt) => { onSearch(txt);}}/>
            <FlatList
            data={filteredOptions}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {onSelect(item); onSearch(''); setIsClicked(false); searchRef.current.clear();}}>
                    <Text style={ddStyles.dropdownText}>{item}</Text>
                </TouchableOpacity>
            )}
        />
        </View>
    ) : null}
    </View>
  );
};

export default DropdownMenu;
