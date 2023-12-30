import { SectionWrapper, Hyperlink } from "../../../components";

const Description = () => {
  return (
    <div className=" text-left ">
      <Paragraph>
        Team-L built the Debt Record app as a free app. This SERVICE is provided
        by Team-L at no cost and is intended for use as is.
      </Paragraph>
      <Paragraph>
        This page is used to inform visitors regarding our policies with the
        collection, use, and disclosure of Personal Information if anyone
        decided to use our Service.
      </Paragraph>
      <Paragraph>
        If you choose to use our Service, then you agree to the collection and
        use of information in relation to this policy. The Personal Information
        that We may collect is used for providing and improving the Service. We
        will not use or share your information with anyone except as described
        in this Privacy Policy.
      </Paragraph>
      <SubTitle1>Interpretation and Definitions</SubTitle1>
      <SubTitle2>Interpretation</SubTitle2>
      <Paragraph>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </Paragraph>

      <SubTitle2>Definitions</SubTitle2>
      <Paragraph>For the purposes of this Privacy Policy:</Paragraph>
      <ul className="list-disc pl-6">
        <li className="pb-4">
          <strong>Device: </strong>
          means any device that can access the Service such as a computer, a
          cellphone or a digital tablet.
        </li>
        <li className="pb-4">
          <strong>Personal Information: </strong>
          is any information that relates to an identified or identifiable
          individual.
        </li>
        <li className="pb-4">
          <strong>Service Provider: </strong>
          means any natural or legal person who processes the data on behalf of
          the Company. It refers to third-party companies or individuals
          employed by the Company to facilitate the Service, to provide the
          Service on behalf of the Company, to perform services related to the
          Service or to assist the Company in analyzing how the Service is used.
        </li>
      </ul>
      {/*  <Paragraph>
                        The terms used in this Privacy Policy have the same meanings as in our
                        Terms and Conditions, which are accessible at Debt Record unless otherwise
                        defined in this Privacy Policy.
                    </p>  */}
      <SubTitle1>Disclosure of Your Personal Data</SubTitle1>
      <Paragraph>
        For a better experience, while using our Service, we may require you to
        provide us with certain personally identifiable information. The
        information that We request will be retained on your device and is not
        collected by me in any way.
      </Paragraph>

      <Paragraph>
        The app does use third-party services that may collect information used
        to identify you.
      </Paragraph>
      <Paragraph>
        Link to the privacy policy of third-party service providers used by the
        app
      </Paragraph>
      <Paragraph>
        <ul className="list-disc pl-6">
          <li>
            <Hyperlink
              href="https://www.google.com/policies/privacy/"
              target="_black"
              rel="noreferrer"
            >
              Google Sign-in & Google Drive (AppData) Service
            </Hyperlink>
          </li>
          <li>
            <Hyperlink
              href="https://www.google.com/policies/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Google Play Services
            </Hyperlink>
          </li>

          {/* <li>
            <Hyperlink
              href="https://support.google.com/admob/answer/6128543?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              AdMob
            </Hyperlink>
          </li> */}
        </ul>
      </Paragraph>

      {/*   <!--  <Paragraph>
                        Google Analytics for Firebase
                        <a href="https://firebase.google.com/policies/analytics">
                            https://firebase.google.com/policies/analytics
                        </a>
                    </ Paragraph>
                    <Paragraph>
                        Firebase Crashlytics
                        <a href="https://firebase.google.com/support/privacy">
                            https://firebase.google.com/support/privacy
                        </a>
                    </ Paragraph>  */}
      <SubTitle1>Log Data</SubTitle1>
      <Paragraph>
        We want to inform you that whenever you use our Service, in a case of an
        error in the app I collect data and information (through third-party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing our Service, the time and date of your use of the Service, and
        other statistics.
      </Paragraph>
      <SubTitle1>Cookies</SubTitle1>
      <Paragraph>
        Cookies are files with a small amount of data that are commonly used as
        anonymous unique identifiers. These are sent to your browser from the
        websites that you visit and are stored on your device's internal memory.
      </Paragraph>
      <Paragraph>
        This Service does NOT use these “cookies” explicitly. However, the app
        may use third-party code and libraries that use “cookies” to collect
        information and improve their services. You have the option to either
        accept or refuse these cookies and know when a cookie is being sent to
        your device. If you choose to refuse our cookies, you may not be able to
        use some portions of this Service.
      </Paragraph>
      <SubTitle1>Service Providers</SubTitle1>
      <Paragraph>
        We may employ third-party companies and individuals due to the following
        reasons:
      </Paragraph>
      <ul className="list-disc pl-6">
        <li>To provide backup and restore inapp progress features;</li>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
      </ul>
      <Paragraph>
        · To assist us in analyzing how our Service is used.
      </Paragraph>
      <Paragraph>
        We want to inform users of this Service that these third parties have
        access to their Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
      </Paragraph>
      <SubTitle1>
        Detailed Information on the Processing of Your Personal Data
      </SubTitle1>
      {/* <SubTitle2>Advertising</SubTitle2>
      <Paragraph>
        We may use Service providers to show advertisements to You to help
        support and maintain Our Service.
      </Paragraph>
      <ul className="list-disc pl-6 break-words">
        <li>
          <strong>AdMob by Google: </strong>
          AdMob by Google is provided by Google Inc.You can opt-out from the
          AdMob by Google service by following the instructions described by
          Google:{" "}
          <Hyperlink
            href="https://support.google.com/ads/answer/2662922?hl=en"
            target="_black"
            rel="noreferrer"
          >
            https://support.google.com/ads/answer/2662922?hl=en
          </Hyperlink>{" "}
          For more information on how Google uses the collected information,
          please visit the “How Google uses data when you use our partners’
          sites or app” page:{" "}
          <Hyperlink
            href="https://policies.google.com/technologies/partner-sites"
            target="_black"
            rel="noreferrer"
          >
            https://policies.google.com/technologies/partner-sites
          </Hyperlink>{" "}
          or visit the Privacy Policy of Google:
          <Hyperlink
            href="https://policies.google.com/privacy"
            target="_black"
            rel="noreferrer"
          >
            {" "}
            https://policies.google.com/privacy
          </Hyperlink>
        </li>
      </ul> */}
      <SubTitle2>Google Account Permission</SubTitle2>
      <Paragraph>
        The App may - if you choose to sign in with Google - access your Google
        basic account information, including your name, email, and profile
        picture URL. We only store your email in our server and you can delete
        your information at any time by deleting your account{" "}
        <Hyperlink href="PrivacyPolicy/#deleteAccount">Learn how</Hyperlink>
      </Paragraph>
      <SubTitle2>Google Drive Permission</SubTitle2>
      <Paragraph>
        To allow you to create a backup/restore your data, we need your
        permission to use the <strong>Application Data folder </strong> This
        folder is only accessible by our application and its contents are hidden
        from other Drive apps.We don't keep or access any of your sensitive
        personal data.
      </Paragraph>
      <Paragraph>
        You can delete the application data folder when uninstalls your app from
        Google drive. And you can also delete your app’s data folder manually.
        NOTE: ALL BACKUP DATA WILL BE DELETED ALSO.
      </Paragraph>
      <SubTitle2>Read Contact Permission</SubTitle2>
      <Paragraph>
        We need your permission to access your contact info, to allow you to add
        new people from your contact by using the{" "}
        <strong>'Add from Contact'</strong> feature to facilitate the seamless
        addition of new people.
      </Paragraph>

      <div id="deleteAccount">
        <SubTitle1>Deleting your Account </SubTitle1>
        <Paragraph>
          You have the option to delete your account at any time through our
          in-app <strong>'Delete Account'</strong> feature. When you choose to
          delete your account, you will permanently remove your backup data, and
          restoration will no longer be possible<br></br>
          To initiate the account deletion process, follow these steps:
          <ol className="list-disc pl-6 break-words">
            <li>Open Debt Record App.</li>
            <li>Tap the 'Backup & Restore' icon.</li>
            <li>Tap on 'More Options,' and then select 'Delete Account'</li>
          </ol>
          <Paragraph>
            <strong>
              Please be aware that upon deleting your account, you will
              permanently remove your Google Drive backup associated with the
              account.
            </strong>
          </Paragraph>
        </Paragraph>
      </div>

      <SubTitle1>Security</SubTitle1>
      <Paragraph>
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and We cannot guarantee
        its absolute security.
      </Paragraph>
      <SubTitle1>Links to Other Sites</SubTitle1>
      <Paragraph>
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by me. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </Paragraph>
      <SubTitle1>Children’s Privacy</SubTitle1>
      <Paragraph>
        These Services do NOT address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children
        under 13 years of age. In the case We discover that a child under 13 has
        provided me with personal information, we immediately delete this from
        our servers. If you are a parent or guardian and you are aware that your
        child has provided us with personal information, please contact me so
        that We will be able to do the necessary actions.
      </Paragraph>
      <SubTitle1>Changes to This Privacy Policy</SubTitle1>
      <Paragraph>
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Privacy Policy on this page.
      </Paragraph>
      <SubTitle1>Contact Us</SubTitle1>
      <Paragraph>
        If you have any questions or suggestions about my Privacy Policy, do not
        hesitate to contact me at{" "}
        <Hyperlink
          href="mailto:teamlteaml100@gmail.com"
          target="_black"
          rel="noreferrer"
        >
          teamlteaml100@gmail.com
        </Hyperlink>
        .
      </Paragraph>
      <Paragraph>
        This privacy policy page was created at{" "}
        <Hyperlink
          href="https://privacypolicytemplate.net/"
          target="_black"
          rel="noreferrer"
        >
          https://privacypolicytemplate.net
        </Hyperlink>{" "}
        and modified/generated by{" "}
        <Hyperlink
          href="https://app-privacy-policy-generator.nisrulz.com/"
          target="_black"
          rel="noreferrer"
        >
          https://app-privacy-policy-generator.nisrulz.com
        </Hyperlink>
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
