import React from 'react'
import { Container } from "react-bootstrap";
import ReadMoreButtonHOC from "../../Components/Common/ReadMoreButton/ReadMoreButtonHOC";
import { longText } from "../../Constants";
import blogImg02 from "./../../Assets/Blog/BlogPageImge02.png";

const BlogPageOutsourceImportance = () => {
    return (
        <Container>
            <div className="row">
                <div className="col-lg-7 m-auto mt-5 pt-5">
                    <h3>
                        <strong>Outsource Importance</strong>
                    </h3>
                    <p>
                        <strong>
                            For more than a decade, companies in the developed countries began to outsource some of their business operations to different parts of the world mainly to third world countries such as Pakistan, Bangladesh, India and many others. Given the circumstances of this operation, remote working has evolved and expanded truly to every nature of business operating in the world providing both efficient and effective outcomes to the owners and workers.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            The idea of outsourcing is being coined by Lea Woodward in 2006 describing it as “location independent” working or “digital nomad” which explains the idea of people working independently of their geographical location. Performing tasks while sitting in a café or a public library or the comfort of their home.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            Outsourcing not only helps businesses to flourish but also to third world countries with poor employment opportunities and low sources of income. This concept embraces nations like Pakistan and India where there is remarkable talent going down the drain which needs to be tapped and used properly in the field of customer service, marketing, human resources and many others. As a result, outsourcing lowers the unemployment rates and boosts the economy in a matter of time.
                        </strong>
                    </p>
                    <ReadMoreButtonHOC longText={longText.forImportanceText} />
                </div>
                <div className="col-lg-5">
                    <img className="w-100 BlogPageImge01" src={blogImg02} alt=""></img>
                </div>
            </div>
        </Container>
    )
}

export default BlogPageOutsourceImportance
