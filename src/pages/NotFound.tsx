import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

<Link 
  to="/about"
  className="inline-block px-6 py-3 bg-school-primary text-white font-medium rounded-md hover:bg-school-primary/90 transition-colors duration-200"
>
  About
</Link>


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
             Return to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
