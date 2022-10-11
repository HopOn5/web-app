import React from "react";
import "./_uploadVerification.scss";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import Icon from "../../../components/Icon";
import letterIcon from "../../../icons/student_letter.svg";
import tick from "../../../icons/tick.svg";

const UploadVerification = () => {
    const getClassname = (classname) =>
        `upload-verification${classname ? `__${classname}` : ""}`;

    const CONTENT_HEADER = "Upload your student term letter";

    const navigate = useNavigate();

    const listItems = [
        "Upload a colour image of the document.",
        "Screenshots are not allowed.",
        "PDF format only"
    ];
    const renderList = () => {
        return listItems.map((item, index) => (
            <Text
                key={`${index}-list`}
                className={getClassname("content-header primaryMed fW7")}
            >
                <Icon icon={tick} />
                {item}
            </Text>
        ));
    };
    return (
        <Card className={getClassname()} style={styles.card}>
            <div className={getClassname("icon-container")}>
                <Icon icon={letterIcon} className={getClassname("icon")} />
            </div>
            <div className={getClassname("content-container")}>
                <Text type={getClassname("content-header primaryMed fW4")}>
                    {CONTENT_HEADER}
                </Text>
                <div className={getClassname("content-list")}>
                    {renderList()}
                </div>
            </div>
        </Card>
    );
};

const styles = {
    card: { maxWidth: "500px", margin: "54px auto", padding: "35px" }
};

export default UploadVerification;
