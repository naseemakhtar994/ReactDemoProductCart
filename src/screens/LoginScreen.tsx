import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useLoginController from '../view-controllers/useLoginController';

const LoginSceen = () => {
  const { username, setUserName, password, setPassword, onClickCreate } =
    useLoginController();

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={username}
          style={styles.input}
          placeholder="username"
          onChangeText={(text: string) => setUserName(text)}
        />

        <TextInput
          value={password}
          style={styles.input}
          placeholder="password"
          secureTextEntry={true} 
          onChangeText={(text: string) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onClickCreate();
          }}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  inputView: {
    marginVertical: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default LoginSceen;
