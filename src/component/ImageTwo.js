import { Parallax } from 'react-parallax';
import sakura from '../img/sakura.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={sakura}  strength={800}>
        <div className='content'>
            <span className='img-txt'>You&me with pink sky</span>
        </div>
    </Parallax>
);

export default ImageOne