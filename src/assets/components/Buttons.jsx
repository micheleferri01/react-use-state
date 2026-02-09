export default function Buttons({languagesList, selectedLanguage, onSetSelectedLanguage}) {
    return (
        <>
            <div className='container my-5'>
                {
                    languagesList.map((language) => <button key={language.id} className={`btn me-3 fs-5 ${language.id === selectedLanguage ? 'btn-warning' : 'btn-primary'}`} id={language.id} onClick={() => {
                        return onSetSelectedLanguage(language.id)
                    }}>{language.title}</button>)
                }
            </div >
        </>
    )
}