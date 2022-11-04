import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import PageLayout from "../components/layout/PageLayout";
import testRenderer from "./helper/testRenderer";
import { teststore } from "./utils/teststore";
import LayoutHeaderComponent from "../components/layout/LayoutHeaderComponent";
import { URLData } from "../pageUrls/index";

test("onboarding page layout", () => {
    let layout = { ...URLData.onboarding.layout };
    let props = {
        ...layout,
        rightComp: (
            <LayoutHeaderComponent isRight layoutData={layout?.right ?? {}} />
        ),
        leftComp: <LayoutHeaderComponent layoutData={layout?.left ?? {}} />
    };
    render(testRenderer(<PageLayout {...props} />, teststore));
});
