import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Post from './post';

const posts = [
  {
    id: '1',
    usuario: 'paulindaniel_',
    avatar: require('./assets/paulin.png'),
    imagem: require('./assets/paulin.png'),
    curtidas: 1999,
    legenda: 'Dando um repasso!',
    comentarios: ['Coisa Linda!', 'Cara mais bonito do Senai!'],
  },
  {
    id: '2',
    usuario: 'lucasgarofolinho',
    avatar: require('./assets/post2.jpg'),
    imagem: require('./assets/post2.jpg'),
    curtidas: 156,
    legenda: 'Mais uma conquista! 💪',
    comentarios: ['Otimo Professor!', 'Top!'],
  },
  {
    id: '3',
    usuario: 'ramon.cooper',
    avatar: require('./assets/carro.jpeg'),
    imagem: require('./assets/carro.jpeg'),
    curtidas: 678,
    legenda: 'Dando um Talento!',
    comentarios: ['Belo Carro', 'Top!'],
  },
  {
    id: '4',
    usuario: 'andreza_quintas',
    avatar: require('./assets/andreza.png'),
    imagem: require('./assets/andreza.png'),
    curtidas: 999,
    legenda: 'Dia de Festa',
    comentarios: ['Linda Professora', 'Cade as esfiha?'],
  },
];

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        contentContainerStyle={estilos.lista}
        renderItem={({ item }) => <Post post={item} />}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
});
