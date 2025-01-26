export const GroupChatSection = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "calc(100vh - 40px)",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        Group Name
      </div>
      <hr />
      <div
        style={{
          flex: 1,
          flexGrow: 1,
          background: "#FFFFFF",
          borderRadius: "5px",
          padding: "20px",
          overFlowY: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <div>Sender Name</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "fit-content",
              maxWidth: "60%",
              backgroundColor: "#EEEEEE",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            Message Message Message
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <div>Receiver Name</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "fit-content",
              maxWidth: "60%",
              backgroundColor: "#98EFDA",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            Message Message Message
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          gap: "20px",
        }}
      >
        <input
          placeholder="Type a message"
          style={{
            flex: 1,
            backgroundColor: "#EEEEEE",
            padding: "10px 20px",
            borderRadius: "100px",
          }}
        />
        <button
          style={{
            backgroundColor: "#323232",
            padding: "10px 20px",
            borderRadius: "100px",
            color: "#EEEEEE",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
