import React from 'react';

import Courses from './Courses';
import Education from './Education';
import Skills from './Skills';
import Training from './Training';

class CurriculumVitae extends React.Component
{
    state = { 
        activeContent: "Education",
        tabList: ["Education", "Courses", "Skills", "Training"]
    }

    activeOrNot = (name) => this.state.activeContent === name ? "active": "";

    renderTabList = () => {
        return this.state.tabList.map((name, i) => <li key={i} className={`tab-btn ${this.activeOrNot(name)}`} onClick={() => this.setState({activeContent: name})} >{ name }</li>)
    }

    renderContent = () => {
        switch (this.state.activeContent) {
            case "Education":
                return <Education />
            case "Courses":
                return <Courses />
            case "Skills":
                return <Skills />
            case "Training":
                return <Training />
            default:
                return <Education />
        }
    }

    render()
    {
        return (
            <div id="cv">
                <div className="section-header" >
                    <div className="heading-mid text-whitesmoke"><span className="text-neon">02. </span>Curriculum Vitae</div>
                    <div className="horizontal-line"></div>
                </div>
                <ul className="tabs">
                    { this.renderTabList() }
                </ul>
                { this.renderContent() }
            </div>
        );
    }
}

export default CurriculumVitae;