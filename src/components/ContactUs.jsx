import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const ContactUs = () => {
  return (
    <div>
      <Title value="Contact us" />
      <p>
        You can contact us anytime at 📬<a>teamlteaml100@gmail.com</a>
      </p>
    </div>
  );
};

export default SectionWrapper(ContactUs, "contact_us");
