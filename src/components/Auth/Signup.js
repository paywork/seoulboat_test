import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    })

    const { username, email, phone, password } = formData

    const onChange = (e) => {
        setFormData( {...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username, email, phone, password
        }

        console.log(newUser)

        axios
            .post('https://dev-api.paywork.io/auth/signup/local', newUser)
            .then(result => {
                console.log(result.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className="signup">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">
                            회원가입 페이지입니다
                        </p>
                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label>이름</Label>
                                <Input
                                    type={"text"}
                                    placeholder={"이름을 입력해주세요"}
                                    name={"username"}
                                    value={username}
                                    onChange={onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>핸드폰 번호</Label>
                                <Input
                                    type={"number"}
                                    type={"text"}
                                    placeholder={"핸드폰 번호를 입력해주세요"}
                                    name={"phone"}
                                    value={phone}
                                    onChange={onChange}
                                />
                                <small className="text-muted">* -없이 입력해주세요</small>
                            </FormGroup>
                            <FormGroup>
                                <Label>이메일 주소</Label>
                                <Input
                                    type={"text"}
                                    placeholder={"이메일 주소를 입력해주세요"}
                                    name={"email"}
                                    value={email}
                                    onChange={onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>비밀번호</Label>
                                <Input
                                    type={"password"}
                                    placeholder={"비밀번호를 입력해주세요"}
                                    name={"password"}
                                    value={password}
                                    onChange={onChange}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    이용약관에 동의합니다
                                </Label>
                            </FormGroup>
                            <div>
                                <Button  color="primary">회원가입</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
