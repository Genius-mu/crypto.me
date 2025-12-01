import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <div className="relative">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-20"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            to="/features"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
          >
            Explore Features
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
