import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing">
            <div className="dark-overlay landing-inner text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-3 mb-4">Welcome to 서울보트</h1>
                            <p className="lead">
                                {' '}
                                Find your dream boat
                            </p>
                            <hr />
                            <Link to="/signup" className="btn btn-lg btn-primary mr-2">
                                회원가입
                            </Link>
                            <Link to="/login" className="btn btn-lg btn-light">
                                로그인
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
