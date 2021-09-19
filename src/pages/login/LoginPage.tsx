import React from "react";
import { Row, Col, Card, Form, Button, Input, Checkbox } from "antd";
import { RootStore } from "../../stores";
import { inject } from "mobx-react";
import "./LoginPage.scss";

type Props = {
  rootStore: RootStore;
};

@inject((rootStore: RootStore) => ({
  rootStore: rootStore,
}))
class LoginPage extends React.Component<Props> {
  render() {
    const { rootStore } = this.props;
    console.log("r", rootStore.loginStore.loading);
    return (
      <div className="loginpage">
        <Row>
          <Col
            id="loginform"
            xs={{ span: 12, offset: 6 }}
            sm={{ span: 12, offset: 6 }}
            lg={{ span: 8, offset: 8 }}
          >
            <div className="title noselect">Log In</div>
            <Form name="loginform-form">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Username is required",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                ]}
              >
                <Input placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button className="loginBtn" htmlType="submit">
                  Log In
                </Button>
              </Form.Item>
              <Form.Item>
                <Button className="signupBtn">Sign Up</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
