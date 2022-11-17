import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedbackItem";

function App(props) {

    //objeto de estilos
    const HeaderStyles = {
        backgroundColor: '#ed5bad',
        color: 'white'
    }

    return (
        <div className="container">
            {/* props: atributos de etiqueta de un componente react */}
            <Header
                bgColor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color} />
                <FeedbackItem/>
                <FeedbackItem/>
        </div>
    )
}

export default App;