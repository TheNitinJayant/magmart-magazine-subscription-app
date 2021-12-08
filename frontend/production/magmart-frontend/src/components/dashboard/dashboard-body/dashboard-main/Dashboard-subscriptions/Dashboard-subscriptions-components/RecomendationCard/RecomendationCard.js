import './RecomendationCard.scss'
function RecomendationCard({ RecomendationTitle, Author, imageURL }) {
    return (
        <div className="RecomendationCard__container">
            <div className="RecomendationCard">
                <img src={imageURL}/>
                <div className="RecomendationCard__details">
                    <h4>{RecomendationTitle}</h4>
                    <p>{Author}</p>
                </div>
                <div className="Sub__btn">
                    <div className="RecomendationCard__subscribe">
                        Subscribe
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecomendationCard
