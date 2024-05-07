import React from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

const AlertModal = ({ visible, onClose, CustomText }) => {
  return (
    <Modal animationType='fade' transparent={true} visible={visible} statusBarTranslucent={true}>
      <View style={styleModal.modalContainer}>
        <View style={styleModal.content}>
          <Text style={styleModal.text}>{CustomText}</Text>
          <TouchableOpacity style={styleModal.closeButton} onPress={onClose}>
            <Text style={styleModal.closeButtonText}>Close</Text>
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
    backgroundColor: 'rgba(0,0,0, 0.7)',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AlertModal;
