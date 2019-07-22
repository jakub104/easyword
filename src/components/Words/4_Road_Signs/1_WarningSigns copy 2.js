const words1_WarningSigns = [
    {
        word: `A-1`,
        translation: `niebezpieczny zakręt w prawo`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Znak_A-1.svg/800px-Znak_A-1.svg.png`,
    },
    {
        word: `A-2`,
        translation: `niebezpieczny zakręt w lewo`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Znak_A-2.svg/800px-Znak_A-2.svg.png`,
    },
    {
        word: `A-3`,
        translation: `niebezpieczne zakręty — pierwszy w prawo`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Znak_A-3.svg/800px-Znak_A-3.svg.png`,
    },
    {
        word: `A-4`,
        translation: `niebezpieczne zakręty — pierwszy w lewo`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Znak_A-4.svg/800px-Znak_A-4.svg.png`,
    },
    {
        word: `A-5`,
        translation: `skrzyżowanie dróg`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Znak_A-5.svg/800px-Znak_A-5.svg.png`,
    },
    {
        word: `A-6a`,
        translation: `skrzyżowanie z drogą podporządkowaną występującą po obu stronach`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Znak_A-6a.svg/800px-Znak_A-6a.svg.png`,
    },
    {
        word: `A-6b`,
        translation: `skrzyżowanie z drogą podporządkowaną występującą po prawej stronie`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Znak_A-6b.svg/800px-Znak_A-6b.svg.png`,
    },
    {
        word: `A-6c`,
        translation: `skrzyżowanie z drogą podporządkowaną występującą po lewej stronie`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Znak_A-6c.svg/800px-Znak_A-6c.svg.png`,
    },
    {
        word: `A-6d`,
        translation: `wlot drogi jednokierunkowej z prawej strony`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Znak_A-6d.svg/800px-Znak_A-6d.svg.png`,
    },
    {
        word: `A-6e`,
        translation: `wlot drogi jednokierunkowej z lewej strony`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Znak_A-6e.svg/800px-Znak_A-6e.svg.png`,
    },
    {
        word: `A-7`,
        translation: `ustąp pierwszeństwa`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Znak_A-7.svg/800px-Znak_A-7.svg.png`,
    },
    {
        word: `A-8`,
        translation: `skrzyżowanie o ruchu okrężnym`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Znak_A-8.svg/800px-Znak_A-8.svg.png`,
    },
    {
        word: `A-9`,
        translation: `przejazd kolejowy z zaporami`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Znak_A-9.svg/800px-Znak_A-9.svg.png`,
    },
    {
        word: `A-10`,
        translation: `przejazd kolejowy bez zapór`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Znak_A-10.svg/800px-Znak_A-10.svg.png`,
    },
    {
        word: `A-11`,
        translation: `nierówna droga`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Znak_A-11.svg/800px-Znak_A-11.svg.png`,
    },
    {
        word: `A-11a`,
        translation: `próg zwalniający`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Znak_A-11a.svg/800px-Znak_A-11a.svg.png`,
    },
    {
        word: `A-12a`,
        translation: `zwężenie jezdni — dwustronne`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Znak_A-12a.svg/800px-Znak_A-12a.svg.png`,
    },
    {
        word: `A-12b`,
        translation: `zwężenie jezdni — prawostronne`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Znak_A-12b.svg/800px-Znak_A-12b.svg.png`,
    },
    {
        word: `A-12c`,
        translation: `zwężenie jezdni — lewostronne`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Znak_A-12c.svg/800px-Znak_A-12c.svg.png`,
    },
    {
        word: `A-13`,
        translation: `ruchomy most`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Znak_A-13.svg/800px-Znak_A-13.svg.png`,
    },
    {
        word: `A-14`,
        translation: `roboty na drodze`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Znak_A-14.svg/800px-Znak_A-14.svg.png`,
    },
    {
        word: `A-15`,
        translation: `śliska jezdnia`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Znak_A-15.svg/800px-Znak_A-15.svg.png`,
    },
    {
        word: `A-16`,
        translation: `przejście dla pieszych`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Znak_A-16.svg/800px-Znak_A-16.svg.png`,
    },
    {
        word: `A-17`,
        translation: `dzieci`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Znak_A-17.svg/800px-Znak_A-17.svg.png`,
    },
    {
        word: `A-18a`,
        translation: `zwierzęta gospodarskie`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Znak_A-18a.svg/800px-Znak_A-18a.svg.png`,
    },
    {
        word: `A-18b`,
        translation: `zwierzęta dzikie`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Znak_A-18b.svg/800px-Znak_A-18b.svg.png`,
    },
    {
        word: `A-19`,
        translation: `boczny wiatr`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Znak_A-19.svg/800px-Znak_A-19.svg.png`,
    },
    {
        word: `A-20`,
        translation: `odcinek jezdni o ruchu dwukierunkowym`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Znak_A-20.svg/800px-Znak_A-20.svg.png`,
    },
    {
        word: `A-21`,
        translation: `tramwaj`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Znak_A-21.svg/800px-Znak_A-21.svg.png`,
    },
    {
        word: `A-22`,
        translation: `niebezpieczny zjazd`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Znak_A-22.svg/800px-Znak_A-22.svg.png`,
    },
    {
        word: `A-23`,
        translation: `stromy podjazd`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Znak_A-23.svg/800px-Znak_A-23.svg.png`,
    },
    {
        word: `A-24`,
        translation: `rowerzyści`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Znak_A-24.svg/800px-Znak_A-24.svg.png`,
    },
    {
        word: `A-25`,
        translation: `spadające odłamki skalne`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Znak_A-25.svg/800px-Znak_A-25.svg.png`,
    },
    {
        word: `A-26`,
        translation: `lotnisko`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Znak_A-26.svg/800px-Znak_A-26.svg.png`,
    },
    {
        word: `A-27`,
        translation: `nabrzeże lub brzeg rzeki`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Znak_A-27.svg/800px-Znak_A-27.svg.png`,
    },
    {
        word: `A-28`,
        translation: `sypki żwir`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Znak_A-28.svg/800px-Znak_A-28.svg.png`,
    },
    {
        word: `A-29`,
        translation: `sygnały świetlne`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Znak_A-29.svg/800px-Znak_A-29.svg.png`,
    },
    {
        word: `A-30`,
        translation: `inne niebezpieczeństwo`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Znak_A-30.svg/800px-Znak_A-30.svg.png`,
    },
    {
        word: `A-31`,
        translation: `niebezpieczne pobocze`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Znak_A-31.svg/800px-Znak_A-31.svg.png`,
    },
    {
        word: `A-32`,
        translation: `oszronienie jezdni`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Znak_A-32.svg/800px-Znak_A-32.svg.png`,
    },
    {
        word: `A-33`,
        translation: `zator drogowy`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Znak_A-33.svg/800px-Znak_A-33.svg.png`,
    },
    {
        word: `A-34`,
        translation: `wypadek drogowy`,
        type: `znaki ostrzegawcze`,
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Znak_A-34.svg/800px-Znak_A-34.svg.png`,
    }
]

export default words1_WarningSigns