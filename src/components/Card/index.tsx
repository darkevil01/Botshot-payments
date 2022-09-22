import { Box } from "@mui/material";
import LazyImage from "components/LazyImage";
import { useState } from "react";
import styles from "./styles";

type CardProps = {
  logo: string;
  name: string;
  onCardSelect: () => void;
};

const Card = ({ name, logo, onCardSelect }: CardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box onClick={() => isLoaded && onCardSelect()} sx={styles.cardWrapper}>
      <LazyImage src={logo} alt={name} onLoading={setIsLoaded} />
    </Box>
  );
};
export default Card;
