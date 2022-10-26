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
    googlemap: {
        url: "/googlemap",
        layout: { isLogo: true, right: {}, title: "google map" }
    },
    resetpassword: {
        url: "/resetpassword",
        layout: { isLogo: true, right: {}, title: "reset password" }
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
        layout: { isLogo: true, title: "Messages" }
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
            title: "Profile"
        }
    },
    profileEdit: {
        url: "/profile-edit",
        layout: {
            isLogo: true,
            title: "Profile-edit"
        }
    },
    routeRequest: {
        url: "/route-request",
        layout: {
            isLogo: true,
            title: "Route requests"
        }
    },
    routeRequestList: {
        url: "/route-request/list",
        layout: {
            isLogo: true,
            title: "Request List"
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
