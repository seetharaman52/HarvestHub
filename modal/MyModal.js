import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import LottieView from 'lottie-react-native';
const MyModal = ({ visible, message, onClose, animationSource }) => {
  const renderAnimation = () => {
    if (animationSource === require("../animations/success.json")) {
      return (
        <LottieView style={styleModal.animateSuccess} source={animationSource} autoPlay loop/>
      );
    } 
    else if (animationSource === require("../animations/wrong.json")) {
      return (
        <LottieView style={styleModal.animateWrong} source={animationSource} autoPlay loop/>
      );
    }
  };

  return (
    <Modal animationType='fade' transparent={true} visible={visible} statusBarTranslucent={true} onRequestClose={onClose}>
      <View style={styleModal.modalContainer}>
        <View style={styleModal.modalContent}>
          <Text style={styleModal.modalMessage}>{message}</Text>
          <TouchableOpacity style={styleModal.modalButton} onPress={onClose}>
            {renderAnimation()}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styleModal = StyleSheet.create({
    modalContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0, 0.8)',
    },

    modalContent: {
      backgroundColor: 'transparent',
      padding: responsiveHeight(2),
      borderRadius: 5,
      alignItems: 'center',
      width: responsiveHeight(36),
    },

    modalMessage:{
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'justify',
      fontSize: responsiveFontSize(2),
    },

    modalButton:{
      borderRadius: 5,
    },

    animateWrong: {
      height: responsiveHeight(5),
      width: responsiveHeight(5),
    },

    animateSuccess: {
      height: responsiveHeight(16),
      width: responsiveHeight(16),
    },
});

export default MyModal;