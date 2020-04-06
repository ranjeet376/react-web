import React, { Component } from "react";

export default class FAQ extends Component {
  render() {
    return (
      <div className="faq-main">
        <p className="mini-title">FAQ</p>
        <p className="title">Frequantly Ask Questions</p>

        <ul className="faq-list">
          <li>
            What is instant?<button className="faq-plus">+</button>
          </li>
          
          <p className="faq-text">
            Pityful a rethoric question ran over her cheek,then she continued he
            way
          </p>
          <br />
          <p className="faq-text1">
            Far far away,behind the world mountains for from the counries
            vokalia and constania ,there lives the blid texts.Separated they
            live in <br />
            Bookmarksrove right at the coast of the semantic a large language
            ocean.
          </p>
          <hr />
          <li>Is this available to my country?</li>
          <hr />
          <li>How do i use the features of instant App?</li>
          <hr />
          <li>How much do the instant App cost?</li>
          <hr />
          <li>I have technical problem,eho do i email?</li>
          <hr />
        </ul>
      </div>
    );
  }
}
