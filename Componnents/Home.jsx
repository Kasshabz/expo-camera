import { ScrollView, View } from "react-native";
import ScanButton from "./Button";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ScanButton navigation={navigation} />
      </View>
    </ScrollView>
  );
}
