import { StyleSheet } from 'react-native';
import { NavigationProvider } from './src/provider/navigation';

export default function App() {
  return (
    <NavigationProvider />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
