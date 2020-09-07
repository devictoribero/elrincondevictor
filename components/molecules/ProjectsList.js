import {Paragraph} from '../Atom/Typography/Paragraph'
import {Card} from './Card'

export function ProjectsList() {
  return(
    <ul className='reset'>
      <li>
        <Card
          title='ChooseYourPlant'
          link={{
            text: 'Check the community',
            link: 'https://chooseyourplant.com',
            isExternal: true  
            }}>
            <Paragraph spacelessTop>ChooseYourPlant is an online community for houseplant lovers to <a className='link' href='https://chooseyourplant.com/plants'>find a plant that suits your likes</a> and meet people like you.</Paragraph>
            <Paragraph>Learn how to take care of the plants thanks to our plant guides, show us your plants, discover shops near you and share your plant journey with the community.</Paragraph>
          </Card>
      </li>
  
      <li>
        <Card
          title='Mentor and contributor at Coding Coach'
          link={{
            text: 'Visit the dev community',
            link: 'https://codingcoach.io/',
            isExternal: true
          }}>
          <Paragraph spacelessTop>Contributed to build the open-source dev community created by <a className='link' href='https://twitter.com/EmmaBostian'>Emma Bostian</a> for finding a tech coach that can lead you in the correct path.</Paragraph>
          <Paragraph>Not only I solved some people's, problems but I mentored a few as well.</Paragraph>
        </Card>
      </li>

      <style jsx>{`
        li {
          max-width: 600px;
          margin-bottom: 3rem;
        }

        a {
          font-size: 1.125rem;
        }

        @media screen and (min-width: 768px) {
					a {
						font-size: 1.25rem;
					}
				}
      `}</style>
    </ul>
  )
}