import React from 'react';

import { StyleSheet, FlatList, Text, View, Alert,Image } from 'react-native';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
        user:[],
        url: 'http://appgestorpersonalapi.azurewebsites.net/api/peticiones'
        
  }

}
GetItem(item) {
  Alert.alert(item);
}

componentDidMount(){
  this.getuser();
}

getuser = () => {
  this.setState({ loading:true })

  fetch(this.state.url)
  .then(res => res.json())
  .then(res=>{

    this.setState({
      user: res,
      url: res.next,
      loading: false,
    })
  });
};

render(){
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
                  data ={this.state.user}
                  renderItem={({item}) =>(
                      <View style={styles.item}>
                          <Text style ={ styles.item}>
                               {item.nombre}
                          </Text>
                      </View>
                  )}
              />
        </View>
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
    backgroundColor: '#f9c2ff',
    padding: 10,   
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
