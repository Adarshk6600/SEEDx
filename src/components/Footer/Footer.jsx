import './Footer.css'
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div>
          <h3>About</h3>
          <p>CoinMarketCap</p>
          <p>CoinGecko</p>
          <p>Advertise With Us</p>
          <p>Documentation</p>
        </div>

        <div>

          <h3>Protocol</h3>
          <p>Apply for DropZone</p>
          <p>Apply for Launchpad</p>
          <p>Apply for Fusion Pool</p>
          <p>List Your Token</p>


        </div>
        <div>

          <h3>Support</h3>
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Disclaimer</p>
          <p>FAQs</p>


        </div>


        <div>
          <h3>Community</h3>
          <span> <FaTwitterSquare /><p>Twitter</p></span>
          <span> <FaLinkedin /> <p>LinkedIn</p></span>
          <span> <FaYoutube /> <p>YouTube</p></span>
          <span> <FaTelegram /> <p>Telegram</p></span>

        </div>
      </div>
      <p>SEEDx © 2024- 25. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;