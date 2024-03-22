const PrivacyFristCompo = () => {
  return (
    <div className="">
      <div className="container mx-auto text-white px-5 md:px-0">
        <h3 className="px-0 text-2xl md:text-3xl 2xl:text-5xl md:px-32 text-center">
          At Express Life, we take your privacy and data security seriously.
          This Privacy Policy outlines our practices concerning the collection,
          use, and protection of your personal information. By using our
          services, you agree to the practices described in this policy.
        </h3>
        <div className="grid grid-cols-1 py-20 gap-5">
          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">
              Information We Collect
            </h3>
            <p className=" font-OutFit font-medium text-lg">
              We collect personal information provided by you, including but not
              limited to:
            </p>
            <ul className="list-inside list-disc px-3">
              <li>Contact information (e.g., name, email, phone number)</li>
              <li>Account information (e.g., username, password)</li>
              <li>Financial information (e.g., payment details)</li>
            </ul>
            <p className="pt-4 font-OutFit font-medium text-lg">
              We may also collect non-personal information related to your
              device and interaction with our services.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">
              How We Use Your Information
            </h3>
            <p className=" font-OutFit font-medium text-lg">
              We use your information for the following purposes:
            </p>
            <ul className="list-inside list-disc px-3">
              <li>To create and manage your account</li>
              <li>To process transactions and payments</li>
              <li>To provide customer support</li>
              <li>To send promotional and marketing communications</li>
              <li>To improve and personalize our services</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">
              Data Security
            </h3>
            <p className=" font-OutFit font-medium text-lg">
              We employ industry-standard measures to protect your data from
              unauthorized access, alteration, disclosure, or destruction.
              However, no data transmission over the internet can be guaranteed
              as completely secure.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">
              Information Sharing
            </h3>
            <p className=" font-OutFit font-medium text-lg">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted service
              providers who assist us in delivering our services.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">
              Cookies and Tracking Technologies
            </h3>
            <p className=" font-OutFit font-medium text-lg">
              We may use cookies and similar tracking technologies to enhance
              your experience on our website. You can modify your browser
              settings to block cookies.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">Your Rights</h3>
            <p className=" font-OutFit font-medium text-lg">
              You have the right to:
            </p>
            <ul className="list-inside list-disc px-3">
              <li>Access and update your personal information</li>
              <li>Request the deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">
              Changes to this Privacy Policy
            </h3>
            <p className=" font-OutFit font-medium text-lg">
              We may revise this Privacy Policy as needed. Any changes will be
              effective immediately, and we encourage you to review this policy
              periodically.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" text-3xl font-semibold font-OutFit">Contact Us</h3>
            <p className=" font-OutFit font-medium text-lg">
              For questions, concerns, or requests related to this Privacy
              Policy, please contact us at [support@expresslife.uk].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyFristCompo;
