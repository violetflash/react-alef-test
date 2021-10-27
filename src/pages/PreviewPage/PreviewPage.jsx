import { PageContent } from "../styles";
import { Section } from "../../components/ui";
import { ChildView } from "../../components/ChildView/ChildView";
import { getAgeEnding } from "../../utils/functions";

export const PreviewPage = () => {
  const age = 10;
  const ageEnding = getAgeEnding(age);
  const name = 'Василий';
  const text = `${name}, ${age} ${ageEnding}`;
  return (
    <Section>
      <PageContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3 }}
      >
        <ChildView text={text}/>
      </PageContent>
    </Section>
  )
};
