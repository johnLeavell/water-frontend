import React from 'react'
import {Typography, Container } from '@material-ui/core'

export default function About() {
    return (
        <div>
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                Water quality app is a tool for informing the public of the water quailty levels along the Chicago River.
              </Typography>
            </Container>
        </div>
    )
}
