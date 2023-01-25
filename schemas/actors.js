export default {
    name: 'actors',
    title: 'actors',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'surname',
            title: 'Surname',
            type: 'string'
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'biography',
            title: 'Biography',
            type: 'array',
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }]
                }
            ]
        }
    ]
};