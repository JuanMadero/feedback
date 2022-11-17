import propTypes from "prop-types";

const Header = ({bgColor, color}) => {



    return (
        <header style={{
            backgroundColor: bgColor,
            color: color
        }}>
            Encabezado
        </header>
    )
}

//Valores por defecto para las proms suministradas
Header.defaultProps = {
    bgColor:'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

//validar las props con ProTypes
Header.propType = {
    bgColor: propTypes.string.isRequired,
    color: propTypes.string
}

export default Header;