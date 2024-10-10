// import { Dimensions } from "react-native";
import styled from "styled-components/native";

// const {width} = Dimensions.get("screen");

export namespace S {
  export const Container = styled.View`
    
  `
  export const TopContainer = styled.View`
    
  `

  export const CarouselContainer = styled.View`
    justify-content: center;
    align-items: center;
  `
  export const ImageContainer = styled.View`
    justify-content: flex-start;
    align-items: center;
    margin: 60px 0 20px;
  `

  export const TextContainer = styled.View`
    width: 60%;
    margin-bottom: 20px;
  `

  export const Text = styled.Text`
    text-align: center;
  `

  export const BottomContainer = styled.View`
    
  
    justify-content: flex-end;
    align-items: center;
  `

  export const DotContianer = styled.View`
    justify-content: cneter;
    align-items: center;
    width: 20px;
    margin-bottom: 60px;
  `
  // export const PagingDot = styled.View`
  //   width: 10px;
  //   height: 10px;
  //   background-color: red;
  //   border-radius: 50%;
  // `

  export const KakaoLoginButton = styled.TouchableOpacity`
    width: 50%;
    align-self: center;
    padding: 10px;
    background-color: #ffe300;
    border-radius: 5px;
    text-align: center;
  `
}
