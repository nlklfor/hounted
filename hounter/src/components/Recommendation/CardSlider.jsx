
import flame from '../../assets/flame.svg';


function CardSlider(props) {
    return (
        <div className="slider-container">
            <ul className="slider-list">
                <li className="slider-list_item">
                    <div className="card-section">
                        <img alt="card" src={props.img}></img>
                        <div className='card-prop'>
                            <img className='prop-type' alt='prop' src={flame}></img>
                            <p className='prop-desc'>Popular</p>
                        </div>
                        <div className="card-desc">
                            <h2 className="card-desc_title">
                                {props.title}
                            </h2>
                            <p className="card-desc_price">
                                {props.price}
                            </p>
                        </div>
                        <div className='card-person'>
                            <img alt='person' src={props.personImg}></img>
                            <div className='person-details'>
                                <h3 className='person-details_name'>
                                    {props.personName}
                                </h3>
                                <p className='person-details_city'>
                                    {props.personLoc}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CardSlider;
