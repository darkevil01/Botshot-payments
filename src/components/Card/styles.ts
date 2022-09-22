import { SxProps } from "types/common";

const styles: SxProps = {
  cardWrapper: {
    width: "250px",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    border: (theme: any) => `1px solid ${theme.palette.primary.main}`,
    cursor: "pointer",
  },
};

export default styles;
