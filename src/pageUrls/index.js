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
    home: { url: "/", isLogo: true, layout: { right: { type: "user" } } },
    login: {
        url: "/login",
        isLogo: true
    },
    signin: {
        url: "/signin",
        isLogo: true,
        layout: { right: {}, title: "Sign in" }
    }
};
