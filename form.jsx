import React from 'react';

const FormRenderer = ({ schema }) => {
  if (!schema?.fields) return <p>Invalid Schema</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>{schema.title || 'Generated Form'}</h2>
      {schema.fields.map((field, index) => (
        <div key={index}>
          <label>
            {field.label}
            {field.type === 'radio' ? (
              field.options.map((option, idx) => (
                <div key={idx}>
                  <input
                    type={field.type}
                    name={field.name}
                    value={option}
                  />
                  {option}
                </div>
              ))
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="border p-2"
              />
            )}
          </label>
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormRenderer;
