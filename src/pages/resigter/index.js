import { useNavigate } from "react-router-dom";

const Resigter = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-2);
  };
  return (
    <>
      <h1>Create Acctount</h1>
      <button onClick={handleGoBack}>back</button>
    </>
  );
};

export default Resigter;
