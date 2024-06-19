"use client"
import { useEffect, useState } from 'react';

const RecipePage = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log('Component mounted');
    const test = localStorage.getItem('Titre');
    console.log(test)
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default RecipePage;
