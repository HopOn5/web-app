export const URLData = {
    onboarding: {
        url: "/onboarding",
        layout: {
            isLogo: true,
            isClose: true,
            title: ""
        }
    },
    registration: {
        url: "/registration",
        layout: { isLogo: true, right: { type: "signin" }, title: "Register" }
    },
    landing: {
        url: "/",
        isLogo: true,
        layout: {
            isClose: true,
            title: ""
        }
    },
    signin: {
        url: "/signin",
        layout: { isLogo: true, right: {}, title: "Sign in" }
    },
    resetpassword: {
        url: "/resetpassword",
        layout: { isLogo: true, right: {}, title: "Reset password" }
    },
    home: {
        url: "/home",
        isLogo: true,
        layout: {
            right: {
                type: "user"
            }
        }
    },
    messages: {
        url: "/messages",
        layout: {
            isLogo: true,
            title: "Messages",
            right: { type: "all_feature" }
        }
    },
    notifications: {
        url: "/notifications",
        layout: { isLogo: true, title: "Notifications" }
    },
    profile: {
        url: "/profile",
        layout: {
            left: { type: "profile_edit" },
            isLogo: true,
            title: "Profile",
            right: { type: "all_feature" }
        }
    },
    profileEdit: {
        url: "/profile-edit",
        layout: {
            isLogo: true,
            title: "Profile-edit",
            right: { type: "all_feature" }
        }
    },
    chatSpace: {
        url: "/messages",
        layout: {
            isLogo: true,
            title: "Messages",
            right: { type: "all_feature" }
        }
    },
    resetpassword: {
        url: "/resetpassword",
        layout: { isLogo: true, right: {}, title: "reset password" }
    },
    profile: {
        url: "/profile",
        layout: {
            isLogo: true,
            title: "Profile",
            right: { type: "all_feature" }
        }
    },
    routeRequest: {
        url: "/route-request",
        layout: {
            isLogo: true,
            title: "Route requests",
            right: { type: "all_feature" }
        }
    },
    routeRequestList: {
        url: "/requests",
        layout: {
            isLogo: true,
            title: "Request List",
            right: { type: "all_feature" }
        }
    },
    emptyProfile: {
        url: "/empty-profile",
        layout: {
            isLogo: true,
            title: "Profile"
        }
    }
};
