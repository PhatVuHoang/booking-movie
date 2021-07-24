import React from 'react';
import './FooterComponent.css';

export default function FooterComponent(props) {
    return (
        <footer>
            <div className="footer__list container-fluid">
                <div className="row">
                    <p>Tix</p>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>FAQ</li>
                                    <li>Brand Guidelines</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Thỏa thuận sử dụng</li>
                                    <li>Chính sách bảo mật</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <p>ĐỐI TÁC</p>

                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
        </footer>
    )
}
