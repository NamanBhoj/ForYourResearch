function Footer() {
  return (
    <footer className="bg-slate-50 py-4 mt-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
          <div className="mb-2 md:mb-0 text-sm font-normal text-left">
            For Your Research &copy; {new Date().getFullYear()} All Rights
            Reserved
          </div>
          <div className="flex flex-col md:items-start space-y-1">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">Email:</span>
              <a
                href="mailto:contact@foryourresearch.com"
                className="text-blue-500 hover:underline"
              >
                contact@foryourresearch.com
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">Phone:</span>
              <a
                href="tel:403-604-4649"
                className="text-blue-500 hover:underline"
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
