import React from "react";
import "./Videos.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import video1 from './videos/cvid.mp4';

const StudentsVideos = () => {


  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Video Lessons</h2>
        <br />

        <h3>Mathematics</h3>
        <div className="vid-sub-container">
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 1</p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 2</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 3</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 4</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 5</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
        </div>
        <h3>Accounts</h3>
        <div className="vid-sub-container">
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 1</p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 2</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 3</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 4</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 5</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
        </div>
        <h3>Science</h3>
        <div className="vid-sub-container">
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 1</p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 2</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 3</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 4</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 5</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
        </div>
        <h3>Biology</h3>
        <div className="vid-sub-container">
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 1</p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 2</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 3</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 4</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 5</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
        </div>
        <h3>English</h3>
        <div className="vid-sub-container">
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 1</p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 2</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 3</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 4</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 5</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
        </div>
        <h3>Civic Education</h3>
        <div className="vid-sub-container">
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 1</p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 2</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 3</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 4</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 5</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
        </div>
        <h3>Religious Education</h3>
        <div className="vid-sub-container">
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 1</p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 2</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 3</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 4</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
          <div
            className="video-container"
            autoPlay="true"
            kind="captions"
          >
            <p>Topic 5</p>
            <video className="w-100 h-80 rounded-md" controls>
              <source src={video1} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
              {/* You can add more <source> tags for different file types */}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsVideos;
