import React from 'react'
import styled from "styled-components"
import Section from './Section'



function Home() {
  return (
        <Container>
            <Section 
                title="Model S"
                description="Order online for touchless delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
                />
            <Section 
                title="Model Y"
                description="Order online for touchless delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"/>
            <Section
                title="Model 3"
                description="Order online for touchless delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory" />
            <Section 
                title="Model X"
                description="Order online for touchless delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"/>
            <Section
                title="Lowest Cost Solar Panel"
                description="Money-Back gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now "
                rightBtnText="Learn Now"
                />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof costs less than new roof "
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now "
                rightBtnText="Learn More"
                />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            
            />

            

            
            </Container>
  )
}

export default Home

const Container =styled.div`
    height: 100vh;

`