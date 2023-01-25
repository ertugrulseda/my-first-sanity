export default {
    name: 'movie',
    title: 'movie',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name Of Movie',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string'
        },
        {
            name: 'poster',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'array',
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }]
                }
            ]
        },
        {
            name: 'actors',
            title: 'Actors',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'actors',
                            title: 'actors',
                            type: 'reference',
                            to: [{ type: 'actors' }]
                        }
                    ]
                }
            ]
        }
    ]
};