import { useSelector } from 'react-redux';
import { PreviewSection } from "../PreviewSection/PreviewSection";
import { Badge } from "../ui";
import { getBadgeText } from "../../utils/functions";
import { ChildList } from "./styles";


export const Preview = () => {
  const { person, child } = useSelector(state => state.previewData);
  const personText = getBadgeText(person.name, person.age);

  const personPreview = person.name.length > 0 && person.age.length > 0 ?
    <Badge flat text={personText}/> : null;

  const childView = child.length > 0 ?
    <ChildList>
      {child.map(el => {
        if (!el.name || !el.age) return null;
        const childText = getBadgeText(el.name, el.age);
        return <Badge key={el.id} text={childText}/>
    })}
    </ChildList> : null;

  return (
    <>
      <PreviewSection text="Персональные данные">
        {personPreview}
      </PreviewSection>
      <PreviewSection text="Дети">
        {childView}
      </PreviewSection>
    </>
  )
};