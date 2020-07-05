const bares = [
    {
        "title": "Bar do Rock",
        "logo": "~/images/bares/rock.png",
        "capa": "~/images/bares/generico0.jpg",
        "onlineusers": 115
    },
    {
        "title": "Boteco de Esquina",
        "logo": "~/images/bares/sinuca.png",
        "capa": "~/images/bares/generico2.jpg",
        "onlineusers": 89
    },
    {
        "title": "Caravana's Bar",
        "logo": "~/images/bares/chop.png",
        "capa": "~/images/bares/generico1.jpg",
        "onlineusers": 57
    },
    {
        "title": "Bar do Geek",
        "logo": "~/images/bares/bruxo.png",
        "capa": "~/images/bares/generico2.jpg",
        "onlineusers": 70
    },
    {
        "title": "Drinks de Verão",
        "logo": "~/images/bares/praia.png",
        "capa": "~/images/bares/generico1.jpg",
        "onlineusers": 99
    }
]

const people = [{
    avatar: '~/images/people/1.jpg',
    name: 'Alicia M.'
},{
    avatar: '~/images/ico-invite.png',
    name: 'Alicia M.'
},
{
    avatar: '~/images/people/3.jpg',
    name: 'Pedro H.'
},
{
    avatar: '~/images/people/4.jpg',
    name: 'Marcos A.'
},
{
    avatar: '~/images/people/5.jpg',
    name: 'Gabriela K.'
},
{
    avatar: '~/images/people/6.jpg',
    name: 'Ronald R.'
},
{
    avatar: '~/images/people/7.jpg',
    name: 'Chalie J.'
},
{
    avatar: '~/images/people/8.jpg',
    name: 'Claude D.'
},
{
    avatar: '~/images/people/9.jpg',
    name: 'Milena L.'
},
{
    avatar: '~/images/people/10.jpg',
    name: 'Katarine O.'
},
{
    avatar: '~/images/people/11.jpg',
    name: 'Paulo R.'
},
{
    avatar: '~/images/people/12.jpg',
    name: 'Lucas P.'
},
{
    avatar: '~/images/people/13.jpg',
    name: 'Micael F.'
},
{
    avatar: '~/images/people/14.jpg',
    name: 'Matheus A.'
}
]

const barTables = [
    {
        "name": "Mesa 1",
        "members": people.slice(1, 3).reverse()
    },
    {
        "name": "Mesa 2",
        "members": people.slice(3, 8)
    },
    {
        "name": "Mesa 3",
        "members": people.slice(8,13),
        "private": true
    },
    {
        "name": "Mesa 4",
        "members": people.slice(13)
    }
]

module.exports = { bares, barTables }