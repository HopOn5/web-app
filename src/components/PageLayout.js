import React from "react";
import Icon from "./Icon";
import close from "../icons/close.svg";
import { useSelector } from "react-redux";

const PageLayout = ({ isLogo, children, ...props }) => {
    const { leftComp, rightComp, onClose } = props;
    const layoutData = useSelector((states) => states?.app?.layout);
    const { isClose } = layoutData;

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
                    {isClose && (
                        <Icon
                            className={getClassname("right-icon")}
                            icon={close}
                            onClick={onClose}
                        />
                    )}
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
