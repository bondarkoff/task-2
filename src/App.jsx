import moment from 'moment/moment';
import { images } from './components/card/images.data';

import Card from './components/card/Card';
import { useEffect, useState } from 'react';

function App() {
    const [imageData, setImageData] = useState(images);
    const [deletedItems, setDeletedItems] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('imageData');
        const storedDeletedItems = localStorage.getItem('deletedItems');

        if (storedData) {
            setImageData(JSON.parse(storedData));
        }

        if (storedDeletedItems) {
            setDeletedItems(JSON.parse(storedDeletedItems));
        }
    }, []);

    const handleRemoveItem = itemId => {
        const updatedData = imageData.filter(image => image.id !== itemId);
        setImageData(updatedData);

        const deletedItem = imageData.find(image => image.id === itemId);
        setDeletedItems(prevDeletedItems => [...prevDeletedItems, deletedItem]);

        localStorage.setItem('imageData', JSON.stringify(updatedData));
        localStorage.setItem('deletedItems', JSON.stringify([...deletedItems, deletedItem]));
        console.log(deletedItem);
    };

    const handleRestoreItems = () => {
        const restoredData = JSON.parse(localStorage.getItem('deletedItems'));
        setImageData(prevImageData => [...prevImageData, ...restoredData]);
        setDeletedItems([]);

        localStorage.setItem('imageData', JSON.stringify([...imageData, ...restoredData]));
        localStorage.removeItem('deletedItems');
        console.log(restoredData);
    };

    var date = moment().format('L, h:mm a');

    return (
        <div className='container'>
            <div className='d-flex jcc aic flex-col mb-50'>
                <div className='d-flex jcc aic flex-col'>
                    <h1 className='title'>Total images: {images.length}</h1>
                    <div>{date}</div>
                </div>
                <div className='wrapper'>
                    {imageData.map(image => (
                        <Card key={image.id} image={image} onRemoveItem={handleRemoveItem} />
                    ))}
                </div>
                <button
                    className='restoreButton'
                    onClick={handleRestoreItems}
                    disabled={deletedItems.length ? false : true}>
                    {deletedItems.length ? 'Restore' : 'No images to restore'}
                </button>
            </div>
        </div>
    );
}

export default App;
