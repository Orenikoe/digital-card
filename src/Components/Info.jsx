import ProfilePic from "../Img & Logos/myself1.jpg"

export default function Info() {
return (
    <div className="info-section">
    <img src={ProfilePic} alt='profile pic'></img>
    <div className="info-section-text">
    <h3>Oren Tal</h3>
    <h4>Software Developer</h4>
    <h5>Based in London</h5>
    <div>
        <button>Email</button>
        <button>LinkedIn</button>
    </div>
    </div>
   </div>
)
}