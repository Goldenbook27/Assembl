import YourProfile from "../assets/ProfileIcon.svg";
import GroupIcon from "../assets/GroupIcon.svg";
import IndividualIcon from "../assets/IndividualIcon.svg";

export const GroupInfoSection = () => {
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
        <div>Group Description</div>
        <div>
          We're a collaborative team of developers, designers, and innovators
          working together to tackle exciting challenges, brainstorm creative
          solutions, and build impactful projects within the time constraints of
          the hackathon. Our goal is to learn, grow, and have fun while pushing
          the boundaries of what's possible!
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
        Group Members
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <img src={IndividualIcon} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Group Members Name</div>
            <div>Group Members Role</div>
          </div>
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
        Group Options
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <button
            style={{
              backgroundColor: "#EEEEEE",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Leave Group
          </button>
        </div>
      </div>
    </div>
  );
};
