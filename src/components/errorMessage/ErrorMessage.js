import img from './1140-error-flat.gif'

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '100px', height: '100px', objectFit: "contain", margin: '0 auto'}} src={img} alt="Error" />
    )
}

export default ErrorMessage;