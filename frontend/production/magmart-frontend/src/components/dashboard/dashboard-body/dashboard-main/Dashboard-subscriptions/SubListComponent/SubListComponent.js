import './SubListComponent.scss'
function SubListComponent({Title,Author,imageURL}) {
    return (
        <div className="SubListComponent">
            <div className="SubListComponent__container">
                <div className="SubListComponent__img">
                    <img src={imageURL}/>
                </div>
                <div className="SubListComponent__title">
                    <h4>{Title}</h4>
                </div>
                <div className="SubListComponent__Author">
                    <h4>{Author}</h4>
                </div>
                <div className="SubListComponent__View">
                <div className="view__btn">
                        View
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubListComponent
