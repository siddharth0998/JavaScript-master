var x = -1;

const add = () => {
    console.log(x);
    if (x == -1) {
        const listArray = JSON.parse(localStorage.getItem("list")) || [];
        const obj = {
            list: document.getElementById("list").value,
        };
        listArray.push(obj);
        localStorage.setItem("list", JSON.stringify(listArray));
    }
    else {
        const listArray = JSON.parse(localStorage.getItem("list"));
        listArray[x].list = document.getElementById("list").value;
        localStorage.setItem("list", JSON.stringify(listArray));
        x = -1;
    }
    display();
    document.getElementById("list").value = "";
}

const display = () => {
    const listArray = JSON.parse(localStorage.getItem("list")) || [];
    document.getElementById("list_item").innerHTML = listArray.map((x, index) => {
        return `<p class="title">${x.list}</p>
    <div class="btn-container">
        <!-- edit btn -->
        <button type="button" class="edit-btn" onclick ="edit1(${index})">
            <i class="fas fa-edit"></i>
        </button>
        <!-- delete btn -->
        <button type="button" class="delete-btn" onclick ="delete1(${index})">
            <i class="fas fa-trash"></i>
        </button>
    </div>`
    }).join(" ")
}

const delete1 = (index) => {
    const listArray = JSON.parse(localStorage.getItem("list"));
    listArray.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(listArray));
    display();
}

const edit1 = (index) => {
    const listArray = JSON.parse(localStorage.getItem("list"));
    const editItem = listArray[index];

    document.getElementById("list").value = editItem.list;
    x = index;
    console.log(x);
}

const clearAll = () => {
    localStorage.clear();
    display();
}