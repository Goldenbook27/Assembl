import { UserDetailsSection } from "../components/UserDetailsSection";
import { IndividualChatSection } from "../components/IndividualChatSection";

function IndividualChat() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <UserDetailsSection />
      <IndividualChatSection />
    </div>
  );
}

export default IndividualChat;
