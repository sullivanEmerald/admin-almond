import { Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeaderContent = () => {
    return (
        <>
            <div className="headerContainer">
                <InputGroup>
                    <InputGroup.Text className="bg-white border-end-0">
                        <FontAwesomeIcon icon={faSearch} className="text-muted" />
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Search by Category"
                        className="headerContainerInput"
                        style={{ boxShadow: 'none', width: '30%' }}
                    />
                </InputGroup>
            </div>
        </>
    )
}

export default HeaderContent;