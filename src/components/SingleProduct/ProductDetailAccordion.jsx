import { Accordion } from "@ark-ui/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetailAccordion = () => {
  return (
    <div className="px-3 py-24">
      <section className="max-w-5xl mx-auto">
        <div>
          <Accordion.Root
            defaultValue={["Description"]}
            collapsible
            className="flex flex-col gap-10"
          >
            <Accordion.Item value="Description">
              <Accordion.ItemTrigger className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Description</h3>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <p className="text-sm">
                  Description Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Iste vitae expedita reiciendis adipisci
                  quasi quis deleniti, esse a et dolorem nostrum voluptas
                  eligendi doloremque pariatur quidem fugiat corporis doloribus
                  ipsum quibusdam vel, aperiam error aliquid animi quae?
                  Exercitationem, dignissimos debitis!
                </p>
              </Accordion.ItemContent>
            </Accordion.Item>

            <Accordion.Item value="Specification">
              <Accordion.ItemTrigger className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Specification</h3>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <p className="text-sm">
                  Specification Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Cupiditate dolore sit quaerat ducimus
                  sapiente ratione itaque, exercitationem fugit atque tempore
                  dolores mollitia adipisci dolor natus voluptate asperiores
                  harum similique! Corrupti eligendi laboriosam doloremque sit
                  voluptatibus quia rem, assumenda numquam delectus?
                </p>
              </Accordion.ItemContent>
            </Accordion.Item>

            <Accordion.Item value="Reviews (0)">
              <Accordion.ItemTrigger className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Reviews (0)</h3>
                <Accordion.ItemIndicator>
                  <FontAwesomeIcon icon={faPlus} />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <p className="text-sm">
                  Reviews Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Accusamus assumenda asperiores nobis, atque ullam
                  excepturi quos repudiandae tempore numquam soluta, nostrum,
                  dignissimos nulla neque. Id labore quas voluptates repellendus
                  quia!
                </p>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailAccordion;
