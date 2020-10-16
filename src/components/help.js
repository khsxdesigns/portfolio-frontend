import React from "react"
import styled from "styled-components"

const Help = () => {
  return (
    <HelpContainer>
      <HelpContentBlock>
        <HelpTitle>Here's what I can help you with</HelpTitle>
        <HelpBlock>
          <HelpSubtitle>
            I’ll help you define what to build (and why)
          </HelpSubtitle>
          <HelpParagraph>
            It’s an important step that most teams skip over, because they’re so
            excited to get started. I work with different stakeholders to define
            a unified and tested idea of what we’re building, who we’re building
            it for, and why.
          </HelpParagraph>
        </HelpBlock>

        <HelpBlock>
          <HelpSubtitle>I’ll design how it works and how it looks</HelpSubtitle>
          <HelpParagraph>
            If it doesn’t work the way your users expect it to, then a slick
            design isn’t going to contribute much to success. My background in
            both design and research puts me in a great position to work with
            teams to bring digital products from ‘meh’ to great!
          </HelpParagraph>
        </HelpBlock>

        <HelpBlock>
          <HelpSubtitle>
            I’ll help you scale design and launch your product
          </HelpSubtitle>
          <HelpParagraph>
            Design that isn’t delivered into the hands of your customers is as
            useful as a paperweight. I have several years experience working
            closely with tech teams to deliver, iterate, and scale design
            operations.
          </HelpParagraph>
        </HelpBlock>
      </HelpContentBlock>
    </HelpContainer>
  )
}

export default Help

const HelpContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #333333;
  color: #ffffff;
`

const HelpContentBlock = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 0;
`
const HelpTitle = styled.h2`
  font-size: 28px;
  font-family: "Brutal Type", "Times New Roman", Times, serif;
`

const HelpSubtitle = styled.h3`
  font-size: 20px;
  font-family: "Brutal Type", "Times New Roman", Times, serif;
`

const HelpParagraph = styled.p`
  font-size: 16px;
  font-family: "Brutal Type", "Times New Roman", Times, serif;

  @media screen and (min-width: 576px) {
    max-width: 50%;
  }

  @media screen and (max-width: 575px) {
    max-width: 100%;
  }
`

const HelpBlock = styled.div`
  margin: 32px 0;
`
