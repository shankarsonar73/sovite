import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          What's new?
        </Typography>
        <Typography color={medium}>Daily alerts.</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/download.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Hackfusion</Typography>
        <Typography color={medium}>hackfusion.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Code to enhance your skill, leadership qualities, etc.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

