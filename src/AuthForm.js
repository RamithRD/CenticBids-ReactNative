import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements'
import { withFormik } from 'formik';
import * as yup from 'yup';

const AuthForm = (props) => {

  return (

    <View style={styles.container}>

      <Text h2 style={styles.header}>CenticBids</Text>

      <Text style={styles.subheader}> {props.authMode === 'signup' ? 'Register' : 'Login'}</Text>

      <TextInput
        style={styles.formInput}
        onChangeText={text => props.setFieldValue('email', text)}
        placeholder='Email'
      />

      <Text style={styles.validationText}> {props.errors.email}</Text>

      <TextInput
        style={styles.formInput}
        secureTextEntry={true}
        onChangeText={text => props.setFieldValue('password', text)}
        placeholder='Password'
      />
      <Text style={styles.validationText}> {props.errors.password}</Text>

      <Button
        onPress={() => props.handleSubmit()}
        buttonStyle={styles.loginButton}
        title={props.authMode === 'login' ? 'Login' : 'Create Account'} />

      <Button
        backgroundColor='transparent'
        color='black'
        buttonStyle={styles.switchButton}
        onPress={() => props.switchAuthMode()}
        title={props.authMode === 'login' ? 'Switch to Signup' : 'Switch to Login'} />

    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 5,
    color: '#673AB7'
  },
  subheader: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 18
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validationText: {
    marginTop: 8,
    marginBottom: 10,
    color: 'red',
    alignSelf: 'center'
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    padding: 8
  },
  loginButton: {
    width: 200,
    marginBottom: 16,
    backgroundColor: '#673AB7',
  },
  switchButton: {
    width: 200,
    backgroundColor: '#3f51b5'
  }
});

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', displayName: '' }),
  validationSchema: (props) => yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  }),
  handleSubmit: (values, { props }) => {
      console.log(values);
    props.authMode === 'login' ? props.login(values) : props.signup(values)
  },
})(AuthForm);