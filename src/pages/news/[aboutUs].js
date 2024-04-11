//our-domain.com/news/aboutUs
import { useRouter } from "next/router";

const teamDetails = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

function AboutUsPage() {
  const router = useRouter();
  const aboutUs = router.query.aboutUs;
  // console.log(aboutUs);
  // return <h1 class=" flex items-center justify-center">Alok Kumar</h1>;
  const member = teamDetails.find((member) => member.id === aboutUs);
  return (
    <>
      {member ? (
        <div>
          <h1 class=" flex items-center justify-center">{member.name}</h1>
          {console.log(member)}
          <p class=" flex items-center justify-center">{member.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </>
  );
}

export default AboutUsPage;
