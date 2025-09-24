import { Typography, Box, Paper, colors } from "@mui/material";
import { green } from "@mui/material/colors";


function Tandc() {
  return (
    <Box>
      <Paper
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          margin: "20px",
          padding: "20px",
          borderRadius: "10px",
          height: "auto",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Terms and Conditions for Blogcraftier
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
          <span style={{ color: green[500] }}>Last Updated: 24/09/2025</span>{" "}
          <br />
          <br />
          Welcome to Blogcraftier (“Website,” “we,” “our,” or “us”). By
          accessing or using Blogcraftier, you agree to be bound by these Terms
          and Conditions (“Terms”). Please read them carefully. If you do not
          agree, you must stop using the Website immediately.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold" }}
        >
          1. Acceptance of Terms
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
          By accessing, browsing, or using Blogcraftier in any way, you agree to
          comply with and be bound by these Terms, as well as our Privacy
          Policy.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold" }}
        >
          2. Eligibility
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
          You must be at least 13 years old (or the legal age in your
          jurisdiction) to use Blogcraftier. If you are under 18, you represent
          that you have your parent or guardian’s permission to use this
          Website.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold" }}
        >
          3. Use of the Website
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
            <ul>
                <li>You agree to use Blogcraftier only for lawful purposes and in accordance with these Terms.</li>
                <li>You will not use the Website in any way that could damage, disable, overburden, or impair the Website or interfere with any other party’s use and enjoyment of the Website.</li>
                <li>You will not attempt to gain unauthorized access to any portion of the Website or any other systems or networks connected to the Website.</li>
                <li>You agree not to use any automated means (such as bots or scrapers) to access the Website without our prior written permission.</li>
            </ul>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold" }}
        >
          4. User Accounts
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
          <ul>
                <li>To access certain features, you may need to create an account.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You agree to notify us immediately if you suspect unauthorized access to your account.</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold" }}
        >
          5. User-Generated Content
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
            Blogcraftier may allow you to post articles, comments, or other content (“User Content”). By submitting User Content:
          <ul>
                <li>You confirm that you own or have the necessary rights to your content.</li>
                <li>You agree not to post content that is illegal, harmful, defamatory, infringing, or otherwise objectionable.</li>
                <li>You agree to notify us immediately if you suspect unauthorized access to your account.</li>
                <li>We reserve the right (but are not obligated) to remove any User Content at our sole discretion.</li>
            </ul>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold" }}
        >
          6. Intellectual Property
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
          <ul>
                <li>All content, design, logos, graphics, and text on Blogcraftier are the property of Blogcraftier unless otherwise stated.</li>
                <li>You may not copy, reproduce, distribute, or create derivative works without our prior written permission.</li>
                <li>Trademarks, service marks, and logos displayed on Blogcraftier are owned by us or third parties. You may not use them without permission.</li>
            </ul>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ margin: "20px", fontWeight: "bold" }}
        >
          7. Third-Party Links
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ margin: "30px", textAlign: "justify" }}
        >
        Blogcraftier may contain links to third-party websites. We are not responsible for the content, policies, or practices of these websites. Accessing them is at your own risk.
        </Typography>
      </Paper>
    </Box>
  );
    }

export default Tandc;