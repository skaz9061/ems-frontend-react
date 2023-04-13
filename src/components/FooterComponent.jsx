import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className='footer fixed-bottom text-center bg-dark'>
                    <span className="text-muted">All Rights Reserved &copy;2023 Steven Kazmierkiewicz</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;