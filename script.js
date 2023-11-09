document.addEventListener('DOMContentLoaded', function () {
    const listcontainer = document.getElementById('ListContainer');
    const searching = document.getElementById('search');

    function LoadData(element) {
        const emoji = document.createElement('div');
        emoji.innerHTML = element.emoji;
        emoji.classList.add('Emoji', 'size-change');
        const aliases = document.createElement('div');
        aliases.innerText = element.aliases.join(" , ");
        aliases.classList.add('aliases');
        const description = document.createElement('description');
        description.innerHTML = element.description;
        description.classList.add('description');
        const listItem = document.createElement('div');
        listItem.classList.add('list-item', 'fade-in');
        listItem.append(emoji, aliases, description);
        listcontainer.append(listItem);

        const randomDelay = Math.random() * 2;
        emoji.style.animationDelay = `${randomDelay}s`;

        if (Math.random() < 0.1) {
            emoji.classList.add('pop-out');
        }
    }

    function emojiswehave(emojiLister) {
        emojiLister.forEach((event) => {
            LoadData(event);
        });
    }

    emojiswehave(emojiList);

    searching.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        listcontainer.innerHTML = "";

        if (searchTerm.trim() === "") {
            emojiswehave(emojiList);
        } else {
            const filteredItems = emojiList.filter((element) => {
                return (
                    element.description.toLowerCase().includes(searchTerm) ||
                    element.aliases.toString().toLowerCase().includes(searchTerm) ||
                    element.tags.toString().toLowerCase().includes(searchTerm) ||
                    element.category.toLowerCase().includes(searchTerm)
                );
            });

            filteredItems.forEach((eve) => {
                LoadData(eve);
            });
        }
    });
});
