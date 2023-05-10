interface SnackbarProps {
  message: React.ReactNode;
}

const Snackbar: React.FC<SnackbarProps> = ({ message }) => {
  return <div className="h-11 w-full bg-green-light">{message}</div>;
};

export default Snackbar;
