import { StyleSheet } from 'react-native';
import constantes from './constantes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    marginLeft: constantes.margenes.margenElementos,
    marginRight: constantes.margenes.margenElementos
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: constantes.margenes.margenElementos,
    borderWidth: 1,
    padding: 10,
  },
  inputMultilinea: {
    margin: constantes.margenes.margenElementos,
    borderWidth: 1,
    padding: 10
  }
});

export default styles