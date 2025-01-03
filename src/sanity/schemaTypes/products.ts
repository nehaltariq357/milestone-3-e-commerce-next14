import { defineField, defineType } from 'sanity'

export const products = defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        //title
        defineField({
            title:"Product",
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        // title slug for dynamic page
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'productTitle' },
            validation: (rule) => rule.required(),
        }),
        // product listing image 
        defineField({
            title: "ProductImage",
            name: 'productImage',
            type: 'image',
        }),
       ///summary filed
    defineField({
        name: "summary",
        type: "text",
        title: "Summary",
        validation: (Rule) => Rule.required(),
      }),
        // for price
        defineField({
            title: "Price",
            name: 'price',
            type: 'number',
        }),
          //for content 
          defineField({
            name: 'body',
            type: 'array',
            of: [{ type: 'block' }],
        }),
       // import product detail schema in products , is called referece
        // defineField({
        //     name:"productDetails",
        //     type:"reference",
        //     title:"ProductDetails",
        //     to:[{
        //       type:"productDetails"
        //     }]
        //   })
    ],
})