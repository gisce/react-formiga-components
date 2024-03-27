import DOMPurify from "dompurify";

export const HTMLPreview = ({ value }: { value?: string }) => {
  if (value) {
    return (
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} />
    );
  }
};
