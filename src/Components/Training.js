import React from 'react';

class Training extends React.Component
{
    render()
    {
        return (
            <div className="tab-content" id="training">
                <div id="training-body">
                    <div className="training">
                        <div className="heading-small text-whitesmoke">Internship - <span className="text-small text-ash">Web Development</span></div>
                        <div className="text-small text-neon">@ Oneyes Technologies</div>
                    </div>
                    <div className="training">
                        <div className="heading-small text-whitesmoke">Implant Training - <span className="text-small text-ash">Android Development</span></div>
                        <div className="text-small text-neon">@ Codebind Technologies</div>
                    </div>
                    <div className="training">
                        <div className="heading-small text-whitesmoke">Certification - <span className="text-small text-ash">Big Data</span></div>
                        <div className="text-small text-neon">@ Eyeopen Technologies</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Training;