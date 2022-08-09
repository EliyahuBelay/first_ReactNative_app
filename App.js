import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedBack, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export default function App() {
  // const handllePressOnText = ()=>{
  //   console.log('text was pressed');
  // }
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello React Native
      </Text>
      <TouchableNativeFeedback>
        <View style={{width:200, height:70, backgroundColor:'dodgerblue'}}></View>
        {/* <Image
          source={
            {
              uri: "http://picsum.photos/200/300",
              width: 200,
              height: 300
            }}
          blurRadius={5}
          fadeDuration={700}>
        </Image> */}
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgb(145, 6, 131)',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
