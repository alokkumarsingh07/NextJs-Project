// pages/aboutUs

import Link from "next/link";

const teamDetails = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

const AboutUs = () => {
  return (
    <>
      <ul>
        {teamDetails.map((member) => (
          <li key={member.id}>
            <Link href={`/aboutus/${member.id}`}>{member.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutUs;
