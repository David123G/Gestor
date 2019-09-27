import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text,
    Select,
    Option
} from 'react-native';


import { TextInput, TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class login extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            loading: false,

            user: [],
            usuario: '',
            password: '',
            url: 'http://appgestorpersonalapi.azurewebsites.net/api/usuarios'
        }
    }
    componentDidMount() {
        this.getuser();
    }
    getuser = () => {
        this.setState({ loading: true })
        fetch(this.state.url)
            .then(res => res.json())
            .then(res => {

                this.setState({
                    user: res,
                    loading: false,
                })
            })
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
                        {/* <Image style={styles.inputIcon} source={{ uri: 'https://image.flaticon.com/icons/png/512/59/59965.png' }} /> */}
                        <TextInput style={styles.input} placeholder="User"
                            onChangeText={(usuario) => this.setState({ usuario })}
                            value={this.state.usuario}>

                        </TextInput>
                    </View>

                    <View style={{margin: 20}}>

                        {/* <Image style={styles.inputIcon} source={{ uri: 'https://image.flaticon.com/icons/png/512/69/69905.png' }} /> */}
                        <PasswordInputText
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>


                    <View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} placeholder="Login" onPress={this.validation}>
                            <Text>Login</Text>
                        </TouchableHighlight>
                    </View>

                </ScrollView>


            </View>

        );


    }
    validation = () => {
        var estaDentro = false;
        for (var i = 0; i < this.state.user.length; i++) {
            if (this.state.user[i].correo == this.state.usuario && this.state.user[i].contrasena == this.state.password) {
                estaDentro = true;
            }
        }
        if (estaDentro) {
            this.props.navigation.navigate('Home')
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 10,
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
