import { Grid } from '@mui/material';
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export const FileEditor = () => {

  const handleChange = (content) => { //Manejar evento del cambio y obtener el contenido del atributo src de la imagen
    const tempElement = document.createElement('div');//Crear elemento temporal
    tempElement.innerHTML = content;

    const imagenSrc = tempElement.querySelector('img')?.getAttribute('src');//Obtener elemento
    console.log('imagenSrc',imagenSrc);
  }


  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12}>
        <SunEditor
          autoFocus={false}
          placeholder='Enter the Content Here'
          height='400'
          onChange={handleChange}
          // setDefaultStyle='font-family:cursive;font-size:160'
          setOptions={{
            imageGalleryUrl: "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
            buttonList: [
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "list",
                "align",
                "fontSize",
                "formatBlock",
                "table",
                "image",
                "video",
                "audio",
                "imageGallery"
              ]
            ]
          }}
        />
      </Grid>
    </Grid>
  )
}
