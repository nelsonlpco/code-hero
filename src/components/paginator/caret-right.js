import React from 'react';
import {PropTypes} from 'prop-types';

import { colors, pixelToRem } from "../../template/template-params";

function CaretRight({isEnable, onClickHandler, isMobile}) {

  const color = isEnable ? colors.primary : colors.secondary;

  const styles = {
    width: 0,
    height: 0,
    borderTop: `${isMobile ? pixelToRem(10) : pixelToRem(8)} solid transparent`,
    borderBottom: `${isMobile ? pixelToRem(10) : pixelToRem(8)} solid transparent`,
    borderLeft: `${isMobile ? pixelToRem(15) : pixelToRem(12)} solid ${color}`,
    marginLeft: isMobile ? pixelToRem(60) : pixelToRem(12),
    cursor: isEnable ? 'pointer' : 'not-allowed',
  };

  return (
    <div style={styles} onClick={() => {
      if (isEnable)
        onClickHandler();
    }} />
  );
}

CaretRight.propTypes = {
  isEnable: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default CaretRight;
