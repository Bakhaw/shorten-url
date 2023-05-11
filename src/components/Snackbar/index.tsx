interface SnackbarProps {
  message: React.ReactNode;
  type: "error" | "success";
}

const Snackbar: React.FC<SnackbarProps> = ({ message, type }) => {
  const colorsByType = {
    error: "bg-red-light text-red",
    success: "bg-green-light text-green",
  };

  return (
    <div
      className={`flex flex-row items-center h-10 w-full px-4 rounded text-sm ${colorsByType[type]}`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
