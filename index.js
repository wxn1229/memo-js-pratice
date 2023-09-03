const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

function addList() {
  addedBtn.addEventListener('click', function() {
    //  console.log(content.value)
    //  console.log(date.value)
    //  console.log(time.value)

    listContent.push({
      content: content.value,
      date: date.value,
      time: time.value

    })



    console.log(listContent)

    content.value = ''
    date.value = ''
    time.value = ''

    render()
  })
}

function render() {
  let itemHtml = ''
  listContent.forEach(function(item) {
    itemHtml += `
      <div class="item">
        <div>
          <p>內容：${item.content}</p>
          <p>時間：${item.date} ${item.time}</p>
        </div>
      </div>
      `

  })

  list.innerHTML = itemHtml

  console.log('list')
}



// main

addList()


























