import { Link } from "react-router-dom";
import "./ErrorFile.css";

const Errorfile = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="gif">
          <h1 className="error404-numb2">
            4<span style={{ color: "red" }}>O</span>4
          </h1>
          <p className="font-poppins">
            <b>Oh no, youve found our junior developers homepage!</b>
          </p>
        </div>

        <p className="font-poppins">
          Despite sleeping on the couch most of the day, our junior web
          developer still finds time to do some coding…
        </p>

        <div className="button">
          <button>
            <Link className="Link" to={"/"}>
              Go To GnG
            </Link>
          </button>
        </div>
      </div>

      <div className="tips">
        <div className="font-poppins">
          <p>
            <span style={{ color: "red" }}>Tips:</span>
          </p>
          <ul>
            <li>
              This is a 404 error, which means youve clicked on a link which is
              not exist or entered an invalid URL, go back to your previous page
              or try using our site search to find something specific.
            </li>
            <li>
              We’re not quite sure what went wrong. We track these errors
              automatically, if you need a hand - try looking on our
              <a className="a-blue" href="contact">
                Help Center
              </a>
            </li>
            <li>
              <span style={{ color: "red" }}>PS:</span> Sorry, we cant find that
              page! Dont worry though, everything is STILL AWESOME!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Errorfile;
