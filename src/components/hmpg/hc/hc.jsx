import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import PolicyIcon from "@mui/icons-material/Policy";

// Single-file Help Center component for Blogcraftier using Material UI
// Default export is the component so it can be imported and used directly.

const FAQ_SECTIONS = [
  {
    title: "Getting Started",
    faqs: [
      {
        q: "What is Blogcraftier?",
        a:
          "Blogcraftier is an easy-to-use blogging and content publishing platform that helps writers, creators, and businesses publish and grow their audience.",
      },
      {
        q: "How do I create an account?",
        a:
          "Click Sign Up on the homepage, provide your name and email (or sign up with Google), verify your email, then start customizing your profile and blog.",
      },
      {
        q: "How do I start my first blog?",
        a:
          "From the Dashboard click Create Post, add title, content and media, preview, and then Publish. You can also save as draft or schedule a post.",
      },
    ],
  },
  {
    title: "Writing & Publishing",
    faqs: [
      {
        q: "How do I format my blog posts?",
        a:
          "Use the built-in editor to add headings, bold/italic, lists, links, images, videos, code blocks and embeds. You can also insert quotes and callouts.",
      },
      {
        q: "Can I schedule posts?",
        a: "Yes — in the Publish menu choose Schedule and pick the date/time you want the post to go live.",
      },
      {
        q: "How do I edit or delete a post?",
        a: "From Dashboard → Posts choose Edit to update content or Delete to remove it permanently.",
      },
    ],
  },
  {
    title: "Customization",
    faqs: [
      {
        q: "Can I customize my blog design?",
        a: "Yes — choose themes, adjust colors and fonts, upload a logo and configure layout modules in the Theme customizer.",
      },
      {
        q: "Can I connect a custom domain?",
        a: "Yes — go to Settings → Domain and follow the guided steps to point your domain to Blogcraftier.",
      },
    ],
  },
  {
    title: "Monetization",
    faqs: [
      {
        q: "Can I make money with Blogcraftier?",
        a: "Yes — we support ad networks, affiliate links, and paid content/subscriptions (where available). See Monetization settings for details.",
      },
      {
        q: "How do I enable ads?",
        a: "Open Dashboard → Monetization and connect your ad provider (Google AdSense or a custom provider). Configure placement and privacy settings.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    faqs: [
      {
        q: "Are my blogs public?",
        a: "By default posts are public. Use the visibility options to set a post to Private or Draft if you want it hidden.",
      },
      {
        q: "How secure is Blogcraftier?",
        a: "We use HTTPS (SSL), secure authentication, and routine backups. For added account safety enable two-factor authentication in Settings.",
      },
    ],
  },
];

export default function Hc() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSearchChange = (e) => setQuery(e.target.value);

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const matchingSections = FAQ_SECTIONS.map((section) => {
    const filtered = section.faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(query.toLowerCase()) ||
        f.a.toLowerCase().includes(query.toLowerCase())
    );
    return { ...section, faqs: filtered };
  });

  return (
    <Box sx={{ minHeight: "100vh"}}>

      <Container sx={{ py: 6 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <Typography variant="h4" gutterBottom>
                Need help? We’re here for you.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Search articles, browse FAQs, or contact support if you can’t find
                an answer.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <TextField
                  fullWidth
                  value={query}
                  onChange={handleSearchChange}
                  placeholder="Search help articles, e.g. 'schedule post' or 'custom domain'"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ px: 3 }}
                  onClick={() => setQuery("")}
                >
                  Clear
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              {matchingSections.map((section, i) => (
                <Box key={section.title} sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {section.title}
                  </Typography>

                  {section.faqs.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                      No results in this section.
                    </Typography>
                  ) : (
                    section.faqs.map((f, idx) => (
                      <Accordion
                        key={f.q}
                        expanded={expanded === `${i}-${idx}`}
                        onChange={handleAccordion(`${i}-${idx}`)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel-${i}-${idx}-content`}
                          id={`panel-${i}-${idx}-header`}
                        >
                          <Typography sx={{ fontWeight: 600 }}>{f.q}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{f.a}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))
                  )}
                </Box>
              ))}

              <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Still need help?
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  If the guides above don’t solve your problem, contact our support
                  team and we’ll get back to you within 1–2 business days.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  href="mailto:support@blogcraftier.com"
                >
                  Email Support
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: 24 }}>
              <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ width: 56, height: 56 }}>BC</Avatar>
                  <Box>
                    <Typography variant="subtitle1">Blogcraftier Team</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Support available Mon–Fri, 9:00–18:00 (GMT+5)
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={<a href="mailto:support@blogcraftier.com">support@blogcraftier.com</a>}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Live Chat" secondary="Available on the website" />
                  </ListItem>

                  <ListItem>
                    <ListItemText primary="Community" secondary="Join our forum for tips & peers" />
                  </ListItem>
                </List>

                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Chip icon={<LiveHelpIcon />} label="Help Articles" clickable />
                  <Chip icon={<PolicyIcon />} label="Privacy & Security" clickable />
                </Box>
              </Paper>

              <Paper sx={{ p: 2 }} elevation={2}>
                <Typography variant="subtitle1" gutterBottom>
                  Quick links
                </Typography>
                <Button fullWidth variant="text" sx={{ justifyContent: "flex-start" }}>
                  Dashboard
                </Button>
                <Button fullWidth variant="text" sx={{ justifyContent: "flex-start" }}>
                  Create Post
                </Button>
                <Button fullWidth variant="text" sx={{ justifyContent: "flex-start" }}>
                  Monetization
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, mb: 4 }}>
          <Paper sx={{ p: 3 }} elevation={1}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h6">Contact & Legal</Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: support@blogcraftier.com • Terms & Conditions • Privacy Policy
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Button variant="outlined" sx={{ mr: 1 }}>
                  Privacy Policy
                </Button>
                <Button variant="outlined">Terms</Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
