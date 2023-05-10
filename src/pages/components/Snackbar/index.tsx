interface SnackbarProps {
  message: React.ReactNode;
  type: "error" | "success";
}

const Snackbar: React.FC<SnackbarProps> = ({ message, type }) => {
  const colorsByType = {
    error: "bg-red-light",
    success: "bg-green-light",
  };

  return <div className={`h-11 w-full ${colorsByType[type]}`}>{message}</div>;
};

export default Snackbar;
