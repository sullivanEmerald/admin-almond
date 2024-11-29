import * as yup from 'yup'

const isValidUrl = (url: string) => {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}


// const imageUrlSchema = yup.object({
//     secure_url: yup
//         .string()
//         .required('Secure URL is required')
//         .test('is-url', 'Invalid public URL format', isValidUrl),

//     public_url: yup
//         .string()
//         .required('Public URL is required')
//         .test('is-url', 'Invalid public URL format', isValidUrl),

// })

const productValidateSchema = yup.object({
    name: yup
        .string()
        .trim()
        .required('product name is required'),

    description: yup
        .string()
        .trim()
        .required('product description is required'),


    price: yup
        .string()
        .trim()
        .required('product price is required'),

    category: yup
        .string()
        .trim()
        .required('product category is required'),

    image: yup.object({
        secure_url: yup
            .string()
            .required('Secure URL is required')
            .test('is-url', 'Invalid public URL format', isValidUrl),

        public_id: yup
            .string()
            .required('Public URL is required')
    }).required('Product main image is required'),

    subImage: yup
        .array()
        .optional()
})

export default productValidateSchema;