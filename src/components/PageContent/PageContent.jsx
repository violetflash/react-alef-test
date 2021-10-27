import { Section } from "../ui";
import { StyledPageContent } from "./styles";

export const PageContent = ({ children }) => {
  return (
    <Section>
      <StyledPageContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </StyledPageContent>
    </Section>
  )
};