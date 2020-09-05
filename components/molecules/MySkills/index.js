import {Title,titleSizes,titleTags} from '../../Atom/Title'
import {Paragraph} from '../../Atom/Typography/Paragraph'
import {ListItem} from '../../Atom/ListItem'
import {List} from '../../Atom/List'

export function MySkills() { 
  return (
      <>
        <Title size={titleSizes.l} as={titleTags.h2} spacelessTop>
          My skills
        </Title>
        <Paragraph>I focused my career on front-end development to be as closest as possible to the people who use my products because I've always been attracted to phsicology and design.</Paragraph>
        <Paragraph>In the first 5 years of experience as software enginneer I've learned the core principles to high on Google thanks to SEO, improve the user experience by making the products fast, beautiful, accessible, inclusive along with other things.</Paragraph>
        <Paragraph>Last year I've learned about infrastructure and marketing because I want to create products that people need.</Paragraph>

        <div className='column-layout'>
          <div className='column'>
            <Title size={titleSizes.m} as={titleTags.h3} spacelessTop>
              Soft skills
            </Title>
            <List>
              <ListItem>Leadership</ListItem>
              <ListItem>Communication</ListItem>
              <ListItem>Teamwork</ListItem>
              <ListItem>Empathy and kindness</ListItem>
              <ListItem>Open-mindness and adaptability</ListItem>
              <ListItem>Critical thinking</ListItem>
              <ListItem>Time and people management</ListItem>
            </List>
          </div>

          <div className='column'>
            <Title size={titleSizes.m} as={titleTags.h3} spacelessTop>
              Hard skills
            </Title>
            <List>
              <ListItem>Marketing online and SEO</ListItem>
              <ListItem>UI/UX, practices to increase conversion</ListItem>
              <ListItem>Semantic HTML and web accesibility</ListItem>
              <ListItem>CSS, SASS, LESS, JSS (Styled Components, Emotion, styled-jsx, etc.)</ListItem>
              <ListItem>Javascript, ReactJS, VueJS</ListItem>
              <ListItem>Typescript, NodeJS, ExpressJS</ListItem>
              <ListItem>Unit and Integration testing, Jest, Mocha, Chai, Cypress</ListItem>
              <ListItem>Automation and tooling with NodeJS</ListItem>
              <ListItem>Hexagonal Architecture, DDD</ListItem>
              <ListItem>Web performance and image optimization</ListItem>
              <ListItem>Browser compatibility, AB Testing, etc.</ListItem>
            </List>
          </div>

          <style jsx>{`
            .column-layout {
              display: grid;
              grid-template-columns: 1;
              grid-gap: 2rem;
              margin-top: 3rem;
            }
            
            @media screen and (min-width: 1024px) {
              .column-layout {
                grid-template-columns: 2fr 3fr;
              }
            }
          `}</style>
        </div>
      </>
  )
}