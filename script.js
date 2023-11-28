const apiKey = "ynhIVtFFpJ2djBtja8MPc51RSKGlB9GO0PAdQC4I"

const fetchUrl = async (url) =>{
  const data = await fetch(url)
  return data.json()
}
const apodComponent = ({title, url, explanation}) => {
  console.log(title)
  console.log(url)
  console.log(explanation)
}

async function init(){
  const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`)
 
  for (let i = 0; i <data.length; i ++){
    apodComponent(data[i])
  }
}
init()