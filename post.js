import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

const nomesAleatorios = ['Lucas', 'Ana', 'Carlos', 'Maria', 'João', 'Patricia', 'Rafael'];

export default function Post({ post }) {
  const [curtido, setCurtido] = useState(false);
  const [nomesRandomizados, setNomesRandomizados] = useState([]);

  const alternarCurtida = () => {
    setCurtido(!curtido);
  };

  const obterNomeAleatorio = () => {
    const index = Math.floor(Math.random() * nomesAleatorios.length);
    return nomesAleatorios[index];
  };

  useEffect(() => {
    const randomizarNomes = post.comentarios.map(() => obterNomeAleatorio());
    setNomesRandomizados(randomizarNomes);
  }, [post.comentarios]);

  let lastTap = null;

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && (now - lastTap) < 300) {
      setCurtido(true);
    }
    lastTap = now;
  };

  return (
    <View style={estilos.postContainer}>
      <View style={estilos.header}>
        <Image source={post.avatar} style={estilos.avatar} />
        <Text style={estilos.usuario}>{post.usuario}</Text>
      </View>

      <TouchableWithoutFeedback onPress={handleDoubleTap}>
        <Image source={post.imagem} style={estilos.imagemPost} />
      </TouchableWithoutFeedback>

      <View style={estilos.icones}>
        <TouchableOpacity onPress={alternarCurtida}>
          <AntDesign
            name={curtido ? 'heart' : 'hearto'}
            size={24}
            color={curtido ? 'red' : 'black'}
            style={estilos.icone}
          />
        </TouchableOpacity>
        <Feather name="message-circle" size={24} style={estilos.icone} />
        <Feather name="send" size={24} style={estilos.icone} />
      </View>

      <Text style={estilos.curtidas}>
        {curtido ? post.curtidas + 1 : post.curtidas} curtidas
      </Text>
      <Text style={estilos.legenda}>
        <Text style={estilos.usuario}>{post.usuario}</Text> {post.legenda}
      </Text>

      {post.comentarios.map((comentario, index) => (
        <Text key={index} style={estilos.comentario}>
          <Text style={estilos.usuario}>{nomesRandomizados[index]} </Text>
          {comentario}
        </Text>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  usuario: {
    fontWeight: 'bold',
  },
  imagemPost: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  icones: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  icone: {
    marginRight: 10,
  },
  curtidas: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  legenda: {
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  comentario: {
    paddingHorizontal: 10,
    color: 'gray',
    marginBottom: 2,
  },
});
