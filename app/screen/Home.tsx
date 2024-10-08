import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Signin: { screen: string } | undefined;
};

export default function Home() {
    
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
      <View style={Styles.container}>
        <Text style={Styles.HomeText}>홈페이지</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin", { screen: 'Signin' })} style={Styles.NextBottom}
    >
          <Text style={Styles.BottomText}>로그인 화면으로</Text>
        </TouchableOpacity>
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