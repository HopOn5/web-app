import React from "react";
import * as HeaderComp from "./headerComponents";

const LayoutHeaderComponent = ({ isRight, layoutData }) => {
    const rightContent = [
        { type: "login", component: <HeaderComp.LoginButton /> }
    ];
    const leftContent = [];

    const renderComponent = () => {
        if (isRight && layoutData?.type) {
            return rightContent.find((comp) => comp?.type === layoutData?.type)
                ?.component;
        } else if (layoutData?.type)
            return leftContent.find((comp) => comp.type === layoutData.type)
                ?.component;
        return null;
    };
    return renderComponent();
};

export default LayoutHeaderComponent;
