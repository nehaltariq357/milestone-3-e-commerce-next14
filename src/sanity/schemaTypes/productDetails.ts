import { defineField, defineType } from 'sanity'

export const productDetails = defineType({
    name: 'productDetails',
    title: 'ProductDetails',
    type: 'document',
    fields: [
        //for content 
        defineField({
            name: 'body',
            type: 'array',
            of: [{ type: 'block' }],
        }),

    ],
})