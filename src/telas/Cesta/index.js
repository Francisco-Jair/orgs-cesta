import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
} from "react-native";

import Topo from "../componentes/Topo";
import Detalhes from "../componentes/Detalhes";
import Item from "../componentes/Item";
import Texto from "../../componentes/Texto";

// Componente Funcional
export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />

              <View style={estilo.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilo.titulo}>{itens.titulo}</Texto>
                {/* <Itens {...itens} /> */}
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilo = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 20,
    lineHeight: 32,
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
