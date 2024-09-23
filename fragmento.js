
class BadMovieTag extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>BLABLABLABLABLA</p>
        `;
    }
}

customElements.define("BadMovieTag", BadMovieTag);