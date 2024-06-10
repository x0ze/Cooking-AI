import React from 'react';

interface PromptFormProps {
  index: number;
  prompt: string;
  onPromptChange: (index: number, value: string) => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ index, prompt, onPromptChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPromptChange(index, event.target.value);
  };

  return (
    <div>
      <label>
        <input type="text" value={prompt} onChange={handleChange} />
      </label>
    </div>
  );
};

export default PromptForm;
