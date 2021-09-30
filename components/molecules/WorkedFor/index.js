import { Title, titleSizes, titleTags } from "../../Atom/Title";
import { Paragraph } from "../../Atom/Typography/Paragraph";

export function WorkedFor() {
  return (
    <>
      <Title size={titleSizes.l} as={titleTags.h2} spacelessTop>
        Companies I worked for
      </Title>
      <Paragraph>
        In 5 years I have worked in several companies in different industries
        that have allowed me to know the market and the needs and interests of
        the customers.
      </Paragraph>
      <div className="companies">
        <div>
          <img
            src="/img/logos/adevinta.svg"
            alt="Adevinta's logo"
            aria-label="Adevinta's logo"
          />
        </div>
        <div>
          <img
            src="/img/logos/zeelo.svg"
            alt="Zeelo's logo"
            aria-label="Zeelo's logo"
          />
        </div>
        <div>
          <img
            src="/img/logos/xceed.svg"
            alt="Xceed's logo"
            aria-label="Xceed's logo"
          />
        </div>
        <div>
          <img
            src="/img/logos/hotelerum.svg"
            alt="Hotelerum's logo"
            aria-label="Hotelerum's logo"
          />
        </div>
      </div>

      <style jsx>{`
        .companies {
          display: flex;
          overflow-x: auto;
          max-width: 100%;
          align-items: center;
        }

        img {
          width: 150px;
          margin-right: 2rem;
        }
      `}</style>
    </>
  );
}
