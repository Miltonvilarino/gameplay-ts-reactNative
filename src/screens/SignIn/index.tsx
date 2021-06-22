import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";

export const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`} suas Jogatinas {`\n`} Facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} favorite seus amigos
        </Text>
        <ButtonIcon title="Escolha seu jogo" activeOpacity={0.7} />
      </View>
    </View>
  );
};
