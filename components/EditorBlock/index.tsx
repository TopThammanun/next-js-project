"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TipTapEditorExtensions } from "./extension";
import { TipTapEditorProps } from "./props";
import { useDebouncedCallback } from "use-debounce";
import axios from 'axios';

export default function Editor() {
  const router = useRouter();
  const [saveStatus, setSaveStatus] = useState<string>("Saved");
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState();
  const [hydrated, setHydrated] = useState<boolean>(false);

  async function patchRequest(publicId: string, title: string, document: any) {
    const response = await axios.put(
      'https://nest-js-project.vercel.app/documents/update/1', { title, publicId, document, ownerId: "top" });

    if (response.status != 200) {
      setSaveStatus("Waiting to Save.");
      throw new Error("Failed to update document");
    }
    setSaveStatus("Saved");
    // startTransition(() => {
    //   router.refresh();
    // });
  }

  async function getPost() {
    const response = await axios.get('https://nest-js-project.vercel.app/documents/all');
    setContent(response.data[0].document);
  }

  useEffect(() => {
    getPost()
  }, []);

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON();
    setContent(json);
    await patchRequest("1", "Test", json);
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 500);
  }, 1000);

  const editor = useEditor({
    extensions: TipTapEditorExtensions,
    editorProps: TipTapEditorProps,
    onUpdate: (e) => {
      setSaveStatus("Saving...");
      debouncedUpdates(e);
    },
    content: content,
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative flex min-h-screen w-full cursor-text flex-col items-center p-10"
    >
      <div className=" w-full max-w-screen-lg">
        {/* <h1 className="mb-8 text-6xl font-bold">Hello</h1> */}
        <div className="absolute left-8 top-10 rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-400">
          {saveStatus}
        </div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}