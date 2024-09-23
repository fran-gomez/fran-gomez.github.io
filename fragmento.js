
class BadMovieTag extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<p>Star Wars: Episode IX - The Rise of Skywalker</p>`;
    }
}

customElements.define("bad-movie-tag-fgv", BadMovieTag);