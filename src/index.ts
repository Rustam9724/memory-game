import './styles/style.scss';

const cards: HTMLDivElement[] = Array.from(document.querySelectorAll('.card'));
let classes = ['bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers', 'bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers'];
let pairs: string[] = [];
let openCards: string[] = [];

function cardRandomDistrib() {
    cards.forEach(card => {
        const num = Math.floor(Math.random() * (classes.length));
        card.classList.add(classes[num]);
        classes.splice(num, 1);
    })
}

window.addEventListener('load', cardRandomDistrib);

cards.forEach(card => {
    card.addEventListener('click', function(this: HTMLDivElement) {
        if (!card.classList.contains('inverted')) {
            this.style.animation = 'turning ease-out 850ms forwards';
            pairs.push(card.className);
            setTimeout(() => {
                this.classList.add('inverted');
            }, 300)
        }
    })
})

cards.forEach(card => {
    card.addEventListener('click', function(this: HTMLDivElement) {
            if (pairs.length % 2 === 0) {
                if (pairs.length !== 0) {
                    cards.forEach(card => {
                        card.style.pointerEvents = 'none';
                    })
                    setTimeout(() => {
                        cards.forEach(card => {
                            card.style.pointerEvents = 'auto';
                        })
                    }, 1150)
                }
                if (pairs[pairs.length - 1] !== pairs[pairs.length - 2]) {
                    setTimeout(() => {
                        cards.map(elem => {
                            if ((elem.classList.contains(pairs[pairs.length - 1].slice(5)) || elem.classList.contains(pairs[pairs.length - 2].slice(5))) && elem.classList.contains('inverted')) {
                                elem.style.animation = 'turningBack ease-out 850ms forwards'
                                setTimeout(() => {
                                    elem.classList.remove('inverted');
                                }, 300)
                            }
                        })
                    }, 1000)
                } else {
                    openCards.push(pairs[pairs.length - 1].slice(5));
                    if (openCards.length === 10) {
                        setTimeout(() => {
                            cards.map(elem => {
                                elem.style.animation = 'turningBack ease-out 850ms forwards'
                                elem.className = 'card';
                                pairs = [];
                                openCards = [];
                                classes = ['bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers', 'bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers'];
                            })
                            cardRandomDistrib();
                        }, 1500)
                    }
                }
            }
    })
})