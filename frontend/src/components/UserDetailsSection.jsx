import YourProfile from "../assets/ProfileIcon.svg";
import GroupIcon from "../assets/GroupIcon.svg";
import IndividualIcon from "../assets/IndividualIcon.svg";

export const UserDetailsSection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          backgroundColor: "#FFFFFF",
          width: "300px",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <div>Your profile</div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={YourProfile} alt="" />
          <div>Username</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          backgroundColor: "#FFFFFF",
          width: "300px",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        Your Groups
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={GroupIcon} alt="" />
          <div>Group Name</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          backgroundColor: "#FFFFFF",
          width: "300px",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        Messages
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={IndividualIcon} alt="" />
          <div>Username of the messenger</div>
        </div>
      </div>
    </div>
  );
};
