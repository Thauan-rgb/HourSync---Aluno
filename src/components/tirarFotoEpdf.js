import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import nuvem from '../../assets/icon.png';
import camera from '../../assets/icon.png';

export default function TirarFotoEpdf() {

  const [imagem, setImagem] = useState(null);

  async function tirarFoto() {
    const permission = await ImagePicker.requestCameraPermissionsAsync(); // pede permisao da camera
    if (!permission.granted) {
      Alert.alert('Permissão necessária', 'Permita acesso à câmera.'); // se n tiver permissao para camera
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ // abre a camera
      allowsEditing: true,
      quality: 0.5,
    });
    if (!result.canceled) {  // se n cancelar a foto, salva a foto
      setImagem(result.assets[0]);
    }
  }

  async function subirPDF() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    if (!result.canceled) {
      setImagem(result.assets[0]);
    }
  }

  return (
    <View>

      <Text style={styles.label}>Escolha uma opção</Text>

      <TouchableOpacity style={styles.opcaoItem} onPress={subirPDF}> {/* funçao ao clique, subir o pdf  */}
        <Image source={nuvem} style={styles.icone} />
        <View>
          <Text style={styles.opcaoTitulo}>Subir PDF</Text>
          <Text style={styles.opcaoDescricao}>Selecione um arquivo PDF do seu dispositivo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.opcaoItem} onPress={tirarFoto}> {/* funçao ao clique, subir foto  */}
        <Image source={camera} style={styles.icone} />
        <View>
          <Text style={styles.opcaoTitulo}>Tirar foto</Text>
          <Text style={styles.opcaoDescricao}>Abra a câmera para tirar uma foto do certificado</Text>
        </View>
      </TouchableOpacity>

      {imagem && (
        <Image source={{ uri: imagem.uri }} style={styles.fotoTirada} /> 
      )} {/* mostra foto ou pdf anexado  */}

    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  opcaoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  icone: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  opcaoTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  opcaoDescricao: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  fotoTirada: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 12,
    resizeMode: 'cover',
  },
});