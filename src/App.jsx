import Card from './components/card/Card';

import { images } from './components/card/images.data';

function App() {
    return (
        <div className='container'>
            <div className='wrapper'>
                {images.map(image => (
                    <Card key={image.id} image={image} />
                ))}
            </div>
            <p>{images.length}</p>
        </div>
    );
}

export default App;
