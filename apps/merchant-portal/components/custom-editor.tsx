import React, { useRef, useMemo, useState, useEffect } from "react";
import JoditEditor from "jodit-react";

const CustomEditor = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const editor = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
      theme: "dark",
      width: "auto",
      height: "400px",
      css: `
        .jodit-workplace {
          background: #000000 !important;
          color: #ffffff !important;
        }
        .jodit-wysiwyg {
          background: #000000 !important;
          color: #ffffff !important;
        }
        .jodit-status-bar {
          background: #000000 !important;
          color: #ffffff !important;
        }
        .jodit-toolbar__box {
          background: #000000 !important;
          border-color: #333333 !important;
        }
        .jodit-container {
          background: #000000 !important;
          border-color: #333333 !important;
        }
      `,
    }),
    []
  );
  if (!mounted) return null;

  return (
    <div style={{ background: "#000000" }}>
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setValue(newContent)}
        onChange={(newContent) => setValue(newContent)}
      />
    </div>
  );
};

export default CustomEditor;
