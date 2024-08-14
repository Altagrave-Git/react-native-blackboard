import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { TextEditor } from 'react-native-blackboard';

export default function App() {
  const [result, setResult] = useState<number | undefined>(1);

  if (result === undefined) setResult(1);

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'right', 'bottom', 'left']}
    >
      <TextEditor />
      <StatusBar style="light" backgroundColor="#000" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
