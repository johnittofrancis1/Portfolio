import React from 'react';
import Work from './Work';

class Works extends React.Component
{
    state = {
        works: [
            {
                title: "Monopoly",
                titleTag: "Android App",
                desc: "An Android Application that replicates the infamous 2 - 4 Multiplayer board game - Monopoly.",
                imageSrc: require("../images/Monopoly.png"),
                techList: ["Android Studio", "Java", "XML"],
                link: "https://github.com/johnittofrancis1/Monopoly"
            },

            {
                title: "CMS",
                titleTag: "Web Application",
                desc: "A Content Management System for blogs with admin module using Bootstrap and PHP",
                imageSrc: require("../images/CMS.png"),
                techList: ["PHP", "HTML", "Bootstrap"],
                link: "https://github.com/johnittofrancis1/CMS"
            },

            {
                title: "PCI",
                titleTag: "Android App",
                desc: "Android Application calculates a common PCI - Pavement Condition Index for a road by assessing damages in the road using Image Classification from the pictures of the road.",
                imageSrc: require("../images/PCI.png"),
                techList: ["Android Studio", "Java", "XML", "FireBase"],
                link: "https://github.com/johnittofrancis1/PCI"
            },

            {
                title: "PCI",
                titleTag: "Android App",
                desc: "Android Application calculates a common PCI - Pavement Condition Index for a road by assessing damages in the road using Image Classification from the pictures of the road.",
                imageSrc: require("../images/PCI.png"),
                techList: ["Android Studio", "Java", "XML", "FireBase"],
                link: "https://github.com/johnittofrancis1/PCI"
            }
        ]
    }

    renderWorks = () => {
        return this.state.works.map((work, i) => {
            if (i % 2 === 0)
                return <Work key={i} title={work.title} titleTag={work.titleTag} desc={work.desc} imageSrc={work.imageSrc} techList={work.techList} link={work.link} />
            else
                return <Work key={i} reverse title={work.title} titleTag={work.titleTag} desc={work.desc} imageSrc={work.imageSrc} techList={work.techList} link={work.link} />
        });
    }

    render()
    {
        return (
            <div id="works" className="sections">
                    <div className="section-header">
                        <div className="heading-mid text-whitesmoke mr-3"><span className="text-neon">03. </span>Some things I've built</div>
                        <div className="horizontal-line"></div>
                    </div>
                    <div id="works-body">
                        { this.renderWorks() }
                    </div>
            </div>
        );
    }
}

export default Works;