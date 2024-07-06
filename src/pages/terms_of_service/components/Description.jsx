import { SectionWrapper, Hyperlink } from "../../../components";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className=" text-left ">
      <Paragraph>
        Team-L built the Debt Record app as a free app. This SERVICE is provided
        by Team-L at no cost and is intended for use as is.
      </Paragraph>

      <SubTitle2>Acceptance of Terms</SubTitle2>
      <Paragraph>
        By downloading, accessing, or using the <strong>Debt Record</strong>{" "}
        mobile application ("App"), you agree to be bound by these Terms of
        Service ("Terms"). If you do not agree with any part of the Terms, you
        must not use the App.
      </Paragraph>

     
      <SubTitle2>User Responsibilities</SubTitle2>
      <Paragraph>
        You are responsible for maintaining the confidentiality of any account
        credentials used to access the App. You agree to use the App in
        accordance with all applicable laws and regulations. Additionally, you
        are responsible for saving backups of your data. While we strive to
        minimize errors, the App may occasionally encounter issues where having
        a backup is advisable.
      </Paragraph>
      <SubTitle2>Disclaimer of Warranties</SubTitle2>
      <Paragraph>
        The Debt Record app is offered on an "as is" and "as available" basis,
        without any warranties, express or implied. We cannot guarantee that the
        app will always be uninterrupted, error-free, While we make reasonable
        efforts to prevent viruses or other malicious software from being
        uploaded to our app, we do not guarantee that it will always be free
        from such harmful components.
      </Paragraph>
      <SubTitle2>Changes to Terms</SubTitle2>
      <Paragraph>
        We reserve the right to modify these Terms at any time. We will notify
        you of any changes by updating the "Effective Date" at the top of these
        Terms. Continued use of the App after any changes constitutes your
        acceptance of the new Terms.
      </Paragraph>
      <SubTitle2>Contact Us</SubTitle2>
      <Paragraph>
        If you have any questions or suggestions about my Terms of Services, do
        not hesitate to contact me at{" "}
        <Hyperlink
          href="mailto:teamlteaml100@gmail.com"
          target="_black"
          rel="noreferrer"
        >
          teamlteaml100@gmail.com
        </Hyperlink>
        .
      </Paragraph>
    </div>
  );
};

const SubTitle1 = (props) => {
  return (
    <h4
      {...props}
      className={`py-2 font-bold text-2xl text-blue-700 ${props.className}`}
    >
      {props.children}
    </h4>
  );
};

const SubTitle2 = (props) => {
  return (
    <h5 {...props} className={`py-2 font-medium text-xl  ${props.className}`}>
      {props.children}
    </h5>
  );
};

const Paragraph = (props) => {
  return (
    <p {...props} className={`py-3 ${props.className}`}>
      {props.children}
    </p>
  );
};

export default SectionWrapper(Description, "", "");
