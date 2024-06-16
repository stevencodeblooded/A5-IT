import { Link } from "react-router-dom";
import networkSupplierLogo from "../assets/NetworkSupplierLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const EmailSent = () => {
  return (
    <div className="px-3 py-6">
      <section className="max-w-6xl mx-auto">
        <div>
          <Link to={"/"}>
            <img src={networkSupplierLogo} alt="networkSupplierLogo" />
          </Link>
          <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col gap-7 text-center max-w-lg">
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-3xl" />
                <h2 className="text-4xl font-semibold text-center">Email Sent</h2>
                <p className="text-sm font-semibold text-gray-400">
                Check your email and open the link to continue. If you don’t get
                the email, please contact{" "}
                <span className=" text-blue-600">
                    <a href="mailto:support@a5.com">support@a5.com</a>
                </span>
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmailSent