import { Fragment, useState } from "react";
import Typed from "react-typed";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <div className="px-16 py-16 bg-black " id="FAQ">
        <div className="space-y-20 text-white px-8">
          <Typed
            className="text-5xl text-green-500"
            strings={["> Frequently Asked Questions."]}
            typeSpeed={10}
          />
          {/* ACCORDION #1 */}
          <div className=" py-6 space-y-8 ">
            <h2 className="text-4xl">General Questions</h2>
            <Accordion
              className="border-b-2  "
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="hover:text-orange-400"
              >
                What is Web3 (Also Known As Web3.0) ?
              </AccordionHeader>
              <AccordionBody>
                <div className="space-y-8">
                  <div>
                    Web3 has become a catch-all term for the vision of a new,
                    better internet. At its core, Web3 uses blockchains,
                    cryptocurrencies, and NFTs to give power back to the users
                    in the form of ownership.
                  </div>
                  <div>
                    Said best: Web1 was read-only, Web2 is read-write, Web3 will
                    be read-write-own.
                  </div>
                  <div className="space-y-4">
                    <div className="font-bold">CORE IDEAS OF WEB3.0</div>
                    <div>
                      - Web3 is decentralized: instead of large swathes of the
                      internet controlled and owned by centralized entities,
                      ownership gets distributed amongst its builders and users.
                    </div>
                    <div>
                      - Web3 is permissionless: everyone has equal access to
                      participate in Web3, and no one gets excluded.
                    </div>
                    <div>
                      - Web3 has native payments: it uses cryptocurrency for
                      spending and sending money online instead of relying on
                      the outdated infrastructure of banks and payment
                      processors.
                    </div>
                    <div>
                      - Web3 is trustless: it operates using incentives and
                      economic mechanisms instead of relying on trusted
                      third-parties.
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2 "
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="hover:text-orange-400"
              >
                What is DEFI (Decentralized Finance)?
              </AccordionHeader>
              <AccordionBody>
                <div className="space-y-8">
                  <div>
                    Decentralized finance (DeFi) is an emerging financial
                    technology based on secure distributed ledgers similar to
                    those used by cryptocurrencies.
                  </div>
                  <div>
                    Decentralized finance eliminates intermediaries by allowing
                    people, merchants, and businesses to conduct financial
                    transactions through emerging technology. Through
                    peer-to-peer financial networks, DeFi uses security
                    protocols, connectivity, software, and hardware
                    advancements.
                  </div>
                  <div>
                    Wherever there is an internet connection, individuals can
                    lend, trade, and borrow using software that records and
                    verifies financial actions in distributed financial
                    databases. A distributed database is accessible across
                    various locations as it collects and aggregates data from
                    all users and uses a consensus mechanism to verify it.
                  </div>
                  <div className="space-y-4">
                    <div className="font-bold"> KEY TAKEAWAYS</div>
                    <div>
                      - Decentralized finance, or DeFi, uses emerging technology
                      to remove third parties and centralized institutions from
                      financial transactions.
                    </div>
                    <div>
                      - The components of DeFi are stablecoins, software, and
                      hardware that enables the development of applications.
                    </div>
                    <div>
                      - The infrastructure for DeFi and its regulation are
                      constantly evolving.
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="hover:text-orange-400"
              >
                What is an NFT (Non-Fungible Token) ?
              </AccordionHeader>
              <AccordionBody>
                <div className="space-y-8">
                  <div>
                    Non-fungible tokens (NFTs) are cryptographic assets on a
                    blockchain with unique identification codes and metadata
                    that distinguish them from each other.
                  </div>
                  <div>
                    Non-fungible tokens are an evolution of the relatively
                    simple concept of cryptocurrencies. Modern finance systems
                    consist of sophisticated trading and loan systems for
                    different asset types, ranging from real estate to lending
                    contracts to artwork. By enabling digital representations of
                    physical assets, NFTs are a step forward in the reinvention
                    of this infrastructure.
                  </div>

                  <div className="space-y-4">
                    <div className="font-bold"> KEY TAKEAWAYS</div>
                    <div>
                      - NFTs (non-fungible tokens) are unique cryptographic
                      tokens that exist on a blockchain and cannot be
                      replicated.
                    </div>
                    <div>
                      - NFTs can represent real-world items like artwork and
                      real estate.
                    </div>
                    <div>
                      - "Tokenizing" these real-world tangible assets makes
                      buying, selling, and trading them more efficient while
                      reducing the probability of fraud.
                    </div>
                    <div>
                      - NFTs can also function to represent individuals'
                      identities, property rights, and more.
                    </div>
                    <div>
                      - Collectors have sought NFTs as their value initially
                      soared, but has since moderated.
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </div>

          {/* ACCORDION #2 */}

          <div className="py-6 space-y-8">
            <h2 className="text-4xl">Questions About Our Services</h2>
            <Accordion
              className="border-b-2"
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(4)}>
                What is included in our Advisory & Consultancy services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 5}
              icon={<Icon id={5} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(5)}>
                What is included in our Web Development services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 6}
              icon={<Icon id={6} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(6)}>
                What is included in our NFT Art Designing services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 7}
              icon={<Icon id={7} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(7)}>
                What is included in our Collaborations Management services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 8}
              icon={<Icon id={8} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(8)}>
                What is included in our Community Management services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 9}
              icon={<Icon id={9} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(9)}>
                What is included in our Moderation services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 10}
              icon={<Icon id={10} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(10)}>
                What is included in our Marketing services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>

            <Accordion
              className="border-b-2"
              open={open === 11}
              icon={<Icon id={11} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(11)}>
                What is included in our Copywriting services ?
              </AccordionHeader>
              <AccordionBody>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
