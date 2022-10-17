import React, { useState } from "react";
import "./_uploadVerification.scss";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import Icon from "../../../components/Icon";
import uploadIcon from "../../../icons/upload.svg";
import letterIcon from "../../../icons/student_letter.svg";
import tick from "../../../icons/tick.svg";
import Button from "../../../components/Button";
import { updateTermFile } from "../redux/reducer";
import { useDispatch } from "react-redux";

const UploadVerification = () => {
    const getClassname = (classname) =>
        `upload-verification${classname ? `__${classname}` : ""}`;

    const dispatch = useDispatch();
    const [filename, setFileName] = useState("");
    const CONTENT_HEADER = "Upload your student term letter";

    const listItems = [
        "Upload a colour image of the document.",
        "Screenshots are not allowed.",
        "PDF format only"
    ];
    const renderList = () => {
        return listItems.map((item, index) => (
            <Text
                key={`${index}-list`}
                type={getClassname("list-item primaryMed fW7")}
            >
                <Icon icon={tick} />
                {item}
            </Text>
        ));
    };

    const handleFileUpload = (e) => {
        setFileName(e.target.files[0].name);
        dispatch(updateTermFile(e.target.files[0]));
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
            <div className={getClassname("footer")}>
                {/* Upload button */}
                <Button
                    className={getClassname("footer-upload")}
                    type="primary"
                    compType="file"
                    id="verify-upload"
                    acceptTypes="application/pdf"
                    maxSize="10Mb"
                    onFileUpload={handleFileUpload}
                >
                    <Icon icon={uploadIcon} />
                    <Text type="white">Upload</Text>
                </Button>
                {filename && (
                    <Text
                        type="primarySmall fW8"
                        className={getClassname("btn-subtxt")}
                    >
                        {filename} is uploaded!
                    </Text>
                )}
            </div>
        </Card>
    );
};

const styles = {
    card: { maxWidth: "500px", margin: "54px auto", padding: "35px" }
};

export default UploadVerification;
