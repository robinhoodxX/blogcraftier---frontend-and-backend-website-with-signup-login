import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Divider,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { motion } from 'framer-motion';

// Replace the placeholders like YOUR_DOMAIN and YOUR_EMAIL before deploying
const EFFECTIVE_DATE = '24/09/2025';
const DOMAIN = 'https://www.blogcraftier.com';
const CONTACT_EMAIL = 'contact@blogcraftier.com';

const privacyPolicyText = `
Privacy Policy for Blogcraftier

Effective Date: ${EFFECTIVE_DATE}

At Blogcraftier, accessible from ${DOMAIN}, your privacy is one of our main priorities. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data when you use our website.

1. Information We Collect

- Personal Information (provided by you): Name, email address, and any details you provide when subscribing to our newsletter, contacting us, or creating an account (if applicable).
- Automatically Collected Information: IP address, browser type, operating system, device information, referral URL, date/time of visits, pages visited, time spent, and interactions on the site.
- Cookies and Tracking Technologies: We use cookies, web beacons, and similar technologies to improve user experience, remember preferences, and analyze traffic.

2. How We Use Your Information

We use the collected information for purposes including: providing, operating, and maintaining Blogcraftier; improving website performance and content; sending newsletters (if you subscribe); responding to inquiries; analyzing traffic; and preventing fraud.

3. Cookies Policy

Blogcraftier uses cookies to save user preferences, measure and analyze site traffic, and deliver relevant content and advertisements. You can manage cookies in your browser settings; some parts of the site may not function correctly if disabled.

4. Sharing of Information

We do not sell, trade, or rent personal data to third parties. We may share information with service providers (email, analytics, hosting), legal authorities when required, or in business transfers (merger/acquisition).

5. Third-Party Services

We may use third-party services such as Google Analytics, advertising networks (e.g., Google AdSense), and email delivery services. These third parties may collect information through cookies and have their own privacy policies.

6. Data Retention

We retain personal information only as long as necessary to provide requested services, comply with legal obligations, and resolve disputes.

7. Data Security

We implement reasonable technical and organizational measures to protect your information. However, no online transmission or storage system is 100% secure.

8. Your Rights

Depending on your location, you may have rights to access, correct, delete, or request portability of your data; opt out of marketing; and control cookies. Contact us to exercise these rights.

9. Children’s Privacy

Blogcraftier does not knowingly collect information from children under 13. If you believe your child provided personal data, contact us and we will remove it.

10. International Data Transfers

If you access Blogcraftier from outside our country, your data may be transferred and processed in countries with different data protection laws. We take steps to ensure secure handling in compliance with applicable laws.

11. Changes to This Privacy Policy

We may update this Policy from time to time. Changes will be posted on this page with a revised Effective Date.

12. Contact Us

If you have questions about this Privacy Policy or how your data is handled, please contact us:

Blogcraftier
Email: ${CONTACT_EMAIL}
Website: ${DOMAIN}
`;

export default function BlogcraftierPrivacyPolicy() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(privacyPolicyText);
      alert('Privacy policy text copied to clipboard — remember to replace placeholders.');
    } catch (err) {
      console.error(err);
      alert('Failed to copy. You can still select & copy manually.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div 
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" mb={2}>
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>
                Blogcraftier — Privacy Policy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Effective Date: {EFFECTIVE_DATE}
              </Typography>
            </Box>

            <Box>
              {/* Button to copy full privacy policy text to clipboard desktop screen */}
              <Button
                variant="outlined"
                startIcon={<ContentCopyIcon />}
                onClick={copyToClipboard}
                sx={{ display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}
              >
                Copy Full Text
              </Button>
              {/* Button to copy full privacy policy text to clipboard mobile screen */}
              <Button
                variant="normal"
                startIcon={<ContentCopyIcon />}
                onClick={copyToClipboard}
                sx={{ display: { xs: 'flex', md: 'none', lg: 'none', xl: 'none', color: 'blue' } }}
              >
              </Button>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Render each major section as an accordion for easy reading */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">1. Information We Collect</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                When you visit Blogcraftier, we may collect the following types of information:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Personal Information (provided by you)" secondary="Name, email address, and any details you provide when subscribing to our newsletter, contacting us, or creating an account (if applicable)." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Automatically Collected Information" secondary="IP address, browser type, operating system, device information, referral URL, date/time of visits, pages visited, time spent, and interactions on the site." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Cookies and Tracking Technologies" secondary="We use cookies, web beacons, and similar technologies to improve user experience, remember preferences, and analyze traffic." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">2. How We Use Your Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                We use information to provide, operate, and maintain Blogcraftier; improve website performance and content; send newsletters (if you subscribe); respond to inquiries; analyze traffic; and prevent fraud.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">3. Cookies Policy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Blogcraftier uses cookies to save user preferences, measure and analyze site traffic, and deliver relevant content and advertisements. You can manage cookies in your browser settings; some parts of the site may not function correctly if disabled.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">4. Sharing of Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We do not sell, trade, or rent personal data to third parties. We may share information with service providers (email, analytics, hosting), legal authorities when required, or in business transfers (merger/acquisition).
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">5. Third-Party Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We may use third-party services such as Google Analytics, advertising networks (e.g., Google AdSense), and email delivery services. These third parties may collect information through cookies and have their own privacy policies.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">6. Data Retention</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We retain personal information only as long as necessary to provide requested services, comply with legal obligations, and resolve disputes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">7. Data Security</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We implement reasonable technical and organizational measures to protect your information. However, no online transmission or storage system is 100% secure.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">8. Your Rights</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                Depending on your location, you may have rights to access, correct, delete, or request portability of your data; opt out of marketing; and control cookies. Contact us to exercise these rights.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">9. Children’s Privacy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Blogcraftier does not knowingly collect information from children under 13. If you believe your child provided personal data, contact us and we will remove it.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">10. International Data Transfers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If you access Blogcraftier from outside our country, your data may be transferred and processed in countries with different data protection laws. We take steps to ensure secure handling in compliance with applicable laws.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">11. Changes to This Privacy Policy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We may update this Policy from time to time. Changes will be posted on this page with a revised Effective Date.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">12. Contact Us</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If you have questions about this Privacy Policy or how your data is handled, please contact us:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Blogcraftier" secondary={`Email: ${CONTACT_EMAIL}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Website" secondary={DOMAIN} />
                </ListItem>
              </List>
              <Box mt={2}>
                <Link href={`mailto:${CONTACT_EMAIL}`} underline="hover">
                  <Button variant="contained">Email Us</Button>
                </Link>
              </Box>
            </AccordionDetails>
          </Accordion>

        </Paper>
      </motion.div>
    </Container>
  );
}
