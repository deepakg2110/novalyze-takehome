import React from "react";
import Header from '../components/Header';
import ChatScreen from "./ChatScreen";
import SamplePDF from '../resources/sample.pdf';

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <div className="flex h-screen">
      {/* Left Section - Chat */}
      <div className="w-1/3 border-r border-gray-200">
        <ChatScreen />
      </div>

      {/* Right Section - PDF Viewer */}
      <div className="w-2/3 p-4">
        <div className="h-full bg-gray-50 rounded-lg overflow-hidden">
          <div className="p-2 bg-white border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Document Viewer</h2>
          </div>
          <iframe
            src={SamplePDF}
            title="Sample PDF Document"
            className="w-full h-[calc(100%-2.5rem)]" // Adjust height to account for header
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
