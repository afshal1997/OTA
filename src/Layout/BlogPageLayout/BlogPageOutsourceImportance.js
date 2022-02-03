import React from "react";
import { Container } from "react-bootstrap";
import ShowMoreText from "../../Components/Common/ShowMoreText";
import blogImg02 from "./../../Assets/Blog/BlogPageImge02.png";
const BlogPageOutsourceImportance = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-6 m-auto">
          <h3>
            <strong>Outsource Importance</strong>
          </h3>
          <p>
            <strong>
              For more than a decade, companies in the developed countries began
              to outsource some of their business operations to different parts
              of the world mainly to third world countries such as Pakistan,
              Bangladesh, India and many others. Given the circumstances of this
              operation, remote working has evolved and expanded truly to every
              nature of business operating in the world providing both efficient
              and effective outcomes to the owners and workers.
            </strong>
          </p>
          <p>
            <strong>
              The idea of outsourcing is being coined by Lea Woodward in 2006
              describing it as “location independent” working or “digital nomad”
              which explains the idea of people working independently of their
              geographical location. Performing tasks while sitting in a café or
              a public library or the comfort of their home.
            </strong>
          </p>
          <p>
            <strong>
              Outsourcing not only helps businesses to flourish but also to
              third world countries with poor employment opportunities and low
              sources of income. This concept embraces nations like Pakistan and
              India where there is remarkable talent going down the drain which
              needs to be tapped and used properly in the field of customer
              service, marketing, human resources and many others. As a result,
              outsourcing lowers the unemployment rates and boosts the economy
              in a matter of time.
            </strong>
          </p>
          <ShowMoreText>
            {
              <>
                
                <strong>
                  Some of the hottest outsourcing markets in the Philippines
                  right now include call centers, SEO, IT services, internet
                  marketing, and virtual staffing solutions. In fact, one of the
                  key advantages of outsourcing to the Philippines is that it is
                  extremely small business friendly, as it costs as less as
                  $2000 to operate a team of employees. The industry right now
                  is on the up and up and has a lot to offer in terms of
                  reliability and security when it comes to outsourcing to the
                  Philippines.{" "}
                  <a href="https://www.flatworldsolutions.com/articles/10-benefits-of-outsourcing-to-philippines.php">
                    https://www.flatworldsolutions.com/articles/10-benefits-of-outsourcing-to-philippines.php
                  </a>
                  .
                </strong>
                <strong>
                  Overall outsourcing helps save you money and time, that is
                  what people talk about when they discuss outsourcing as there
                  is a pool to choose with who you want to work with makes it a
                  lot easier and desirable. For instance, while outsourcing
                  customer service to a third world country like Pakistan there
                  is zero cost of training and infrastructure plus you will get
                  a team of experts to handle your customers queries using the
                  top-notch technology and sales techniques resulting in a
                  win-win situation for all!!
                </strong>
                <strong>
                  In the end, it is not always about saving costs, sometimes
                  companies lack in-house expertise and the right candidate to
                  overlook the operations. Therefore, outsourcing proves to be
                  the new era of running business and the most important tool to
                  run a business in this fast pace of time while keeping low
                  budgets and generating more revenue and thus proven to be a
                  fair choice
                </strong>
              </>
            }
          </ShowMoreText>
        </div>
        <div className="col-lg-6">
          <img className="w-100 BlogPageImge01" src={blogImg02} alt="BlogPageImge01"></img>
        </div>
      </div>
    </Container>
  );
};

export default BlogPageOutsourceImportance;
