import { useEffect } from "react";

const Alert = (props) => {
  const alert = props.alert;
  const showalert = props.showalert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      showalert();
    }, 3000);
    return () => setTimeout(timeout);
  }, []);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
};

export default Alert;
