# Andrej Amelyanovich

## Junior Frontend Developer

## Contact information:
**Phone:** +37529 313-07-25

**E-mail:** amelyanovich.andrej@mail

**Telegram:** @andrej_amelyanovich

[Linkedin](https://www.linkedin.com/in/andrej-a-14061995/)

[GitHub](https://github.com/andrej-a)

## About me

I like to solve interesting tasks and to find answers for difficult questions myself, however do not afraid ask for help or advice. In all time of studying I`ve got two main problems: sometimes my code isn`t working and I don`t know why; and sometimes my code is working and I don`t know why.

## My skills

* HTML5/CSS3/SASS
* JavaScript
* React/React Hooks
* Git/ GitHub

## Code Example:

This is a function for getting some data for API and working with it.

``` 
const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res["data"]["results"].length > 0 ? _transformCharacter(res["data"]["results"][0], false) : [];
};

const _transformCharacter = (character, shortDescription = true) => {
    return {
        id: character.id,
        name: shortDescription ? doShortDescription(character.name, 20) : character.name,
        thumbnail: (character.thumbnail.path + `.${character.thumbnail.extension}`),
        description: (character.description === "" ? "Sorry, there is not description." : 
        shortDescription ? doShortDescription(character.description, 150) : character.description),
        homeLink: character.urls[0].url,
        wikiLink: character.urls[1].url,
        comics: doSpliceOfComics(character.comics.items, 10)
    };
};

```

## Work experience

I have finished next courses:

* [Полный курс по JavaScript + React](https://www.udemy.com/course/javascript_full/)

* [Практический JavaScript (Продвинутый уровень)](https://www.udemy.com/course/javascript_practice/)

![Certificate of ending](/rsschool-cv/Udemy JS serf.png)

And i have some studying projects:

[Heroku Marvel API](https://marvel-service-react-project.herokuapp.com/)

[Coffee shop](https://coffee-shop-react-project.herokuapp.com/)

The code of these projects you can watch in my GitHub like and some others ones too.

## Languages:

My Englis is in the range of A2 PRE-INTERMEDIATE to B1 INTERMEDIATE; however, according to the [Efset online-test](www.efset.org) it is from B1 INTERMEDIATE to B2 UPPER INTERMEDIATE 

![Screenshot of the result](/rsschool-cv/efset 2.jpg)

* Russian - Native


