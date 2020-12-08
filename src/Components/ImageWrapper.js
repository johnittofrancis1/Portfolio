import React from 'react';

class ImageWrapper extends React.Component
{
    render()
    {
        return (
            <div className="img-wrapper">
                <div style={{backgroundColor: this.props.filterColor}} className="filter-neon"></div>
                <img style={{opacity: this.props.dim ? 0.5: 1}} src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

export default ImageWrapper;