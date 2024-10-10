import { useNavigation } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Mypage() {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Text style={Styles.HomeText}>마이페이지</Text>
    </View>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  NextBottom: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: 'white',
    textAlign: "center",
  }
})