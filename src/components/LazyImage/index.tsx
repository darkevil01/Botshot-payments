import { Box, Skeleton } from "@mui/material";
import { memo, useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  onLoading?: (isLoaded: boolean) => void;
  className?: string;
  fallback?: JSX.Element;
};

const LazyImage = ({
  alt,
  src,
  onLoading,
  className,
  fallback,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const customLoadHandler = (): void => {
    setIsLoaded(true);
    onLoading && onLoading(true);
  };

  return (
    <>
      {!isLoaded &&
        (fallback || <Skeleton style={{ width: "100%", height: "100%" }} />)}
      <Box
        component="img"
        style={isLoaded ? {} : { display: "none" }}
        alt={alt}
        src={src}
        onLoad={customLoadHandler}
        className={className}
      />
    </>
  );
};

export default memo(LazyImage);
