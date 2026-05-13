function toDisplayPanel(data) {
    const displayDictionary = {
        overview: function () {
            return {
                label: "Project Overview",
                title: "Network Sentinel",
                value: "Network Security Dashboard",
                text: "A portal to view network activity, packet summaries, and future intrusion detection results"
            };
        },

        frontend: function () {
            return {
                label: "Interface Layer",
                title: "Visual Control Center",
                value: "Frontend",
                text: "The current goal is to build a clean animated interface before the real network data is connected"
            };
        },

        capture: function () {
            return {
                label: "Capture Layer",
                title: "Network Data Intake",
                value: "C++",
                text: "A future C++ layer can collect system and network information before sending it into the dashboard"
            };
        },

        pipeline: function () {
            return {
                label: "Data Pipeline",
                title: "Packets",
                value: "Preprocess",
                text:  "Network packet need to be cleaned, organized, and prepared for model training"
            };
        },

        ai: function () {
            return {
                label: "AI Layer",
                title: "Intrusion Detection",
                value: "Model Integration",
                text: "The machine learning layer will help classify traffic as normal activity or suspicious behavior"
            };
        },

        database: function () {
            return {
                label: "Storage Layer",
                title: "History",
                value: "Database",
                text: "Processed events can later be stored so alerts, model decisions, and network activity can be reviewed."
            };
        }
    };

    if (displayDictionary[data.type] === undefined) {
        return {
            label: "Unknown Layer",
            title: "Display Missing",
            value: "N/A",
            text: "Something is wrong"
        };
    }

    return displayDictionary[data.type]();
}

function getHomeRawData() {
    return [
        {
            type: "overview"
        },
        {
            type: "frontend"
        },
        {
            type: "capture"
        },
        {
            type: "pipeline"
        },
        {
            type: "ai"
        },
        {
            type: "database"
        }
    ];
}

function homeR_CGF() {

    const rawData   = getHomeRawData();
    
    const panelData = rawData.map(function (item) {
        return toDisplayPanel(item);
    });

    const [panelIndex, setPanelIndex] = React.useState(0);
    const [panelFade,  setPanelFade]  = React.useState(true);

    React.useEffect(function () {
        const timer = setInterval(function () {
            setPanelFade(false);

            setTimeout(function () {
                setPanelIndex(function (oldIndex) {
                    return (oldIndex + 1) % panelData.length;
                });
                setPanelFade(true);
            }, 450);
        }, 3500);

        return function () {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className = "home">
            <header className = "navbar">
                <div className = "nav-links">
                    <a className = "nav-link" href = "#">Home</a>
                    <a className = "nav-link" href = "#">Network Info</a>
                    <a className = "nav-link" href = "#">AI Analytics</a>
                </div>
            </header>

            <main>
                <section className = "intro" id = "home">
                    <div className = "home-stage">
                        <p>Network Sentinel Portal</p>
                    </div>
                </section>

                <section className = "spinner-section" id = "spinner-info">
                    <div className = "home-stage">
                        <div className = "void" id = "void">
                            <div className = "top-white-section">
                                <div className = "portal-title">
                                    Network Sentinel Portal
                                </div>
                            </div>

                            <div className = "left-glass-panel">
                                <div className = "glass-sharp-edge"></div>
                            </div>

                            <div className = {panelFade ? "info-panel show" : "info-panel"}>

                                <div className = "info-label">
                                    {panelData[panelIndex].label}
                                </div>

                                <h1>
                                    {panelData[panelIndex].title}
                                </h1>

                                <div className = "info-value">
                                    {panelData[panelIndex].value}
                                </div>

                                <p>
                                    {panelData[panelIndex].text}
                                </p>

                            </div>

                            <div className = "crop">
                                <ul className = "card-list" style = {{"--count": 8}}>
                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <span>1046</span>
                                                <span>Packet Flow</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <img className = "card-img" src = "pics/home-black-ice.gif" alt = "" />
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <span>AI</span>
                                                <span>Detection</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <img className = "card-img" src = "pics/home-black-ice.gif" alt = "" />
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <span>12%</span>
                                                <span>Risk Score</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <img className = "card-img" src = "pics/home-black-ice.gif" alt = "" />
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <span>DB</span>
                                                <span>History</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <img className = "card-img" src = "pics/home-black-ice.gif" alt = "" />
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <span>C++</span>
                                                <span>Capture</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <img className = "card-img" src = "pics/home-black-ice.gif" alt = "" />
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <span>LOG</span>
                                                <span>Events</span>
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "card">
                                            <a href = "#">
                                                <img className = "card-img" src = "pics/home-black-ice.gif" alt = "" />
                                            </a>
                                        </div>
                                    </li>
                                </ul>

                                <div className = "last-circle"></div>
                                <div className = "second-circle"></div>
                            </div>

                            <div className = "mask"></div>
                            <div className = "center-circle"></div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    );
}