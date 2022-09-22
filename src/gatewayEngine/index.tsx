import { Box } from "@mui/material";
import Card from "components/Card";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/store";

type Gateway = { imgSrc: string; gatewayType: string };

const GatewayEngine = () => {
  const navigate = useNavigate();

  const { gatewayDetails } = useAppSelector((state) => state.gatewayInfo);

  return (
    <Box sx={styles.gatewaysWrapper}>
      {gatewayDetails.map((gateway: Gateway, idx: number) => (
        <Card
          key={idx}
          logo={gateway.imgSrc}
          name={gateway.gatewayType}
          onCardSelect={() => navigate(`${gateway.gatewayType}`)}
        />
      ))}
    </Box>
  );
};

export default GatewayEngine;
