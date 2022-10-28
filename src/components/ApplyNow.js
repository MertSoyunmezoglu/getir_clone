import React from "react";
function ApplyNow() {
  return (
    <>
      <div className=" flex flex-col sm:flex-row sm:pl-12 items-center justify-between bg-restaurant-bg mb-14 pb-5 ">
   
        <div className="  p-5 md:my-14 mx-10 sm:p-0 text-sm  text-center  sm:text-left">
          <h3 className="text-primary-brand-color tracking-tight font-bold md:text-3xl md:mt-6 sm:text-xl">
            Restoran sahibi misiniz?
          </h3>
          <p className="font-semibold text-md text-black text-opacity-50  md:text-lg sm:text- mt-3">
            GetirYemek restoran iş ortaklarından biri olun, işinizi daha az
            maliyetle büyütün, müşteri memnuniyetini artırın.
          </p>
        </div>
        <div className=" md:mt-8 py-2">
          <a href="https://restoran.getiryemek.com/form/on-basvuru/">
            <button
              type="submit"
              className=" bg-brand-yellow h-14 tracking-wide  md:mr-10 text-primary-brand-color w-44 flex items-center justify-center rounded font-semibold text-sm font-sans"
            >
              Hemen Başvur
            </button>
          </a>
        </div>

      </div>
    </>
  );
}

export default ApplyNow;
