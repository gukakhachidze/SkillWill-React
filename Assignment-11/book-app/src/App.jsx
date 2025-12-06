import Book from './Book';

export default function App() {
  const logInfo = (title, chars) => {
    console.log('Title:', title);
    console.log('Characters:', chars);
  };

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Book
        title="Rick and Morty – Season 1"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        description="A crazy sci-fi adventure across dimensions."
        characters={[
          'Rick Sanchez',
          'Morty Smith',
          'Summer Smith',
          'Beth Smith',
          'Jerry Smith',
        ]}
        onClick={logInfo}
      />

      <Book
        title="Rick and Morty – Season 2"
        image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        description="Even wilder, darker and funnier dimension trips."
        characters={['Rick', 'Morty', 'Birdperson', 'Mr. Poopybutthole']}
        onClick={logInfo}
      />
    </div>
  );
}
