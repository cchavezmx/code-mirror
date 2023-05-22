import { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {

  const files = {
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: '// some comment\nconst x = "Hello World";\nconsole.log(x);',

    },
    'style.css': {
      name: 'style.css',
      language: 'css',
      value: 'body {\n  background-color: #000000;\n  color: #ffffff;\n}',
    },
    'index.html': {
      name: 'index.html',
      language: 'html',
      value: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8" />\n  <title>Hello JSX!</title>\n</head>\n<body>\n  <h1>Hello JSX!</h1>\n  <p>Some text</p>\n</body>\n</html>',
    }
  }

  const [fileName, setFileName] = useState('script.js');
  const file = files[fileName];

  return (
    <>
      <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
        script.js
      </button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
        style.css
      </button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
        index.html
      </button>
      <Editor
        height="90vh"
        width={window.innerWidth - 300 + 'px'}
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onChange={(value) => {
          console.log(value);          
        }}
      />
    </>
  );
}

export default App;
