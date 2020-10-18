import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default function Editor({
  theme, language, value, onValueChange,
}) {
  const editorRef = useRef();
  const editor = useRef(null);
  const editorModel = useRef(null);

  function reLayout() {
    editor.current.layout();
  }

  useEffect(() => {
    editor.current = monaco.editor.create(editorRef.current, {
      value,
      language,
      theme,
    });

    const resizeObserver = new ResizeObserver(reLayout);

    resizeObserver.observe(editorRef.current);

    editorModel.current = editor.current.getModel();
    editorModel.current.onDidChangeContent(() => {
      onValueChange(editorModel.current.getValue());
    });

    return () => {
      editorModel.dispose();
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    editorModel.current.setValue(value);
  }, [value]);

  useEffect(() => {
    monaco.editor.setModelLanguage(editorModel.current, language);
  }, [language]);

  return (
    <div className="h-full" ref={editorRef} />
  );
}

Editor.propTypes = {
  theme: PropTypes.oneOf(['vs-dark', 'vs-light']),
  language: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Editor.defaultProps = {
  theme: 'dark',
  language: 'javascript',
};
