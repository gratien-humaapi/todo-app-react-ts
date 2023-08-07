export default function CustomButton(props: {
  title: string;
  color?: string;
  backgroundColor?: string;
  onClick: VoidFunction;
  marginRight?: string;
}) {
  const { color, backgroundColor, title, marginRight, onClick } = props;

  return (
    <button
      style={{
        backgroundColor: backgroundColor ?? "#EA6F66",
        borderRadius: "29px",
        display: "flex",
        width: "100%",
        padding: "8px",
        justifyContent: "center",
        maxHeight: "30px",
        alignItems: "center",
        color: color ?? "white",
        border: "none",
        cursor: "pointer",
        boxShadow: "1px 1px 10px rgba(194,194,194, 0.5)",
        marginRight: marginRight,
      }}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
}
