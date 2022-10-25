import React from "react";
import "../../styles/components/_pageLayout.scss";
import Icon from "../Icon";
import Text from "../Text";
import close from "../../icons/close-white.svg";
import { useSelector } from "react-redux";

const PageLayout = ({ isLogo, children, ...props }) => {
    const { leftComp, rightComp, onClose } = props;
    const layoutData = useSelector((states) => states?.app?.layout);
    const { isClose, title, closeText, closeType, left, right } = layoutData;

    const getClassname = (classname) =>
        `page-layout${classname ? `__${classname}` : ""}`;

    const titleType = "primaryLarge white fW8";

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
                    {title && <Text type={titleType}>{title}</Text>}
                </div>
                <div className={getClassname("header-right")}>
                    {isClose && (
                        <div>
                            <Icon
                                className={getClassname("right-icon")}
                                icon={close}
                                onClick={onClose} />
                            {closeText && (
                                <Text
                                    type={closeType}
                                    className={getClassname("close-text")}>
                                    {closeText}
                                </Text>
                            )}
                        </div>
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
