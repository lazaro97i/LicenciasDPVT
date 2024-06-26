import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import html2pdf from 'html2pdf.js'


const TablePrint = ({ table, yearSelected }) => {

  const licenseStore = useSelector((store) => store.license)
  const year = yearSelected
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
      let d
      d = new Date(year, i, 0).getDate()
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
      }
    }
  }

  // setMonth(month + 1)

  function generateCalendar() {
    for (let i = 1; i <= 12; i++) {
      const calendar = document?.getElementById(`divCalendar${i}`)
      const licenseInjus = document?.getElementById(`licenseInjus${i}`)
      const licenseInjusAcu = document?.getElementById(`licenseInjusAcu${i}`)
      const licenseTard = document?.getElementById(`licenseTard${i}`)
      const licensePerma = document?.getElementById(`licensePerma${i}`)
      const licenseDescJor = document?.getElementById(`licenseDescJor${i}`)
      const licenseDctoCol = document?.getElementById(`licenseDctoCol${i}`)
      const licenseJustPag = document?.getElementById(`licenseJustPag${i}`)
      const licenseTotDesc = document?.getElementById(`licenseTotDesc${i}`)
      const licenseDescViat = document?.getElementById(`licenseDescViat${i}`)
      const licensePres = document?.getElementById(`licensePres${i}`)
      const licenseReinJor = document?.getElementById(`licenseReinJor${i}`)
      const licenseLaw = document?.getElementById(`licenseLaw${i}`)
      const licenseAnnual = document?.getElementById(`licenseAnnual${i}`)
      const licenseExtended = document?.getElementById(`licenseExtended${i}`)
      const present = document?.getElementById(`present${i}`)
      const workD = document?.getElementById(`workDay${i}`)

      let fragment = ''

      days.forEach(d => {
        if (d.getMonth() + 1 === i) {
          if (d.getDate() == 1) {
            if (d.getDay() === 0 || d.getDay() === 6) {
              fragment += `<li id='${d.getDate()}' class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black text-center bg-[#cfcfcf] text-[#747577]'>${d.getDate()}</li>`
            } else {
              workD.value += 1
              workD.textContent = workD.value
              present.value += 1
              present.textContent = present.value
              fragment += `<li id='${d.getDate()}' class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black bg-blue-600 text-white text-center'>${d.getDate()}</li>`
            }
          } else {
            if (d.getDay() === 0 || d.getDay() === 6) {
              fragment += `<li id='${d.getDate()}' class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black text-center bg-[#cfcfcf] text-[#747577]'>${d.getDate()}</li>`
            } else {
              workD.value += 1
              workD.textContent = workD.value
              present.value += 1
              present.textContent = present.value
              fragment += `<li class='border-x w-[1.18rem] text-sm flex justify-center items-center border-black bg-blue-600 text-white text-center' id='${d.getDate()}'>${d.getDate()}</li>`
            }

          }
        }
      })
      workD.value = 0

      if (calendar) {
        calendar.innerHTML = fragment
        daysOfLicense.forEach((dl) => {
          let calendarLicense = [document?.getElementById(`divCalendar${dl.day.getMonth() + 1}`)]
          const array = [...calendarLicense[0].children]
          array.map((d) => {
            if (parseInt(d.id) === dl.day.getDate() && dl.day.getMonth() + 1 === i) {
              switch (dl.type) {
                case 'injustificadas':
                  licenseInjus.value += 1
                  licenseInjus.textContent = licenseInjus.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#f9a8d4]", "text-[#501c39]")
                  break
                case 'injustificadas acumuladas':
                  licenseInjusAcu.value += 1
                  licenseInjusAcu.textContent = licenseInjusAcu.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#b327bb]", "text-[#f1f8fe]")
                  break
                case 'tardanzas':
                  licenseTard.value += 1
                  licenseTard.textContent = licenseTard.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#7f1d1d]", "text-[#f1f8fe]")
                  break
                case 'permanencia':
                  licensePerma.value += 1
                  licensePerma.textContent = licensePerma.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#fcd34d]", "text-black")
                  break
                case 'desc. jornada p/tardanza':
                  licenseDescJor.value += 1
                  licenseDescJor.textContent = licenseDescJor.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#a48528]", "text-[#f1f8fe]")
                  break
                case 'dcto. colacion':
                  licenseDctoCol.value += 1
                  licenseDctoCol.textContent = licenseDctoCol.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#143a30]", "text-[#f1f8fe]")
                  break
                case 'just. c/pago de jornal':
                  licenseJustPag.value += 1
                  licenseJustPag.textContent = licenseJustPag.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#22d3ee]", "text-[#f1f8fe]")
                  break
                case 'total desc. de jornales':
                  licenseTotDesc.value += 1
                  licenseTotDesc.textContent = licenseTotDesc.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#451a03]", "text-[#f1f8fe]")
                  break
                case 'desc. viat. "b" / serv. apoyo':
                  licenseDescViat.value += 1
                  licenseDescViat.textContent = licenseDescViat.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#1c1917]", "text-[#f1f8fe]")
                  break
                case 'presentismo':
                  licensePres.value += 1
                  licensePres.textContent = licensePres.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#6ee7b7]", "text-[#11251d]")
                  break
                case 'reintegro de jornales':
                  licenseReinJor.value += 1
                  licenseReinJor.textContent = licenseReinJor.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#d17431]", "text-[#f1f8fe]")
                  break
                case 'ley 9254':
                  licenseLaw.value += 1
                  licenseLaw.textContent = licenseLaw.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-[#4b2aa9]", "text-[#f1f8fe]")
                  break
                case 'licencias anuales':
                  licenseAnnual.value += 1
                  licenseAnnual.textContent = licenseAnnual.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-red-600", "text-[#f1f8fe]")
                  break
                case 'licencias prorrogadas':
                  licenseExtended.value += 1
                  licenseExtended.textContent = licenseExtended.value
                  present.value -= 1
                  present.textContent = present.value
                  d?.classList.remove("bg-blue-600", "text-white")
                  d?.classList.add("bg-red-600", "text-[#f1f8fe]")
                  break
              }
            }
          })
        })
      }
      licenseInjus.value = 0
      licenseInjusAcu.value = 0
      licenseTard.value = 0
      licensePerma.value = 0
      licenseDescJor.value = 0
      licenseDctoCol.value = 0
      licenseJustPag.value = 0
      licenseTotDesc.value = 0
      licenseDescViat.value = 0
      licensePres.value = 0
      licenseReinJor.value = 0
      licenseLaw.value = 0
      licenseAnnual.value = 0
      licenseExtended.value = 0
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
          <div className='grid grid-flow-col grid-cols-2 col-span-3'>
            <div className=' grid grid-flow-col grid-cols-12 h-auto w-[450px]'>
              <p className='relative col-span-1'> <span className='absolute rotate-90 text-sm font-[500] bottom-[45px] left-[-36px]'>Injustificadas</span></p>
              <p className='relative col-span-1 w-[200px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[92px] left-[-88px]'>Injustificadas acumuladas</span></p>
              <p className='relative col-span-1'><span className='absolute rotate-90 text-sm font-[500] bottom-[35px] left-[-35px]'>Tardanzas</span></p>
              <p className='relative col-span-1'><span className='absolute rotate-90 text-sm font-[500] bottom-[45px] left-[-49px]'>Permanencia</span></p>
              <p className='relative col-span-1 w-[200px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[88px] left-[-96px]'>Desc. jornada p/tardanza</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[48px] left-[-59px]'>Dcto. colacion</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[77px] left-[-92px]'>Just. c/pago de jornal</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[77px] left-[-97px]'>Total desc. de jornales</span></p>
              <p className='relative col-span-1 w-[250px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[87px] left-[-112px]'>Desc. viat. B / serv. apoyo</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[42px] left-[-70px]'>Presentismo</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[72px] left-[-105px]'>Reintegro de jornales</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[27px] left-[-67px]'>Ley 9254</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[59px] left-[-103px]'>Licencias anuales</span></p>
            </div>
            <div>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[-137px] left-[52px] w-[160px]'>Licencias prorrogadas</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[-182px] left-[122px]'>Presente</span></p>
              <p className='relative col-span-1 w-[150px]'><span className='absolute rotate-90 text-sm font-[500] bottom-[-178px] left-[122px] w-[100px]'>Dias habiles</span></p>
            </div>
          </div>
          <div className='grid grid-cols-4 grid-rows-6 h-auto col-span-2 ml-[32px]'>
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
                  <div key={i} className='grid grid-cols-12 h-auto col-span-7 self-start'>
                    <p className='border h-[30px] border-black flex justify-center items-center col-span-2 text-[.8rem]'>{m}</p>
                    <div className=' row-span-1 grid grid-cols-3 col-span-10'>
                      <div className='grid grid-flow-col col-span-3'>
                        <ol id={`divCalendar${i + 1}`} className='flex border-y border-black'>

                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12 grid-flow-col col-span-5'>
                    <div className=' col-span-6 grid grid-cols-12'>
                      <ol id={`divCalendar${i + 1}`} className='grid grid-cols-12 col-span-12 border-black'>
                        <li id={`licenseInjus${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseInjusAcu${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseTard${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licensePerma${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseDescJor${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseDctoCol${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseJustPag${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseTotDesc${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseDescViat${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licensePres${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseReinJor${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseLaw${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                      </ol>
                    </div>
                    <div className='grid-flow-col grid-cols-12 col-span-6'>
                      <ol id={`divCalendar${i + 1}`} className='grid grid-flow-col grid-cols-12 col-span-12'>
                        <li id={`licenseAnnual${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`licenseExtended${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`present${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li id={`workDay${i + 1}`} className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <li className='border h-[30px] border-black text-center w-[100%] col-span-1 font-[600]'></li>
                        <div className=' border border-black col-span-10 overflow-auto'>

                        </div>
                      </ol>
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
            <p className='rounded-md bg-[#f9a8d4] text-[#501c39] px-3 text-[.8rem] py-1'>Injustificadas</p>
            <p className='rounded-md bg-[#b327bb] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Injustificadas acumuladas</p>
            <p className='rounded-md bg-[#7f1d1d] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Tardanzas</p>
            <p className='rounded-md bg-[#fcd34d] text-black px-3 text-[.8rem] py-1'>Permanencia</p>
            <p className='rounded-md bg-[#a48528] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Desc. jornada p/tardanza</p>
            <p className='rounded-md bg-red-600 text-[#f1f8fe] px-3 text-[.8rem] py-1'>Licencias anuales</p>
            <p className='rounded-md bg-red-600 text-[#f1f8fe] px-3 text-[.8rem] py-1'>Licencias prorrogadas</p>
          </div>
          <div className='flex w-full mt-2 items-start justify-center flex-wrap gap-x-5 gap-y-2'>
            <p className='rounded-md bg-[#143a30] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Dcto. colacion</p>
            <p className='rounded-md bg-[#22d3ee] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Just. c/pago de jornal</p>
            <p className='rounded-md bg-[#4b2aa9] text-[#f1f8fe] px-3 text-[.8rem] py-1'>Ley 9254</p>
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