import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import Texto from "../componentes/Texto";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const tamanhoDatela = Dimensions.get("screen").width; // largura da tela do dispositivo

// Componente Funcional
export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilo.topo} />
      <Texto style={estilo.titulo}>Detalhes da cesta</Texto>

      <View style={estilo.cesta}>
        <Texto style={estilo.nome}>Cesta de Verduras</Texto>
        <View style={estilo.fazenda}>
          <Image style={estilo.imagemFazenda} source={logo} />
        </View>
        <Texto style={estilo.nomeFazenda}>Jenny Jack farm</Texto>
        <Texto style={estilo.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha
        </Texto>
        <Texto style={estilo.preco}>R$ 40,00</Texto>
      </View>
    </>
  );
}

const estilo = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * tamanhoDatela, //(altura da imagem / largura da imagem) * tamanho da tela
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 16,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

// Componente de Classes
// tinha que importar -> import React, { Component } from 'react';
// class MeuComponente extends Component {
//     render() {
//       return (
//         <View>
//           <Text>Olá mundo!</Text>
//         </View>
//       );
//     }
//   }

//   export default MeuComponente;
