/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { CSS_PROMT } from '../promts/index.js'


const OpenIA = ({ CSS, HTML, JS }) => {

  const API_KEY = localStorage.getItem('API_KEY');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  console.log("🚀 ~ file: OpenIA.jsx:12 ~ OpenIA ~ response:", response)

  const setApiKey = (e) => {
    e.preventDefault();
    const API_KEY = e.target[0].value;
    localStorage.setItem('API_KEY', API_KEY);
    window.location.reload();    
  }

  if (!API_KEY) {
    return (<>
      <h5>Necesitas una API_KEY DE OPEN_IA</h5>
      <form onSubmit={setApiKey}>
        <input placeholder='Añade tu api key' />
        <button>Guardar</button>
      </form>
    </>)
  }

  useEffect(() => {
    getResponse()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getResponse = async () => {
    const API_KEY = localStorage.getItem('API_KEY');
    setLoading(true);
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [
              {
                  "role": "user",
                  "content": CSS_PROMT({ CSS, HTML, JS }),
                  "name": "David"
              }
          ]
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setLoading(false);
      setResponse(data.choices[0].message?.content)
      })
    }

    if (loading) {
      return <h1>Evaluando tu prueba...</h1>
    } 

  return (
    <pre  
      style={{ "width": "70%", height: "70vh", overflow: "auto" }}
      dangerouslySetInnerHTML={{ __html: response }} />      
  )
}



export default OpenIA;


OpenIA.propTypes = {
  code: PropTypes.string,
  CSS: PropTypes.string,
  HTML: PropTypes.string,
  JS: PropTypes.string
}