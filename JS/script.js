console.log("Alhamdulillah");

function getById(id)
{
    const element = document.getElementById(id);
    return element;
}


const buttonAll = document.getElementById('btn-all');
// console.log(buttonAll.classList);

const buttonInterviewPage = document.getElementById('btn-interview-page');
// console.log(buttonInterviewPage);

const buttonRejectedPage = document.getElementById('btn-rejected-page');

// console.log(buttonRejectedPage);

function btnAnimation(id)
{
    if(id=='btn-all')
    {
        buttonInterviewPage.classList.remove('bg-blue-500', 'text-white');
        buttonRejectedPage.classList.remove('bg-blue-500','text-white');
        buttonAll.classList.add('bg-blue-500', 'text-white');
    }

    else if(id=='btn-interview-page')
    {
        buttonInterviewPage.classList.add('bg-blue-500', 'text-white');
        buttonRejectedPage.classList.remove('bg-blue-500','text-white');
        buttonAll.classList.remove('bg-blue-500','text-white');

    }
    else if(id=='btn-rejected-page')
    { 
        buttonInterviewPage.classList.remove('bg-blue-500', 'text-white');
        buttonRejectedPage.classList.add('bg-blue-500', 'text-white');
        buttonAll.classList.remove('bg-blue-500');

    }
}

const allContainer = getById('all-card-container');


let allCardCount = getById('total-count');
let littleCount = getById('little-count');

countSetter();

function countSetter()
{
    console.log("count setter Running!");

    const count = allContainer.children.length;

    allCardCount.innerText = count;
    littleCount.innerText = count;

    if(count === 0)
    {
        console.log("The section is now empty!");

        let noJobSection = getById('no-job');
        noJobSection.classList.remove('hidden');

    }
}

// Delete Button Functionality

const delete_buttons = document.querySelectorAll('.delete');

// console.log(delete_buttons);

for(let deleteButton of delete_buttons)
{
    deleteButton.addEventListener('click',function()
    {
        deleteButton.parentElement.remove();
        countSetter();
    })
}







