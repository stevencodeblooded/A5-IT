import { Accordion } from "@ark-ui/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaqAccordion = () => {
  return (
    <div className="px-3 py-12">
      <section className="max-w-6xl mx-auto">
        <div>
          <ul className="mb-4 font-semibold text-gray-600  text-center flex justify-center flex-wrap gap-6">
            <li>
              <button className="bg-blue-500 text-white px-6 py-1 rounded-full">
                All
              </button>
            </li>
            <li>
              <button className="bg-gray-100 px-6 py-1 rounded-full">
                General
              </button>
            </li>
            <li>
              <button className="bg-gray-100 px-6 py-1 rounded-full">
                Billing
              </button>
            </li>
            <li>
              <button className="bg-gray-100 px-6 py-1 rounded-full">
                About Us
              </button>
            </li>
            <li>
              <button className="bg-gray-100 px-6 py-1 rounded-full">
                Cases
              </button>
            </li>
          </ul>

          <hr className="border-b-2 border-b-gray-300" />
        </div>

        <div className="py-12 max-w-3xl mx-auto">
          <Accordion.Root
            defaultValue={[
              "Can you assist in selecting the right IT hardware services for my business?",
            ]}
            collapsible
            className="flex flex-col gap-5"
          >
            <Accordion.Item value="Can you assist in selecting the right IT hardware services for my business?">
              <Accordion.ItemTrigger className="w-full flex items-center justify-between">
                <p className="font-semibold text-left">
                  Can you assist in selecting the right IT hardware services for
                  my business?
                </p>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="border-blue-200 bg-gray-100 border-2 rounded-lg p-4 mt-2 font-light">
                  Absolutely, we offer expert consultation to help you choose IT
                  hardware services that aligns with your specific needs,
                  ensuring optimal functionality and cost effectiveness.
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>

            <Accordion.Item value="How can I inquire about and purchase new hardware with our existing systems?">
              <Accordion.ItemTrigger className="w-full flex items-center justify-between">
                <p className="font-semibold text-left">
                  How can I inquire about and purchase new hardware with our
                  existing systems?
                </p>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="border-blue-200 bg-gray-100 border-2 rounded-lg p-4 mt-2 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  suscipit beatae. Beatae rerum pariatur corrupti adipisci
                  magnam. Illum, ut voluptate!
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>

            <Accordion.Item value="Can you seamlessly integrte new hardware with our existing systems?">
              <Accordion.ItemTrigger className="w-full flex items-center justify-between">
                <p className="font-semibold text-left">
                  Can you seamlessly integrte new hardware with our existing
                  systems?
                </p>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="border-blue-200 bg-gray-100 border-2 rounded-lg p-4 mt-2 font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  qui ipsa illum quod amet sed tenetur suscipit laudantium nam
                  dolor?
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>

            <Accordion.Item value="Can I find specialized industry-specific software services in Chicago?">
              <Accordion.ItemTrigger className="w-full flex items-center justify-between">
                <p className="font-semibold text-left">
                  Can I find specialized industry-specific software services in
                  Chicago?
                </p>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="border-blue-200 bg-gray-100 border-2 rounded-lg p-4 mt-2 font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  qui ipsa illum quod amet sed tenetur suscipit laudantium nam
                  dolor?
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>

            <Accordion.Item value="How do I choose the right software service provider in Chicago?">
              <Accordion.ItemTrigger className="w-full flex items-center justify-between">
                <p className="font-semibold text-left">
                  How do I choose the right software service provider in
                  Chicago?
                </p>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <div className="border-blue-200 bg-gray-100 border-2 rounded-lg p-4 mt-2 font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  qui ipsa illum quod amet sed tenetur suscipit laudantium nam
                  dolor?
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
}

export default FaqAccordion