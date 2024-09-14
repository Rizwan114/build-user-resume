var _a;
(_a = document.getElementById("resumForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //typeassertion
    var nameElemnt = document.getElementById("name");
    var cnicElemnt = document.getElementById("cnic");
    var emailElemnt = document.getElementById("email");
    var phoneElemnt = document.getElementById("phone");
    var educationElemnt = document.getElementById("Education");
    var experienceElemnt = document.getElementById("Experience");
    if (nameElemnt && cnicElemnt && emailElemnt && phoneElemnt && educationElemnt && experienceElemnt) {
        var name_1 = nameElemnt.value;
        var cnic = cnicElemnt.value;
        var email = emailElemnt.value;
        var phone = phoneElemnt.value;
        var Education = educationElemnt.value;
        var Experience = experienceElemnt.value;
        // create output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name_1, " <p>\n    <P><strong>cnic:</strong>").concat(cnic, "</p>\n    <p><strong>email:</strong>").concat(email, "</p>\n    <p><strong>Phone Number</strong>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(Education, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(Experience, "</p>\n   ");
        var resumeOutputElment = document.getElementById("resumOutput");
        if (resumeOutputElment) {
            resumeOutputElment.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
