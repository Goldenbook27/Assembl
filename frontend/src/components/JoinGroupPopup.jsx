export const JoinGrouppopup = ({ createGroup, setJoinGroup }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Set a semi-transparent background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#FFFFFF", // Fully opaque background for the child
          width: "50%",
          padding: "20px",
          borderRadius: "10px", // Optional: adding some border radius for rounded corners
        }}
      >
        <div>Join Group</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-start",
          }}
        >
          <div>Name:</div>
          <input
            type="text"
            placeholder="Group Name"
            style={{
              width: "100%",
              backgroundColor: "#EEEEEE",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              backgroundColor: "#98EFDA",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Create
          </button>
          <button
            style={{
              backgroundColor: "#323232",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#FFFFFF",
            }}
            onClick={() => setJoinGroup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
