import React from 'react';

class ImageWrapper extends React.Component
{
    render()
    {
        return (
            <div className="img-wrapper">
                <div className="filter-neon"></div>
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

export default ImageWrapper;