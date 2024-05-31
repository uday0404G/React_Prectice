import './App.css'
function Footer(){
    return(
<div>
<div class="cu">
        <p>How can you communicate?</p>
        <h1>Contact Me</h1>
        <div class="form">
            <form action="">
                <input type="text" placeholder="FULL NAME"/>
                <input id="ph" type="email" placeholder="Email"/>
            </form>
        </div>
        <div class="wr">
            <form action="">
                 <input id="msg" type="text" placeholder="Write Something"/>
            </form>
        </div>


    </div>
    <div class="buc">
        <button id="buc">Send Message</button>
    </div>
    
    
    <div class="foot">
        <p>Copyright 2023 © DevCRUD</p>
    </div>
</div>
    )
}

export default Footer