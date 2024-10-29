import React from 'react';

export const Youtube = () => {
  return (
    <div className="container mx-auto">

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-1/2 space-y-4">
          <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
              title="YouTube Video 1"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/8f3MUcCAFuc?si=guhVM_2YwuWpa8S2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
              title="YouTube Video 2"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/gwqPOoT1Xns?si=8FGMyWYl8mBtBvWK"
             
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="relative overflow-hidden pb-[56.25%] h-0 md:w-1/2 mt-4 md:mt-0">
          <iframe
            title="YouTube Video 3"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/yVuY-JX6wRM?si=pSjDghsbYkvYYnYB"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

