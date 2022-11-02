export const gender = [
  { label: "Male", value: "m" },
  { label: "Female", value: "f" },
  { label: "Non-binary", value: "nb" },
  { label: "Others", value: "o" },
];

export const getLabel = (val) => {
  switch (val) {
    case "f":
      return "Female";
    case "m":
      return "Male";
    case "o":
      return "Others";
    case "nb":
      return "Non-binary";
  }
};
