import React from "react";
import Card from "@mui/material/Card";

const TemplateCard = (props) => {
    return (
        <Card
            className={props?.className}
            sx={{ ...styles.card, ...props?.style }}
        >
            {props?.children}
        </Card>
    );
};

const styles = {
    card: { margin: 5, padding: 5 }
};

export default TemplateCard;
