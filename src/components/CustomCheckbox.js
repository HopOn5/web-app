import React, { useState } from "react";
import "../styles/components/_customCheckbox.scss";

const CustomCheckBox = ({
    checkList,
    onSelect,
    defaultSelection,
    type,
    compType
}) => {
    const getClassname = (subclass) =>
        `custom-check-box${subclass ? `__${subclass}` : ""}`;

    const [selected, setSelected] = useState(defaultSelection);

    const handleSelect = (e, item) => {
        setSelected(item?.id);
        onSelect(e, item?.id);
    };

    const renderChecklist = () => {
        return checkList.map((item, key) => (
            <div
                className={getClassname(
                    `list-item ${compType ? "box" : ""} ${
                        item?.id === selected ? "selected" : ""
                    }`
                )}
                onClick={(e) => handleSelect(e, item)}
                key={`${key}-item`}
            >
                {item?.content}
            </div>
        ));
    };

    return (
        <div className={getClassname()}>
            <div className={getClassname(`container ${type}`)}>
                {renderChecklist()}
            </div>
        </div>
    );
};

export default CustomCheckBox;
