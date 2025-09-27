import React from 'react';

class Skills extends React.Component
{
    state = {
        skills: [
            { name: "Java", type: "prog-language" },
            {name: "OAuth 2.0", type: "tech"},
            { name: "OOPS", type: "tech" },
            { name: "Python", type: "prog-language" },
            { name: "Machine-Learning", type: "tech" },
            { name: "Deep Learning", type: "tech" },
            { name: "TensorFlow", type: "framework" },
            { name: "CIAM", type: "tech" },
            { name: "NLP", type: "tech" },
            { name: "Javascript", type: "prog-language" },
            { name: "Redis", type: "tech" },
            { name: "ReactJS", type: "framework" },
            { name: "MySQL", type: "prog-language" },
            { name: "Android", type: "tech" },
            { name: "ExpressJS", type: "framework" },
            { name: "C", type: "prog-language" },
            {name: "REST APIs & Microservices", type: "tech"},
        ]
    }

    renderSkillsList = () => { 
        return this.state.skills.map((skill, i) => (<div key={i} className={skill.type + " text-mid"} > { skill.name } </div>)); 
    }

    render()
    {
        return (
            <div className="tab-content" id="skills">
                <div id="skills-body">
                    { this.renderSkillsList() }
                </div>
            </div>
        );
    }
}

export default Skills;