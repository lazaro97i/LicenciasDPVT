import React, { useEffect } from 'react'

const TablePrint = () => {

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center bg-[#fff] fixed top-0 z-20 left-0 px-6 py-10 overflow-scroll'>
      <div className='grid grid-cols-4 grid-rows-1 w-full border-4 border-black'>
        <p className=' col-span-3 text-4xl font-[500] flex justify-center items-center'>FICHA INDIVIDUAL DE TARJAS Y LICENCIAS</p>
        <div className='border-l-2 border-black flex flex-col justify-center items-center'>
          <p className=' col-span-1 text-2xl  flex justify-center items-center border-black pb-5'>LEGAJO N°</p>
          <p className='text-xl font-[500] pb-5'>Legajo</p>
        </div>
      </div>
      <div className='grid grid-cols-12 w-full'>
        <div className='w-full grid grid-cols-12 grid-rows-6 h-auto col-span-8 self-start'>
          <p className=' col-span-4 flex justify-start items-center pl-5 text-xl border border-black'>APELLIDO Y NOMBRE</p>
          <p className='col-span-8  border border-black'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Depto/Div.</p>
          <p className='border border-black flex justify-center items-center col-span-4'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Cargo</p>
          <p className='border border-black flex justify-center items-center col-span-4'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Funcion</p>
          <p className='border border-black flex justify-center items-center col-span-4'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Fecha clave</p>
          <p className='border border-black flex justify-center items-center col-span-4'></p>
          <p className='border border-black flex justify-center items-center col-span-1'>Zona</p>
          <p className='border border-black flex justify-center items-center col-span-2'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Campamento</p>
          <p className='border border-black flex justify-center items-center col-span-2'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Viatico B</p>
          <p className='border border-black flex justify-center items-center col-span-3'></p>
          <p className='border border-black flex justify-center items-center col-span-1'>Adscipto</p>
          <p className='border border-black flex justify-center items-center col-span-2'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Desarraigo</p>
          <p className='border border-black flex justify-center items-center col-span-2'></p>
          <p className='border border-black flex justify-center items-center col-span-2'>Dedicacion Op</p>
          <p className='border border-black flex justify-center items-center col-span-3'></p>
          <div className=' col-span-12 grid grid-rows-2 grid-cols-12 w-full'>
            <p className='border border-black flex justify-center items-center col-span-2'>AÑO</p>
            <p className='border border-black flex justify-center items-center col-span-2'>2023</p>
            <p className='border border-black flex justify-center items-center col-span-8'>DETALLES DE DIAS TRABAJADOS</p>
            <p className='border border-black flex justify-center items-center col-span-2'>MES</p>
            <div className=' row-span-1 grid grid-cols-3 col-span-10'>
              <div className='grid grid-cols-10'>
                <p className='border border-black flex justify-center items-center col-span-1'>1</p>
                <p className='border border-black flex justify-center items-center col-span-1'>2</p>
                <p className='border border-black flex justify-center items-center col-span-1'>3</p>
                <p className='border border-black flex justify-center items-center col-span-1'>4</p>
                <p className='border border-black flex justify-center items-center col-span-1'>5</p>
                <p className='border border-black flex justify-center items-center col-span-1'>6</p>
                <p className='border border-black flex justify-center items-center col-span-1'>7</p>
                <p className='border border-black flex justify-center items-center col-span-1'>8</p>
                <p className='border border-black flex justify-center items-center col-span-1'>9</p>
                <p className='border border-black flex justify-center items-center col-span-1'>10</p>
              </div>
              <div className='grid grid-cols-10'>
                <p className='border border-black flex justify-center items-center col-span-1'>11</p>
                <p className='border border-black flex justify-center items-center col-span-1'>12</p>
                <p className='border border-black flex justify-center items-center col-span-1'>13</p>
                <p className='border border-black flex justify-center items-center col-span-1'>14</p>
                <p className='border border-black flex justify-center items-center col-span-1'>15</p>
                <p className='border border-black flex justify-center items-center col-span-1'>16</p>
                <p className='border border-black flex justify-center items-center col-span-1'>17</p>
                <p className='border border-black flex justify-center items-center col-span-1'>18</p>
                <p className='border border-black flex justify-center items-center col-span-1'>19</p>
                <p className='border border-black flex justify-center items-center col-span-1'>20</p>
              </div>
              <div className='grid grid-cols-11'>
                <p className='border border-black flex justify-center items-center col-span-1'>21</p>
                <p className='border border-black flex justify-center items-center col-span-1'>22</p>
                <p className='border border-black flex justify-center items-center col-span-1'>23</p>
                <p className='border border-black flex justify-center items-center col-span-1'>24</p>
                <p className='border border-black flex justify-center items-center col-span-1'>25</p>
                <p className='border border-black flex justify-center items-center col-span-1'>26</p>
                <p className='border border-black flex justify-center items-center col-span-1'>27</p>
                <p className='border border-black flex justify-center items-center col-span-1'>28</p>
                <p className='border border-black flex justify-center items-center col-span-1'>29</p>
                <p className='border border-black flex justify-center items-center col-span-1'>30</p>
                <p className='border border-black flex justify-center items-center col-span-1'>31</p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 h-auto col-span-3'>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
          <p className='border border-black'></p>
        </div>
        <div className='grid grid-cols-4 grid-rows-6 h-auto col-span-1'>
          <p className=' col-span-4 flex justify-center pt-1 border border-black'>CUMPLIMIENTO</p>
          <p className=' col-span-1  border flex justify-center text-xl items-center border-black'>A</p>
          <p className=' col-span-3 border border-black justify-center items-center flex'>Inacis. S/J</p>
          <p className=' col-span-1  border flex justify-center text-xl items-center border-black'>B</p>
          <p className=' col-span-3 border border-black justify-center items-center flex'>Puntual.</p>
          <p className=' col-span-1  border flex justify-center text-xl items-center border-black'>C</p>
          <p className=' col-span-3 border border-black justify-center items-center flex'>Permanen.</p>
          <p className=' col-span-4  border flex justify-center text-xl items-center border-black'></p>
          <p className=' col-span-4  border flex justify-center text-l items-center border-black'>ACLARACION</p>
        </div>
      </div>
      <div className='w-full grid grid-cols-12 grid-rows-2'>
        <div className='w-full grid grid-cols-12 grid-rows-6 h-auto col-span-8 self-start'>
          <p className='border border-black flex justify-center items-center col-span-2'>Enero</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Febrero</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Marzo</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Abril</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Mayo</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Junio</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Julio</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Agosto</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Septiembre</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Octubre</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Noviembre</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
          <p className='border border-black flex justify-center items-center col-span-2'>Diciembre</p>
          <div className=' row-span-1 grid grid-cols-3 col-span-10'>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-10'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
            <div className='grid grid-cols-11'>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
              <p className='border border-black flex justify-center items-center col-span-1'></p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 grid-rows-2 h-auto col-span-3 row-span-1'>
          <div className='grid col-span-12 grid-cols-12 grid-rows-6'>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
          </div>
          <div className='grid col-span-12 grid-cols-12 grid-rows-6'>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
            <p className='border border-black'></p>
          </div>
        </div>
        <div className='grid grid-cols-12 grid-rows-2 h-auto col-span-1 row-span-1'>
          <div className='grid col-span-12 grid-rows-6'>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
          </div>
          <div className='grid col-span-12 grid-rows-6'>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
            <p className='border border-black col-span-12'></p>
          </div>
        </div>
      </div>
      <div className='w-full col-span-12 border flex flex-wrap border-black overflow-hidden'>
        <p className='border-b border-black pt-5 pl-5 pb-10'>OBSERVACIONES: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquam dolores numquam, aut sequi iste nam neque fugit fugiat, libero aliquid, commodi maxime? Quisquam recusandae dolorum maxime, quo quasi velit!
          Dolores, similique? Quis expedita velit, aliquam dolorem dolore iste, deserunt, itaque minus assumenda quos doloribus temporibus cupiditate autem quaerat explicabo dicta porro omnis repellat natus harum distinctio dignissimos sint? Nostrum?
          Placeat aliquam non deserunt quod alias ex.
        </span></p>
      </div>
    </div >
  )
}

export default TablePrint