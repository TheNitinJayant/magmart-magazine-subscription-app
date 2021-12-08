import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "./Testimonials.scss"
function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials--container">
                <div className="testimonials--img">
                    <FormatQuoteIcon/>
                </div>
                <div className="testimonials--body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typese</p>
                </div>
                <div className="testimonials--author">
                    <h5>- Author</h5>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
