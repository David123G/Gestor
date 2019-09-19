import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';


export default class LinksScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      name: ''
    }
  }

  UpdateValue(text, field) {
    if (field == 'name') {
      this.setState({
        name: text,
      })
    }
    else if (field == 'email') {
      this.setState({
        email: text,
      })
    }
  }

  submit() {
    let collection = {}
    collection.name = this.state.name,
      collection.email = this.state.email
    console.warn(collection);

    var url = 'own-url';

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/a.png')
                  : require('../assets/images/a.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <TextInput style={styles.input} placeholder="name"
              onChangeText={(text) => this.UpdateValue(text, 'name')}>
            </TextInput>
          </View>

          <View style={styles.getStartedContainer}>
            <TextInput style={styles.input} placeholder="email"
              onChangeText={(text) => this.UpdateValue(text, 'email')}>
            </TextInput>
          </View>


          <View>
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.submit()}>
              <Text>Enviar</Text>
            </TouchableHighlight>
          </View>

        </ScrollView>


      </View>

    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Crear nuevo permiso',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    borderBottomColor: '#F5FCFF',
    width: 250,
    height: 65,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    width: 410,
    height: 45,
    margin: 35,
    flexDirection: 'row',
    borderBottomColor: '#000000'


  },
  motivo: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    width: 410,
    height: 100,
    margin: 35,
    borderBottomColor: '#000000'
  },
  inputIcon: {
    width: 30,
    height: 30,
    margin: 15,
    marginRight: 50,
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    width: 410,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: "#00b5ec",
    margin: 30,
  },
  loginText: {
    color: 'white',
  }

});
