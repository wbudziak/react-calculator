import React, { useEffect, useState } from "react";
import styles from "./screen.module.css";

const Inputs = (props) => {
  const {
    prev,
    current,
    displayCurrent,
    displayPreview,
    finalResult,
    displayOperator,
  } = props;
  const [fontSize, setFontSize] = useState(32);

  return (
    <screen className={styles.screen}>
      <input
        className={styles.previousOperand}
        type="text"
        readOnly
        // value={finalResult === "" ? prev + displayOperator : ""}
        value={
          prev === ""
            ? ""
            : finalResult === ""
            ? parseFloat(prev).toLocaleString() + displayOperator
            : ""
        }
      />
      <input
        style={{ fontSize: `${fontSize}px` }}
        className={styles.currentOperand}
        type="text"
        placeholder="0"
        readOnly
        value={
          current === ""
            ? "0"
            : finalResult === ""
            ? parseFloat(current).toLocaleString()
            : parseFloat(finalResult).toLocaleString()
        }
      />
    </screen>
  );
};
export default Inputs;
