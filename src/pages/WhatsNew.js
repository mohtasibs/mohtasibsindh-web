import BaseLayout from "@/components/BaseLayout";
import React, { useState } from "react";

const WhatsNew = () => {
  const [expandedStories, setExpandedStories] = useState({});

  const toggleText = (storyId) => {
    setExpandedStories((prevState) => ({
      ...prevState,
      [storyId]: !prevState[storyId],
    }));
  };

  return (
    <BaseLayout>
      <div className="container">
        <section className="container mb-5 d-flex justify-content-center align-items-center stories-wrapper">
          <div className="row stories-card">
            <h2 className="h2 mt-5 text-center">Success Stories</h2>
            <div className="col-md-6 p-2 d-flex justify-content-center">
              <article className="story-container">
                <div className="story-thumbnail">
                  <video controls className="story-video">
                    <source src="/suvideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="story-info">
                  <h2 className="story-title">Success Story 1</h2>
                  <p
                    className={`story-description ${
                      expandedStories[1] ? "expanded" : "collapsed"
                    }`}
                  >
                    Mr. Khalique Zaman Soomro filed complaint No. POS/3844/2023
                    with the Honorable Ombudsman Sindh regarding the posting of
                    Male and Female Medical Officers at BHU Village Yousif
                    Soomro and the restoration of the solar system. Following
                    the intervention of this institution, the issue has been
                    resolved. Male and Female Medical Officers have been
                    assigned to BHU Village Yousif Soomro, and the solar system
                    has been restored. The complainant is satisfied and has
                    expressed profound gratitude to the Honorable Ombudsman
                    Sindh and the Regional Director of Badin for addressing and
                    resolving the problem.
                  </p>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleText(1)}
                  >
                    {expandedStories[1] ? "Show less" : "Show more"}
                  </button>
                </div>
              </article>
            </div>
            <div className="col-md-6 p-2 d-flex justify-content-center">
              <article className="story-container">
                <div className="story-thumbnail">
                  <video controls className="story-video">
                    <source src="/suvideo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="story-info">
                  <h2 className="story-title">Success Story 2</h2>
                  <p
                    className={`story-description ${
                      expandedStories[2] ? "expanded" : "collapsed"
                    }`}
                  >
                    Miss Dua Solangi, a resident of First Family Lane,
                    Jacobabad, filed a complaint against the XEN Public Health
                    Jacobabad and the Assistant Manager of State Life Insurance
                    regarding the payment of the Group Insurance (GI) for her
                    late father. Following the intervention of this institute,
                    she received an amount of 350,000. Miss Solangi has
                    expressed her deep gratitude to the Ombudsman Sindh for
                    their assistance in resolving this matter.
                  </p>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleText(2)}
                  >
                    {expandedStories[2] ? "Show less" : "Show more"}
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .stories-wrapper {
          margin-top: 20px;
        }
        .stories-card {
          display: flex;
          flex-wrap: wrap;
        }
        .story-container {
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
          max-width: 300px;
          margin: 10px;
        }
        .story-thumbnail {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }
        .story-video {
          width: 100%;
          height: 300px;
        }
        .story-info {
          padding: 10px;
          text-align: center;
          flex: 1;
        }
        .story-title {
          font-size: 16px;
          font-weight: bold;
          margin: 5px 0;
        }
        .story-description {
          font-size: 12px;
          margin: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .expanded {
          overflow: visible;
          display: block;
          -webkit-line-clamp: unset;
        }
        .collapsed {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .story-container button {
          background: none;
          border: none;
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }
        .story-container button:hover {
          text-decoration: none;
        }
      `}</style>
    </BaseLayout>
  );
};

export default WhatsNew;
