import { Parallax } from 'react-parallax';
import sea from '../img/sea.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={sea}  strength={800}>
        <div className='content'>
            <span className='img-txt'>See you on the beach</span>
        </div>
    </Parallax>
);

export default ImageOne