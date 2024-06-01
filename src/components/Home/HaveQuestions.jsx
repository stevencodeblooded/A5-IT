import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import questions from "../../assets/questions.png";
import { faMinus, faPhoneVolume, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "@ark-ui/react";

const HaveQuestions = () => {
  return (
    <div className="px-3 py-32">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-20 lg:gap-5 lg:flex-row">
          <div className="flex flex-col gap-3 items-center w-full lg:w-1/3 bg-gray-200 py-14 lg:px-7 rounded-lg text-center">
            <img src={questions} alt="Have other questions?" className="w-28" />
            <h3 className="text-lg font-semibold">Have other questions?</h3>
            <p className="text-sm font-semibold text-gray-600">
              Our team will answer all your questions. We ensure a quick
              response.
            </p>
            <a
              className="flex items-center gap-3 bg-blue-600 w-fit hover:bg-blue-700 transition-all px-8 py-3 rounded-full text-white font-semibold border-none"
              href="tel:+1234355346656"
            >
              <FontAwesomeIcon icon={faPhoneVolume} /> Contact Support Team
            </a>
          </div>
          <div className="w-full lg:w-2/3">
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
                    Can you assist in selecting the right IT hardware services
                    for my business?
                  </p>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faMinus} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <div className="border-blue-200 border-2 rounded-lg p-4 mt-2 font-light">
                    Absolutely, we offer expert consultation to help you choose
                    IT hardware services that aligns with your specific needs,
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
                  <div className="border-blue-200 border-2 rounded-lg p-4 mt-2 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, suscipit beatae. Beatae rerum pariatur corrupti
                    adipisci magnam. Illum, ut voluptate!
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
                  <div className="border-blue-200 border-2 rounded-lg p-4 mt-2 font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                    qui ipsa illum quod amet sed tenetur suscipit laudantium nam
                    dolor?
                  </div>
                </Accordion.ItemContent>
              </Accordion.Item>

              <Accordion.Item value="Can I find specialized industry-specific software services in Chicago?">
                <Accordion.ItemTrigger className="w-full flex items-center justify-between">
                  <p className="font-semibold text-left">
                    Can I find specialized industry-specific software services
                    in Chicago?
                  </p>
                  <Accordion.ItemIndicator>
                    <FontAwesomeIcon icon={faPlus} />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <div className="border-blue-200 border-2 rounded-lg p-4 mt-2 font-light">
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
                  <div className="border-blue-200 border-2 rounded-lg p-4 mt-2 font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                    qui ipsa illum quod amet sed tenetur suscipit laudantium nam
                    dolor?
                  </div>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HaveQuestions;
