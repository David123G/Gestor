import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';


export default class nuevousuario extends React.Component {

  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: '',
      cargo: '',
      peticiones: ''

    }
  }

  UpdateValue(text, field) {
    if (field == 'nombre') {
      this.setState({
        nombre: text,
      })
    }
    else if (field == 'apellido') {
      this.setState({
        apellido: text,
      })
    }
    else if (field == 'correo') {
      this.setState({
        correo: text,
      })
    }
    else if (field == 'contrasena') {
      this.setState({
        contrasena: text,
      })
    }
    else if (field == 'cargo') {
      this.setState({
        cargo: text,
      })
    }
  }

  submit() {
    let collection = {}
      collection.nombre = this.state.nombre,
      collection.apellido = this.state.apellido,
      collection.correo = this.state.correo,
      collection.contrasena = this.state.contrasena,
      collection.cargo = this.state.cargo,
    console.warn(collection);

    var url = 'http://appgestorpersonalapi.azurewebsites.net/api/usuarios';

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
      this.props.navigation.navigate('inicio');
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
            <TextInput style={styles.input} placeholder="Nombre"
              onChangeText={(text) => this.UpdateValue(text, 'nombre')}>
            </TextInput>
          </View>
          <View style={styles.getStartedContainer}>
            <TextInput style={styles.input} placeholder="Apellido"
              onChangeText={(text) => this.UpdateValue(text, 'apellido')}>
            </TextInput>
          </View>
          <View style={styles.getStartedContainer}>
            <TextInput style={styles.input} placeholder="Correo"
              onChangeText={(text) => this.UpdateValue(text, 'correo')}>
            </TextInput>
          </View>
          <View style={styles.getStartedContainer}>
            <TextInput style={styles.input} placeholder="Contraseña"
              onChangeText={(text) => this.UpdateValue(text, 'contrasena')}>
            </TextInput>
          </View>      
          <View style={styles.getStartedContainer}>
            <TextInput style={styles.input} placeholder="Cargo"
              onChangeText={(text) => this.UpdateValue(text, 'cargo')}>
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

nuevousuario.navigationOptions = {
  title: 'Crear nuevo Usuario',
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
