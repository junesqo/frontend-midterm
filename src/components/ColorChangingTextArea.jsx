import React, { useState } from 'react';

const ColorChangingTextArea = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Начальный цвет фона

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    // Логика изменения цвета фона (здесь простая демонстрация, можно заменить на свою логику)
    const lastChar = newText.slice(-1); // Получаем последний введенный символ
    const newColor = `#${lastChar.charCodeAt(0).toString(16).repeat(3)}`; // Генерация цвета на основе символа
    setBackgroundColor(newColor);
  };

  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      placeholder="Начните вводить текст..."
      style={{ backgroundColor: backgroundColor }}
      rows={4}
      cols={50}
    />
  );
};

export default ColorChangingTextArea;