import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../componentes/Texto";
import topo from "../../../assets/topo.png";

const tamanhoDatela = Dimensions.get("screen").width; // largura da tela do dispositivo

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
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
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
