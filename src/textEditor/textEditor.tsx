import WebView from 'react-native-webview';
import { StyleSheet } from 'react-native';

type TextEditorProps = {
  data?: string;
  setData?: (data: string) => void;
};

const TextEditor = ({ data, setData }: TextEditorProps) => {
  console.log(data);
  console.log(setData);

  return (
    <WebView
      source={{ uri: 'http://10.0.0.222:3000' }}
      scalesPageToFit={false}
      useWebView2={true}
      javaScriptEnabled={true}
      injectedJavaScriptObject={{ data: 'This is useful data.' }}
      originWhitelist={['*']}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { TextEditor };
