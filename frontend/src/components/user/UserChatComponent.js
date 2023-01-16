import React from "react";
import "../../css/Chats.css";
import { ChatDots, XCircle } from "react-bootstrap-icons";

const UserChatComponent = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <ChatDots className="comment" />
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
        <XCircle className="close" />
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat - Online</h6>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 20 }).map((_, idx) => (
              <div key={idx}>
                <p>
                  <b>You wrote:</b> Hello, world! This is a toast message.
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote:</b> Hello, world! This is a toast message.
                </p>
              </div>
            ))}
          </div>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          ></textarea>
          <button className="btn btn-success btn-block">Submit </button>
        </div>
      </div>
    </div>
  );
};

export default UserChatComponent;
