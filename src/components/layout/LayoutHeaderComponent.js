import React from "react";
import * as HeaderComp from "./headerComponents";

const LayoutHeaderComponent = ({ isRight, layoutData }) => {
    const rightContent = {
        all_feature: <HeaderComp.AllFeatures />
    };

    const leftContent = { profile_edit: <HeaderComp.ProfileEdit /> };

    const renderComponent = () => {
        if (isRight && layoutData?.type) {
            return rightContent[layoutData?.type];
        } else if (layoutData?.type) return leftContent[layoutData?.type];
        return null;
    };
    return renderComponent();
};

export default LayoutHeaderComponent;
