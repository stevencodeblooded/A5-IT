
const ContactTitle = () => {
  return (
    <div className="px-3 pt-52">
      <section className="max-w-6xl mx-auto text-center">
        <div>
          <h2 className="text-3xl font-semibold mb-5">Contact Us</h2>
          <p className="font-semibold text-gray-500">
            Please feel free to contact us if you have any questions.
          </p>
          <p className="font-semibold text-gray-500">
            For general questions, contact us at
            <a
              href="tel:+1 (773) 786 - 5694"
              className="text-blue-500 hover:underline"
            >
              +1 (773) 786 - 5694
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:info@a5it.com"
              className="text-blue-500 hover:underline"
            >
              info@a5it.com
            </a>
          </p>
        </div>
        
      </section>
    </div>
  );
}

export default ContactTitle