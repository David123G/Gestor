import React from 'react';

import { StyleSheet, FlatList, Text, View, Alert, Image } from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-modals';


export default class HomeScreen extends React.Component {

  state = {

    swipeableModal: false,

  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: [],
      usuario: {},
      url: 'http://appgestorpersonalapi.azurewebsites.net/api/peticiones',


    }

  }
  GetItem(item) {
    Alert.alert(item);
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
          url: res.next,
          loading: false,
        })
      });
  };


  state = {

    swipeableModal: false,

  };

  render() {
    return (
      <View style={styles.container}>

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
        <View style={styles.MainContainer}>

          <FlatList
            data={this.state.user}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.item}
                  onPress={() => {
                    this.setState({
                      swipeableModal: true,
                      usuario: item
                    });
                  }}
                >
                  {item.nombre}
                </Text>
              </View>
            )}
          />
        </View>
        <Modal
          onDismiss={() => {this.setState({ swipeableModal: false });}}
          width={0.9}
          overlayOpacity={1}
          visible={this.state.swipeableModal}
          rounded
          actionsBordered
          onSwipeOut={() => {this.setState({ swipeableModal: false });}}
          onTouchOutside={() => {this.setState({ swipeableModal: false });}}
          swipeDirection={['down', 'up']}
          modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
          modalTitle={
            <ModalTitle
              title="Permiso"
            />
          }
          footer={
            <ModalFooter>
              <ModalButton
                text="CANCELAR"
                bordered
                onPress={() => { this.setState({ swipeableModal: false }); }}
                key="button-1"
              />
              <ModalButton
                text="OK"
                bordered
                onPress={() => { this.setState({ swipeableModal: false }); }}
                key="button-2"
              />
            </ModalFooter>
          }
        >
          <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24 }} >
            <Text>Motivo: {this.state.usuario.motivo}</Text>
            <Text>Descripcion: {this.state.usuario.descripcion}</Text>
            <Text>Nombre: {this.state.usuario.nombre}</Text>
            <Text>Fecha: {this.state.usuario.fecha}</Text>
            <Text>Estado: {this.state.usuario.estado}</Text>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
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

  item: {
    backgroundColor: '#81DAF5',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
