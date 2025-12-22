import React from 'react';
import {
  Container,
  Paper,
  Grid,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  Chip,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BrushIcon from '@mui/icons-material/Brush';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { motion } from 'framer-motion';

// AboutBlogcraftier.jsx
// Single-file React component using Material-UI (MUI v5).
// Drop this file into src/components/AboutBlogcraftier.jsx and import where needed.

export default function Abt() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Box>
          <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, zIndex: 10, position: 'relative' }}>
            <Grid container spacing={4} alignItems="center" sx={{ justifyContent: "center" }}>
              {/* Left Section with Avatar and Title */}
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                  <Avatar
                    sx={{ width: 120, height: 120, mb: 2, bgcolor: 'primary.main' }}
                    alt="Blogcraftier"
                  >
                    <MenuBookIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h5" component="h1" gutterBottom>
                    Blogcraftier
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Creativity • Craft • Content
                  </Typography>
                  <Box mt={2}>
                    <Chip label="For Creators" sx={{ mr: 1 }} />
                    <Chip label="For Bloggers" />
                  </Box>
                </Box>
              </Grid>
              {/* Right Section with Content */}
              <Grid item xs={12} md={8}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Welcome to Blogcraftier
                </Typography>
                <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                  {/*
  The following paragraph contains the core description and mission of Blogcraftier.
  It's embedded inside the component so you can ship the page as a single file.
*/}
                  {`At Blogcraftier, we believe that every story, idea, or skill deserves to be shared in the most engaging way possible. Our mission is to empower writers, creators, and digital explorers with the tools, knowledge, and inspiration they need to craft meaningful blogs and content that stand out in today’s fast-moving online space.`}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="flex-start">
                      <BrushIcon sx={{ mr: 1, mt: '4px' }} />
                      <Box>
                        <Typography variant="subtitle1">Who We Are</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {`We are a team of passionate storytellers, tech enthusiasts, and digital creators who understand the power of words and design. Blogcraftier was founded with one simple goal: to make blogging easier, smarter, and more enjoyable for everyone—whether you’re a beginner starting your first post or a seasoned creator looking to scale your influence.`}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="flex-start">
                      <MenuBookIcon sx={{ mr: 1, mt: '4px' }} />
                      <Box>
                        <Typography variant="subtitle1">What We Do</Typography>
                        <List dense>
                          <ListItem disableGutters>
                            <ListItemText primary="Tips & Tutorials — step-by-step guides on writing, design, SEO, and publishing." />
                          </ListItem>
                          <ListItem disableGutters>
                            <ListItemText primary="Creative Inspiration — strategies and ideas to spark your imagination." />
                          </ListItem>
                          <ListItem disableGutters>
                            <ListItemText primary="Tools & Resources — recommendations for apps, platforms and workflows." />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="flex-start">
                      <EmojiObjectsIcon sx={{ mr: 1, mt: '4px' }} />
                      <Box>
                        <Typography variant="subtitle1">Why Blogcraftier?</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {`Being "craftier" means being smart, creative, and resourceful. We don't just blog—we craft content that resonates, connects, and lasts. Blogcraftier is about building a voice, sharing knowledge, and shaping ideas into something impactful.`}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box mt={3}>
                  <Typography variant="h6">Our Vision</Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {`To create a world where every individual has the confidence and creativity to share their story, grow their online presence, and thrive in the digital era.`}
                  </Typography>

                  <Typography variant="h6">Join Us on the Journey</Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {`Whether you’re here to learn blogging basics, refine your skills, or simply get inspired, Blogcraftier is here for you. Together, let’s turn ideas into stories and stories into lasting impact.`}
                  </Typography>

                  <Box display="flex" gap={2} flexWrap="wrap">
                    <Button variant="contained" size="large">Read the Blog</Button>
                    <Button variant="outlined" size="large">Subscribe</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}
