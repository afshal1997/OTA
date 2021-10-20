import React from "react";
import { Container } from "react-bootstrap";
import ReadMoreButtonHOC from "../../Components/Common/ReadMoreButton/ReadMoreButtonHOC";
import { longText } from "../../Constants";
import blogImg01 from "./../../Assets/Blog/BlogPageImge01.png";

const BlogPageAIIntelligence = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-6">
          <img className="w-100 BlogPageImge01" src={blogImg01} alt=""></img>
        </div>
        <div className="col-lg-6 m-auto">
          <h3>
            <strong>AI Intelligence</strong>
          </h3>
          <p>
            <strong>
              AI is the intelligence shown by the machines in contrast to the
              intelligence possessed by humans. It is like a house giving
              comfort to different technologies such as Natural Language
              Generation, Speech Recognition, Machine Learning, Virtual Agents
              etc.
            </strong>
          </p>
          <p>
            <strong>
              AI has evolved for over a century ensuring the development of a
              new era which is today
            </strong>
          </p>
          <ReadMoreButtonHOC longText={longText.forIntellegence} />
        </div>
      </div>
    </Container>
  );
};

export default BlogPageAIIntelligence;
