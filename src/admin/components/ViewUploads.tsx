import { useMultipleImageUpload } from "../services/global/queries";
import useStore from "../stores/store";

const ViewUploads = () => {
    const imageFiles = useStore((state) => state.multipleImageQueryFile);
    const upload = useMultipleImageUpload(imageFiles);
    const subImages = useStore((state) => state.data.subImage); // `subImage` from the Zustand store

    console.log(subImages)

    if (upload.isLoading) {
        return <p>Data is fetching...</p>;
    }

    if (upload.isError) {
        return <p>There was an error uploading the images.</p>;
    }

    return (
        <>
            {upload.queries.map((item, index) => (
                <div key={index}>
                    {item.isLoading && <p>Uploading image {index + 1}...</p>}
                    {item.isError && <p>Error uploading image {index + 1}</p>}
                    {item.isSuccess && item.data && (
                        <p>Uploaded: {item.data.secure_url}</p>
                    )}
                </div>
            ))}
            <h3>Uploaded Images:</h3>
            <div className="image-previews">
                {subImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.secure_url}
                        alt={`Uploaded image ${index + 1}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
                    />
                ))}
            </div>
        </>
    );
};

export default ViewUploads;
