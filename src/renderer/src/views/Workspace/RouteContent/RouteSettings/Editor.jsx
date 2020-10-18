import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default function Editor() {
  const editorRef = useRef();

  let editor;

  function reLayout() {
    editor.layout();
  }

  useEffect(() => {
    editor = monaco.editor.create(editorRef.current, {
      value: '',
      language: 'javascript',
      theme: 'vs-dark',
    });

    const resizeObserver = new ResizeObserver(reLayout);

    resizeObserver.observe(editorRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div className="h-full" ref={editorRef} />
  );
}
