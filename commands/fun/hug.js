const images = ['https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif',
'https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif',
'https://i.imgur.com/cZWWATV.gif?noredirect',
'https://i.pinimg.com/originals/38/93/c1/3893c18b81ef6e070f6a1c3a2f469d9d.gif',
'https://media2.giphy.com/media/13YrHUvPzUUmkM/source.gif',
'https://78.media.tumblr.com/6f62d248bb6d8118d769ed1a31a2de21/tumblr_ncqwrnVGDR1tgj9dto1_500.gif',
'https://i.kym-cdn.com/photos/images/original/001/626/451/44e.gif',
'https://cdn.lowgif.com/full/5b46b49c1e9b1f61-anime-hugging-gif-www-pixshark-com-images-galleries.gif',
'https://media2.giphy.com/media/bVtGn2g1g3wMo/source.gif',
'https://data.whicdn.com/images/178185255/original.gif',
'https://gifimage.net/wp-content/uploads/2017/10/hugging-anime-gif-7.gif',
'https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075',
'https://media2.giphy.com/media/3bqtLDeiDtwhq/source.gif',
'https://media.tenor.com/images/eed8d1a51f647b4be696879a0ad6f1f1/tenor.gif',
'https://media1.tenor.com/images/c5b638dac95e6da9b27a888ad59052a2/tenor.gif?itemid=13284054',
'https://i.gifer.com/OWIx.gif',
'https://media3.giphy.com/media/lrr9rHuoJOE0w/source.gif',
'https://media1.tenor.com/images/1e3d7c489dbd31a4ba36062120b752d8/tenor.gif?itemid=13871425',
'https://data.whicdn.com/images/219995514/original.gif',
'https://i.pinimg.com/originals/7d/b5/f1/7db5f172665f5a64c1a5ebe0fd4cfec8.gif',
'https://www.outlawstarnex.us/attachments/f60/932d1498689181-attractive-anime-characters-hug-gif',
'https://i.imgur.com/FCXa6Gx.gif',
'https://pa1.narvii.com/6358/6c46ebab172557755f88808b7650014c4d19ef95_hq.gif',
'https://data.whicdn.com/images/173225696/original.gif',
'https://i.pinimg.com/originals/e5/89/09/e58909a9fe5a7173415c0474f9e43ab6.gif',
'https://steamuserimages-a.akamaihd.net/ugc/965356740264034178/43C09317BB276AB9A706A142F8B2242DA5A94917/',
'https://media1.giphy.com/media/ShAchOHe38Aak/source.gif',
'https://pa1.narvii.com/6757/cc32159df3ccb86eeb60c491a48264972777bbfc_hq.gif',
'https://38.media.tumblr.com/e9e7014b0a4411dd4f3d276c4a89727a/tumblr_nlnq8yfBgR1spbzvvo1_500.gif',
'https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432',
'https://img-comment-fun.9cache.com/media/ao00MK2/aL91XY9P_700wa_0.gif',
'https://i.kym-cdn.com/photos/images/original/000/935/627/3a5.gif',
'https://i.pinimg.com/originals/93/09/32/930932df483a048c1f15a65f19e97b36.gif',
'https://thumbs.gfycat.com/WindyRealGreendarnerdragonfly-small.gif',
'https://cdn.myanimelist.net/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif',
'https://i.kym-cdn.com/photos/images/original/001/266/481/075.gif',
'https://pm1.narvii.com/5770/b59d1cb282bdf56be20bd747336f5f9d3aabffd1_hq.jpg',
'https://i.gifer.com/Ulna.gif',
'https://thumbs.gfycat.com/ThickAmusedBarb-small.gif',
'https://i.pinimg.com/originals/40/ac/24/40ac24c2cc6feaba1faaad85b3c3a69e.gif',
'https://i.kym-cdn.com/photos/images/newsfeed/000/559/700/d42.gif',
'https://data.whicdn.com/images/320687848/original.gif',
'https://66.media.tumblr.com/6472abfa5f2f788df22ddf18ab67f3f8/tumblr_ohh70vcKaY1r0hbg3o1_540.gifv',
'https://pa1.narvii.com/6213/939afbf818d8fa3de450c391b566a54ea50ae398_hq.gif',
'https://media.giphy.com/media/sLA17korcDnz2/giphy.gif',
'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
'https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788',
'https://data.whicdn.com/images/284494639/original.gif',
'https://i.pinimg.com/originals/bd/a9/ed/bda9ed0b7debc19f15822d197ebcb413.gif',
'https://i.pinimg.com/originals/70/be/4c/70be4cb505a22a5556adedbf8bdb0db6.gif',
'https://media1.tenor.com/images/84980520e680ea68fea9adf2c0e2ff9e/tenor.gif?itemid=9803078',
'https://media.tenor.com/images/aab83bd3725feeaccb9929f8ca964db9/tenor.gif',
'https://media1.giphy.com/media/qscdhWs5o3yb6/giphy.gif'];
module.exports = {
	run: function (message){
		if(message.mentions.users.first())
            message.channel.send('', {embed: {
                title:`${message.mentions.users.first().username} has been hugged by ${message.author.username}`,
                color: 0xff80cc,
                image: {
					url: images[Math.floor(Math.random()*images.length)]
				}
            }});
        else
            message.channel.send('', {embed: {
				title:'An error has occurred',
				description: 'it appears the person you have tried to hug does not exist.',
                color: 0xff0000
            }});
	},
	description: 'Hugs a user',
	detailed: 'Hugs first mentioned user',
	examples: prefix => `${prefix}hug @someone`,
	name: 'hug',
	perms: null,
};