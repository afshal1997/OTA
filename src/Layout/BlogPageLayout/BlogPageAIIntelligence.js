import React from "react";
import { Container } from "react-bootstrap";
import ShowMoreText from "../../Components/Common/ShowMoreText";
import blogImg01 from "./../../Assets/Blog/BlogPageImge01.png";

const BlogPageAIIntelligence = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-5">
          <img className="w-100 BlogPageImge01" src={blogImg01} alt="BlogPageImge01"></img>
        </div>
        <div className="col-lg-7 m-auto mt-5 pt-5">
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
          <ShowMoreText>
            <strong>AI is the intelligence shown by the machines in contrast to the intelligence possessed by humans. It is like a house giving comfort to different technologies such as Natural Language Generation, Speech Recognition, Machine Learning, Virtual Agents etc.AI has evolved for over a century ensuring the development of a new era which is today The logistic regression model used by our email – spam filters – is a part of Artificial Intelligence elements. The online banking system, bank provides guarantee of safe transaction and detection of fraud...</strong>
          </ShowMoreText>
        </div>
      </div>
    </Container>
  );
};

export default BlogPageAIIntelligence;
