import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Image, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import art from './assets/art.png';
import mile from './assets/mile.png';
import pier from './assets/pier.png';
import water from './assets/water.png';
import willis from './assets/willis.png';
import Button from './button';



function ArtScreen() {
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.image} />
      <Button info style={styles.button} title="More Information"
        onPress={() => WebBrowser.openBrowserAsync('https://www.artic.edu/')}>
          More Information
      </Button>
    </View>
  );
}

function MileScreen() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.image} />
      <Button info style={styles.button} title="More Information"
        onPress={() => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')}>
          More Information
      </Button>
    </View>
  );
}


function PierScreen() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.image} />
      <Button info style={styles.button} title="More Information"
        onPress={() => WebBrowser.openBrowserAsync('https://navypier.org')}>
          More Information
      </Button>
    </View>
  );
}

function WaterScreen() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.image} />
      <Button info style={styles.button} title="More Information"
        onPress={() => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}>
          More Information
      </Button>
    </View>
  );
}

function WillisScreen() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.image} />
      <Button info style={styles.button} title="More Information"
        onPress={() => WebBrowser.openBrowserAsync('https://www.willistower.com/')}>
          More Information
      </Button>
    </View>
  );
}


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Art">
        <Drawer.Screen name="Art" component={ArtScreen} options={{ title: 'Art Institute of Chicago' }}/>
        <Drawer.Screen name="Mile" component={MileScreen} options={{ title: 'Magnificent Mile' }}/>
        <Drawer.Screen name="Pier" component={PierScreen} options={{ title: 'Navy Pier' }}/>
        <Drawer.Screen name="Water" component={WaterScreen} options={{ title: 'Water Tower' }}/>
        <Drawer.Screen name="Willis" component={WillisScreen} options={{ title: 'Willis Tower' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240, //320, //400,
    height: 360, //480, //600,
    padding: 10,
    marginBottom: 10
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  
});
