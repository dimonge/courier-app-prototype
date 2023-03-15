import React from "react"
import { StyleSheet, View, Text} from "react-native"
import {
  TextInput,
  HelperText,
  useTheme,
  MD2Colors,
  MD3Colors,
  Button,
  List,
} from 'react-native-paper';

const SigninScreen = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [secureTextEntry, setSecureTextEntry] = React.useState(false)
  return (
    <View>
      <Text>
        Sign in
      </Text>
      <TextInput
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) =>
          setEmail(email)
        }
        secureTextEntry={!secureTextEntry}        
      />      
      <TextInput
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={(newPassword) =>
          setPassword(newPassword)
        }
        secureTextEntry={!secureTextEntry}
        right={
          <TextInput.Icon
            name={secureTextEntry ? 'eye' : 'eye-off'}
            onPress={() =>
              setSecureTextEntry(!secureTextEntry)
            }
            forceTextInputFocus={false}
          />
        }
      />
      <Button mode="contained" onPress={() => {}}>
        Sign in
      </Button>
    </View>
  )
}
SigninScreen.title = 'SigninScreen'

const styles = StyleSheet.create({
  helpersWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
  },
  helper: {
    flexShrink: 1,
  },
  counterHelper: {
    textAlign: 'right',
  },
  inputContainerStyle: {
    margin: 8,
  },
  fontSize: {
    fontSize: 16,
  },
  textArea: {
    height: 80,
  },
  noPaddingInput: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  centeredText: {
    textAlign: 'center',
  },
  fixedHeight: {
    height: 100,
  },
});


export default SigninScreen
