import React from 'react';

export const Deco = () => {
  return (
    <div className="smooth-scroll">
      <div className="hero-scroll">
        <div className="section">
          <div className="section-wrapper">
            <div className="content">
              <h1 className="hero-header h-1">the great</h1>
              <h1 className="hero-header h-2">outdoors</h1>
              <h1 className="hero-header h-3">volume</h1>
            </div>
            <div className="pin-wrapper">
              <div className="image-wrapper" id="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1727206407683-490abfe0d682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
                  alt="Nature"
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section copy">
        <div className="section-wrapper">
          <div className="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
              sunt officiis laboriosam illo aliquid, fugiat amet odio porro consequatur
              cumque veritatis quod cum eveniet neque quo reiciendis obcaecati praesentium a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
