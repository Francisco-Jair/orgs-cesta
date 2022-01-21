import React from "react";
import Texto from "../../componentes/Texto";
import { View, Image, StyleSheet } from "react-native";

import logo from "../../../assets/logo.png";

export default function Detalhes() {
  return (
    <>
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
});
