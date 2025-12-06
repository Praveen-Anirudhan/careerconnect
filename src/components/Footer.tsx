const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                CareerConnect
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting talented individuals with amazing career opportunities.
            </p>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Candidates</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 transition-colors text-sm"
                >
                  Browse Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 transition-colors text-sm"
                >
                  My Applications
                </a>
              </li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Recruiters</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 transition-colors text-sm"
                >
                  Recruiter Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 transition-colors text-sm"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-cyan-600 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 CareerConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
