import { useNavigation } from "expo-router";
import styled from "styled-components/native";

export default function Mypage() {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.HomeText>마이페이지</S.HomeText>
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
}
