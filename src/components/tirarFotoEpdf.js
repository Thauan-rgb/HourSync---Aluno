import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function TirarFotoEpdf({ onArquivoSelecionado }) {
  const [imagem, setImagem] = useState(null);

  function salvar(asset) {
    setImagem(asset);
    if (onArquivoSelecionado) onArquivoSelecionado(asset);
  }

  async function tirarFoto() {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permissão necessária', 'Permita acesso à câmera.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 0.5 });
    if (!result.canceled) salvar(result.assets[0]);
  }

  async function subirPDF() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    if (!result.canceled) salvar(result.assets[0]);
  }

  return (
    <View>
      <Text style={styles.label}>Escolha uma opção</Text>

      <TouchableOpacity style={styles.opcaoItem} onPress={subirPDF}>
        <View style={styles.iconeCirculo}>
          <Ionicons name="cloud-upload-outline" size={24} color="#56C3DC" />
        </View>
        <View>
          <Text style={styles.opcaoTitulo}>Subir PDF</Text>
          <Text style={styles.opcaoDescricao}>Selecione um arquivo PDF do seu dispositivo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.opcaoItem} onPress={tirarFoto}>
        <View style={styles.iconeCirculo}>
          <Ionicons name="camera-outline" size={24} color="#56C3DC" />
        </View>
        <View>
          <Text style={styles.opcaoTitulo}>Tirar foto</Text>
          <Text style={styles.opcaoDescricao}>Abra a câmera para tirar uma foto do certificado</Text>
        </View>
      </TouchableOpacity>

      {imagem && (
        <Image source={{ uri: imagem.uri }} style={styles.fotoTirada} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 6, marginTop: 12 },
  opcaoItem: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0',
  },
  iconeCirculo: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#E3F6FA',
    alignItems: 'center', justifyContent: 'center',
  },
  opcaoTitulo: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  opcaoDescricao: { fontSize: 12, color: '#999', marginTop: 2 },
  fotoTirada: { width: '100%', height: 200, borderRadius: 12, marginTop: 12, resizeMode: 'cover' },
});
