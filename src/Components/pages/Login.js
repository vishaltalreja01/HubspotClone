import { Link } from "react-router-dom";
import "./Login.css"
const Login = () => {
  return (
    <div className="login">
      <main className="divauth-box">
        <img
          className="hubspot-standardsvg-icon"
          alt=""
          src="https://static.hsappstatic.net/salesImages/static-1.444/logos/hubspot-standard.svg"
        />
        <form className="form1">
          <div className="divsignup-link">
            <p className="i18n-string-dont">Don't have an account?</p>
            <Link className="link-i18n-string" to="/Signup">
              Sign up
            </Link>
          </div>
          <p className="divprivate-form-control-wrap1">
            <label className="label-i18n-string">Email address</label>
            <input className="input" type="email" required />
          </p>
          <div className="divprivate-form-control-wrap2">
            <div className="divuiformcontrol-labelwrappe">
              <label className="label-i18n-string1">Password</label>
              <div className="small-button">Show Password</div>
            </div>
            <input className="input1" type="password" required />
            <a className="small-link">Forgot my password</a>
          </div>
          <div className="label">
            <input
              className="spanuicheckbox-privatecheckb"
              type="checkbox"
              defaultChecked={true}
            />
            <label className="i18n-string-remember">Remember me</label>
          </div>
          <button className="button3">
            <div className="i18n-string-log">Log in</div>
          </button>
          <div className="separator" />
          <div className="divthirdpartyloginelementssty">
            <button className="button4">
              <div className="spangoogleloginbuttonstyles-">
                <img
                  className="google-logopng-icon"
                  alt=""
                  src="/divnsm7bbhzv7mlgbssebz112chaaclf.svg"
                />
              </div>
              <b className="i18n-string-sign1">Sign in with Google</b>
            </button>
            <button className="button5">
              <img className="ms-logopng-icon" alt="" src="https://static.hsappstatic.net/signup-ui-lego/static-1.9727/images/logos/microsoft.png" />
              <b className="i18n-string-sign2">Sign in with Microsoft</b>
            </button>
          </div>
          <button className="button6">
            <div className="i18n-string-log1">Log in with SSO</div>
          </button>
        </form>
      </main>
      <footer className="footer">
        <div className="hubspot-inc-parent">
          <p className="hubspot-inc">©2023 HubSpot, Inc.</p>
          <p className="i18n-string-all">All Rights Reserved.</p>
        </div>
        <a className="link1">
          <div className="i18n-string-privacy">Privacy Policy</div>
        </a>
      </footer>
    </div>
  );
};

export default Login;
