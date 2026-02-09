export default function Card ({selectedCard,languagesList,}) {
     const handleCardContent = (selectedId, array) => {
        const currentLanguage = array.find((language) => (language.id === selectedId ));
        console.log(currentLanguage);
        const cardContent = currentLanguage? (
          <>
            <h2 className='fs-3'>{currentLanguage.title}</h2>
            <p>{currentLanguage.description}</p>
          </>
        ):(
        <>
          <h2>Nessun linguaggio selezonato</h2>
        </>
      );
    
      return cardContent
    }
    return (<>
        <div className='my-card'>
            {
                handleCardContent(selectedCard, languagesList)
            }
        </div>
    </>)
}