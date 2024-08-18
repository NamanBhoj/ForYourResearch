function Footer() {
  return (
    <footer className="bg-neutral-50 py-8 mt-32 w-full border-t border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
          <div className="text-sm font-normal text-left mb-4 md:mb-0">
            For Your Research &copy; {new Date().getFullYear()} All Rights
            Reserved
          </div>
          <div className="flex flex-col md:items-start space-y-4 md:space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Email:</span>
              <a
                href="mailto:contact@foryourresearch.com"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                contact@foryourresearch.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Phone:</span>
              <a
                href="tel:403-604-4649"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                (403) 604-4649
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
