
function Chat(){

    const enviar = () => {
        alert('Mensagem enviada!');
    }
     
    return(
        <>
        <main>
            <div className="chat-container">
                <div className="chat-message">
                    o tema é "Seismic Detection Across the Solar System" me traga informações em portugues sobre esse tema?
                </div>
                <div className="chat-message">
                    A detecção sísmica no sistema solar envolve a aplicação de métodos sísmicos para estudar planetas e luas além da Terra. Na Terra, usamos sismógrafos para detectar e analisar terremotos, mas no espaço, a abordagem é mais complexa. Em outros corpos celestes, como Marte, por exemplo, a sismologia é realizada usando instrumentos como o SEIS (Seismic Experiment for Interior Structure) do rover InSight, que mede vibrações para entender a estrutura interna do planeta. Em luas como a Europa, de Júpiter, e Titã, de Saturno, técnicas indiretas ajudam a inferir a atividade sísmica e a estrutura interna. Essas análises ajudam a compreender a geologia e a formação de outros corpos celestes, oferecendo insights sobre sua evolução e atividade interna.
                </div>
            </div>

            <div className="chat-input">
                <input type="text" placeholder="Escreva seu questionamento" />
                <button onClick={enviar}>ENVIAR &gt;&gt;</button>
            </div>
        </main>
        </>
    )

}

export default Chat;