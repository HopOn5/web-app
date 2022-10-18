import React from "react";

const Home = () => {
    const getClassname = (subclass) =>
        `home-page${subclass ? `__${subclass}` : ""}`;

    return <div className={getClassname()}></div>;
};

export default Home;
