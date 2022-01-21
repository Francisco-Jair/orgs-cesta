import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import Topo from "../componentes/Topo";
import Detalhes from "../componentes/Detalhes";

// Componente Funcional
export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />

      <View style={estilo.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const estilo = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
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
