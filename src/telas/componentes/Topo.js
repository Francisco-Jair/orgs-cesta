import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../componentes/Texto";
import topo from "../../../assets/topo.png";

const tamanhoDatela = Dimensions.get("screen").width; // largura da tela do dispositivo

export default function Topo() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
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
});
