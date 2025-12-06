import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const ThankYou: React.FC = () => {
  const location = useLocation();
  const [estimateData, setEstimateData] = useState<any>(null);
  const state = location.state as { estimate: string; name: string } | null;

  useEffect(() => {
    if (state?.estimate) {
      try {
        setEstimateData(JSON.parse(state.estimate));
      } catch (e) {
        // Fallback if parsing fails or plain text
        setEstimateData({
            estimatedRange: "Pending Analysis",
            explanation: state.estimate,
            nextSteps: "We will call you shortly."
        });
      }
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-black text-gray-800 mb-2">Request Received!</h1>
          <p className="text-gray-600 mb-8">Thanks {state?.name || 'Customer'}, we have received your details.</p>

          {estimateData && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 text-left">
              <h3 className="text-brand-blue font-bold text-lg mb-4 flex items-center gap-2">
                <span>🤖</span> AI Estimate Analysis
              </h3>
              
              <div className="mb-4">
                <span className="block text-xs font-bold text-gray-500 uppercase">Estimated Range</span>
                <span className="text-2xl font-black text-brand-red">{estimateData.estimatedRange}</span>
              </div>
              
              <div className="mb-4">
                <span className="block text-xs font-bold text-gray-500 uppercase">Analysis</span>
                <p className="text-sm text-gray-700">{estimateData.explanation}</p>
              </div>

               <div className="mb-2">
                <span className="block text-xs font-bold text-gray-500 uppercase">Next Steps</span>
                <p className="text-sm text-gray-700 font-medium">{estimateData.nextSteps}</p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-sm text-gray-500">Need immediate assistance? Call dispatch now.</p>
            <a href="tel:+639282300210" className="block w-full">
              <Button fullWidth variant="primary">Call +639282300210</Button>
            </a>
            <Link to="/" className="block">
              <Button fullWidth variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};