import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
type UIModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
  description: string;
  textBtn?: string;
};
const UIModal: FC<UIModalProps> = ({
  modalVisible,
  closeModal,
  description,
  textBtn = " Закрыть",
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{description}</Text>
          <Pressable style={styles.modalBtn} onPress={closeModal}>
            <Text style={styles.textStyle}>{textBtn}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default UIModal;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  modalBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "#4B62FD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
