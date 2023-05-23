import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import Instrucciones from './components/Intrucciones';
import OpenIA from './components/OpenIA';
import Preview from './components/Preview';
import { html, css, js } from './examples';

function App() {

  const iframeRef = useRef(null);
  
  const [files, setFiles] = useState({
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: js,
      
    },
    'style.css': {
      name: 'style.css',
      language: 'css',
      value: css,
    },
    'index.html': {
      name: 'index.html',
      language: 'html',
      value: html,
    }
  })
  console.log("🚀 ~ file: App.jsx:32 ~ App ~ files:", files)
  
  const [fileName, setFileName] = useState('script.js');  
  const file = files[fileName];
  
  const options = {
    instructions: <Instrucciones />,
    openia : <OpenIA 
      CSS={files['style.css']} 
      HTML={files['index.html']}
      JS={files['script.js']}
    />,
    preview: <Preview 
      iframeRef={iframeRef} 
      CSS={files['style.css']} 
      HTML={files['index.html']}
      JS={files['script.js']}
    />
  }

  const [option, setOption] = useState('instructions');
  const optionsChange = options[option];
  
  return (
    <>    
      <div className='playground'>
        <div>
          <div className='border-options'>
            <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
              script.js
            </button>
            <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
              style.css
            </button>
            <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
              index.html
            </button>
          </div>
          <Editor
            height="90vh"
            theme="vs-dark"
            options={{
              fontSize: 16,
              minimap: {
                enabled: false
              },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              wrappingIndent: 'indent',
              wrappingStrategy: 'advanced',
              renderLineHighlight: 'none',                            
            }}
            width={window.innerWidth / 2}
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
            onChange={(value) => {              
              if (fileName === 'index.html' ) {
                setFiles((prev) => ({
                  ...prev,
                  'index.html': {
                    ...prev['index.html'],
                    value
                  }
                }))
              }

              if (fileName === 'style.css' ) {
                setFiles((prev) => ({
                  ...prev,
                  'style.css': {
                    ...prev['style.css'],
                    value
                  }
                }))
              }

              if (fileName === 'script.js' ) {
                setFiles((prev) => ({
                  ...prev,
                  'script.js': {
                    ...prev['script.js'],
                    value
                  }
                }))
              }              
            }}
          />
        </div>
        <div>
          <div className='border-options'>
              <button disabled={option === 'instructions'} onClick={() => setOption('instructions')}>
                Instrucciones
              </button>
              <button disabled={option === 'preview'} onClick={() => setOption('preview')}>
                Vista previa
              </button>
              <button disabled={option === 'openia'} onClick={() => setOption('openia')}>
                Califica tu código
              </button>
          </div>
          <div style={{ width: window.innerWidth / 2, marginTop: 50 }}>
            { optionsChange }
          </div>          
        </div>            
      </div>
    </>
  );
}

export default App;
