import React from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";

import AppButton from "../reusable/AppButton";
import PageTitle from "../reusable/PageTitle";
import project1 from "../../assets/img/project1.png";
import project2 from "../../assets/img/project2.png";
import project3 from "../../assets/img/project3.png";
import project4 from "../../assets/img/project4.png";
import project5 from "../../assets/img/project5.png";

const Projects = () => {
  const customBtnStyles = {
    borderRadius: 4,
    padding: "7px 30px",
    backgroundColor: "var(--primaryColor)",
    color: "var(--white)",
  };

  return (
    <div>
      <PageTitle title={"My Projects"} />
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={project1}
            alt="slide 1"
            style={{ border: "3px solid var(--primaryBorder)" }}
          />
          <CCarouselCaption
            className="d-md-block"
            style={{ color: "var(--primaryText)", backgroundColor: "var(--white)", border: "2px solid var(--primaryBorder" }}
          >
            <h5>Social Site</h5>
            <p className="d-none d-sm-block">
              Built with: React, NodeJS, Express, MongoDB, GraphQL.
            </p>
            <a href="https://xtraaa.net" target={"blank"}>
              <AppButton text={"Preview"} customStyles={customBtnStyles} />
            </a>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={project2}
            alt="slide 2"
            style={{ border: "3px solid var(--primaryBorder)" }}
          />
          <CCarouselCaption
            className="d-md-block"
            style={{ color: "var(--primaryText)", backgroundColor: "var(--white)", border: "2px solid var(--primaryBorder" }}
          >
            <h5>Admin Site</h5>
            <p className="d-none d-sm-block">
              Built with: React, Redux, NodeJS, Express, MongoDB.
            </p>
            <a
              href="https://ecommerce-admin-site.netlify.app/"
              target={"blank"}
            >
              <AppButton text={"Preview"} customStyles={customBtnStyles} />
            </a>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={project3}
            alt="slide 3"
            style={{ border: "3px solid var(--primaryBorder)" }}
          />
          <CCarouselCaption
            className="d-md-block"
            style={{ color: "var(--primaryText)", backgroundColor: "var(--white)", border: "2px solid var(--primaryBorder" }}
          >
            <h5>Ecommerce Site</h5>
            <p className="d-none d-sm-block">
              Built with: React, Redux, NodeJS, Express, MongoDB.
            </p>
            <a href="https://fresh-farm-shopping.netlify.app" target={"blank"}>
              <AppButton text={"Preview"} customStyles={customBtnStyles} />
            </a>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={project4}
            alt="slide 4"
            style={{ border: "3px solid var(--primaryBorder)" }}
          />
          <CCarouselCaption
            className="d-md-block"
            style={{ color: "var(--primaryText)", backgroundColor: "var(--white)", border: "2px solid var(--primaryBorder" }}
          >
            <h5>Shopping Site</h5>
            <p className="d-none d-sm-block">
              Built with: HTML, CSS, Django, MySQL
            </p>
            <a href="https://mgfashionisto.com" target={"blank"}>
              <AppButton text={"Preview"} customStyles={customBtnStyles} />
            </a>
          </CCarouselCaption>
        </CCarouselItem>
                <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={project5}
            alt="slide 5"
            style={{ border: "3px solid var(--primaryBorder)" }}
          />
          <CCarouselCaption
            className="d-md-block"
            style={{ color: "var(--primaryText)", backgroundColor: "var(--white)", border: "2px solid var(--primaryBorder" }}
          >
            <h5>Ecommerce Site</h5>
            <p className="d-none d-sm-block">
              Built with: React, Redux, NodeJS, Express, MongoDB.
            </p>
            <a href="https://min-food-delivery.netlify.app/" target={"blank"}>
              <AppButton text={"Preview"} customStyles={customBtnStyles} />
            </a>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Projects;
