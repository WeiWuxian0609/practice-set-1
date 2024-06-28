let fieldNo = document.querySelector("input")
fieldNo.style.marginBottom = "2rem"
let btn1 = document.querySelector("#btn-1")

btn1.addEventListener("click", function(event){
    const courseNum = fieldNo.value
    const courseFields = document.querySelector("#courseFields")
    courseFields.innerHTML = ""

    for(let i = 0; i < courseNum; i++){
        const courseContent = document.createElement("div")
        courseContent.classList.add("course")

        const subLabel = document.createElement("label")
        subLabel.classList.add("label")
        subLabel.textContent = `Enter course ${i+1} code:`

        const subInput = document.createElement("input")
        subInput.classList.add("input")
        subInput.type = "text"
        subInput.name = `subjectCode${i}`
        subInput.required = true

        const grade = document.createElement("label")
        grade.classList.add("label")
        grade.textContent = `Enter Course ${i+1} Grade:`

        const gradeInput = document.createElement("input")
        gradeInput.classList.add("input")
        gradeInput.type = "text"
        gradeInput.name = `grade${i}`
        gradeInput.required = true



        courseContent.appendChild(subLabel)
        courseContent.appendChild(subInput)
        courseContent.appendChild(grade)
        courseContent.appendChild(gradeInput)
        courseFields.appendChild(courseContent)

    }

    const btn2 = document.createElement("button")
    btn2.classList.add("btn-1")
    btn2.innerText = "Submit"
    btn2.style.marginBottom = "2rem"

    courseFields.appendChild(btn2)
    btn2.addEventListener("click", function(event){
        event.preventDefault()
        const getNum = document.querySelector("input").value
        let points = 0
        let credits = 0
        const gradePoints = 
        {
            "S": 10,
            "A": 9,
            "B": 8,
            "C": 7,
            "D": 6,
            "E": 4,
            "F": 0
        }

        for(let i = 0; i < getNum; i++){
            const gradeResult = document.querySelector(`input[name="grade${i}"]`).value.toUpperCase();
            if(gradePoints[gradeResult] !== undefined){
                credits += 4 //assuming each course has 4 credits
                points += (gradePoints[gradeResult] * 4)
            } else {
                alert(`Invalide grade for Course ${i+1}`)
                return
            }
        }

        const result = points / credits

        let p = document.createElement("p")
        p.innerText = `Your CGPA is: ${result.toFixed(2)}`
        btn2.insertAdjacentElement("afterend", p)
    })
})

