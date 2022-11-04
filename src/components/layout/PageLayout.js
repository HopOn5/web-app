import React from "react";
import "../../styles/components/_pageLayout.scss";
import Icon from "../Icon";
import Text from "../Text";
import close from "../../icons/close-white.svg";
import { useSelector } from "react-redux";
import logo from "../../icons/logo.png";
import { URLData } from "../../pageUrls";
import { useNavigate } from "react-router-dom";

const PageLayout = ({ isLogo, children, ...props }) => {
    const { leftComp, rightComp, onClose } = props;
    const layoutData = useSelector((states) => states?.app?.layout);

    const title = layoutData?.title;
    const closeType = layoutData?.closeType;
    const closeText = layoutData?.closeText;
    const isClose = layoutData?.isClose;
    const navigate = useNavigate();

    const getClassname = (classname) =>
        `page-layout${classname ? `__${classname}` : ""}`;

    const handleLogoClick = () => navigate(URLData.home.url);

    const titleType = "primaryLarge white fW8";

    return (
        <div data-testid="" className={getClassname()}>
            <div className={getClassname("header")}>
                <div className={getClassname("header-left")}>
                    {isLogo && (
                        <div className={getClassname("logo-container")}>
                            <Icon
                                type="AVATAR"
                                className={getClassname("logo")}
                                icon={logo}
                                styles={styles.logo}
                                onClick={handleLogoClick}
                            />
                        </div>
                    )}
                    {title && <Text type={titleType}>{title}</Text>}{" "}
                    {leftComp && (
                        <div className={getClassname("left-comp")}>
                            {leftComp}
                        </div>
                    )}
                </div>
                <div className={getClassname("header-right")}>
                    {isClose && (
                        <div>
                            <Icon
                                className={getClassname("right-icon")}
                                icon={close}
                                onClick={onClose}
                            />
                            {closeText && (
                                <Text
                                    type={closeType}
                                    className={getClassname("close-text")}
                                >
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

const styles = { logo: { width: "60px", height: "60px" } };

export default PageLayout;
