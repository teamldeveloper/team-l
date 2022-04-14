import {SectionWrapper, Title} from "../../../components";


const ContactUs = () => {
  return (
    <div>
      <Title value="Contact us" />
      <p className="pt-16 text-lg md:text-xl">
        You can contact us anytime at 📬
        <a className="font-medium" href="mailto:teamlteaml100@gmail.com">teamlteaml100@gmail.com</a>
      </p>
    </div>
  );
};

export default SectionWrapper(ContactUs, "contact_us");
