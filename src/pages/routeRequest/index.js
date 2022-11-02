import React, { useEffect } from "react";
import "./_routeRequest.scss";
import { initialValues, basicSchema } from "./formHelper";
import { useFormik } from "formik";
import RequestForm from "./RequestForm";
import { inputList } from "./utils";
import walkIcon from "../../icons/walk-tab.svg";
import cycleIcon from "../../icons/cycle-tab.svg";
import cabIcon from "../../icons/car-tab.svg";
import Icon from "../../components/Icon";
import Text from "../../components/Text";
import { useCreateRequestsMutation } from "../../services/requestsApi";
import { URLData } from "../../pageUrls";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateRouteRequest } from "../requestList/redux/reducer";

const RouteRequests = () => {
    const getClassname = (subclass) =>
        `route-request${subclass ? `__${subclass}` : ""}`;

    const user = useSelector((states) => states.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [createRequest, { isError, isLoading, isSuccess }] =
        useCreateRequestsMutation();
    const handleSubmit = async (e) => {
        e = {
            ...e,
            user: {
                firstName: user?.firstName,
                photoURL: user?.photoURL,
                id: user?.uid
            }
        };
        await createRequest(e);
    };

    const FORM_HEADER = "Route Request Form";
    const MAIN_ERR = "Request failed. Please try again after sometime.";

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: basicSchema
    });

    useEffect(() => {
        if (isSuccess) {
            let requestInfo = {
                end_loc: formik?.values?.end_loc,
                start_loc: formik?.values?.start_loc,
                routeType: formik?.values?.routeType
            };
            dispatch(updateRouteRequest(requestInfo));
            navigate(URLData.routeRequestList.url, { state: { requestInfo } });
        }
    }, [isSuccess]);

    const customCheckbox = {
        type: "custom_check",
        props: {
            checkList: [
                {
                    label: "Walk",
                    id: "walk",
                    content: <Icon icon={walkIcon} className="walk-icon" />
                },
                {
                    label: "Cycle",
                    id: "cycle",
                    content: <Icon icon={cycleIcon} className="cycle-icon" />
                },
                {
                    label: "Cab share",
                    id: "cab",
                    content: <Icon icon={cabIcon} />
                }
            ],
            compType: "box",
            defaultSelection: formik.values.routeType,
            onSelect: (e, id) => {
                formik.setFieldValue("routeType", id);
            }
        }
    };

    return (
        <div className={getClassname()}>
            <div className={getClassname("form-container")}>
                <Text
                    type="primaryLarge fW8"
                    className={getClassname("form-header")}
                >
                    {FORM_HEADER}
                </Text>
                <RequestForm
                    formik={formik}
                    isLoading={isLoading}
                    mainError={isError && MAIN_ERR}
                    inputList={[...inputList, customCheckbox]}
                />
            </div>
        </div>
    );
};

export default RouteRequests;
