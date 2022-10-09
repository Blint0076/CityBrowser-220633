import { StyleSheet } from 'react-native';

const Base = StyleSheet.create({
  main:  {
    backgroundColor:  '#3498db',
    padding:  10,
    borderRadius:  5,
  },
  label:  {
    color:  '#ffffff'
  },
  rounded:  {
    borderRadius:  20,
  }
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff'
  },
});
const Danger =  StyleSheet.create({
  main: {
    backgroundColor: '#e74c3c'
  },
});  
const Success =  StyleSheet.create({
  main: {
    backgroundColor: '#1abc9c'
  },
});
const Info =  StyleSheet.create({
  main: {
    backgroundColor: '#3498db'
  },
});

export {
  Info, Base, Default, Danger, Success
}