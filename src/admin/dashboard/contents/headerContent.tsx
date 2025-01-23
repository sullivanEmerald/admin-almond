import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeaderContent = () => {
    return (
        <>
            <div style={{ width: '45%', position: 'relative' }}>
                <FontAwesomeIcon
                    icon={faSearch}
                    className="searchIcon"
                />
                <Form.Control
                    type="text"
                    placeholder="Search by product name or reference number"
                    style={{
                        paddingRight: '40px',
                        fontSize: '14px',
                        background: '#f1f3f4',
                        border: '1px solid #ced4da',
                        borderRadius: '9999px',
                        boxShadow: 'none',
                        textOverflow: 'ellipsis',
                    }}
                />
            </div>
        </>
    );
};

export default HeaderContent;
