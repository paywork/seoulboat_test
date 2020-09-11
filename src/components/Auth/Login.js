import React, {useState} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData( {...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            email, password
        }

        console.log(newUser)

        axios
            .post('https://dev-api.paywork.io/auth/login/local', newUser)
            .then(result => {
                console.log(result.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">로그인</h1>
                        <p className="lead text-center">
                            로그인 페이지입니다
                        </p>
                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label>이메일 주소</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    placeholder="가입하신 이메일 주소를 입력해주세요"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>비밀번호</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    vaue={password}
                                    placeholder="비밀번호를 입력해주세요"
                                    onChange={onChange}
                                />
                            </FormGroup>
                            <Button>로그인</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
