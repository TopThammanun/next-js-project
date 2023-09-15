"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TipTapEditorExtensions } from "./extension";
import { TipTapEditorProps } from "./props";


export default function Editor() {
  const editor = useEditor({
    extensions: TipTapEditorExtensions,
    editorProps: TipTapEditorProps,
  });

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative flex min-h-screen w-full cursor-text flex-col items-center p-10"
    >
      <div className=" w-full max-w-screen-lg">
        <h1 className="mb-8 text-6xl font-bold">Hello</h1>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}