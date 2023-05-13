import Card from './components/card/Card';

import { images } from './components/card/images.data';

function App() {
    return (
        <div className='container'>
            <div className='d-flex jcc aic flex-col'>
                <h1 className='title'>Total images: {images.length}</h1>
            </div>
            <div className='wrapper'>
                {images.map(image => (
                    <Card key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
}

export default App;
