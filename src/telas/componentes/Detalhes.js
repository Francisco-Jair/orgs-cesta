import React from "react";
import Texto from "../../componentes/Texto";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes({
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  nome,
  botao,
}) {
  return (
    <>
      <Texto style={estilo.nome}>{nome}</Texto>
      <View style={estilo.fazenda}>
        <Image style={estilo.imagemFazenda} source={logoFazenda} />
      </View>
      <Texto style={estilo.nomeFazenda}>{nomeFazenda}</Texto>
      <Texto style={estilo.descricao}>{descricao}</Texto>
      <Texto style={estilo.preco}>{preco}</Texto>

      <TouchableOpacity style={estilo.botao} onPress={() => {}}>
        <Texto style={estilo.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilo = StyleSheet.create({
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
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
