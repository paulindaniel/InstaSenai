import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('window').width;

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#c13584',
  },
  storyName: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
  },
  post: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  usuario: {
    fontWeight: 'bold',
  },
  imagem: {
    width: largura,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  heartContainer: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    zIndex: 1,
  },
  interacoes: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 8,
    gap: 12,
  },
  curtidas: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 4,
  },
  legenda: {
    marginHorizontal: 10,
    marginTop: 4,
  },
  comentario: {
    marginHorizontal: 10,
    marginTop: 2,
    color: '#555',
  },
  usuarioComentario: {
    fontWeight: 'bold',
  },
});
