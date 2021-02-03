import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
           <h1>{title}</h1>
           <Button color='green' text='Hello' />
           <Button color='blue' text='Hello 1' />
           <Button color='red' text='Hello 3' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS is js
// const headingStyle = { 
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
