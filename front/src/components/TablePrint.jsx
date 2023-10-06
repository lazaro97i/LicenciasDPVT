import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import html2pdf from 'html2pdf.js'


const TablePrint = ({ table }) => {

  const licenseStore = useSelector((store) => store.license)
  const year = new Date().getFullYear()
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
  let daysOfLicense = []
  let days = []
  let [workDay, setWorkDay] = useState(null)
  const nameDoc = licenseStore?.licenses?.employee?.name.split(' ').join('_')
  const fileDoc = licenseStore?.licenses?.employee?.fileNumber

  const print = (e) => {
    console.log(e)
    const elementoParaConvertir = document.getElementById('tablePrint')  // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
      .set({
        margin: 0,
        filename: `${nameDoc}-Legajo_${fileDoc}.pdf`,
        image: {
          type: 'jpeg',
          quality: 0.98
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
        },
        jsPDF: {
          orientation: 'l',
          unit: 'in',
          format: 'legal',
          putOnlyUsedFonts: true,
          floatPrecision: 16 // or "smart", default is 16
        }
      })
      .from(elementoParaConvertir)
      .save()
      .catch(err => console.log(err));
  }

  useEffect(() => {
    generateMonths()
    generateCalendar()
  }, [])

  function generateMonths() {
    for (let i = 1; i <= 12; i++) {
      let workD = document?.getElementById(`workDay${i}`)
      let d
      d = new Date(year, i, 0).getDate()
      setWorkDay(0)
      for (let dia = 0; dia < d; dia++) {
        let dias = new Date(year, i - 1, dia + 1)
        licenseStore?.licenses?.licenses?.forEach((l) => {
          if (dias.getFullYear() === parseInt(l.year) &&
            (dias.getMonth() + 1) === parseInt(l.month) &&
            dias.getDate() === parseInt(l.day)
          ) {
            daysOfLicense.push(
              {
                day: dias,
                type: l.typeLicense,
                obs: l.observation
              }
            )
          }
        })
        days.push(dias)
        if (dias.getDay() !== 0 && dias.getDay() !== 6) {
          setWorkDay(workDay++)
        }
      }
      workD.textContent = workDay
    }
  }

  // setMonth(month + 1)

  function generateCalendar() {
    for (let i = 1; i <= 12; i++) {
      const calendar = document?.getElementById(`divCalendar${i}`)
      const license = document?.getElementById(`contDayLicense${i}`)
      let fragment = ''

      days.forEach(d => {
        if (d.getMonth() + 1 === i) {
          if (d.getDate() == 1) {
            if (d.getDay() === 0 || d.getDay() === 6) {
              fragment += `<li id='${d.getDate()}' class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black text-center bg-[#cfcfcf] text-[#747577]'>${d.getDate()}</li>`
            } else {
              fragment += `<li id='${d.getDate()}' class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black bg-blue-600 text-white text-center'>${d.getDate()}</li>`
            }
          } else {
            if (d.getDay() === 0 || d.getDay() === 6) {
              fragment += `<li id='${d.getDate()}' class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black text-center bg-[#cfcfcf] text-[#747577]'>${d.getDate()}</li>`
            } else {
              fragment += `<li class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black bg-blue-600 text-white text-center' id='${d.getDate()}'>${d.getDate()}</li>`
            }

          }
        }
      })

      if (calendar) {
        calendar.innerHTML = fragment
        daysOfLicense.forEach((dl) => {
          let calendarLicense = [document?.getElementById(`divCalendar${dl.day.getMonth() + 1}`)]
          const array = [...calendarLicense[0].children]
          array.map((d) => {
            if (parseInt(d.id) === dl.day.getDate() && dl.day.getMonth() + 1 === i) {
              switch (dl.type) {
                case 'injustificadas':
                  license.textContent = 'p'
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#f9a8d4]", "text-[#501c39]")
                  break
                case 'injustificadas acumuladas':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#b327bb]", "text-[#f1f8fe]")
                  break
                case 'tardanzas':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#7f1d1d]", "text-[#f1f8fe]")
                  break
                case 'permanencia':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#fcd34d]", "text-black")
                  break
                case 'desc. jornada p/tardanza':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#a48528]", "text-[#f1f8fe]")
                  break
                case 'dcto. colacion':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#143a30]", "text-[#f1f8fe]")
                  break
                case 'just. c/pago de jornal':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#22d3ee]", "text-[#f1f8fe]")
                  break
                case 'total desc. de jornales':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#451a03]", "text-[#f1f8fe]")
                  break
                case 'desc. viat. "b" / serv. apoyo':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#1c1917]", "text-[#f1f8fe]")
                  break
                case 'presentismo':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#6ee7b7]", "text-[#11251d]")
                  break
                case 'reintegro de jornales':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#d17431]", "text-[#f1f8fe]")
                  break
                case 'licencias':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-red-600", "text-[#f1f8fe]")
                  break
                case 'parte medico':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-lime-600", "text-[#f1f8fe]")
                  break
                case 'accidente de trabajo':
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-violet-600", "text-[#f1f8fe]")
                  break
              }
            }
          })
        })
      }
    }

  }



  return (
    <div id='table' className='w-full h-full flex flex-col justify-start items-center bg-[#fff] fixed left-0 top-0 z-20 pt-10 overflow-auto border border-black'>
      <div id='tablePrint' className=' flex flex-wrap justify-center'>
        <div className='flex justify-center gap-28 w-[1200px] h-[50px] border-b'>
          <p className='text-3xl'>FICHA INDIVIDUAL DE TARJAS Y LICENCIAS</p>
          <div className='flex gap-10 items-center'>
            <p className=' text-center  col-span-1 text-2xl  flex justify-center items-center pb-5'>LEGAJO N°</p>
            <p className=' text-center text-3xl font-[500] pb-5'>{licenseStore?.licenses?.employee?.fileNumber}</p>
          </div>
        </div>
        <div className='grid grid-cols-12 w-[1200px]'>
          <div className='w-full grid grid-cols-12 h-auto col-span-7 self-end'>
            <p className=' col-span-4 flex justify-start items-center pl-5 text-xl border border-black h-[30px]'>APELLIDO Y NOMBRE</p>
            <p className='col-span-8 flex justify-center items-center text-2xl border border-black font-[600] h-[30px]'>{licenseStore?.licenses?.employee?.name.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Depto/Div.</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-4 font-[600]'>{licenseStore?.licenses?.employee?.apartDiv.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Cargo</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-4 font-[600]'>{licenseStore?.licenses?.employee?.position.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Funcion</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-4 font-[600]'>{licenseStore?.licenses?.employee?.function.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Fecha clave</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-4 font-[600]'>{licenseStore?.licenses?.employee?.keyDate.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-1 text-[.7rem]'>Zona</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem] font-[600]'>{licenseStore?.licenses?.employee?.zone.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Campamento</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem] font-[600]'>{licenseStore?.licenses?.employee?.camp.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Viatico B</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-3 font-[600]'>{licenseStore?.licenses?.employee?.viaticB.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-1 text-[.7rem]'>Adscipto</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem] font-[600]'>{licenseStore?.licenses?.employee?.added.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Desarraigo</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem] font-[600]'>{licenseStore?.licenses?.employee?.uprooting.toUpperCase()}</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>Dedicacion Op</p>
            <p className='border h-[30px] border-black flex justify-center items-center col-span-3 font-[600]'>{licenseStore?.licenses?.employee?.dedicationOp.toUpperCase()}</p>
            <div className=' col-span-12 grid grid-rows-2 grid-cols-12 w-full'>
              <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem] font-[600]'>AÑO</p>
              <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem] font-[600]'>{year}</p>
              <p className='border h-[30px] border-black flex justify-center items-center col-span-8 font-[600]'>DETALLES DE DIAS TRABAJADOS</p>
              <p className='col-span-2 text-center border border-black font-[500]'>MESES</p>
              <p className='col-span-10 bg-slate-300'></p>
            </div>
          </div>
          <div className=' grid grid-flow-col grid-cols-12 h-auto col-span-3'>
            <p className='relative col-span-1'> <span className='absolute rotate-90 text-sm font-[500] bottom-[45px] left-[-35px]'>Injustificadas</span></p>
            <p className='relative col-span-1 w-[200px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[92px] left-[-81px]'>Injustificadas acumuladas</span></p>
            <p className='relative col-span-1'><span className='absolute rotate-90 text-sm font-[500] bottom-[35px] left-[-25px]'>Tardanzas</span></p>
            <p className='relative col-span-1'><span className='absolute rotate-90 text-sm font-[500] bottom-[45px] left-[-35px]'>Permanencia</span></p>
            <p className='relative col-span-1 w-[200px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[88px] left-[-78px]'>Desc. jornada p/tardanza</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[48px] left-[-38px]'>Dcto. colacion</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[77px] left-[-67px]'>Just. c/pago de jornal</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[77px] left-[-67px]'>Total desc. de jornales</span></p>
            <p className='relative col-span-1 w-[250px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[87px] left-[-78px]'>Desc. viat. B / serv. apoyo</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[42px] left-[-32px]'>Presentismo</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[72px] left-[-63px]'>Reintegro de jornales</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[42px] left-[-33px]'>Parte medico</span></p>
          </div>
          <div className='grid grid-flow-col grid-cols-4 h-auto col-span-1'>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[69px] left-[-61px]'>Accidente de trabajo</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[28px] left-[-20px]'>Licencias</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[26px] left-[-19px]'>Presente</span></p>
            <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[39px] left-[-30px]'>Dias habiles</span></p>
          </div>
          <div className='grid grid-cols-4 grid-rows-6 h-auto col-span-1'>
            <p className='col-span-4 flex justify-center pt-1 border border-black text-[.69rem] font-[500] '>CUMPLIMIENTO</p>
            <p className='col-span-1  border flex justify-center items-center border-black text-[.69rem] font-[500]'>A</p>
            <p className='col-span-3 border border-black text-[.69rem] font-[500] justify-center items-center flex'>Inacis. S/J</p>
            <p className='col-span-1  border flex justify-center items-center border-black text-[.69rem] font-[500]'>B</p>
            <p className='col-span-3 border border-black text-[.69rem] font-[500] justify-center items-center flex'>Puntual.</p>
            <p className='col-span-1  border flex justify-center items-center border-black text-[.69rem] font-[500]'>C</p>
            <p className='col-span-3 border border-black text-[.69rem] font-[500] justify-center items-center flex'>Permanen.</p>
            <p className='col-span-4  border flex justify-center items-center border-black text-[.69rem] font-[500]'></p>
            <p className='col-span-4  border flex justify-center text-l items-center border-black text-[.69rem] font-[500]'>ACLARACION</p>
          </div>
        </div>
        <div id='divContainer' className='w-[1200px] grid grid-cols-12'>
          {
            months?.map((m, i) => {
              return (
                <>
                  <div className='grid grid-cols-12 h-auto col-span-7 self-start'>
                    <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>{m}</p>
                    <div className=' row-span-1 grid grid-cols-3 col-span-10'>
                      <div className='grid grid-flow-col col-span-3'>
                        <ol id={`divCalendar${i + 1}`} className='flex border-y border-black'>

                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className=' col-span-5 grid grid-flow-col grid-cols-5'>
                    <div className='grid grid-cols-12 grid-flow-col col-span-3'>
                      <ol id={`divCalendar${i + 1}`} className='grid grid-cols-12 col-span-12 border-l-2 border-black'>
                        <li id={`contDayLicense${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                      </ol>
                    </div>
                    <div className='grid-flow-col col-span-1'>
                      <ol id={`divCalendar${i + 1}`} className='grid grid-cols-4 border-l-black'>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                        <li id={`workDay${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1'></li>
                      </ol>
                    </div>
                    <div className=' border border-black'>

                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className=' w-full border-b pb-5 border-black'>
          <div className='flex w-full mt-5 items-start justify-center flex-wrap gap-x-5 gap-y-2'>
            <p className='rounded-md bg-blue-600 text-white px-3 text-[.8rem] py-1'>Presente</p>
            <p className='rounded-md bg-red-600 text-[#f1f8fe] px-3 text-[.8rem] py-1'>Licencias</p>
            <p className='rounded-md bg-lime-600 text-[#f1f8fe] px-3 text-[.8rem] py-1'>Parte medico</p>
            <p className='rounded-md bg-violet-600 text-[#f1f8fe] px-3 text-[.8rem] py-1'>Accidente de trabajo</p>
            <p className='rounded-md bg-[#f9a8d4] text-[#501c39] px-3 text-[.8rem] py-1'>Injustificadas</p>
            <p className='rounded-md bg-[#b327bb] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Injustificadas acumuladas</p>
            <p className='rounded-md bg-[#7f1d1d] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Tardanzas</p>
            <p className='rounded-md bg-[#fcd34d] text-black px-3 text-[.8rem] py-1'>Permanencia</p>
          </div>
          <div className='flex w-full mt-2 items-start justify-center flex-wrap gap-x-5 gap-y-2'>
            <p className='rounded-md bg-[#a48528] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Desc. jornada p/tardanza</p>
            <p className='rounded-md bg-[#143a30] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Dcto. colacion</p>
            <p className='rounded-md bg-[#22d3ee] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Just. c/pago de jornal</p>
            <p className='rounded-md bg-[#451a03] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Total desc de jornales</p>
            <p className='rounded-md bg-[#1c1917] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Desc. viat. B / serv. apoyo</p>
            <p className='rounded-md bg-[#6ee7b7] text-[#11251d] px-3 text-[.8rem] py-1'>Presentismo</p>
            <p className='rounded-md bg-[#d17431] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Reintegro de jornales</p>
          </div>
        </div>
      </div>
      <div className=' flex justify-center items-center gap-10'>
        <input onClick={print} type="button" value="IMPRIMIR" className='mb-5 mt-10 border px-3 py-1 bg-[#0f2942] hover:bg-[#284c6e] cursor-pointer text-[#f1f8fe] rounded-md' />
        <input onClick={() => { table(false) }} type="button" value="ATRAS" className=' mb-5 mt-10 border px-3 py-1 bg-red-700 hover:bg-red-600 cursor-pointer text-[#f1f8fe] rounded-md' />
      </div>
    </div >
  )
}

export default TablePrint