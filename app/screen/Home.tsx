import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styled from "styled-components/native";

type RootStackParamList = {
  Signup: { screen: string } | undefined;
};

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <S.Container>
      <S.HomeText>홈페이지</S.HomeText>
      <S.NextBottom
        onPress={() => navigation.navigate("Signup", { screen: "Signup" })}
      >
        <Text>로그인 화면으로</Text>
      </S.NextBottom>
    </S.Container>
  );
}

namespace S {
  export const Container = styled.View`
    flex: 1;
    background-color: #fff;
  `;

  export const HomeText = styled.Text`
    font-size: 30px;
    text-align: center;
  `;

  export const NextBottom = styled.TouchableOpacity`
    background-color: purple;
    padding: 10px;
    margin-top: 20%;
    width: 50%;
    align-self: center;
    border-radius: 10px;
  `;

  export const BottomText = styled.Text`
    font-size: 15px;
    color: white;
    text-align: center;
  `;
}
