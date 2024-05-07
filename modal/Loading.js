import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';
import { responsiveHeight } from "react-native-responsive-dimensions";
import LottieView from 'lottie-react-native';
const MyLoading = ({ visible, animationSource }) => {
  return (
    <Modal animationType='fade' transparent={true} visible={visible} statusBarTranslucent={true}>
      <View style={styleModal.modalContainer}>
          <LottieView style={styleModal.animateLoading} source={animationSource} autoPlay loop/>
      </View>
    </Modal>
  );
};

const styleModal = StyleSheet.create({
    modalContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0, 0.7)',
    },

    animateLoading:{
      backgroundColor: 'transparent',
      height: responsiveHeight(20),
      width: responsiveHeight(20),
    },
});

export default MyLoading;