# Andrej Amelyanovich

## Junior Frontend Developer

## Contact information:
**Phone:** +37529 313-07-25

**E-mail:** amelyanovich.andrej@mail

**Telegram:** @andrej_amelyanovich

[Linkedin](https://www.linkedin.com/in/andrej-a-14061995/)

[GitHub](https://github.com/andrej-a)


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
* [Полный курс по JavaScript + React - с нуля до результата](https://www.udemy.com/course/javascript_full/)

![Certificate of ending](/rsschool-cv/Udemy JS serf.jpg)

* [Практический JavaScript (Продвинутый уровень)](https://www.udemy.com/course/javascript_practice/) 

