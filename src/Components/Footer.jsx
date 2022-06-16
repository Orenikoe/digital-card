import TinderLogo from "../Img & Logos/tinder1.jpg"
import WhatsappLogo from "../Img & Logos/whatsapp.png"
import GithubLogo from "../Img & Logos/github.jpg"


export default function Footer() {
    return (
        <div className="footer-section">
        
       <ul className="footer-items">
        <li><img src={TinderLogo} alt="" /></li>
        <li><img src={WhatsappLogo} alt="" /></li>
        <li><img src={GithubLogo} alt="" /></li>

       </ul>

        </div>
    )
    }