// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
const answers = {
    pronouns: [
        { ch: '我', en: 'me&nbsp;/&nbsp;I', },
        { ch: '你', en: 'you', }, 
        { ch: '他', en: 'he&nbsp;/&nbsp;him', }, 
        { ch: '她', en: 'she', }, 
        { ch: '它', en: 'it', },

        { ch: '我们', en: 'us', }, 
        { ch: '你们', en: 'you [all&nbsp;/&nbsp;guys&nbsp;/&nbsp;girls&nbsp;/&nbsp;etc.] (没有直接翻译)', }, 
        { ch: '他们&nbsp;/&nbsp;她们&nbsp;/&nbsp;它们', en: 'they&nbsp;/&nbsp;them', }, 
        
        { ch: '我的', en: 'mine', }, 
        { ch: '你的', en: 'your&nbsp;/&nbsp;yours', }, 
        { ch: '他的', en: 'his', }, 
        { ch: '她的', en: 'her&nbsp;/&nbsp;hers', }, 
        { ch: '它的', en: 'it\'s', },
        
        { ch: '我们的', en: 'our&nbsp;/&nbsp;ours', }, 
        { ch: '你们的', en: 'all that have (没有直接翻译)', },
        { ch: '他们的&nbsp;/&nbsp;她们的&nbsp;/&nbsp;它们的', en: 'their&nbsp;/&nbsp;theirs', }, 
        
        { ch: '我自己', en: 'myself', },
        { ch: '他自己', en: 'himself', },
        { ch: '她自己', en: 'herself', },
        { ch: '它自己', en: 'itself', },
        { ch: '你自己', en: 'yourself', },

        { ch: '我们自己', en: 'ourself&nbsp;/&nbsp;ourselves', },
        { ch: '你们自己', en: 'yourselves', },
        { ch: '他们自己&nbsp;/&nbsp;他们自己&nbsp;/&nbsp;它们自己', en: 'themself&nbsp;/&nbsp;themselves&nbsp;/&nbsp;theirself&nbsp;/&nbsp;theirselves', },

        { ch: '所有', en: 'all', },
        { ch: '另一个', en: 'another', },
        { ch: '任何', en: 'any', },
        { ch: '任何人', en: 'anybody&nbsp;/&nbsp;anyone', },
        { ch: '任何东西', en: 'anything', },
        { ch: '彼此', en: 'each other', },
        { ch: '大家', en: 'everybody&nbsp;/&nbsp;everyone', },
        { ch: '一切', en: 'everything', },

        { ch: '他人', en: 'other&nbsp;/&nbsp;others', },
        { ch: '一些', en: 'some', },
        { ch: '某人', en: 'someone&nbsp;/&nbsp;somebody', },
        { ch: '某事', en: 'something', },
        { ch: '这', en: 'this', },
        { ch: '那', en: 'that', },
        { ch: '这些', en: 'these', },
        { ch: '那些', en: 'those', },
        
        // nobody
        // couple
        // few
        // many
        // me
        // most
        // one
        // one another
        // several
        // thee
        // thine
        // thou
        // thy
        // thyself
        // what
        // whatever
        // whatnot
        // whatsoever
        // whence
        // where
        // whereby
        // wherefrom
        // wherein
        // whereinto
        // whereof
        // whereon
        // wherever
        // wheresoever
        // whereto
        // whereunto
        // wherewith
        // wherewithal
        // whether
        // which
        // whichever
        // whichsoever
        // who
        // whoever
        // whom
        // whomever
        // whomso
        // whomsoever
        // whose
        // whosever
        // whosesoever
        // whoso
        // whosoever
        // ye
        // yon
        // yonder
    ]
}

for (let prop in answers) {
    for (let i = 0, length = answers[prop].length; i < length; i++) {
        answers[prop][i].audio = `
            <button type="button" onclick="document.querySelector(\`[src='./english/${(() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').toLowerCase())()}.mp3']\`).play()">
                &#9654;
                <audio preload="none" src="./english/${(() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').toLowerCase())()}.mp3"></audio>
            </button>
        `
    }
}

// INDICATE MALE AND FEMALE AND FORMAL AND POLITE






