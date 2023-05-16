const emojis = document.querySelectorAll(".emoji_box");

emojis.forEach((emojiBlock) => {
  let emoji = emojiBlock.querySelector(".emoji");
  let emoji_number = emojiBlock.querySelector(".emoji_number");

  emoji.addEventListener("click", function () {
    emoji_number.innerHTML = parseInt(emoji_number.innerHTML) + 1;
  });
});
