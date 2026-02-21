console.log("Alhamdulillah");


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