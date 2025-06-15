import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to monitoring service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6">
          <div className="glass-morphism-enhanced max-w-md mx-auto p-8 rounded-xl overflow-hidden shadow-2xl relative">
            {/* Decorative gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
            
            {/* Error icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mb-4 text-red-400">Something went wrong</h1>
            <p className="text-gray-300 mb-6 text-center">
              The application encountered an unexpected error. Please try refreshing the page.
            </p>
            
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-2 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg"
            >
              Refresh Page
            </button>
            
            {/* Additional support info */}
            <p className="mt-6 text-xs text-gray-400 text-center">
              If the problem persists, please contact support or open an issue on GitHub.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;