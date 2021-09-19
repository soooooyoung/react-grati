import React from "react";
import { Row, Col, Spin, Form, Button, Input, Checkbox } from "antd";
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
  login = async (form: { username: string; password: string }) => {
    try {
      const { rootStore } = this.props;
      const response = await rootStore.loginStore.login(
        form.username,
        form.password
      );
      if (response && localStorage.getItem("loginId")) {
        rootStore.routing.push("/");
      } else {
        // TODO: handle warning
      }
    } catch (e) {
      //TODO: handle error with modals
    }
  };

  render() {
    const { rootStore } = this.props;
    return (
      <div className="loginpage">
        <Row>
          <Col
            id="loginform"
            xs={{ span: 12, offset: 6 }}
            sm={{ span: 12, offset: 6 }}
            lg={{ span: 8, offset: 8 }}
          >
            {" "}
            <Spin spinning={rootStore.loginStore.loading}>
              <div className="title noselect">Log In</div>
              <Form name="loginform-form" onFinish={this.login}>
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
                  <Input type="password" placeholder="Password" />
                </Form.Item>
                <Button className="loginBtn" htmlType="submit">
                  Log In
                </Button>
                <Button className="signupBtn">Sign Up</Button>
              </Form>
            </Spin>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
