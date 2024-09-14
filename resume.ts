document.getElementById(`resumForm`)?.addEventListener(`submit`,function(event){
    event.preventDefault();

    //typeassertion
    const nameElemnt = document.getElementById(`name`) as HTMLInputElement;
    const cnicElemnt = document.getElementById(`cnic`) as HTMLInputElement;
    const emailElemnt = document.getElementById(`email`) as HTMLInputElement;
    const phoneElemnt = document.getElementById(`phone`) as HTMLInputElement;
    const educationElemnt = document.getElementById(`Education`) as HTMLInputElement;
    const experienceElemnt = document.getElementById(`Experience`) as HTMLInputElement;


    if (nameElemnt && cnicElemnt && emailElemnt && phoneElemnt && educationElemnt && experienceElemnt){

        const name = nameElemnt.value;
        const cnic = cnicElemnt.value;
        const email = emailElemnt.value;
        const phone = phoneElemnt.value;
        const Education = educationElemnt.value;
        const Experience = experienceElemnt.value; 

    


    // create output

    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} <p>
    <P><strong>cnic:</strong>${cnic}</p>
    <p><strong>email:</strong>${email}</p>
    <p><strong>Phone Number</strong>${phone}</p>

    <h3>Education</h3>
    <p>${Education}</p>

    <h3>Skills</h3>
    <p>${Experience}</p>
   `;

   const resumeOutputElment = document.getElementById(`resumOutput`)

   if (resumeOutputElment){
    resumeOutputElment.innerHTML = resumeOutput
   } else {
    console.error(`the resume output elements are missing`)
   }

    } else {
        console.error(`one or more output elements are missing`)
    }
})