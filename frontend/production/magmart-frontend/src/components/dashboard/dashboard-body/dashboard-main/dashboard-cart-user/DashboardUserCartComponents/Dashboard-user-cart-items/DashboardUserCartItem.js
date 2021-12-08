import './DashboardUserCartItem.scss'
function DashboardUserCartItem({Title,imageURL,Price}) {
    return (
        <div className="dashboard__user__cart__component">
            <div className="dashboard__user__cart__item">
                <div className="item__container">
                    <div className="item__container__left">
                        <img src={imageURL}/>
                    </div>
                    <div className="item__container__center">
                            <h4>{Title}</h4>
                    </div>
                    <div className="item__container__center__price">
                        <h4>₹ {Price}</h4>
                    </div>
                    <div className="item__container__right">
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardUserCartItem
