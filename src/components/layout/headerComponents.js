import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URLData } from "../../pageUrls";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon";
import "../../styles/components/_layoutComponents.scss";
import bellIcon from "../../icons/bell.svg";
import msgIcon from "../../icons/chat-icon.svg";
import userIcon from "../../icons/user.svg";
import { FormControl, Menu, MenuItem } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import edit from "../../icons/pen-to-square-solid.svg";
import { useDispatch } from "react-redux";
import { setIsProfileEdit } from "../../pages/Profile/profileReducer";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { resetReducer } from "../../redux/rootReducer";

const LoginButton = () => {
    const navigate = useNavigate();
    const handleLoginRedirect = () => {
        navigate(URLData?.signin?.url);
    };
    return (
        <Button type="tWhite" onClick={handleLoginRedirect}>
            Sign in
        </Button>
    );
};

const AllFeatures = () => {
    const navigate = useNavigate();
    const handleClick = (e, type) => {
        if (type === "chats") {
            navigate(URLData?.messages?.url);
        }
    };
    const handleSelect = (type) => {
        switch (type) {
            case "profile": {
                navigate(URLData?.profile?.url);
                break;
            }
            case "chats": {
                navigate(URLData?.messages?.url);
                break;
            }
            case "notifications": {
                navigate(URLData?.notifications.url);
                break;
            }
            case "logout": {
                signOut(auth);
                navigate("/signin");
                dispatch(resetReducer("USER_LOGOUT"));
                break;
            }
            default:
                break;
        }
    };
    const allFeatures = [
        // <BannerIconBadge
        //     className="all-features__notifications all-features__list-item"
        //     type="notification"
        //     // count={1}
        //     onClick={handleClick}
        //     key="banner-notification"
        // />,
        <BannerIconBadge
            className="all-features__chats all-features__list-item"
            type="chats"
            // count={3}
            onClick={handleClick}
            key="banner-chats"
        />,
        <UserDrop
            handleSelect={handleSelect}
            className="all-features__user all-features__list-item"
            key="banner-user"
        />
    ];
    return <div className="all-features">{allFeatures}</div>;
};

const BannerIconBadge = ({ type, count, onClick, className = "" }) => {
    const icons = { notification: bellIcon, chats: msgIcon };
    return (
        <div className={`${className} banner-icon`}>
            <Icon
                icon={icons[type]}
                onClick={(e) => onClick(e, type)}
                className="banner-icon__bell"
            />
            {count && (
                <Text type="white" className="banner-icon__badge">
                    {count}
                </Text>
            )}
        </div>
    );
};

const UserDrop = ({ handleSelect, className }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [anchorEl, setAnchorRel] = useState(null);

    const menuList = [
        { type: "profile", label: "View profile" },
        { type: "logout", label: "Logout" }
    ];
    const renderMenu = () =>
        menuList.map((item, index) => (
            <MenuItem
                key={`${index}-key`}
                onClick={(e) => handleSelect(item?.type)}
            >
                {item?.label}
            </MenuItem>
        ));

    const handleClick = (e) => {
        setAnchorRel(e.currentTarget);
        setShowMenu((prevState) => !prevState);
    };

    const handleClose = () => setShowMenu(false);
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <FormControl
                variant="standard"
                className={`${className} user-drop`}
            >
                <Icon
                    icon={userIcon}
                    className="user-drop__icon"
                    onClick={handleClick}
                />
                <Menu
                    onClose={handleClose}
                    variant="menu"
                    open={showMenu}
                    anchorEl={anchorEl}
                    autoFocus={false}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    {renderMenu()}
                </Menu>
            </FormControl>
        </ClickAwayListener>
    );
};

const ProfileEdit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsProfileEdit(true));
        navigate();
    };
    return (
        <Icon
            type=""
            className="profile-edit"
            icon={edit}
            // styles={styles.edit}
            onClick={handleClick}
        />
    );
};

export { LoginButton, AllFeatures, ProfileEdit };
