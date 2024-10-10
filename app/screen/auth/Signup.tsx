import { Animated, Dimensions, FlatList, Image, StyleSheet } from "react-native";
import {S} from "./styles"
import { FunctionComponent, useRef, useState } from "react";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";

const {width} = Dimensions.get('screen')

type RootStackParamList = {
  Signup: { screen: string } | undefined;
};

interface MyComponentProps {
  color: Animated.AnimatedInterpolation<string>;
}

export default function Signup() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const images = [
    {uri: 'https://cdn.pixabay.com/photo/2024/09/07/02/34/penguins-9028827_640.jpg', title: '1번입니다.'},
    {uri: 'https://cdn.pixabay.com/photo/2024/09/07/02/34/penguins-9028827_640.jpg', title: '2번입니다.'},
    {uri: 'https://cdn.pixabay.com/photo/2024/09/07/02/34/penguins-9028827_640.jpg', title: '3번입니다.'},
    {uri: 'https://cdn.pixabay.com/photo/2024/09/07/02/34/penguins-9028827_640.jpg', title: '4번입니다.'},
  ]

  const animateValue= useRef(new Animated.Value(0)).current;

  return (
  <S.Container>
    <S.TopContainer>
      <FlatList
      data={images} 
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: animateValue}}}],
        {useNativeDriver: false}
      )}
      pagingEnabled={true}
      renderItem={({item}) => {

        return (
          <S.CarouselContainer style={{width}}>
            <S.ImageContainer >
              <Image style={{width: width - 150, height: 200, borderRadius: 20}} source={{uri : item.uri}}/>
            </S.ImageContainer>
            <S.TextContainer>
              <S.Text>{item.title}</S.Text>
            </S.TextContainer>
          </S.CarouselContainer>
        )
      }}
      />
    </S.TopContainer>
    <S.BottomContainer style={{width}}>
      <FlatList 
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        renderItem={({index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ];
          const colorOutputRange = ['black','red','black']
          const color = animateValue.interpolate({
            inputRange,
            outputRange: colorOutputRange,
            extrapolate: 'clamp'
          })
          return (
            <S.DotContianer>
              <PagingDot color={color} />
            </S.DotContianer>
          )
        }}
      />
    </S.BottomContainer>
    {/* {slideIndex === 0 && <S.Text>만성질환</S.Text>} */}
    <S.KakaoLoginButton
      onPress={() => navigation.navigate("Signup", { screen: "Signup" })}
    >카카오 로그인하기</S.KakaoLoginButton>
  </S.Container>
  )
}

  const PagingDot: FunctionComponent<MyComponentProps> = ({color}:MyComponentProps)=> {
  console.log(color)
  return (
    <Animated.View 
      style={{width: 10, height: 10, borderRadius: 5, backgroundColor: color}}
    />
  )
}
