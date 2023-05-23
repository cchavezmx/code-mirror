import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import *  as PREV from '../components/WindowPreview.js';

const Preview = ({ JS, CSS, HTML }) => {

  const iframeRef = useRef(null);  
  function update () {

    const iframe = iframeRef.current;

    const values = {
      html: HTML.value,
      css: CSS.value,
      js: JS.value
    }
  
    PREV.updatePreview(values)    
    iframe.setAttribute('src', PREV.getPreviewUrl())    
    return () =>  PREV.clearPreview()
      
  }

  useEffect(() => {
    update() 
  }, [])


  return (
    <div id="editor-preview" className='iframe-container'>
      <iframe 
      style={{ "width": "50vw", height: "70vh", overflow: "auto" }} ref={iframeRef} 
      title="CodiLink Preview">        
      </iframe>
    </div>
  )
}

export default Preview;


Preview.propTypes = {
  JS: PropTypes.object,
  CSS: PropTypes.object,
  HTML: PropTypes.object,
  iframeRef: PropTypes.object
}