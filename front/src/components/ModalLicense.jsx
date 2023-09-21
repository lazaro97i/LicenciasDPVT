import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const LicensesModal = ({ handleModal }) => {

  const licenseStore = useSelector((store) => store.license)
  const [month, setMonth] = useState(9)
  const [year, setYear] = useState(2023)
  const months = [

    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const years = []
  let daysOfLicense = []
  let days = []

  const generateYears = () => {
    let year = 2000
    let actualYear = new Date().getFullYear()
    for (year; year <= actualYear + 1; year++) {
      years.push(year)
    }
  }
  generateYears()

  const generateMonths = () => {
    let d
    if (month && year) {
      d = new Date(year, month, 0).getDate()
    }
    for (let dia = 0; dia < d; dia++) {
      if (month && year) {
        let dias = new Date(year, month - 1, dia + 1)
        licenseStore?.licenses?.licenses?.forEach((l) => {
          if (dias.getFullYear() === parseInt(l.year) &&
            (dias.getMonth() + 1) === parseInt(l.month) &&
            dias.getDate() === parseInt(l.day)
          ) {
            daysOfLicense.push(dias)
          }
        })
        days.push(dias)
      }
    }
  }
  generateMonths()

  useEffect(() => {
    generateCalendar()
  }, [licenseStore.success, month, year])

  const generateCalendar = () => {
    const calendar = document.getElementById('divCalendar')
    let fragment = ''
    days.forEach(d => {
      if (d.getDate() == 1) {
        let rootElement = document.getElementById('root')
        let d1 = (d.getDay() + 1)
        rootElement.style.setProperty('--d1', d1)
        if (d.getDay() === 0 || d.getDay() === 6) {
          fragment += `<li id='${d.getDate()}' class='first_class p-[.2rem] rounded-sm text-center bg-yellow-700'>${d.getDate()}</li>`
        } else {
          fragment += `<li id='${d.getDate()}' class='first_class p-[.2rem] rounded-sm text-center'>${d.getDate()}</li>`
        }
      } else {
        if (d.getDay() === 0 || d.getDay() === 6) {
          fragment += `<li id='${d.getDate()}' class='p-[.2rem] rounded-sm text-center bg-yellow-700'>${d.getDate()}</li>`
        } else {
          fragment += `<li class='p-[.2rem] rounded-sm text-center' id='${d.getDate()}'>${d.getDate()}</li>`
        }

      }
    })
    if (calendar) {
      calendar.innerHTML = fragment
    }
    daysOfLicense.forEach((d) => {
      let day = document.getElementById(`${d.getDate()}`)
      day.classList.add("bg-red-700")
    })
  }

  // window.onload = function () {, generateCalendar() }

  return (
    <div className='w-full max-w-[600px] h-auto flex flex-col justify-center items-center rounded-sm py-5 px-3 mt-10'>
      {
        licenseStore?.licenses
          ? <>
            <p className='text-2xl font-medium mb-5'>{licenseStore.licenses.employee.name}</p>
            <div className='w-full max-h-[380px] flex flex-col items-center'>
              <form className='flex items-end justify-evenly w-full'>
                <label className='flex flex-col gap-3'>
                  <span>Ingresar mes:</span>
                  <select defaultValue={new Date().getMonth()}
                    onChange={(e) => { setMonth(parseInt(e.target.value) + 1) }} className='bg-transparent outline-none border rounded-sm px-1 py-1'>
                    {
                      months.map((m, i) => {
                        return (
                          <option key={m} value={i}>
                            {m}
                          </option>
                        )
                      })
                    }
                  </select>
                </label>
                <label className='flex flex-col gap-3'>
                  <span>Ingresar año:</span>
                  <select onChange={(e) => { setYear(parseInt(e.target.value)) }} defaultValue={new Date().getFullYear()} className='bg-transparent outline-none border rounded-sm px-1 py-1' name="sectionYear" id="sectionYear">
                    {
                      years.map((y, i) => {
                        return (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        )
                      })
                    }
                  </select>
                </label>
              </form>
            </div>
            <div className='min-h-[335px] border rounded-sm my-5 px-3 pb-2 flex flex-col items-center justify-center'>
              <ol className='grid grid-cols-7 gap-4 w-full text-center border-b pb-2'>
                <li>D</li>
                <li>L</li>
                <li>M</li>
                <li>M</li>
                <li>J</li>
                <li>V</li>
                <li>S</li>
              </ol>
              <ol id='divCalendar' className='grid grid-flow-row grid-cols-7 gap-4 mt-2'>

              </ol>
            </div>
            <div className='w-[300px] flex items-center justify-center gap-2'>
              <p className='bg-yellow-700 px-2'>Sabado/domingo</p>
              <p className='bg-red-700 px-2'>Dias de licencia</p>
            </div>
          </>
          : null
      }
    </div >
  )
}

export default LicensesModal
