import React from "react";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Typography, TextField } from "@mui/material";

export const PersonalDetails = () => {
    return (
        <div>
            <Card sx={styles.cardItem}>
                <Button sx={styles.accountIconButton}>
                    <AccountCircleIcon
                        fontSize="large"
                        sx={styles.accountIcon}
                    />
                </Button>
                <Typography>Personal Info</Typography>
                <TextField label="First Name" />
            </Card>
        </div>
    );
};

const styles = {
    cardItem: { margin: 5, padding: 5 },
    accountIconButton: { color: "#457a76" },
    accountIcon: { height: 100, width: 100 }
};
