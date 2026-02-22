console.log("Alhamdulillah");


function getById(id)
{
    const element = document.getElementById(id);
    return element;
}

let interviewList =[];
let rejectList = [];
renderInterview();
renderRejected();


const buttonAll = document.getElementById('btn-all');
// console.log(buttonAll.classList);

const buttonInterviewPage = document.getElementById('btn-interview-page');
// console.log(buttonInterviewPage);

const buttonRejectedPage = document.getElementById('btn-rejected-page');

// console.log(buttonRejectedPage);


        const ltlAll = getById('littleAll');
        const liInterview = getById('littleInterview');
        const liReject = getById('littleReject');

    function littleCountSetter(id)
    {

        ltlAll.classList.add('hidden');
        liInterview.classList.add('hidden');
        liReject.classList.add('hidden');


        const currentSection = getById(id);

        currentSection.classList.remove('hidden');
    }








function btnAnimation(id)
{
    const all_card_container = getById('all-card-container');
    const intervew_card_container = getById('interview-section');
    const rejectCardContainer = getById('rejected-section');

    buttonAll.classList.remove('bg-blue-500', 'text-white');
    buttonInterviewPage.classList.remove('bg-blue-500', 'text-white');
    buttonRejectedPage.classList.remove('bg-blue-500', 'text-white');

    const clickedBtn = getById(id);

    clickedBtn.classList.add('bg-blue-500','text-white');

    

    if(id=='btn-all')
    {
        all_card_container.classList.remove('hidden');
        intervew_card_container.classList.add('hidden');
        rejectCardContainer.classList.add('hidden');

        littleCountSetter('littleAll');

    }

    else if(id=='btn-interview-page')
    {
        all_card_container.classList.add('hidden');
        intervew_card_container.classList.remove('hidden');
        rejectCardContainer.classList.add('hidden');

        littleCountSetter('littleInterview');

        

        
    }
    else if(id=='btn-rejected-page')
    { 

        all_card_container.classList.add('hidden');
        intervew_card_container.classList.add('hidden');
        rejectCardContainer.classList.remove('hidden');

        littleCountSetter('littleReject');

       
        
    }
}

const allContainer = getById('all-card-container');

let allCardCount = getById('total-count');
let forLittle=0;
countSetter();
countInterview();
countRejected()
function countSetter()
{
    console.log("count setter Running!");

    const count = allContainer.children.length;
    forLittle=count;

    allCardCount.innerText = count;

    if(count === 0)
    {
        console.log("The section is now empty!");

        let noJobSection = getById('no-job');
        noJobSection.classList.remove('hidden');

        let intervew_noJob = getById('no-interview');
        let reject_noJob =getById('no-rejected');

        intervew_noJob.classList.add('hidden');
        reject_noJob.classList.add('hidden');
    

    }
    ltlAll.innerHTML=`<p id="littleAll" class="">${count} Jobs</p>`
}

function countInterview()
{
    let interview_count = interviewList.length;
    // console.log(interview_count);
    document.getElementById('interview-count').innerText=interview_count;

    const count = allContainer.children.length;


    liInterview.innerHTML=`<p id="littleInterview" class="">${interview_count} of ${count} Jobs</p>`
}

function countRejected()
{
    const rejectedCount = rejectList.length;
    getById('rejected_count').innerText = rejectedCount;

    const count = allContainer.children.length;


    liReject.innerHTML=`<p id="littleInterview" class="">${rejectedCount} of ${count} Jobs</p>`
}





const mainContainer = document.querySelector("main");

// console.log(mainContainer);

mainContainer.addEventListener('click', function(event)
{

    // console.log(event.target);

   if(event.target.classList.contains('btn-interview'))
   {
    const baap = event.target.parentNode.parentNode;
    // console.log(baap);

    const companyName = baap.querySelector('.company-name').innerText;
    // console.log(companyName);

    const jobRole = baap.querySelector('.job-role').innerText;
    // console.log(jobRole);

    const jobSalary = baap.querySelector('.job-salary').innerText;
    // console.log(jobSalary);

    const jobTitle = baap.querySelector('.job-title').innerText;
    // console.log(jobTitle);

    const badge = baap.querySelector('.status-badge');
    // console.log(badge);

    let cardInfo = 
    {
        companyName,
        jobRole,
        jobSalary,
        badge,
        jobTitle
    };


    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectList = rejectList.filter(item => item.companyName !== companyName);

    interviewList.push(cardInfo);

    const allCards = document.querySelectorAll('.card');


    for(let card of allCards)
    {
        const name = card.querySelector('.company-name').innerText;

        if(name === companyName)
        {
            const all_section_Badge = card.querySelector('.status-badge');

            card.classList.remove('bg-white','bg-red-50','border-red-600');
            card.classList.add('bg-green-50','border-l-5','border-green-600');

            all_section_Badge.innerText = "Interview";

        
            all_section_Badge.classList.add('bg-green-300','text-green-800','border-4','border-green-700','font-bold','text-md');
            all_section_Badge.classList.remove('bg-red-300','text-red-800','border-2','border-red-500');
        }
    }
    renderInterview();
    renderRejected();
    countInterview();
    countRejected();
}

   else if(event.target.classList.contains('btn-rejected'))
   {
    const baap = event.target.parentNode.parentNode;

    const companyName=baap.querySelector('.company-name').innerText;
    // console.log(companyName);
    const jobRole= baap.querySelector('.job-role').innerText;
    // console.log(jobRole);

    const jobSalary =baap.querySelector('.job-salary').innerText;
    // console.log(jobSalary);

    const badge =baap.querySelector('.status-badge');
    // console.log(badge);

    const jobTitle =baap.querySelector('.job-title').innerText;
    // console.log(jobTitle);

    let cardInfo = 
    {
        companyName,
        jobRole,
        jobSalary,
        badge,
        jobTitle,
    };

    // intervew list e thakte parbe na, tw amake interview list theke khali korte hobe
    interviewList = interviewList.filter(item => item.companyName !== companyName);

    // rejected list e jodi theke thake setao remove kore diye notun kore rakhbo
    // tahole ar if else diye check korte hobe na.
    rejectList = rejectList.filter(item => item.companyName !== companyName);
    rejectList.push(cardInfo);

    // ebar main section er badge update korte hobe . 

    const allCards = document.querySelectorAll('.card');

    for(let card of allCards)
    {
       const name=card.querySelector('.company-name').innerText;

        if(name===companyName)
        {
            const all_section_Badge = card.querySelector('.status-badge');

            // console.log(card);
            card.classList.remove('bg-white','bg-green-50','border-green-600');
            card.classList.add('bg-red-50','border-l-5','border-red-600');

            all_section_Badge.innerText = "Rejected";

            all_section_Badge.classList.add('bg-red-300','text-red-800','border-[4px]','border-red-500');


            all_section_Badge.classList.remove('bg-green-300','text-green-800','border-4','border-green-700','font-bold','text-md');
        }}





    renderInterview();
    renderRejected();
    countInterview();
    countRejected();
   }

   else if((event.target.classList.contains('delete'))||(event.target.parentNode.classList.contains('delete')))
   {

    //1. First e je card er delete e click kora hoise tar parent theke, nam ta anbo,
    //1. Ekta job delete mane full delete. eta dhore korbo
    //2 . then ei nam diye filter kore rakhbo intervewList e + rejectedlist e + allList e.\

    // console.log('delte button clicked Nafis!!');

    // parent node dhore remove kore ditam naki array er object theke age filter kore then ra-rander korbo

    //of, first e age card er nam ene interview + rejected section theke delte kori

    let card_container_to_delete = event.target.parentNode;

    if(card_container_to_delete.classList.contains('delete'))
    {
        card_container_to_delete=card_container_to_delete.parentNode;
    }

    // console.log(card_container_to_delete);
   


    const companyName = card_container_to_delete.querySelector('.company-name').innerText;
    console.log(companyName);

    interviewList= interviewList.filter(item => item.companyName!==companyName);
    rejectList = rejectList.filter(item =>item.companyName !== companyName);

    const allCards = document.querySelectorAll('.card');


   for(let card of allCards)
   {
      const c_name =card.querySelector('.company-name').innerText;

      if(c_name===companyName)
      {
            card.remove();
      }
   }


    renderRejected();
    countRejected();
    renderInterview();
    countInterview();
    countSetter();

   }

})

function renderInterview()
{
    const container = getById('interview-card-container');
    const noInterview = getById('no-interview');

    
    container.innerHTML = '';

    
    if(interviewList.length === 0)
    {
        noInterview.classList.remove('hidden');
        return;
    }

    
    noInterview.classList.add('hidden');


    for(let interview of interviewList)
    {
        let div = document.createElement('div');

        div.innerHTML = `
        <div class=" rounded-xl border border-gray-200 p-6 relative mt-5 mb-5 border-l-5 border-green-500 bg-green-50">

            <button class="delete absolute top-4 right-4 p-2 rounded-full border border-gray-200 hover:bg-red-300">
                <img src="./Resources/Trash.png" alt="">
            </button>

            <h2 class="company-name text-xl font-semibold text-[#002C5C]">
                ${interview.companyName}
            </h2>

            <p class="job-role text-gray-600 mt-1">
                ${interview.jobRole}
            </p>

            <p class="job-salary text-gray-500 mt-3">
                ${interview.jobSalary}
            </p>

            <div class="status-div">
                <p class="status-badge mt-4 inline-block px-4 py-2 text-sm font-bold  border-4 border-green-600 bg-green-300 text-green-800 rounded-md">
                    Interview
                </p>
            </div>

            <p class="job-title text-gray-600 mt-4">
                ${interview.jobTitle}
            </p>

            <div class="flex gap-3 mt-6">

                <button class="btn-interview px-5 py-2 rounded-md border border-green-500 text-green-600 font-medium hover:bg-green-50">
                    INTERVIEW
                </button>

                <button class="btn-rejected px-5 py-2 rounded-md border border-red-500 text-red-600 font-medium hover:bg-red-50">
                    REJECTED
                </button>

            </div>

        </div>
        `;

        container.appendChild(div);
    }
}

function renderRejected()
{
    const container = getById('rejected-card-container');
    const noRejected = getById('no-rejected');

    container.innerHTML = '';

    if(rejectList.length === 0)
    {
        noRejected.classList.remove('hidden');
        return;
    }

    noRejected.classList.add('hidden');

    for(let rejected of rejectList)
    {
        let div = document.createElement('div');

        div.innerHTML = `
        <div class=" rounded-xl border p-6 relative mt-5 mb-5 border-l-5 border-red-600 bg-red-50">

            <button class="delete absolute top-4 right-4 p-2 rounded-full border border-gray-200 hover:bg-red-300">
                <img src="./Resources/Trash.png" alt="">
            </button>

            <h2 class="company-name text-xl font-semibold text-[#002C5C]">
                ${rejected.companyName}
            </h2>

            <p class="job-role text-gray-600 mt-1">
                ${rejected.jobRole}
            </p>

            <p class="job-salary text-gray-500 mt-3">
                ${rejected.jobSalary}
            </p>

            <div class="status-div">
                <p class="status-badge mt-4 inline-block px-4 py-2 text-sm font-bold border border-[3px] border-red-600 bg-red-300 text-red-800 rounded-md">
                    Rejected
                </p>
            </div>

            <p class="job-title text-gray-600 mt-4">
                ${rejected.jobTitle}
            </p>

               <button class="btn-interview px-5 py-2 rounded-md border border-green-500 text-green-600 font-medium hover:bg-green-50">
                    INTERVIEW
                </button>

                <button class="btn-rejected px-5 py-2 rounded-md border border-red-500 text-red-600 font-medium hover:bg-red-50">
                    REJECTED
                </button>

        </div>
        `;

        container.appendChild(div);
    }
}












/*
  Interview button TOP Triggered
  1. All section ke hidden korbe
  2. Rejected Section ke hidden korbe
  3. Interview section show korbe.


  Rejected Button Top Triggered
  1. All section hidden korbe
  2. Interview Section Hidden korbe
  3. Rejected Sectuib Show korbe. 

  Eder duijoner theke jodi delete kori, 
   tahole >> all section thekeo delete hoye jabe. 
*/




// Interview Button Triggered Inside Card

/*
    1. Div ta interview section e jug hobe
    2. All card section er NOT APPLIED er jaygay interview badge ashbe
    3. Interview Count barbe.
*/




// Rejected Button Triggered Inside Card

/*

   1. Div ta rejected section e jabe
   2. All card section e div er NOT APPliED er jaygay Rejected hobe
   3. Rejected Count Barbe


*/


// my PlayGround --> Dekhi Notun kore job add korbo In sha Allah || Submit er por.
// Section -- Input New Job


//plan
/**
 * Daisy UI theke Ekta form ba input kichu ekta ante hobe. 
 * First e input anbo.
 * Payoo App er moto kore ekta machiene banabo, input er text anar jonno
 * machiene diye text gulo ene variable e rakhte hobe
 * Variable e rakhar por , create element diye div banate hobe
 * Div er vitor innertext, exact same uporer card er moto dibo
 * then ${} use kore variable er text gulo boshabo, 
 * Then appen child kroe dibo , allcardcontainer div er moddhe. 
 * Done. 
 */









