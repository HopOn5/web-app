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
    home: {
        url: "/",
        layout: { isLogo: true, right: { type: "all_feature" } }
    },
    signin: {
        url: "/signin",
        layout: { isLogo: true, right: {}, title: "Sign in" }
    },
    messages: {
        url: "/messages",
        layout: { isLogo: true, title: "Messages" }
    },
    notifications: {
        url: "/notifications",
        layout: { isLogo: true, title: "Notifications" }
    }
};
