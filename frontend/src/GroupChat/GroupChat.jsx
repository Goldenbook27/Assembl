import { UserDetailsSection } from "../components/UserDetailsSection";
import { GroupChatSection } from "../components/GroupChatSection";
import { GroupInfoSection } from "../components/GroupInfoSection";

function GroupChat() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <UserDetailsSection />
      <GroupChatSection />
      <GroupInfoSection />
    </div>
  );
}

export default GroupChat;
