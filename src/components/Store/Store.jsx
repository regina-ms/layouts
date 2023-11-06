import { useState } from 'react';
import './Store.css'

export default function Store(props) {
    const { products } = props;

    const [state, setState] = useState(true);

    function switchHandler() {
        setState(!state)
    }

    return (
        <div className='store'>

            {
                state ?
                    <IconSwitch icon='view_list' onSwitch={switchHandler} /> :
                    <IconSwitch icon='view_module' onSwitch={switchHandler} />
            }

            <div className='cardList'>
                {
                    state ?
                        products.map((el) => (<CardsView product={el} />)) :
                        products.map((el) => (<ListView product={el} />))
                }
            </div>
        </div>
    )
}

function IconSwitch(props) {
    const { icon, onSwitch } = props;

    return (
        <div className='icon'>
            <div onClick={onSwitch} className="material-icons">{icon}</div>
        </div>

    )
}


function ListView(props) {
    const { product } = props;
    return (
        <div className='productLine'>
            <img className='lineImage' src={product.img} alt="/"></img>
            <div className='lineTitle'>{product.name}</div>
            <div className='lineColor'>{product.color}</div>
            <div className='linePrice'>${product.price}</div>
            <button className='lineToCart'>Add To Cart</button>
        </div>
    )

}

function CardsView(props) {
    const { product } = props;
    return (
        <div className='card'>
            <div className='image-container'>
                <img className='image' src={product.img} alt="/"></img>
                <div className='content'>
                    <div className='title'>{product.name}</div>
                    <div className='color'>{product.color}</div>
                </div>
                <div className='container'>
                    <div className='price'>${product.price}</div>
                    <button className='toCart'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}


