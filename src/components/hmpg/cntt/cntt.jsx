import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import {
  Email,
  Group,
  Build,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
} from "@mui/icons-material";
import { motion } from 'framer-motion';

export default function Cntt() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box>
          {/* Page Title */}
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: 'white' }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" align="center" color="white">
            We’d love to hear from you! Whether you have a question, suggestion, or
            collaboration idea — feel free to reach out.
          </Typography>

          {/* Contact Info */}
          <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
                <CardContent>
                  <Email color="primary" fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    General Inquiries
                  </Typography>
                  <Typography variant="body1">
                    contact@blogcraftier.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
                <CardContent>
                  <Group color="primary" fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    Partnerships
                  </Typography>
                  <Typography variant="body1">partners@blogcraftier.com</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
                <CardContent>
                  <Build color="primary" fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    Technical Support
                  </Typography>
                  <Typography variant="body1">support@blogcraftier.com</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Social Media */}
          <Box textAlign="center" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: 'white' }}>
              Follow Us
            </Typography>
            {/* Social Media Icons desktop */}
            <Box sx={{ backgroundColor: "#ffffff8d", backdropFilter: 'blur(10px)', width: "20%", borderRadius: "8px", display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, justifyContent: 'space-around', p: 1 }}>
              <IconButton href="#" target="_blank" sx={{ color: "#0f2f8dff" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "#1DA1F2" }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "#E1306C" }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "#0077B5" }}>
                <LinkedIn />
              </IconButton>
            </Box>
            {/* Social Media Icons mobile */}
            <Box sx={{ backgroundColor: "#ffffff8d", backdropFilter: 'blur(10px)', width: "70%", borderRadius: "8px", display: { xs: 'flex', md: 'none', lg: 'none', xl: 'none' }, justifyContent: 'space-around', p: 1 }}>
              <IconButton href="#" target="_blank" sx={{ color: "#0f2f8dff" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "#1DA1F2" }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "#E1306C" }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "#0077B5" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          {/* Mailing Address */}
          <Box textAlign="center" sx={{ mb: 6 }}>
            <LocationOn fontSize="large" sx={{ color: "red" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              Blogcraftier HQ, 123 Creative Street, Lahore, Pakistan
            </Typography>
          </Box>

          {/* Contact Form */}
          <Box
            sx={{
              maxWidth: "600px",
              mx: "auto",
              p: 3,
              borderRadius: "16px",
              boxShadow: 3,
              backgroundColor: "background.paper",
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Send Us a Message
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              <Grid item xs={12} sm={6}>
                <TextField label="Name" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" type="email" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Subject" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  fullWidth
                  required
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button variant="contained" size="large" sx={{ px: 5 }}>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}
