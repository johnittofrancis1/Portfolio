import React from 'react';

class Education extends React.Component
{
    render()
    {
        return (
            <div className="tab-content" id="education">
                <div>
                    <div className="tab-title">
                        <div className="heading-small text-whitesmoke">Computer Science and Engineering</div>
                        <div className="heading-small text-whitesmoke">2017 - 2021</div>
                    </div>
                    <div className="tab-title">
                        <div className="heading-small text-neon">St.Joseph's College of Engineering</div>
                        <div className="heading-small text-whitesmoke">Chennai</div>
                    </div>
                    <div className="tab-body">
                        <p className="text-small text-italic text-ash">CGPA: 8.91</p>
                    </div>
                </div>
                <div>
                    <div className="tab-title">
                        <div className="heading-small text-whitesmoke">12<sup>th</sup></div>
                        <div className="heading-small text-whitesmoke">2016 - 2017</div>
                    </div>
                    <div className="tab-title">
                        <div className="heading-small text-neon">Sahyamatha Matric Hr Sec School</div>
                        <div className="heading-small text-whitesmoke">Karaikudi</div>
                    </div>
                    <div className="tab-body">
                        <p className="text-small text-italic text-ash">Percentage: 97</p>
                    </div>
                </div>
                <div>
                    <div className="tab-title">
                        <div className="heading-small text-whitesmoke">10<sup>th</sup></div>
                        <div className="heading-small text-whitesmoke">2014 - 2015</div>
                    </div>
                    <div className="tab-title">
                        <div className="heading-small text-neon">Sahyamatha Matric Hr Sec School</div>
                        <div className="heading-small text-whitesmoke">Karaikudi</div>
                    </div>
                    <div className="tab-body">
                        <p className="text-small text-italic text-ash">Percentage: 98</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;