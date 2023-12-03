import { Global } from "@emotion/react";
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import React from "react";

const styles = {
  ".custom-tooltip": {
    "& .MuiTooltip-arrow": {
      color: "white", 
    },
  },
};

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <>
    <Global styles={styles} />
    <Tooltip {...props} classes={{ popper: `${className} custom-tooltip` }} />
  </>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: "10px 32px",
    borderRadius: "10px",
  },
}));
