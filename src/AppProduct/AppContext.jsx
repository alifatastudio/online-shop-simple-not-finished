import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export function AppProvider(props){
    const [product, setProduct] = useState({
        id: '', name: 'loading...', price: 0, 
        description: '',
        images: []
    });
    const [imgPreview, setImgPreview] = useState(`https://picsum.photos/seed/picsum/600/300`);
    const [like, setLike] = useState(false);
    const [cart, setCart] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [valuesBuy, setValuesBuy] = useState({
        name: '', phone: '', address: '',
        quantity: 1, message: ''
    })
    const steps = ['Product', 'Shipping Address', 'Order'];

    return (
        <AppContext.Provider value={{
            product, setProduct,
            imgPreview, setImgPreview,
            like, setLike,
            cart, setCart,
            activeStep, setActiveStep, steps,
            valuesBuy, setValuesBuy
        }}>
            {props.children}
        </AppContext.Provider>
    )
}