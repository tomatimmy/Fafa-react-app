import './Footer.css'
import Logo from './logo.png'

const Footer = () => {
  return (
    <footer>
        <div className="titleContainer">
            <h2>Support</h2>
            <h2>About FAFA</h2>
        <div className="ctaFooterContainer">
            <h2 className="signUp">Sign up and get a 10% off your first order</h2>
            <button className="signUpBtn">SIGN UP TO RECEIVE NEWS</button>
            <img className='logoFooter' src={Logo} alt="" />
        </div>
        </div>
        <div className="columnContainer">
            <div className="supportColumn">
                <h3>Contact Us</h3>
                <h3>FAQ</h3>
                <h3>Purchase Giftcard</h3>
                <h3>Check order</h3>
                <h3>Payment</h3>
                <h3>Find a Store</h3>
            </div>
            <div className="supportColumn">
                <h3>Return Policy</h3>
                <h3>Privacy Policy</h3>
                <h3>Terms & Conditions</h3>
                <h3>Promotions & Sale</h3>
                <h3>Right of Withdrawal</h3>
                <h3>Data Protection</h3>
            </div>
            <div className="supportColumn">
                <h3 className='column2H3'>Abous us</h3>
                <h3 className='column2H3'>Sustainability</h3>
                <h3 className='column2H3'>Origin of products</h3>
            </div>
            <div className="supportColumn">
                <h3 className='column2H3'>FAFA charge.hope</h3>
                <h3 className='column2H3'>CSR</h3>
                <h3 className='column2H3'>Donate</h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer