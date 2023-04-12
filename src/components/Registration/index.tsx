import { Alert, Button, Form,Input } from "antd"
import { Container, LoginLink, Main, OrWith, RightForm, SubTitle, Title } from "./styles"
import {EyeTwoTone,EyeInvisibleOutlined,GoogleOutlined} from '@ant-design/icons';
import { routes } from "../../constants/routes";
import { RegistrationT } from "../../types/SignUp";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

type Props = {
    onSubmit:(data:RegistrationT) => void;
    success:boolean;
    err:any
}

export const RegistrationComponent:React.FC<Props> = ({onSubmit,err,success}) => {
    useEffect(() => {
        success && <Navigate to={'/'}/>
    },[success]);
    
    return <Container>
        <Title>Registration</Title>
        <SubTitle>Already have an account? <LoginLink to={routes.login}>Login</LoginLink></SubTitle>
        <Main>
            <Form onFinish={onSubmit}>
                <Form.Item
                    name="name"
                    rules={[{ required: true,message:'Please input your name!'}]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true,message:'Please input your email!'},{type:'email', message: 'Please input correct email!',}]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>

                </Form.Item>
                {!!err && <Alert message={err.response.data.message}  type="error" showIcon />}
                <Form.Item >
                    <Button htmlType="submit" type={'primary'}>Submit</Button>
                </Form.Item>
            </Form>
            <RightForm>
                <OrWith>or with <GoogleOutlined /></OrWith>
            </RightForm>
        </Main>
    </Container>
}