import { Image } from 'react-bootstrap';

interface ImagePreviewProps {
    imageUrl: string;
    resize?: boolean;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, resize = false }) => {
    return (
        <Image
            src={imageUrl}
            alt="Image Preview"
            fluid
            className="mt-3"
            style={{
                width: resize ? '60px' : '80px',
                height: resize ? '60px' : '80px',
                maxWidth: !resize ? '200px' : 'none',
                maxHeight: !resize ? '200px' : 'none',
                objectFit: 'cover'
            }}
        />
    );
};

export default ImagePreview;