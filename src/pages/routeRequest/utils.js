export const inputList = {
    1: [
        {
            label: "Start location",
            key: "start_loc",
            placeholder: "Start location",
            type: "input"
        },
        {
            label: "End location",
            key: "end_loc",
            placeholder: "End location",
            type: "input"
        }
    ],
    2: [
        {
            label: "Start time",
            key: "start_time",
            placeholder: "Start time",
            type: "date"
        },
        {
            label: "Nearby search",
            key: "start_mile_radius",
            placeholder: "Nearby search",
            type: "drop"
        }
    ]
};

export const dropData = {
    start_mile_radius: [
        { label: "1 mile radius", value: 1 },
        { label: "2 mile radius", value: 2 },
        { label: "3 mile radius", value: 3 },
        { label: "4 mile radius", value: 4 }
    ]
};
