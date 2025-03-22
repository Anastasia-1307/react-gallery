import images from './data/images.json'
import { useState } from 'react';
import './App.css'



function App() {
const [imageurl, setImage] = useState(images);
const [selectedIndex, setIndex] = useState(null);



    const ImageButton = ({src, title, onClick, isSelected}) => {
        return (
        <button onClick={onClick} className={`imagebutton ${isSelected ? "selected-border" : ""}`}>
            <img src={src} alt={title} className='display'/>
        </button>
        );
        };
        


const select = (index) => {
    setIndex(index);
}


const urmatoarea = () => {
    if(selectedIndex !== null && imageurl.length > 0) {
    setIndex((anterioara) => (anterioara + 1) % imageurl.length);
} 
};


const anterior = () => {
    if(selectedIndex !== null && imageurl.length > 0) {
    setIndex((anterioara) => (anterioara -1 + imageurl.length) % imageurl.length); } // % imageurl.length -> se asigură dacă ajunge la ultima imagine, revine la prima (ciclare).

};

const aleatoare = () => {
    if (selectedIndex !== null && imageurl.length > 0) {
    const randomIndex = Math.floor(Math.random() * imageurl.length);
   setIndex(randomIndex); }
};
  
const aranjareAleatoare = () => {
    
    const shuffled = [...imageurl].sort(() => Math.random() - 0.5);
    setImage(shuffled);
setIndex(null); 

};
    return (
<>
<div className='selected-image-container'>
{ selectedIndex !== null && imageurl[selectedIndex] &&(
<div className='selected-image-wrapper'>
<img src={imageurl[selectedIndex].url} className="selected-image" alt="selectedimg"/>
</div>

)}
</div>

 <div className="gallery">
{imageurl.map((item, index) => (
    <ImageButton key={item.id} src={item.url} onClick={() => select(index)} isSelected={index === selectedIndex}/>
))}
 </div>


<div className="controls">
<button onClick={anterior}><img className="mybtn" src="src/assets/previous.svg"/></button>           
<button onClick={urmatoarea}><img className="mybtn" src="src/assets/next.svg"/></button>
<button onClick={aleatoare}><img className="mybtn" src="src/assets/random1.svg"/></button>
<button onClick={aranjareAleatoare}><img className='mybtn' src="src/assets/random2.svg"/></button>
</div>

</>
    );
    
}



export default App;
