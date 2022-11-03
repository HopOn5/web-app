import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "@mui/material/Modal";
import Text from "../../components/Text";
import { Box } from "@mui/material";
import { SelectField } from "../../components/SelectField";

const AddCompanionModal = ({
    showModal,
    handleConfirm,
    handleClose,
    isLoading,
    routes
}) => {
    const [routeId, setRouteId] = useState("");

    const SELECT_ROUTE = "Select route:";
    const SELECT_ROUTE_HEADER = "Add companion to your route";
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        display: "block",
        transform: "translate(-50%, -50%)",
        width: "-webkit-fill-available",
        bgcolor: "background.paper",
        p: 4,
        mt: 5
    };

    const getRoutes = () => {
        let list = [];
        routes.forEach((route) => {
            list.push({
                label: `To ${route?.end_loc?.streetAddress ?? ""}`,
                value: route?.id
            });
        });
        return list;
    };

    const handleRouteSelect = (e) => {
        setRouteId(e?.target?.value);
    };

    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="add-companion__box">
                <div className="add-companion">
                    <div className="add-companion__header">
                        <Text type="primaryLarge fW7">
                            {SELECT_ROUTE_HEADER}
                        </Text>
                    </div>
                    <div className="add-companion__text">
                        <Text type="primaryMed fW6">{SELECT_ROUTE}</Text>
                    </div>
                    <div className="add-companion__select-container">
                        <SelectField
                            name="route"
                            options={getRoutes()}
                            onChange={handleRouteSelect}
                            className="add-companion__select"
                        />
                    </div>
                    <div className="add-companion__footer">
                        <Button
                            type="primary"
                            className="add-companion__btn"
                            onClick={() => handleConfirm(routeId)}
                            isLoading={isLoading}
                        >
                            Confirm
                        </Button>
                        {!isLoading && (
                            <Button
                                type="white"
                                className="add-companion__btn"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        )}
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default AddCompanionModal;
