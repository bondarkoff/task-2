import moment from 'moment/moment';
import { images } from './components/card/images.data';

import Card from './components/card/Card';

function App() {
    var date = moment().format('L, h:mm a');

    return (
        <div className='container'>
            <div className='d-flex jcc aic flex-col'>
                <h1 className='title'>Total images: {images.length}</h1>
                <div>{date}</div>
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
