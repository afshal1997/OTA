import React from 'react'
import { Container } from 'react-bootstrap'
import blogImg01 from './../../Assets/Blog/BlogPageImge01.png'
import ReactReadMoreReadLess from "react-read-more-read-less"

const longText =
    "AI is the intelligence shown by the machines in contrast to the intelligence possessed by humans. It is like a house giving comfort to different technologies such as Natural Language Generation, Speech Recognition, Machine Learning, Virtual Agents etc.AI has evolved for over a century ensuring the development of a new era which is today The logistic regression model used by our email – spam filters – is a part of Artificial Intelligence elements. The online banking system, bank provides guarantee of safe transaction and detection of fraud...";


const BlogPageAIIntelligence = () => {
    return (
        <Container>
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100" src={blogImg01} alt=""></img>
                </div>
                <div className="col-lg-6 m-auto">
                    <h3><strong>AI Intelligence</strong></h3>
                    <p>
                        <strong>
                            AI is the intelligence shown by the machines in contrast to the intelligence possessed by humans. It is like a house giving comfort to different technologies such as Natural Language Generation, Speech Recognition, Machine Learning, Virtual Agents etc.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            AI has evolved for over a century ensuring the development of a new era which is today
                        </strong>
                    </p>
                    <p>
                        <strong>
                            The logistic regression model used by our email – spam filters – is a part of Artificial Intelligence elements. The online banking system, bank provides guarantee of safe transaction and detection of fraud...
                        </strong>
                    </p>
                    <div className="blogPageContent">
                        <ReactReadMoreReadLess
                            charLimit={400}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                        >
                            {longText}
                        </ReactReadMoreReadLess>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default BlogPageAIIntelligence
