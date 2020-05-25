import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from '../context';

import { } from './styles';

import firebase from 'firebase';


export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("antonio@podgorski.com.br", "123123")
      .then(() => signIn())
      .catch(error => alert(error))

  }

  return (
    <View style={styles.container}>
      <Text>SIGNIN</Text>
      <Button title="Acessar" onPress={() => handleSignIn()} />
      <Button title="Criar Conta" onPress={() => navigation.push("CreateAccount")} />
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

