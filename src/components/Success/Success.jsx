import { React, useEffect } from "react";
import classes from "./Success.module.css";
import success from "../../assets/success.svg";

export const Success = () => {
  const handleReload = () => {
    window.location.reload();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleReload();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  return (
    <div className={classes.successBlock}>
      <img className={classes.successImg} src={success} alt="Success" />
      <h3 className={classes.successH3}>Success!</h3>
      <p className={classes.successP}>The form is submitted! </p>
      <button className={classes.back} onClick={handleReload}>
        Back
      </button>
    </div>
  );
};
