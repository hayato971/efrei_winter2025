<template>
    <aside class=" fixed overflow-hidden top-0 right-0 h-full rounded-lg">
        <div class="w-[1440px] h-[1024px] relative bg-[#121212]  overflow-hidden">
    <div class="w-[747px] h-[846px] left-[340px] top-[48px] absolute bg-[#121212] shadow-[0px_4px_4px_3px_rgba(0,0,0,0.25)] border border-black"></div>
    <div class="w-[528px] h-[211px] left-[456px] top-[176px] absolute bg-black rounded-[5px] shadow-[0px_0px_9px_3px_rgba(255,255,255,0.35)]"></div>
    <div class="w-[528px] h-[158px] left-[456px] top-[422px] absolute bg-black rounded-[5px] shadow-[0px_0px_9px_3px_rgba(255,255,255,0.35)]"></div>
    <div class="w-[139px] h-7 left-[668px] top-[440px] absolute text-[#febd0b] text-base font-bold font-['Inter']">HALL OF FLAME</div>
    <div class="w-[229px] h-[46px] left-[600px] top-[615px] absolute bg-gradient-to-r from-neutral-700 to-[#585858]"></div>
    <div class="w-[85px] h-[21px] left-[681px] top-[628px] absolute text-white/40 text-xl font-bold font-['Inter']">PROFILE</div>
    <div class="w-[103px] h-[103px] left-[499px] top-[230px] absolute bg-[#d9d9d9] rounded-full"></div>
    <div class="w-[61px] h-[17px] left-[636px] top-[299px] absolute">
        <div class="w-[61px] h-[17px] left-0 top-0 absolute bg-gradient-to-b from-[#ff4b4b] via-[#6a6a6a] to-black rounded-md"></div>
        <div class="w-[43.25px] h-[15px] left-[8.87px] top-[2px] absolute text-white text-[10px] font-normal font-['Inter']">EXP   0</div>
    </div>
    <div class="w-[61px] h-[17px] left-[707px] top-[274px] absolute">
        <div class="w-[61px] h-[17px] left-0 top-0 absolute bg-gradient-to-b from-[#ff4b4b] via-[#6a6a6a] to-black rounded-md"></div>
        <div class="w-[43.25px] h-[15px] left-[8.87px] top-[2px] absolute text-white text-[10px] font-normal font-['Inter']">EXP   0</div>
    </div>
    <div class="w-[61px] h-[17px] left-[636px] top-[274px] absolute">
        <div class="w-[61px] h-[17px] left-0 top-0 absolute">
            <div class="w-[61px] h-[17px] left-0 top-0 absolute bg-gradient-to-b from-[#ff4b4b] via-[#ff0000] to-black rounded-md"></div>
            <div class="w-[31px] h-[15px] left-[7px] top-[2px] absolute"><span class="text-white text-[10px] font-normal font-['Inter']">LEVEL</span><span class="text-black text-[10px] font-normal font-['Inter']"> </span></div>
        </div>
        <div class="w-2.5 h-[9px] left-[43px] top-[2px] absolute text-white text-[10px] font-normal font-['Inter']">E</div>
    </div>
    <div class="w-[67px] h-[19px] left-[636px] top-[220px] absolute text-white text-[10px] font-bold font-['Inter']">Username</div>
    <div class="w-[22.50px] h-[22.50px] left-[939px] top-[196px] absolute">
        <div class="w-[22.50px] h-[22.50px] left-0 top-0 absolute">
            <div class="w-[22.50px] h-[22.50px] left-0 top-0 absolute bg-gradient-to-b from-[#ff4b4b] via-[#6a6a6a] to-black rounded-md"></div>
            <div class="w-[8.65px] h-[10.38px] left-[10.12px] top-[4.93px] absolute text-white text-[10px] font-normal font-['Inter']"> 1 </div>
        </div>
        <div class="w-[7px] h-3 left-[4px] top-[5px] absolute text-white text-[10px] font-normal font-['Inter']">#</div>
    </div>
    <div data-svg-wrapper class="left-[594px] top-[511.50px] absolute">
    <svg width="261" height="2" viewBox="0 0 261 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.5L261 0.981044" stroke="white"/>
    </svg>
    </div>
    <div class="w-[37px] h-[13px] left-[602px] top-[489px] absolute text-white text-[10px] font-bold font-['Inter']">No #</div>
    <div class="w-[15px] h-[13px] left-[602px] top-[529px] absolute text-white text-[10px] font-bold font-['Inter']">1</div>
    <div class="w-[43px] h-[13px] left-[671px] top-[529px] absolute text-white text-[8px] font-bold font-['Inter']">Username</div>
    <div class="w-2.5 h-[13px] left-[754px] top-[529px] absolute text-white text-[8px] font-bold font-['Inter']">E</div>
    <div class="w-2.5 h-2 left-[821px] top-[529px] absolute text-white text-[8px] font-bold font-['Inter']">0<br/></div>
    <div class="w-[37px] h-[13px] left-[674px] top-[489px] absolute text-white text-[10px] font-bold font-['Inter']">Name</div>
    <div class="w-[37px] h-[13px] left-[746px] top-[489px] absolute text-white text-[10px] font-bold font-['Inter']">Rank</div>
    <div class="w-[37px] h-[13px] left-[818px] top-[489px] absolute text-white text-[10px] font-bold font-['Inter']">Exp</div>
    <div class="w-[77px] h-[27px] left-[379px] top-[77px] absolute text-[#ff5656] text-xl font-bold font-['Inter']">Logout</div>
</div>
  </aside>
</template>

<script>
export default {
  props: ['toggle']
}
</script>
