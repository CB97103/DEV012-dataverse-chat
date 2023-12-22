export const chatIA = () => {
  const htmlChatIA = `<div class="chatContainer">
    <div class="chatBox"> 
    <section class="user">
    <img src="../media/logokaonashi.png" alt="Kaonashi">
    <h4> Kaonashi Movies</h4> 
    </section>
    <section class="chats">
    <section class="messagesUser">
    <p class="chatUser">Hola</p>
    </section>
    <section class="messagesIA">
    <p class="chatIA">Hola</p>
    </section>
    </section>
    <form class="chatInputForm">
     <input type="text" placeholder="Ingrese su mensaje"/>
     <button type="submit"class="sendButton">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR9JREFUSEu91bErRlEcxvHPu9nYkMlAlDKYjPwHLJRSGPhL3kgmC1aKSVYpk0EWK7IpTEZKQqfO8Ha73nvey3HqTuf3e773Off8ntuQeTUy6/t3wCkmsB2fl986LDp4RH8UfcUuNvFUF1QEHGK+IPaOfazjvlNQEbCKnR9EPnGMJq5TQUXAMG4Tms+io/Oq2rJbFM67r6ox7l9F0Am+ynrKAANYxhIGE0E32MABPlp72s1B2JvGCmbQlQB7wBb28BbqUwetBwtYw1gCKDga7QTQjcXoZjwBcInJKkBwNxVFZ//yiLJ/5Gf0JhxDKOn4mg7hLkG89qBlj4ojzOUMu9aYCHEdBibEdYjxWqs4aBcYyfnDqfWW7ZpSo6I2ODvgG25NQBmsclT9AAAAAElFTkSuQmCC"/>
   </button>  
   </form>
   </div>
      </div>`; //template string
  const nodoChatIA = document.createElement("section"); //Nodo
  nodoChatIA.innerHTML = htmlChatIA;
  nodoChatIA.classList.add("chatIA");

  const chatMessages = (message) =>`<section class="chats">
  <section class="messagesUser">
  <p class="chatUser">Hola</p>
  </section>
  <section class="messagesIA">
  <p class="chatIA">Hola</p>
  </section>`

  return nodoChatIA;
};
