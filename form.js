import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const JSONEditor = ({ schema, setSchema }) => {
  const handleEditorChange = (value) => {
    try {
      const parsed = JSON.parse(value);
      setSchema(parsed);
    } catch (e) {
      console.error('Invalid JSON');
    }
  };

  return (
    <div>
      <h2>JSON Schema</h2>
      <MonacoEditor
        height="400px"
        defaultLanguage="json"
        value={JSON.stringify(schema, null, 2)}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default JSONEditor;
