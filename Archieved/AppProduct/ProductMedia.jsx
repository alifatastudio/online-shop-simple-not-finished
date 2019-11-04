import React, {useContext} from 'react';
import { AppProductContext } from './AppContext';

function ProductMedia(){
    const {
        product,
        imgPreview, setImgPreview
    } = useContext(AppProductContext);

    return (
        <div className="media-product">
            <div className="preview">
                <img 
                    src={imgPreview}
                    alt="product"
                />
            </div>
            <div className="thumb">
                {product.images.map((image, index) => (
                    <img onClick={() => setImgPreview(image)}
                        key={index}
                        src={image}
                        alt="product"
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductMedia;