import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';

import { AuthContext } from '../context';

import firebase from 'firebase';

export default CreateAccount = () => {

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword("antonio@podgorski.com.br", "123123")
      .then(() => signUp())
      .catch(error => alert(error))
  }

  const { signUp } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>CREATEACCOUNT</Text>
      <Button title="Criar Conta" onPress={() => handleSignUp()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

