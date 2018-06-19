import React from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import Color from "color";

import ArrowForward from "material-ui-icons/ArrowForward";
import Button from "material-ui/Button";

import config from "../../utils/config";

const styles = theme => ({
  root: {
    display: "block",
    borderRadius: "2px",
    background: theme.billboard.colors.ctaLinkBackground,
    border: 0,
    boxShadow: "none",
    color: "white",
    fontWeight: 300,
    fontFamily: "inherit",
    minHeight: "60px",
    maxWidth: "400px",
    lineHeight: 1,
    textTransform: "none",
    padding: ".5em 2em",
    fontSize: "2em",
    "& svg": {
      width: "1.1em",
      height: "1.1em",
      verticalAlign: "middle"
    },
    "&:hover": {
      background: Color(theme.billboard.colors.ctaLinkBackground)
        .lighten(0.2)
        .string()
    }
  }
});

const DemoLink = props => {
  const { classes, onClick } = props;
  return (
    <div>
      <a
        className={(classes.root, classes.root)}
        href="https://gum.co/NRwzD?wanted=true"
        target="_blank"
        data-gumroad-single-product="true"
      >
        Précommander <ArrowForward />
      </a>
    </div>
  );
};

DemoLink.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(DemoLink);
