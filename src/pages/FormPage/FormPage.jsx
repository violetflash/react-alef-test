import { Section } from "../../components/ui";
import { PageContent } from "../styles";
import { Form } from "../../components/Form/Form";


export const FormPage = () => {
  return (
    <Section>
      <PageContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3 }}
      >
        <Form/>
      </PageContent>
    </Section>
  )
};

