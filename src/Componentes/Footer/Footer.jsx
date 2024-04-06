import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-full pt-6 md:pt-12">    
      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">&copy; <strong>TZK</strong></p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <span className="py-2 px-4 text-white inline-block ">Diseñado por Tarek Zemmari</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
