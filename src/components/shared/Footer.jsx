import "./footer.css"
import github from "../../assets/img/github.svg"
import linkedin from "../../assets/img/linkedin.svg"

const Footer = () => {
  return (
    <footer className="footer__home-container">
      <h3 className="footer__copyright">© Academlo 2023</h3>
      <div className="images__container">
        <div className="img__container">
          <a href="https://github.com/marcelYepes" target="_blank">
            <img className="footer-img" src={github} alt="" />
          </a>
        </div>
        <div className="img__container">
          <a
            href="https://www.linkedin.com/in/marcel-yepes-50a8601b0"
            target="_blank"
          >
            <img className="footer-img" src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
