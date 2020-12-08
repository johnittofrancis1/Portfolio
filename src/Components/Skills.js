import React from 'react';

class Skills extends React.Component
{
    state = {
        skills: [
            { name: "C", type: "prog-language" },
            { name: "Java", type: "prog-language" },
            { name: "OOPS", type: "tech" },
            { name: "Python", type: "prog-language" },
            { name: "Machine-Learning", type: "tech" },
            { name: "Deep Learning", type: "tech" },
            { name: "TensorFlow", type: "framework" },
            { name: "NLP", type: "tech" },
            { name: "PHP", type: "prog-language" },
            { name: "HTML", type: "prog-language" },
            { name: "CSS", type: "prog-language" },
            { name: "Javascript", type: "prog-language" },
            { name: "ReactJS", type: "framework" },
            { name: "MySQL", type: "prog-language" },
            { name: "Android", type: "tech" },
            { name: "XML", type: "prog-language" },
            { name: "React Native", type: "framework" },
            { name: "ExpressJS", type: "framework" }
        ]
    }

    renderSkillsList = () => { 
        return this.state.skills.map((skill, i) => (<div key={i} className={skill.type} > { skill.name } </div>)); 
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