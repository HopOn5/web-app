import React from "react";
import "../styles/components/_appheader.scss";
import Icon from "./Icon";

const PageLayout = ({ isLogo, leftComp, rightComp, isClose, children }) => {
    console.log(children, "CHIL");
    const getClassname = (classname) =>
        `page-layout${classname ? `__${classname}` : ""}`;

    return (
        <div className={getClassname()}>
            <div className={getClassname("header")}>
                <div className={getClassname("header-left")}>
                    {isLogo && (
                        <div className={getClassname("logo-container")}>
                            <Icon className={getClassname("logo")} />
                        </div>
                    )}
                    {leftComp && (
                        <div className={getClassname("left-comp")}>
                            {leftComp}
                        </div>
                    )}
                </div>
                <div className={getClassname("header-right")}>
                    {isClose && <Icon className={getClassname("right-icon")} />}
                    {rightComp && (
                        <div className={getClassname("right-comp")}>
                            {rightComp}
                        </div>
                    )}
                </div>
            </div>
            <div className={getClassname("body")}>{children}</div>
        </div>
    );
};

export default PageLayout;
