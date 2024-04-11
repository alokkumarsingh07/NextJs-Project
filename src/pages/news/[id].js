// pages/aboutUs/[id]

import { useRouter } from "next/router";

const teamDetails = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

const TeamMemberDetails = () => {
  const router = useRouter();
  const  id  = router.query;
    
  
  const member = teamDetails.find((member) => member.id === id);
  console.log(`${member}`)

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default TeamMemberDetails;
