 const form = document.getElementById("commentForm");
  const errorBox = document.getElementById("error");
   const commentsSection = document.getElementById("comments");
  form.addEventListener("submit", function (event) {
 event.preventDefault();
  const title = document.getElementById("titleInput").value.trim();
   const textColor = document.getElementById("textColorSelect").value;
    const bgColor = document.getElementById("bgColorSelect").value;
     const icon = document.querySelector('input[name="icon"]:checked').value;
      const message = document.getElementById("messageInput").value.trim();
       if (title === "" || textColor === "" || bgColor === "" || message === "") {
 errorBox.textContent = "Please fill out every field before posting.";
  errorBox.classList.remove("hidden");
   return;
}
 errorBox.classList.add("hidden");
  addComment(title, textColor, bgColor, icon, message);
   form.reset();
});
 function  addComment(title, textColor, bgColor, icon, message) {
 const card = document.createElement("article");
 card.className = "bg-white rounded-xl shadow p-4 flex flex-col gap-2";
  const html = `
 <div class="flex items-center justify-between">
 <div class="flex items-center gap-2">
 <span class="text-xl">${icon}</span>
  <span class="font-bold">${title}</span>
 </div>
 <button class="deleteBtn text-slate-400 hover:text-red-500" aria-label="Delete comment">✕</button>
 </div>
  <p class="${textColor} ${bgColor} rounded-lg p-2">${message}</p>
 `;
  card.innerHTML = html;
   commentsSection.prepend(card);
}
commentsSection.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    const card = event.target.closest("article");
    if (card) {
      card.remove();
    }
  }
});