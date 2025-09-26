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
  Link,
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

export default function Cntt() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Contact Us
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        We’d love to hear from you! Whether you have a question, suggestion, or
        collaboration idea — feel free to reach out.
      </Typography>

      {/* Contact Info */}
      <Grid container spacing={4} sx={{ my: 4 }}>
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
      <Box textAlign="center" sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <IconButton color="primary" href="#" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton color="primary" href="#" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton color="primary" href="#" target="_blank">
          <Instagram />
        </IconButton>
        <IconButton color="primary" href="#" target="_blank">
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Mailing Address */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <LocationOn color="primary" fontSize="large" />
        <Typography variant="body1">
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
        <Grid container spacing={2}>
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
    </Container>
  );
}
