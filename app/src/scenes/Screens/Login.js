import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import R from '../../R';
import horizontalScale from '../../../res/Scale';
import {RootView, SimpleButton, SimpleTextInput} from '../../components/index';
import Dashboard from './Dashboard';

export const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [flag, setFlag] = useState(true);

  const validation = () => {
    if (username == '') {
      setErrorName(true);
    } else if (password == '') {
      setErrorPassword(true);
    } else {
      setFlag(false);
    }
  };
  return flag ? (
    <RootView customStyle={styles.View}>
      <View style={styles.customViewStyle}>
        <SimpleTextInput
          placeholder="Enter Username"
          placeholderTextColor={R.colors.maroon}
          onChangeText={username => setUsername(username)}
          customViewStyle={styles.textInput}
        />
        {errorName ? (
          <Text style={styles.errorText}>Pleasr Enter username</Text>
        ) : null}
      </View>
      <View style={{marginTop: '5%'}}>
        <SimpleTextInput
          placeholder="Enter Password"
          keyboardType="numeric"
          placeholderTextColor={R.colors.maroon}
          onChangeText={password => setPassword(password)}
          customViewStyle={styles.textInput}
        />
        {errorPassword ? (
          <Text style={styles.errorText}>Pleasr Enter password</Text>
        ) : null}
      </View>
      <SimpleButton
        title="Login"
        customTxtStyle={styles.customTxtStyle}
        customStyle={styles.customStyle}
        onPress={validation}
      />
    </RootView>
  ) : (
    <Dashboard />
  );
};
const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    backgroundColor: R.colors.maroon,
  },
  textInput: {
    marginTop: '5%',
  },
  customStyle: {
    backgroundColor: R.colors.coolGrey,
    marginTop: horizontalScale(30),
  },
  customViewStyle: {
    marginTop: '25%',
    alignSelf: 'center',
  },
  customTxtStyle: {
    color: R.colors.maroon,
    fontSize: horizontalScale(18),
  },
  errorText: {
    fontSize: horizontalScale(12),
    color: '#FF1493',
    marginHorizontal: '5%',
    alignSelf: 'center',
  },
});
