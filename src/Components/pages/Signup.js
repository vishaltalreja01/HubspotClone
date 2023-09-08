import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="signup">
      <header className="divappheader-header-sc-9ifak">
        <img
          className="button-hubspot-wordmarksvg"
          alt=""
          src="https://static.hsappstatic.net/salesImages/static-1.444/logos/hubspot-standard.svg"
        />
        <div className="have-an-account-container" style={{display:"flex"}}>
          <span>{`Have an account? `}</span>
          <Link className="spanh2d-2bdc7500" to="/Login">
            <span className="sign-in">Sign in</span>
            <span>.</span>
          </Link>
        </div>
      </header>
      <div className="divappviewcomponentstyles-co">
        <div className="divtext-center">
          <div className="heading-1-i18n-string">
            <h1 className="create-your-free" style={{ color: 'black' }}>Create your free</h1>
            <h1 className="create-your-free" style={{ color: 'black' }}>account</h1>
          </div>
          <p className="i18n-string-100">100% free. No credit card needed.</p>
        </div>
        <div className="divm-top-4">
          <button className="button">
            <img
              className="divnsm7bb-hzv7m-lgbsse-bz112c-icon"
              alt=""
              src="/divnsm7bbhzv7mlgbssebz112chaaclf.svg"
            />
            <div className="continue-with-google">Continue with Google</div>
          </button>
          <button className="button1">
            <img
              className="microsoftpng-icon"
              alt=""
              src="https://static.hsappstatic.net/signup-ui-lego/static-1.9727/images/logos/microsoft.png"
            />
            <div className="i18n-string-sign">Sign up with Microsoft</div>
          </button>
          <div className="divseparator-container-sc-1k">
            <div className="divseparator-container-sc-1k-child" />
            <div className="i18n-string-or-wrapper">
              <p className="i18n-string-or">Or</p>
            </div>
            <div className="divseparator-container-sc-1k-item" />
          </div>
        </div>
        <form className="form">
          <form className="divprivate-form-control-wrap">
            <label className="label-email">Email address</label>
            <TextField
              className="divtextinputstyles-inputstyl"
              color="primary"
              variant="standard"
              type="text"
              size="small"
              margin="none"
              required
            />
          </form>
          <button className="button2">
            <div className="i18n-string-verify">Verify email</div>
          </button>
        </form>
        <div className="small">
          <p className="were-committed-to">
            We’re committed to your privacy. HubSpot uses the information you
            provide to us to contact you about our relevant content, products,
            and services. You may unsubscribe from these communications at any
            time. For more information, check out
          </p>
          <div className="our-parent">
            <p className="our">{`our `}</p>
            <a className="link">
              <div className="privacy-policy">Privacy Policy</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
