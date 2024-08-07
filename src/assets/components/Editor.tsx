import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import Loader from "./Loader";

interface IProps {
  defaultValue: string;
}

const EditorPage: React.FC<IProps> = ({ defaultValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);
  const [editorLoading, setEditorLoading] = useState<boolean>(true);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEditorLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current;
      editor.on('open', () => {
        setShowOverlay(true);
      });
      editor.on('close', () => {
        setShowOverlay(false);
      });
    }
  }, []);

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent gray background
    backdropFilter: 'blur(5px)', // Apply a blur effect
    zIndex: 50, // Set the z-index
    display: showOverlay ? 'block' : 'none',
  };

  return (
    <div
      className=" p-2 h-[50vh] sm:p-3 sm:h-[58vh] 
         md:h-[100%] lg:h-full lg:p-4  
          relative bg-white shadow-lg rounded-md flex flex-col"
    >
      {/* {editorLoading && <Loader />} */}
      {editorLoading}

      {showOverlay && <div style={overlayStyle} />}
      <div
        className={`flex-grow ${
          editorLoading ? "hidden" : "block"
        } overflow-hidden`}
      >
        <Editor
          apiKey="it6welyshxwm14bortlf5rwdf6k5j038scbqdh4fc83g19qi" // Replace with your API key
          onInit={(_evt, editor) => {
            console.log("editor run", editor);
            editorRef.current = editor;
          }}
          initialValue={defaultValue}
          disabled={false}
          init={{
            branding: false,
            height: "100%",
            menubar: false,
            plugins: [
              "autosave",
              "save",
              "searchreplace",
              "advlist",
              "autolink",
              "lists",
              "link",
              // "image", // Ensure the image plugin is included
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "table",
              "wordcount",
            ],
            toolbar:
              "undo redo | formatselect | blocks fontfamily fontsize | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat ", // Ensure the image button is included
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
            file_picker_callback: (callback, _value, meta) => {
              if (meta.filetype === "image") {
                // Open file picker
                const input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");
                input.onchange = () => {
                  const file = input.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      const id = "blobid" + new Date().getTime();
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const blobCache = (window as any).tinymce.activeEditor
                        .editorUpload.blobCache;
                      const base64 = (reader.result as string).split(",")[1];
                      const blobInfo = blobCache.create(id, file, base64);
                      blobCache.add(blobInfo);
                      callback(blobInfo.blobUri(), { title: file.name });
                    };
                    reader.readAsDataURL(file);
                  }
                };

                input.click();
              }
            },
            setup: (editor) => {
              editor.on("init", () => {
                // Hide footer elements
                const toolbarContainer = editor
                  .getContainer()
                  .querySelector(".tox-tbtn-group") as HTMLElement;
                if (toolbarContainer) {
                  toolbarContainer.style.display = "none"; // Hide footer elements
                }
              });
            },
          }}
        />
      </div>
    </div>
  );
};

export default EditorPage;
