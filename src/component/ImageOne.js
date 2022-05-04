import { Parallax } from 'react-parallax';
import sky from '../img/sky.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={sky}  strength={800}>
        <div className='content'>
            <span className='img-txt'>A Trip to Sky</span>
        </div>
    </Parallax>
);

export default ImageOne