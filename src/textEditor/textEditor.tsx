import WebView from 'react-native-webview';
import { StyleSheet } from 'react-native';

type TextEditorProps = {
  data: string | null;
  setData: (data: string) => void | null;
};

const TextEditor = ({ data, setData }: TextEditorProps) => {
  console.log('data:', data);
  console.log(setData);

  return (
    <WebView
      source={{
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-size: 20px }
              </style>
            </head>
            <body style="background-color: black; color: white;">
              <h1>Text Editor</h1>
              <p contenteditable>Write something here...</p>
              <script>
                window.onload = (event) => {
                  if (window.ReactNativeWebView.injectedObjectJson()) {
                    const data = JSON.parse(window.ReactNativeWebView.injectedObjectJson()).data;
                    document.querySelector('p').innerText = data;
                  }
                }
              </script>
            </body>
          </html>
        `,
      }}
      scalesPageToFit={false}
      useWebView2={true}
      javaScriptEnabled={true}
      injectedJavaScriptObject={{ data: 'This is useful data.' }}
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
