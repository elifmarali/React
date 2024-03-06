type RequestProps = {
  status: "loading" | "success" | "error";
};
function Request(props: RequestProps) {
  let message = "";
  if (props.status === "loading") {
    message = "Yukleniyor";
  } else if (props.status === "success") {
    message = "Basarili";
  } else if (props.status === "error") {
    message = "Error";
  }
  return <div>{message}</div>;
}

export default Request;
