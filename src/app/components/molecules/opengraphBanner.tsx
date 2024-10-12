/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const OpengraphBanner: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(to right top, #faff89, #ffeca5, #ffe5d4, #ffebf8, #fff5ff, #f8edfe, #eee6fe, #e2e0fe, #c9cafd, #adb5fc, #8ba1fc, #5f8ffb)",
        gap: "32px",
      }}
    >
      <img
        src="https://spartandisabilityalliance.netlify.app/temp_logo.png"
        width={256}
        height={256}
      ></img>
      {children}
    </div>
  );
};

export default OpengraphBanner;
