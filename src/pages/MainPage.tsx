import React from "react";
import { Row, Col, Card } from "antd";
import { RootStore } from "../stores";

import main2 from "../img/main2.jpg";
import "./MainPage.scss";

type Props = {
  rootStore: RootStore;
};

class MainPage extends React.Component<Props> {
  render() {
    return (
      <div className="mainpage">
        <div className="main">
          <div className="title-bg" />
          <div className="title-content">
            <h1 className="title">START YOUR DAY WITH GRATITUDE</h1>
            <p className="subcontent">Experience the change.</p>
          </div>
        </div>
        <div className="section">
          <Row>
            <Col xs={24} sm={24} md={16}>
              <img className="main2" src={main2} alt="" />
            </Col>
            <Col xs={24} sm={24} md={8}>
              <div className="content">
                <h3 className="title">Feeling Dissatisfied?</h3>
                <p className="description">
                  {/* Gratitude measurably counters the tendency to forget and
                  downplay positive events. Research shows gratitude treatment
                  enhanced the accessibility of positive memories compared to
                  the comparison treatments. Results suggest that exercises like
                  the gratitude 3-blessings treatment may train cognitive biases
                  that are salubrious to subjective well-being.
                  <br /> <br /> */}
                  Gratitude counterbalances our “negativity bias”, our tendency
                  to focus on negative events for the sake of protecting
                  ourselves from danger.
                  <br />
                </p>{" "}
                <a href="">READ MORE</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MainPage;
