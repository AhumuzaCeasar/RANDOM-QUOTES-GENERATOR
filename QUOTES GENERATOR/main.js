//QUOTES TO GENERATE
let Myquotes=[
    {
        quote:"“If your actions inspire others to dream more, learn more, do more and become more, you are a leader.”",
        person:"John Quincy Adams"
    },
    {
        quote:"If you think you can do a thing or think you can’t do a thing, you’re right.",
        person:"Henry Ford"
    },
    {
        quote:"The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires",
        person:"William Arthur"
    },
    {
        quote:"You can speak well if your tongue can deliver the message of your heart",
        person:"John Ford"
    },
    {
        quote:"Be still when you have nothing to say; when genuine passion moves you, say what you’ve got to say, and say it hot.",
        person:"D. H. Lawrence  "
    },
    {
        quote:"He who wants to persuade should put his trust not in the right argument, but in the right word. The power of sound has always been greater than the power of sense.",
        person:"Joseph Conrad"
    },
    {
        quote:"Best way to conquer stage fright is to know what you’re talking about.",
        person:"Michael H. Mescon  "
    },
    {
        quote:"The problem with speeches isn’t so much not knowing when to stop, as knowing when not to begin.",
        person:"Frances Rodman "
    },
    {
        quote:"Speakers who talk about what life has taught them never fail to keep the attention of their listeners.",
        person:"Dale Carnegie "
    },
    {
        quote:"It is not failure itself that holds you back; it is the fear of failure that paralyzes you.",
        person:"Brian Tracy "
    },

    {
        quote:"All you need is something to say, and a burning desire to say it… it doesn’t matter where your hands are.",
        person:"Andrii Sedniev "
    },

    {
        quote:"Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.",
        person:"Dale Carnegie"
    }

]











//function to select the quotes and pass them to the body of the document
document.getElementById('btn').onclick= function(){
    let randomquote=Math.floor(Math.random()*Myquotes.length);
    let quotediv=document.querySelector('.quotes');
quotediv.innerHTML=Myquotes[randomquote].quote;

let persondiv=document.querySelector('.person');
persondiv.innerHTML=Myquotes[randomquote].person;
    
}
