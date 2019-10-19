import React from "react"
import PropTypes from "prop-types"

import FeatureIcon from "./featureIcon"

const HeroFeature = ({ title, subtitle }) => (
  <div
    style={{
      marginBottom: "1.08rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "33%",
      minWidth: "200px",
      flex: "1",
      padding: "0 .5rem",
    }}
  >
    <FeatureIcon />
    <h2 style={{ textAlign: "center" }}>{title}</h2>
    <p style={{ textAlign: "center" }}>{subtitle}</p>
  </div>
)

HeroFeature.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

HeroFeature.defaultProps = {
  title: ``,
  subtitle: ``,
}

export default HeroFeature