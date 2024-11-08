import { StyleSheet, View } from 'react-native';
import ColorScreen from './screens/ColorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ColorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
