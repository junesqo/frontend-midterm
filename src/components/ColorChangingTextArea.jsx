import React, { useState } from 'react';

const ColorChangingTextArea = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff']; // Список цветов
    const colorIndex = newText.length % colors.length; // Определяем индекс цвета в зависимости от длины текста
    setBackgroundColor(colors[colorIndex]);
    
    // const lastChar = newText.slice(-1);
    // const newColor = `#${lastChar.charCodeAt(0).toString(16).repeat(3)}`;
    // setBackgroundColor(newColor);
  };

  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      placeholder="Начните писать текст"
      style={{ backgroundColor: backgroundColor }}
      rows={4}
      cols={50}
    />
  );
};

export default ColorChangingTextArea;