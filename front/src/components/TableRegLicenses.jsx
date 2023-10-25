import React from 'react'
import html2pdf from 'html2pdf.js'

const TableRegLicenses = ({ table, data }) => {

  console.log(data.regLicenses.response[0].legajo)

  const print = (e) => {
    console.log(e)
    const elementoParaConvertir = document.getElementById('tableRegPrint')  // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
      .set({
        margin: 0,
        filename: `registro_de_Licencias-Legajo_${data.regLicenses.response[0].legajo}.pdf`,
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

  return (
    <div id='table' className='w-full h-full flex flex-col justify-start items-center bg-[#fff] fixed left-0 top-0 z-20 pt-10 overflow-auto border border-black'>
      <div id='tableRegPrint' className=' flex flex-wrap justify-center'>
        <div className='flex justify-center gap-28 w-[1200px] h-[50px] border-b'>
          <p className='text-3xl font-[500]'>REGISTRO DE LICENCIAS</p>
          <div className='flex gap-10 items-center'>
            <p className=' text-center  col-span-1 text-2xl  flex justify-center items-center pb-5'>LEGAJO N°</p>
            <p className=' text-center text-3xl font-[500] pb-5'>{data.regLicenses.response[0].legajo}</p>
          </div>
        </div>
        <div className=''>
          <table className=' w-[1200px]'>
            <thead className='h-[100px]'>
              <tr>
                <th className='border-2 border-collapse text-[11px]' rowSpan={2}>Expediente</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Enfermedad C/D</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Enfermedad L/D</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Estudios</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Inciso 9° anticipo lic.</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Familiar Enfermo</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={5}>Anual reglamentaria</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Dia femenino</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Anticipo de licencia</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Licencias</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Parte medico</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={2}>Accidente de trab.</th>
                <th className='border-x-2 border-collapse text-[11px]' colSpan={6}>Fecha de utilizacion</th>
                <th className='border-2 border-collapse text-[11px]' rowSpan={2}>Observaciones</th>
              </tr>
              <tr className=''>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Pendiente</td>
                <td className='border border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Acordada p/periodo</td>
                <td className='border border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias tomados</td>
                <td className='border border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Saldo</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-l-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Dias Acord.</td>
                <td className='border border-r-2 border-b-2 border-collapse text-[11px] text-center px-[.9px]'>Total Acu.</td>
                <td className='border border-b-2 border-l-2 border-collapse text-[11px] text-center px-[.9px]' colSpan={3}>Desde D/M/A</td>
                <td className='border border-b-2 border-r-2 border-collapse text-[11px] text-center px-[.9px]' colSpan={3}>Hasta D/M/A</td>
              </tr>
            </thead>
            <tbody>
              {
                data?.regLicenses?.response.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td className='border-2 text-center text-[13px]'>{d.nroExpediente}</td>
                      <td className='border text-center text-[13px]'>{d?.enfermedadCD?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.enfermedadCD?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.enfermedadLD?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.enfermedadLD?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.estudios?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.estudios?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.inciso9AnticipoLic?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.inciso9AnticipoLic?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.familiarEnfermo?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.familiarEnfermo?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.anualReglamentaria?.pendiente}</td>
                      <td className='border text-center text-[13px]'>{d?.anualReglamentaria?.acordadaPPeriodo}</td>
                      <td className='border text-center text-[13px]'>{d?.anualReglamentaria?.totalAcumulada}</td>
                      <td className='border text-center text-[13px]'>{d?.anualReglamentaria?.diasTomados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.anualReglamentaria?.saldo}</td>
                      <td className='border text-center text-[13px]'>{d?.diaFem?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.diaFem?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.anticipoLic?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.anticipoLic?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.licencias?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.licencias?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.parteMedico?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.parteMedico?.totalAcumulados}</td>
                      <td className='border text-center text-[13px]'>{d?.accidenteTrab?.diasAcordados}</td>
                      <td className='border border-r-2 text-center text-[13px]'>{d?.accidenteTrab?.totalAcumulados}</td>
                      <td className='border text-center text-[13px] px-[.8px]'>{d?.fechaDeUtilizacion?.desde.dia}</td>
                      <td className='border text-center text-[13px] px-[.8px]'>{d?.fechaDeUtilizacion?.desde.mes}</td>
                      <td className='border border-r-2 text-center text-[13px] px-[.8px]'>{d?.fechaDeUtilizacion?.desde.año}</td>
                      <td className='border text-center text-[13px] px-[.8px]'>{d?.fechaDeUtilizacion?.hasta.dia}</td>
                      <td className='border text-center text-[13px] px-[.8px]'>{d?.fechaDeUtilizacion?.hasta.mes}</td>
                      <td className='border border-r-2 text-center text-[13px] px-[.8px]'>{d?.fechaDeUtilizacion?.hasta.año}</td>
                      <td className='border text-center text-[13px]'>{d?.observaciones}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className=' flex justify-center items-center gap-10'>
        <input onClick={print} type="button" value="IMPRIMIR" className='mb-5 mt-10 border px-3 py-1 bg-[#0f2942] hover:bg-[#284c6e] cursor-pointer text-[#f1f8fe] rounded-md' />
        <input onClick={() => { table(false) }} type="button" value="ATRAS" className=' mb-5 mt-10 border px-3 py-1 bg-red-700 hover:bg-red-600 cursor-pointer text-[#f1f8fe] rounded-md' />
      </div>
    </div>
  )
}

export default TableRegLicenses