export const mainCon = { margin: "10px 2%" };
export const headerStyle = {
  fontWeight: 700,
  fontSize: "1.2rem",
};
export const cardCon = {
  display: "grid",
  gridTemplateColumns: {
    sm: "1fr 1fr",
    lg: "1fr 1fr 1fr",
  },
  placeItems: "center",
};
export const cardStyle = (colour) => {
  return {
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 6px 16px",
    width: "200px",
    height: "150px",
    padding: "5px",
    backgroundColor: colour,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "none",
      background: "#efefef",
    },
  };
};

export const cardHeaderText = {
  color: "#000",
  fontWeight: 500,
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
};
