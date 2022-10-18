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
    home: { url: "/", layout: { isLogo: true, right: { type: "user" } } },
    signin: {
        url: "/signin",
        layout: { isLogo: true, right: {}, title: "Sign in" }
    },
    profile: {
        url: "/profile",
        layout: {
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
    }
};
