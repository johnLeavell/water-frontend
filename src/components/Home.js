import React from 'react'
import {Typography, Container } from '@material-ui/core'

export default function Home() {
    return (
        <div>
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                Real-Time Microbial Pollution Monitoring:
                WELCOME TO THE FUTURE!
                We're here to help you understand the water quality conditions in the Chicago River so that you can make well-informed decisions about when and how to safely interact with the river. Prior to this pilot project, there was no way for you or anyone in any U.S. city to check the microbial pollution in your river in real-time. H2NOW Chicago is a first-of-its-kind effort to inform you, the public. This is your ‘weather app’ for the river.
              </Typography>
              <br/>
              <Typography variant="h4" gutterBottom>
              OUR MISSION
              </Typography>
              <Typography>
                This website is rooted in discovery and transparency and is designed to show you how much the Chicago River’s water quality has improved over the past 40 years. It’s much healthier than you probably think. Today, water quality in the river fluctuates on a daily basis and by keeping you informed, we hope to empower you to enjoy this waterway to the greatest potential. As our river continues to become healthier and a more integral part of Chicago’s economic and social fabric, Chicagoans deserve up to the minute information. We are committed to vigilantly overseeing the river’s water quality. Without measurement, there is no improvement.
              </Typography>
            </Container>
        </div>
    )
}
